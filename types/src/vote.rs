//! Vote and vote accumulator types
//!
//! This module contains types used to represent the various types of votes that `HotShot` nodes
//! can send, and vote accumulator that converts votes into certificates.

use crate::{
    data::LeafType,
    traits::{
        election::VoteToken,
        node_implementation::NodeType,
        signature_key::{EncodedPublicKey, EncodedSignature},
    },
};
use commit::{Commitment, Committable};
use either::Either;
use serde::{Deserialize, Serialize};
use std::collections::{BTreeMap, HashMap};
use std::fmt::Debug;
use std::num::NonZeroU64;

/// The vote sent by consensus messages.
pub trait VoteType<TYPES: NodeType>:
    Debug + Clone + 'static + Serialize + for<'a> Deserialize<'a> + Send + Sync
{
    /// The view this vote was cast for.
    fn current_view(&self) -> TYPES::Time;
}

/// A vote on DA proposal.
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(bound(deserialize = ""))]
pub struct DAVote<TYPES: NodeType, LEAF: LeafType<NodeType = TYPES>> {
    /// TODO we should remove this
    /// this is correct, but highly inefficient
    /// we should check a cache, and if that fails request the qc
    pub justify_qc_commitment: Commitment<LEAF::QuorumCertificate>,
    /// The signature share associated with this vote
    /// TODO ct/vrf make ConsensusMessage generic over I instead of serializing to a [`Vec<u8>`]
    pub signature: (EncodedPublicKey, EncodedSignature),
    /// The block commitment being voted on.
    pub block_commitment: Commitment<TYPES::BlockType>,
    /// The view this vote was cast for
    pub current_view: TYPES::Time,
    /// The vote token generated by this replica
    pub vote_token: TYPES::VoteTokenType,
}

/// A positive or negative vote on validating or commitment proposal.
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(bound(deserialize = ""))]
pub struct YesOrNoVote<TYPES: NodeType, LEAF: LeafType<NodeType = TYPES>> {
    /// TODO we should remove this
    /// this is correct, but highly inefficient
    /// we should check a cache, and if that fails request the qc
    pub justify_qc_commitment: Commitment<LEAF::QuorumCertificate>,
    /// The signature share associated with this vote
    /// TODO ct/vrf make ConsensusMessage generic over I instead of serializing to a [`Vec<u8>`]
    pub signature: (EncodedPublicKey, EncodedSignature),
    /// The leaf commitment being voted on.
    pub leaf_commitment: Commitment<LEAF>,
    /// The view this vote was cast for
    pub current_view: TYPES::Time,
    /// The vote token generated by this replica
    pub vote_token: TYPES::VoteTokenType,
}

/// A timeout vote.
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(bound(deserialize = ""))]
pub struct TimeoutVote<TYPES: NodeType, LEAF: LeafType<NodeType = TYPES>> {
    /// The justification qc for this view
    pub justify_qc: LEAF::QuorumCertificate,
    /// The signature share associated with this vote
    /// TODO ct/vrf make ConsensusMessage generic over I instead of serializing to a [`Vec<u8>`]
    pub signature: (EncodedPublicKey, EncodedSignature),
    /// The view this vote was cast for
    pub current_view: TYPES::Time,
    /// The vote token generated by this replica
    pub vote_token: TYPES::VoteTokenType,
}

/// Votes on validating or commitment proposal.
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(bound(deserialize = ""))]
pub enum QuorumVote<TYPES: NodeType, LEAF: LeafType<NodeType = TYPES>> {
    /// Posivite vote.
    Yes(YesOrNoVote<TYPES, LEAF>),
    /// Negative vote.
    No(YesOrNoVote<TYPES, LEAF>),
    /// Timeout vote.
    Timeout(TimeoutVote<TYPES, LEAF>),
}

impl<TYPES: NodeType, LEAF: LeafType<NodeType = TYPES>> VoteType<TYPES> for DAVote<TYPES, LEAF> {
    fn current_view(&self) -> TYPES::Time {
        self.current_view
    }
}

impl<TYPES: NodeType, LEAF: LeafType<NodeType = TYPES>> VoteType<TYPES>
    for QuorumVote<TYPES, LEAF>
{
    fn current_view(&self) -> TYPES::Time {
        match self {
            QuorumVote::Yes(v) | QuorumVote::No(v) => v.current_view,
            QuorumVote::Timeout(v) => v.current_view,
        }
    }
}

/// The aggreation of votes, implemented by `VoteAccumulator`.
pub trait Accumulator<T, U>: Sized {
    /// Accumate the `val` to the current state.
    ///
    /// If a threshold is reached, returns `U` (e.g., a certificate). Else, returns `Self` and
    /// continues accumulating items.
    fn append(self, val: T) -> Either<Self, U>;
}

/// Mapping of commitments to vote tokens by key.
type VoteMap<C, TOKEN> =
    HashMap<Commitment<C>, (u64, BTreeMap<EncodedPublicKey, (EncodedSignature, TOKEN)>)>;

/// Describe the process of collecting signatures on block or leaf commitment, to form a DAC or QC,
/// respectively.
pub struct VoteAccumulator<TYPES: NodeType, C: Committable> {
    /// Map of all signatures accumlated so far.
    pub vote_outcomes: VoteMap<C, TYPES::VoteTokenType>,
    /// Threshold of stake needed to form a certificate.
    pub threshold: NonZeroU64,
}

impl<TYPES: NodeType, C: Committable>
    Accumulator<
        (
            Commitment<C>,
            (EncodedPublicKey, (EncodedSignature, TYPES::VoteTokenType)),
        ),
        BTreeMap<EncodedPublicKey, (EncodedSignature, TYPES::VoteTokenType)>,
    > for VoteAccumulator<TYPES, C>
{
    fn append(
        mut self,
        val: (
            Commitment<C>,
            (EncodedPublicKey, (EncodedSignature, TYPES::VoteTokenType)),
        ),
    ) -> Either<Self, BTreeMap<EncodedPublicKey, (EncodedSignature, TYPES::VoteTokenType)>> {
        let (commitment, (key, (sig, token))) = val;

        let (stake_casted, vote_map) = self
            .vote_outcomes
            .entry(commitment)
            .or_insert_with(|| (0, BTreeMap::new()));
        // Accumulate the stake for each commitment rather than the total stake of all votes, in
        // case they correspond to inconsistent commitments.
        *stake_casted += u64::from(token.vote_count());
        vote_map.insert(key, (sig, token));

        if *stake_casted >= u64::from(self.threshold) {
            let valid_signatures = self.vote_outcomes.remove(&commitment).unwrap().1;
            return Either::Right(valid_signatures);
        }
        Either::Left(self)
    }
}
