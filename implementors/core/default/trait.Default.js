(function() {var implementors = {
"hotshot":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot/traits/networking/struct.NetworkingMetricsValue.html\" title=\"struct hotshot::traits::networking::NetworkingMetricsValue\">NetworkingMetricsValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot/traits/networking/struct.InnerNetworkingMetrics.html\" title=\"struct hotshot::traits::networking::InnerNetworkingMetrics\">InnerNetworkingMetrics</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.StaticElectionConfig.html\" title=\"struct hotshot::traits::election::static_committee::StaticElectionConfig\">StaticElectionConfig</a>"]],
"hotshot_orchestrator":[["impl&lt;KEY: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + SignatureKey, ELECTION: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + ElectionConfig&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_orchestrator/struct.OrchestratorState.html\" title=\"struct hotshot_orchestrator::OrchestratorState\">OrchestratorState</a>&lt;KEY, ELECTION&gt;"],["impl&lt;KEY: SignatureKey&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.HotShotConfigFile.html\" title=\"struct hotshot_orchestrator::config::HotShotConfigFile\">HotShotConfigFile</a>&lt;KEY&gt;"],["impl&lt;K: SignatureKey, E: ElectionConfig&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfig.html\" title=\"struct hotshot_orchestrator::config::NetworkConfig\">NetworkConfig</a>&lt;K, E&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.ValidatorConfigFile.html\" title=\"struct hotshot_orchestrator::config::ValidatorConfigFile\">ValidatorConfigFile</a>"]],
"hotshot_stake_table":[["impl&lt;K1, K2&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_stake_table/vec_based/struct.StakeTableSnapshot.html\" title=\"struct hotshot_stake_table::vec_based::StakeTableSnapshot\">StakeTableSnapshot</a>&lt;K1, K2&gt;"],["impl&lt;K1, K2, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_stake_table/vec_based/struct.StakeTable.html\" title=\"struct hotshot_stake_table::vec_based::StakeTable\">StakeTable</a>&lt;K1, K2, F&gt;<span class=\"where fmt-newline\">where\n    K1: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hotshot_stake_table/utils/trait.ToFields.html\" title=\"trait hotshot_stake_table::utils::ToFields\">ToFields</a>&lt;F&gt;,\n    K2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"hotshot_stake_table/utils/trait.ToFields.html\" title=\"trait hotshot_stake_table::utils::ToFields\">ToFields</a>&lt;F&gt;,\n    F: RescueParameter,</span>"]],
"hotshot_task":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task/task_state/struct.TaskState.html\" title=\"struct hotshot_task::task_state::TaskState\">TaskState</a>"],["impl&lt;EVENT: <a class=\"trait\" href=\"hotshot_task/task/trait.PassType.html\" title=\"trait hotshot_task::task::PassType\">PassType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task/event_stream/struct.ChannelStream.html\" title=\"struct hotshot_task::event_stream::ChannelStream\">ChannelStream</a>&lt;EVENT&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task/global_registry/struct.GlobalRegistry.html\" title=\"struct hotshot_task::global_registry::GlobalRegistry\">GlobalRegistry</a>"],["impl&lt;HSTT: <a class=\"trait\" href=\"hotshot_task/task/trait.HotShotTaskTypes.html\" title=\"trait hotshot_task::task::HotShotTaskTypes\">HotShotTaskTypes</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task/task/struct.HandleEvent.html\" title=\"struct hotshot_task::task::HandleEvent\">HandleEvent</a>&lt;HSTT&gt;"],["impl&lt;EVENT: <a class=\"trait\" href=\"hotshot_task/task/trait.PassType.html\" title=\"trait hotshot_task::task::PassType\">PassType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task/task/struct.FilterEvent.html\" title=\"struct hotshot_task::task::FilterEvent\">FilterEvent</a>&lt;EVENT&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task/task_launcher/struct.TaskRunner.html\" title=\"struct hotshot_task::task_launcher::TaskRunner\">TaskRunner</a>"]],
"hotshot_task_impls":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncTaskInfo.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncTaskInfo\">ViewSyncTaskInfo</a>"]],
"hotshot_testing":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/node_types/struct.TestTypes.html\" title=\"struct hotshot_testing::node_types::TestTypes\">TestTypes</a>"],["impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.RoundResult.html\" title=\"struct hotshot_testing::overall_safety_task::RoundResult\">RoundResult</a>&lt;TYPES&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/block_types/struct.TestTransaction.html\" title=\"struct hotshot_testing::block_types::TestTransaction\">TestTransaction</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.OverallSafetyPropertiesDescription.html\" title=\"struct hotshot_testing::overall_safety_task::OverallSafetyPropertiesDescription\">OverallSafetyPropertiesDescription</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/test_builder/struct.TimingData.html\" title=\"struct hotshot_testing::test_builder::TimingData\">TimingData</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/state_types/struct.TestState.html\" title=\"struct hotshot_testing::state_types::TestState\">TestState</a>"],["impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.RoundCtx.html\" title=\"struct hotshot_testing::overall_safety_task::RoundCtx\">RoundCtx</a>&lt;TYPES&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_testing/test_builder/struct.TestMetadata.html\" title=\"struct hotshot_testing::test_builder::TestMetadata\">TestMetadata</a>"]],
"hotshot_types":[["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/traits/node_implementation/struct.ViewQueue.html\" title=\"struct hotshot_types::traits::node_implementation::ViewQueue\">ViewQueue</a>&lt;TYPES&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/traits/network/struct.PartiallySynchronousNetwork.html\" title=\"struct hotshot_types::traits::network::PartiallySynchronousNetwork\">PartiallySynchronousNetwork</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/consensus/struct.ConsensusMetricsValue.html\" title=\"struct hotshot_types::consensus::ConsensusMetricsValue\">ConsensusMetricsValue</a>"],["impl&lt;KEY: <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/struct.ValidatorConfig.html\" title=\"struct hotshot_types::ValidatorConfig\">ValidatorConfig</a>&lt;KEY&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/consensus/struct.PayloadStore.html\" title=\"struct hotshot_types::consensus::PayloadStore\">PayloadStore</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/traits/network/struct.AsynchronousNetwork.html\" title=\"struct hotshot_types::traits::network::AsynchronousNetwork\">AsynchronousNetwork</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/traits/metrics/struct.NoMetrics.html\" title=\"struct hotshot_types::traits::metrics::NoMetrics\">NoMetrics</a>"],["impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/light_client/struct.LightClientState.html\" title=\"struct hotshot_types::light_client::LightClientState\">LightClientState</a>&lt;F&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/traits/network/struct.SynchronousNetwork.html\" title=\"struct hotshot_types::traits::network::SynchronousNetwork\">SynchronousNetwork</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/consensus/struct.InnerConsensusMetrics.html\" title=\"struct hotshot_types::consensus::InnerConsensusMetrics\">InnerConsensusMetrics</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/traits/network/struct.PerfectNetwork.html\" title=\"struct hotshot_types::traits::network::PerfectNetwork\">PerfectNetwork</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_types/light_client/struct.StateKeyPair.html\" title=\"struct hotshot_types::light_client::StateKeyPair\">StateKeyPair</a>"]],
"hotshot_web_server":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hotshot_web_server/struct.Options.html\" title=\"struct hotshot_web_server::Options\">Options</a>"]],
"libp2p_networking":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/dht/cache/struct.Cache.html\" title=\"struct libp2p_networking::network::behaviours::dht::cache::Cache\">Cache</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/direct_message_codec/struct.DirectMessageCodec.html\" title=\"struct libp2p_networking::network::behaviours::direct_message_codec::DirectMessageCodec\">DirectMessageCodec</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"libp2p_networking/network/enum.NetworkNodeType.html\" title=\"enum libp2p_networking::network::NetworkNodeType\">NetworkNodeType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/dht/cache/struct.Config.html\" title=\"struct libp2p_networking::network::behaviours::dht::cache::Config\">Config</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/dht/cache/struct.ConfigBuilder.html\" title=\"struct libp2p_networking::network::behaviours::dht::cache::ConfigBuilder\">ConfigBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/node/config/struct.MeshParams.html\" title=\"struct libp2p_networking::network::node::config::MeshParams\">MeshParams</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/behaviours/exponential_backoff/struct.ExponentialBackoff.html\" title=\"struct libp2p_networking::network::behaviours::exponential_backoff::ExponentialBackoff\">ExponentialBackoff</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/node/config/struct.NetworkNodeConfigBuilder.html\" title=\"struct libp2p_networking::network::node::config::NetworkNodeConfigBuilder\">NetworkNodeConfigBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p_networking/network/node/config/struct.NetworkNodeConfig.html\" title=\"struct libp2p_networking::network::node::config::NetworkNodeConfig\">NetworkNodeConfig</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()