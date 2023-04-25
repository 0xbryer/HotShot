use hotshot::traits::TestableNodeImplementation;
use hotshot::types::{Message, SignatureKey};

use hotshot_types::traits::election::{ConsensusExchange, Membership};
use hotshot_types::traits::node_implementation::{CommitteeNetwork, QuorumNetwork};
use hotshot_types::{
    traits::node_implementation::{NodeImplementation, NodeType},
    ExecutionType, HotShotConfig,
};
use std::{num::NonZeroUsize, time::Duration};

use crate::round::Round;
use crate::test_builder::{TestBuilder, TestMetadata, TimingData};
use crate::test_runner::{Generator, TestRunner};

/// A launcher for [`TestRunner`], allowing you to customize the network and some default settings for spawning nodes.
pub struct TestLauncher<TYPES: NodeType, I: TestableNodeImplementation<TYPES>> {
    pub(super) quorum_network: Generator<QuorumNetwork<TYPES, I>>,
    pub(super) committee_network: Generator<CommitteeNetwork<TYPES, I>>,
    pub(super) storage: Generator<<I as NodeImplementation<TYPES>>::Storage>,
    pub(super) block: Generator<TYPES::BlockType>,
    pub(super) config: HotShotConfig<TYPES::SignatureKey, TYPES::ElectionConfigType>,
    // contains builder metadata that is used sporadically
    pub(super) metadata: TestMetadata,
    pub(super) round: Round<TYPES, I>,
}

impl<TYPES: NodeType, I: TestableNodeImplementation<TYPES>> TestLauncher<TYPES, I> {
    /// Create a new launcher.
    /// Note that `expected_node_count` should be set to an accurate value, as this is used to calculate the `threshold` internally.
    pub fn new(metadata: TestMetadata, round: Round<TYPES, I>) -> Self {
        let TestMetadata {
            total_nodes,
            num_bootstrap_nodes,
            min_transactions,
            timing_data,
            ..
        } = metadata;
        let known_nodes = (0..total_nodes)
            .map(|id| {
                let priv_key = I::generate_test_key(id as u64);
                TYPES::SignatureKey::from_private(&priv_key)
            })
            .collect();
        let config = HotShotConfig {
            execution_type: ExecutionType::Incremental,
            total_nodes: NonZeroUsize::new(total_nodes).unwrap(),
            num_bootstrap: num_bootstrap_nodes,
            min_transactions,
            max_transactions: NonZeroUsize::new(99999).unwrap(),
            known_nodes,
            next_view_timeout: 500,
            timeout_ratio: (11, 10),
            round_start_delay: 1,
            start_delay: 1,
            propose_min_round_time: Duration::from_millis(0),
            propose_max_round_time: Duration::from_millis(1000),
            // TODO what's the difference between this and the second config?
            election_config: Some(
                <<I as NodeImplementation<TYPES>>::QuorumExchange as ConsensusExchange<
                    TYPES,
                    I::Leaf,
                    Message<TYPES, I>,
                >>::Membership::default_election_config(total_nodes as u64),
            ),
        };
        let TimingData {
            next_view_timeout,
            timeout_ratio,
            round_start_delay,
            start_delay,
            propose_min_round_time,
            propose_max_round_time,
        } = timing_data;

        let mod_config =
            // TODO this should really be using the timing config struct
            |a: &mut HotShotConfig<TYPES::SignatureKey, TYPES::ElectionConfigType>| {
                a.next_view_timeout = next_view_timeout;
                a.timeout_ratio = timeout_ratio;
                a.round_start_delay = round_start_delay;
                a.start_delay = start_delay;
                a.propose_min_round_time = propose_min_round_time;
                a.propose_max_round_time = propose_max_round_time;
            };

        Self {
            quorum_network: I::quorum_generator(total_nodes, num_bootstrap_nodes, 1),
            committee_network: I::committee_generator(total_nodes, num_bootstrap_nodes, 2),
            storage: Box::new(|_| I::construct_tmp_storage().unwrap()),
            block: Box::new(|_| I::block_genesis()),
            config,
            metadata,
            round,
        }
        .modify_default_config(mod_config)
    }
}

// TODO make these functions generic over the target networking/storage/other generics
// so we can hotswap out
impl<TYPES: NodeType, I: TestableNodeImplementation<TYPES>> TestLauncher<TYPES, I> {
    /// Set a custom quorum network generator. Note that this can also be overwritten per-node in the [`TestLauncher`].
    pub fn with_quorum_network(
        self,
        quorum_network: impl Fn(u64, TYPES::SignatureKey) -> QuorumNetwork<TYPES, I> + 'static,
    ) -> TestLauncher<TYPES, I> {
        TestLauncher {
            quorum_network: Box::new({
                move |node_id| {
                    // FIXME perhaps this pk generation is a separate function
                    // to add as an input
                    // that way we don't rely on threshold crypto
                    let priv_key = I::generate_test_key(node_id);
                    let pubkey = TYPES::SignatureKey::from_private(&priv_key);
                    quorum_network(node_id, pubkey)
                }
            }),
            ..self
        }
    }

    /// Set a custom committee network generator. Note that this can also be overwritten per-node in the [`TestLauncher`].
    pub fn with_committee_network(
        self,
        committee_network: impl Fn(u64, TYPES::SignatureKey) -> CommitteeNetwork<TYPES, I> + 'static,
    ) -> TestLauncher<TYPES, I> {
        TestLauncher {
            committee_network: Box::new({
                move |node_id| {
                    // FIXME perhaps this pk generation is a separate function
                    // to add as an input
                    // that way we don't rely on threshold crypto
                    let priv_key = I::generate_test_key(node_id);
                    let pubkey = TYPES::SignatureKey::from_private(&priv_key);
                    committee_network(node_id, pubkey)
                }
            }),
            ..self
        }
    }

    /// Set a custom storage generator. Note that this can also be overwritten per-node in the [`TestLauncher`].
    pub fn with_storage(
        self,
        storage: impl Fn(u64) -> I::Storage + 'static,
    ) -> TestLauncher<TYPES, I> {
        TestLauncher {
            storage: Box::new(storage),
            ..self
        }
    }

    /// Set a custom block generator. Note that this can also be overwritten per-node in the [`TestLauncher`].
    pub fn with_block(
        self,
        block: impl Fn(u64) -> TYPES::BlockType + 'static,
    ) -> TestLauncher<TYPES, I> {
        TestLauncher {
            block: Box::new(block),
            ..self
        }
    }

    pub fn with_round(self, round: Round<TYPES, I>) -> TestLauncher<TYPES, I> {
        TestLauncher { round, ..self }
    }

    /// Set the default config of each node. Note that this can also be overwritten per-node in the [`TestLauncher`].
    pub fn with_default_config(
        mut self,
        config: HotShotConfig<TYPES::SignatureKey, TYPES::ElectionConfigType>,
    ) -> Self {
        self.config = config;
        self
    }

    /// Modifies the config used when generating nodes with `f`
    pub fn modify_default_config(
        mut self,
        mut f: impl FnMut(&mut HotShotConfig<TYPES::SignatureKey, TYPES::ElectionConfigType>),
    ) -> Self {
        f(&mut self.config);
        self
    }
}

impl<TYPES: NodeType, I: TestableNodeImplementation<TYPES>> TestLauncher<TYPES, I> {
    /// Launch the [`TestRunner`]. This function is only available if the following conditions are met:
    ///
    /// - `NETWORK` implements and [`hotshot_types::traits::network::TestableNetworkingImplementation`]
    /// - `STORAGE` implements [`hotshot::traits::Storage`]
    /// - `BLOCK` implements [`hotshot::traits::Block`] and [`hotshot_types::traits::state::TestableBlock`]
    pub fn launch(self) -> TestRunner<TYPES, I> {
        TestRunner::new(self)
    }
}
