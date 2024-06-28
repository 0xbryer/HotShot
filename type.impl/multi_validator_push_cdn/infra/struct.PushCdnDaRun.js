(function() {var type_impls = {
"multi_validator_push_cdn":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RunDa%3CTYPES,+PushCdnNetwork%3CTYPES%3E,+NODE%3E-for-PushCdnDaRun%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/multi_validator_push_cdn/infra/mod.rs.html#596-660\">source</a><a href=\"#impl-RunDa%3CTYPES,+PushCdnNetwork%3CTYPES%3E,+NODE%3E-for-PushCdnDaRun%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&lt;Transaction = <a class=\"struct\" href=\"hotshot_example_types/block_types/struct.TestTransaction.html\" title=\"struct hotshot_example_types::block_types::TestTransaction\">TestTransaction</a>, BlockPayload = <a class=\"struct\" href=\"hotshot_example_types/block_types/struct.TestBlockPayload.html\" title=\"struct hotshot_example_types::block_types::TestBlockPayload\">TestBlockPayload</a>, BlockHeader = <a class=\"struct\" href=\"hotshot_example_types/block_types/struct.TestBlockHeader.html\" title=\"struct hotshot_example_types::block_types::TestBlockHeader\">TestBlockHeader</a>, InstanceState = <a class=\"struct\" href=\"hotshot_example_types/state_types/struct.TestInstanceState.html\" title=\"struct hotshot_example_types::state_types::TestInstanceState\">TestInstanceState</a>&gt;, NODE: NodeImplementation&lt;TYPES, Network = <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;, Storage = <a class=\"struct\" href=\"hotshot_example_types/storage_types/struct.TestStorage.html\" title=\"struct hotshot_example_types::storage_types::TestStorage\">TestStorage</a>&lt;TYPES&gt;, AuctionResultsProvider = <a class=\"struct\" href=\"hotshot_example_types/auction_results_provider_types/struct.TestAuctionResultsProvider.html\" title=\"struct hotshot_example_types::auction_results_provider_types::TestAuctionResultsProvider\">TestAuctionResultsProvider</a>&gt;&gt; <a class=\"trait\" href=\"multi_validator_push_cdn/infra/trait.RunDa.html\" title=\"trait multi_validator_push_cdn::infra::RunDa\">RunDa</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;, NODE&gt; for <a class=\"struct\" href=\"multi_validator_push_cdn/infra/struct.PushCdnDaRun.html\" title=\"struct multi_validator_push_cdn::infra::PushCdnDaRun\">PushCdnDaRun</a>&lt;TYPES&gt;<div class=\"where\">where\n    &lt;TYPES as NodeType&gt;::ValidatedState: TestableState&lt;TYPES&gt;,\n    &lt;TYPES as NodeType&gt;::BlockPayload: TestableBlock&lt;TYPES&gt;,\n    Leaf&lt;TYPES&gt;: TestableLeaf,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize_networking\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/multi_validator_push_cdn/infra/mod.rs.html#616-651\">source</a><a href=\"#method.initialize_networking\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"multi_validator_push_cdn/infra/trait.RunDa.html#tymethod.initialize_networking\" class=\"fn\">initialize_networking</a>&lt;'async_trait&gt;(\n    config: <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfig.html\" title=\"struct hotshot_orchestrator::config::NetworkConfig\">NetworkConfig</a>&lt;TYPES::SignatureKey&gt;,\n    _libp2p_advertise_address: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/net/socket_addr/enum.SocketAddr.html\" title=\"enum core::net::socket_addr::SocketAddr\">SocketAddr</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"multi_validator_push_cdn/infra/struct.PushCdnDaRun.html\" title=\"struct multi_validator_push_cdn::infra::PushCdnDaRun\">PushCdnDaRun</a>&lt;TYPES&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;</h4></section></summary><div class='docblock'>Initializes networking, returns self</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.network\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/multi_validator_push_cdn/infra/mod.rs.html#653-655\">source</a><a href=\"#method.network\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"multi_validator_push_cdn/infra/trait.RunDa.html#tymethod.network\" class=\"fn\">network</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns the underlying network for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.config\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/multi_validator_push_cdn/infra/mod.rs.html#657-659\">source</a><a href=\"#method.config\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"multi_validator_push_cdn/infra/trait.RunDa.html#tymethod.config\" class=\"fn\">config</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot_orchestrator/config/struct.NetworkConfig.html\" title=\"struct hotshot_orchestrator::config::NetworkConfig\">NetworkConfig</a>&lt;TYPES::SignatureKey&gt;</h4></section></summary><div class='docblock'>Returns the config for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize_state_and_hotshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/multi_validator_push_cdn/infra/mod.rs.html#363-414\">source</a><a href=\"#method.initialize_state_and_hotshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"multi_validator_push_cdn/infra/trait.RunDa.html#method.initialize_state_and_hotshot\" class=\"fn\">initialize_state_and_hotshot</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, NODE&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Initializes the genesis state and HotShot instance; does not start HotShot consensus <a href=\"multi_validator_push_cdn/infra/trait.RunDa.html#method.initialize_state_and_hotshot\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_hotshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/multi_validator_push_cdn/infra/mod.rs.html#418-576\">source</a><a href=\"#method.run_hotshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"multi_validator_push_cdn/infra/trait.RunDa.html#method.run_hotshot\" class=\"fn\">run_hotshot</a>&lt;'life0, 'life1, 'async_trait&gt;(\n    &amp;'life0 self,\n    context: <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, NODE&gt;,\n    transactions: &amp;'life1 mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"hotshot_example_types/block_types/struct.TestTransaction.html\" title=\"struct hotshot_example_types::block_types::TestTransaction\">TestTransaction</a>&gt;,\n    transactions_to_send_per_round: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>,\n    transaction_size_in_bytes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"hotshot_orchestrator/client/struct.BenchResults.html\" title=\"struct hotshot_orchestrator::client::BenchResults\">BenchResults</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,</div></h4></section></summary><div class='docblock'>Starts HotShot consensus, returns when consensus has finished</div></details></div></details>","RunDa<TYPES, PushCdnNetwork<TYPES>, NODE>","multi_validator_push_cdn::types::ThisRun"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()