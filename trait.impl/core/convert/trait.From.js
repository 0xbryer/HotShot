(function() {var implementors = {
"hotshot_orchestrator":[["impl&lt;KEY: SignatureKey, E: ElectionConfig&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_orchestrator/config/struct.HotShotConfigFile.html\" title=\"struct hotshot_orchestrator::config::HotShotConfigFile\">HotShotConfigFile</a>&lt;KEY&gt;&gt; for HotShotConfig&lt;KEY, E&gt;"],["impl&lt;K: SignatureKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_orchestrator/config/struct.ValidatorConfigFile.html\" title=\"struct hotshot_orchestrator::config::ValidatorConfigFile\">ValidatorConfigFile</a>&gt; for ValidatorConfig&lt;K&gt;"],["impl&lt;KEY: SignatureKey, E: ElectionConfig&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_orchestrator/config/struct.ValidatorConfigFile.html\" title=\"struct hotshot_orchestrator::config::ValidatorConfigFile\">ValidatorConfigFile</a>&gt; for HotShotConfig&lt;KEY, E&gt;"],["impl&lt;K: SignatureKey, E: ElectionConfig&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfigFile.html\" title=\"struct hotshot_orchestrator::config::NetworkConfigFile\">NetworkConfigFile</a>&lt;K&gt;&gt; for <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfig.html\" title=\"struct hotshot_orchestrator::config::NetworkConfig\">NetworkConfig</a>&lt;K, E&gt;"]],
"hotshot_stake_table":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_stake_table/mt_based/internal/struct.MerkleCommitment.html\" title=\"struct hotshot_stake_table::mt_based::internal::MerkleCommitment\">MerkleCommitment</a>&gt; for TaggedBase64"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"hotshot_stake_table/mt_based/internal/struct.MerkleCommitment.html\" title=\"struct hotshot_stake_table::mt_based::internal::MerkleCommitment\">MerkleCommitment</a>&gt; for TaggedBase64"]],
"hotshot_task":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_task/task_state/enum.TaskStatus.html\" title=\"enum hotshot_task::task_state::TaskStatus\">TaskStatus</a>&gt; for <a class=\"struct\" href=\"hotshot_task/task_state/struct.AtomicTaskStatus.html\" title=\"struct hotshot_task::task_state::AtomicTaskStatus\">AtomicTaskStatus</a>"]],
"hotshot_testing_macros":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;UninitializedFieldError&gt; for <a class=\"enum\" href=\"hotshot_testing_macros/enum.TestDataBuilderError.html\" title=\"enum hotshot_testing_macros::TestDataBuilderError\">TestDataBuilderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"hotshot_testing_macros/enum.TestDataBuilderError.html\" title=\"enum hotshot_testing_macros::TestDataBuilderError\">TestDataBuilderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;UninitializedFieldError&gt; for <a class=\"enum\" href=\"hotshot_testing_macros/enum.CrossTestDataBuilderError.html\" title=\"enum hotshot_testing_macros::CrossTestDataBuilderError\">CrossTestDataBuilderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"hotshot_testing_macros/enum.CrossTestDataBuilderError.html\" title=\"enum hotshot_testing_macros::CrossTestDataBuilderError\">CrossTestDataBuilderError</a>"]],
"hotshot_types":[["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericLightClientState.html\" title=\"struct hotshot_types::light_client::GenericLightClientState\">GenericLightClientState</a>&lt;F&gt;&gt; for TaggedBase64"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericLightClientState.html\" title=\"struct hotshot_types::light_client::GenericLightClientState\">GenericLightClientState</a>&lt;F&gt;&gt; for TaggedBase64"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_types/message/enum.ProcessedGeneralConsensusMessage.html\" title=\"enum hotshot_types::message::ProcessedGeneralConsensusMessage\">ProcessedGeneralConsensusMessage</a>&lt;TYPES&gt;&gt; for <a class=\"enum\" href=\"hotshot_types/message/enum.GeneralConsensusMessage.html\" title=\"enum hotshot_types::message::GeneralConsensusMessage\">GeneralConsensusMessage</a>&lt;TYPES&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;KeyPair&lt;EdwardsConfig&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/light_client/struct.StateKeyPair.html\" title=\"struct hotshot_types::light_client::StateKeyPair\">StateKeyPair</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libp2p_networking/network/node/handle/enum.NetworkNodeHandleError.html\" title=\"enum libp2p_networking::network::node::handle::NetworkNodeHandleError\">NetworkNodeHandleError</a>&gt; for <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericLightClientState.html\" title=\"struct hotshot_types::light_client::GenericLightClientState\">GenericLightClientState</a>&lt;F&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">[F; 7]</a>"],["impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericLightClientState.html\" title=\"struct hotshot_types::light_client::GenericLightClientState\">GenericLightClientState</a>&lt;F&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.array.html\">[F; 7]</a>"],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/traits/storage/struct.StoredView.html\" title=\"struct hotshot_types::traits::storage::StoredView\">StoredView</a>&lt;TYPES&gt;&gt; for <a class=\"enum\" href=\"hotshot_types/traits/storage/enum.ViewEntry.html\" title=\"enum hotshot_types::traits::storage::ViewEntry\">ViewEntry</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_types/message/enum.ProcessedCommitteeConsensusMessage.html\" title=\"enum hotshot_types::message::ProcessedCommitteeConsensusMessage\">ProcessedCommitteeConsensusMessage</a>&lt;TYPES&gt;&gt; for <a class=\"enum\" href=\"hotshot_types/message/enum.CommitteeConsensusMessage.html\" title=\"enum hotshot_types::message::CommitteeConsensusMessage\">CommitteeConsensusMessage</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_types/message/enum.DataMessage.html\" title=\"enum hotshot_types::message::DataMessage\">DataMessage</a>&lt;TYPES&gt;&gt; for <a class=\"enum\" href=\"hotshot_types/message/enum.MessageKind.html\" title=\"enum hotshot_types::message::MessageKind\">MessageKind</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_types/message/enum.ProcessedGeneralConsensusMessage.html\" title=\"enum hotshot_types::message::ProcessedGeneralConsensusMessage\">ProcessedGeneralConsensusMessage</a>&lt;TYPES&gt;&gt; for <a class=\"type\" href=\"hotshot_types/message/type.ProcessedSequencingMessage.html\" title=\"type hotshot_types::message::ProcessedSequencingMessage\">ProcessedSequencingMessage</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;<a class=\"enum\" href=\"hotshot_types/message/enum.ProcessedGeneralConsensusMessage.html\" title=\"enum hotshot_types::message::ProcessedGeneralConsensusMessage\">ProcessedGeneralConsensusMessage</a>&lt;TYPES&gt;, <a class=\"enum\" href=\"hotshot_types/message/enum.ProcessedCommitteeConsensusMessage.html\" title=\"enum hotshot_types::message::ProcessedCommitteeConsensusMessage\">ProcessedCommitteeConsensusMessage</a>&lt;TYPES&gt;&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/message/struct.SequencingMessage.html\" title=\"struct hotshot_types::message::SequencingMessage\">SequencingMessage</a>&lt;TYPES&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_types/traits/stake_table/enum.StakeTableError.html\" title=\"enum hotshot_types::traits::stake_table::StakeTableError\">StakeTableError</a>&gt; for PrimitivesError"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"hotshot_types/traits/stake_table/enum.StakeTableError.html\" title=\"enum hotshot_types::traits::stake_table::StakeTableError\">StakeTableError</a>&gt; for PlonkError"],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/data/struct.Leaf.html\" title=\"struct hotshot_types::data::Leaf\">Leaf</a>&lt;TYPES&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/traits/storage/struct.StoredView.html\" title=\"struct hotshot_types::traits::storage::StoredView\">StoredView</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span>"],["impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"hotshot_types/data/struct.Leaf.html\" title=\"struct hotshot_types::data::Leaf\">Leaf</a>&lt;TYPES&gt;&gt; for <a class=\"enum\" href=\"hotshot_types/traits/storage/enum.ViewEntry.html\" title=\"enum hotshot_types::traits::storage::ViewEntry\">ViewEntry</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span>"]],
"libp2p_networking":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;UninitializedFieldError&gt; for <a class=\"enum\" href=\"libp2p_networking/network/node/config/enum.NetworkNodeConfigBuilderError.html\" title=\"enum libp2p_networking::network::node::config::NetworkNodeConfigBuilderError\">NetworkNodeConfigBuilderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libp2p_networking/network/behaviours/direct_message/enum.DMEvent.html\" title=\"enum libp2p_networking::network::behaviours::direct_message::DMEvent\">DMEvent</a>&gt; for <a class=\"enum\" href=\"libp2p_networking/network/enum.NetworkEventInternal.html\" title=\"enum libp2p_networking::network::NetworkEventInternal\">NetworkEventInternal</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Event&gt; for <a class=\"enum\" href=\"libp2p_networking/network/enum.NetworkEventInternal.html\" title=\"enum libp2p_networking::network::NetworkEventInternal\">NetworkEventInternal</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;UninitializedFieldError&gt; for <a class=\"enum\" href=\"libp2p_networking/network/behaviours/dht/cache/enum.ConfigBuilderError.html\" title=\"enum libp2p_networking::network::behaviours::dht::cache::ConfigBuilderError\">ConfigBuilderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"libp2p_networking/network/behaviours/dht/cache/enum.ConfigBuilderError.html\" title=\"enum libp2p_networking::network::behaviours::dht::cache::ConfigBuilderError\">ConfigBuilderError</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libp2p_networking/network/behaviours/gossip/enum.GossipEvent.html\" title=\"enum libp2p_networking::network::behaviours::gossip::GossipEvent\">GossipEvent</a>&gt; for <a class=\"enum\" href=\"libp2p_networking/network/enum.NetworkEventInternal.html\" title=\"enum libp2p_networking::network::NetworkEventInternal\">NetworkEventInternal</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"libp2p_networking/network/behaviours/dht/enum.DHTEvent.html\" title=\"enum libp2p_networking::network::behaviours::dht::DHTEvent\">DHTEvent</a>&gt; for <a class=\"enum\" href=\"libp2p_networking/network/enum.NetworkEventInternal.html\" title=\"enum libp2p_networking::network::NetworkEventInternal\">NetworkEventInternal</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>&gt; for <a class=\"enum\" href=\"libp2p_networking/network/node/config/enum.NetworkNodeConfigBuilderError.html\" title=\"enum libp2p_networking::network::node::config::NetworkNodeConfigBuilderError\">NetworkNodeConfigBuilderError</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()