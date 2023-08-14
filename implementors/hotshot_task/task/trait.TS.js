(function() {var implementors = {
"hotshot_task_impls":[["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;, A: SequencingConsensusApi&lt;TYPES, SequencingLeaf&lt;TYPES&gt;, I&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncTaskState\">ViewSyncTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    I::Exchanges: SequencingExchangesType&lt;TYPES, Message&lt;TYPES, I&gt;&gt;,\n    ViewSyncEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Proposal = ViewSyncCertificate&lt;TYPES&gt;, Certificate = ViewSyncCertificate&lt;TYPES&gt;, Commitment = ViewSyncData&lt;TYPES&gt;&gt;,</span>"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;, A: SequencingConsensusApi&lt;TYPES, SequencingLeaf&lt;TYPES&gt;, I&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.SequencingConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::SequencingConsensusTaskState\">SequencingConsensusTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    I::Exchanges: SequencingExchangesType&lt;TYPES, Message&lt;TYPES, I&gt;&gt;,\n    SequencingQuorumEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Proposal = QuorumProposal&lt;TYPES, SequencingLeaf&lt;TYPES&gt;&gt;, Certificate = QuorumCertificate&lt;TYPES, SequencingLeaf&lt;TYPES&gt;&gt;, Commitment = SequencingLeaf&lt;TYPES&gt;&gt;,\n    CommitteeEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Certificate = DACertificate&lt;TYPES&gt;, Commitment = TYPES::BlockType&gt;,</span>"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/harness/struct.TestHarnessState.html\" title=\"struct hotshot_task_impls::harness::TestHarnessState\">TestHarnessState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;, PROPOSAL: ProposalType&lt;NodeType = TYPES&gt;, VOTE: VoteType&lt;TYPES&gt;, MEMBERSHIP: Membership&lt;TYPES&gt;, COMMCHANNEL: CommunicationChannel&lt;TYPES, Message&lt;TYPES, I&gt;, PROPOSAL, VOTE, MEMBERSHIP&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkEventTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkEventTaskState\">NetworkEventTaskState</a>&lt;TYPES, I, PROPOSAL, VOTE, MEMBERSHIP, COMMCHANNEL&gt;"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::consensus::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    I::Exchanges: SequencingExchangesType&lt;TYPES, Message&lt;TYPES, I&gt;&gt;,\n    SequencingQuorumEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Proposal = QuorumProposal&lt;TYPES, SequencingLeaf&lt;TYPES&gt;&gt;, Certificate = QuorumCertificate&lt;TYPES, SequencingLeaf&lt;TYPES&gt;&gt;, Commitment = SequencingLeaf&lt;TYPES&gt;&gt;,</span>"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncRelayTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncRelayTaskState\">ViewSyncRelayTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;, A: SequencingConsensusApi&lt;TYPES, SequencingLeaf&lt;TYPES&gt;, I&gt; + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DATaskState.html\" title=\"struct hotshot_task_impls::da::DATaskState\">DATaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    I::Exchanges: SequencingExchangesType&lt;TYPES, Message&lt;TYPES, I&gt;&gt;,\n    CommitteeEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Certificate = DACertificate&lt;TYPES&gt;, Commitment = TYPES::BlockType&gt;,</span>"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkMessageTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkMessageTaskState\">NetworkMessageTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DAVoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::da::DAVoteCollectionTaskState\">DAVoteCollectionTaskState</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    I::Exchanges: SequencingExchangesType&lt;TYPES, Message&lt;TYPES, I&gt;&gt;,\n    CommitteeEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Certificate = DACertificate&lt;TYPES&gt;, Commitment = TYPES::BlockType&gt;,</span>"],["impl&lt;TYPES: NodeType&lt;ConsensusType = SequencingConsensus&gt;, I: NodeImplementation&lt;TYPES, Leaf = SequencingLeaf&lt;TYPES&gt;, ConsensusMessage = SequencingMessage&lt;TYPES, I&gt;&gt;, A: SequencingConsensusApi&lt;TYPES, SequencingLeaf&lt;TYPES&gt;, I&gt; + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncReplicaTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncReplicaTaskState\">ViewSyncReplicaTaskState</a>&lt;TYPES, I, A&gt;<span class=\"where fmt-newline\">where\n    I::Exchanges: SequencingExchangesType&lt;TYPES, Message&lt;TYPES, I&gt;&gt;,\n    ViewSyncEx&lt;TYPES, I&gt;: ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;, Proposal = ViewSyncCertificate&lt;TYPES&gt;, Certificate = ViewSyncCertificate&lt;TYPES&gt;, Commitment = ViewSyncData&lt;TYPES&gt;&gt;,</span>"]],
"hotshot_testing":[["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/completion_task/struct.CompletionTask.html\" title=\"struct hotshot_testing::completion_task::CompletionTask\">CompletionTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/txn_task/struct.TxnTask.html\" title=\"struct hotshot_testing::txn_task::TxnTask\">TxnTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.OverallSafetyTask.html\" title=\"struct hotshot_testing::overall_safety_task::OverallSafetyTask\">OverallSafetyTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/spinning_task/struct.SpinningTask.html\" title=\"struct hotshot_testing::spinning_task::SpinningTask\">SpinningTask</a>&lt;TYPES, I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()