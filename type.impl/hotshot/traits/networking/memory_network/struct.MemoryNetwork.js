(function() {var type_impls = {
"hotshot_example_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MemoryNetwork%3CM,+K%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#104\">source</a><a href=\"#impl-MemoryNetwork%3CM,+K%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M, K&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkMsg.html\" title=\"trait hotshot_types::traits::network::NetworkMsg\">NetworkMsg</a>,\n    K: <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#106\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html#tymethod.new\" class=\"fn\">new</a>(\n    pub_key: K,\n    metrics: <a class=\"struct\" href=\"hotshot/traits/networking/struct.NetworkingMetricsValue.html\" title=\"struct hotshot::traits::networking::NetworkingMetricsValue\">NetworkingMetricsValue</a>,\n    master_map: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MasterMap.html\" title=\"struct hotshot::traits::networking::memory_network::MasterMap\">MasterMap</a>&lt;M, K&gt;&gt;,\n    reliability_config: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkReliability.html\" title=\"trait hotshot_types::traits::network::NetworkReliability\">NetworkReliability</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>MemoryNetwork</code> and hooks it up to the group through the provided <code>MasterMap</code></p>\n</div></details></div></details>",0,"hotshot_example_types::node_types::StaticMemoryDAComm","hotshot_example_types::node_types::StaticMemoryQuorumComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MemoryNetwork%3CM,+K%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#96\">source</a><a href=\"#impl-Debug-for-MemoryNetwork%3CM,+K%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkMsg.html\" title=\"trait hotshot_types::traits::network::NetworkMsg\">NetworkMsg</a>,\n    K: <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#97\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_example_types::node_types::StaticMemoryDAComm","hotshot_example_types::node_types::StaticMemoryQuorumComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ConnectedNetwork%3CM,+K%3E-for-MemoryNetwork%3CM,+K%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#213\">source</a><a href=\"#impl-ConnectedNetwork%3CM,+K%3E-for-MemoryNetwork%3CM,+K%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M, K&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html\" title=\"trait hotshot_types::traits::network::ConnectedNetwork\">ConnectedNetwork</a>&lt;M, K&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkMsg.html\" title=\"trait hotshot_types::traits::network::NetworkMsg\">NetworkMsg</a>,\n    K: <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv_msgs\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#358\">source</a><a href=\"#method.recv_msgs\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.recv_msgs\" class=\"fn\">recv_msgs</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;M&gt;, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'async_trait,</div></h4></section></summary><div class=\"docblock\"><p>Receive one or many messages from the underlying network.</p>\n<h5 id=\"errors\"><a href=\"#errors\">Errors</a></h5>\n<p>If the other side of the channel is closed</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait_for_ready\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#214\">source</a><a href=\"#method.wait_for_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.wait_for_ready\" class=\"fn\">wait_for_ready</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Blocks until the network is successfully initialized</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pause\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#217\">source</a><a href=\"#method.pause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.pause\" class=\"fn\">pause</a>(&amp;self)</h4></section></summary><div class='docblock'>Pauses the underlying network</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resume\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#221\">source</a><a href=\"#method.resume\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.resume\" class=\"fn\">resume</a>(&amp;self)</h4></section></summary><div class='docblock'>Resumes the underlying network</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_ready\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#225\">source</a><a href=\"#method.is_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.is_ready\" class=\"fn\">is_ready</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>checks if the network is ready\nnonblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shut_down\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#230\">source</a><a href=\"#method.shut_down\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.shut_down\" class=\"fn\">shut_down</a>&lt;'a, 'b&gt;(\n    &amp;'a self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'b&gt;&gt;<div class=\"where\">where\n    'a: 'b,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'b,</div></h4></section></summary><div class='docblock'>Blocks until the network is shut down\nthen returns true</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.broadcast_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#242\">source</a><a href=\"#method.broadcast_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.broadcast_message\" class=\"fn\">broadcast_message</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    message: M,\n    recipients: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/collections/btree/set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree::set::BTreeSet\">BTreeSet</a>&lt;K&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>broadcast message to some subset of nodes\nblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.da_broadcast_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#294\">source</a><a href=\"#method.da_broadcast_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.da_broadcast_message\" class=\"fn\">da_broadcast_message</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    message: M,\n    recipients: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/collections/btree/set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree::set::BTreeSet\">BTreeSet</a>&lt;K&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>broadcast a message only to a DA committee\nblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.direct_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#303\">source</a><a href=\"#method.direct_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#tymethod.direct_message\" class=\"fn\">direct_message</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    message: M,\n    recipient: K\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Sends a direct message to a specific node\nblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.request_data\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#334\">source</a><a href=\"#method.request_data\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#method.request_data\" class=\"fn\">request_data</a>&lt;'life0, 'async_trait, TYPES&gt;(\n    &amp;'life0 self,\n    _request: M,\n    _recipient: K\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"hotshot_types/traits/network/enum.ResponseMessage.html\" title=\"enum hotshot_types::traits::network::ResponseMessage\">ResponseMessage</a>&lt;TYPES&gt;, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    TYPES: 'async_trait + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    Self: 'async_trait,</div></h4></section></summary><div class='docblock'>Ask request the network for some data.  Returns the request ID for that data,\nThe ID returned can be used for cancelling the request</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spawn_request_receiver_task\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#348\">source</a><a href=\"#method.spawn_request_receiver_task\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#method.spawn_request_receiver_task\" class=\"fn\">spawn_request_receiver_task</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Receiver&lt;(M, <a class=\"struct\" href=\"hotshot_types/traits/network/struct.ResponseChannel.html\" title=\"struct hotshot_types::traits::network::ResponseChannel\">ResponseChannel</a>&lt;M&gt;)&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    Self: 'async_trait,</div></h4></section></summary><div class='docblock'>Spawn a request task in the given network layer.  If it supports\nRequest and responses it will return the receiving end of a channel.\nRequests the network receives will be sent over this channel along\nwith a return channel to send the response back to. <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#method.spawn_request_receiver_task\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.queue_node_lookup\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#353\">source</a><a href=\"#method.queue_node_lookup\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#method.queue_node_lookup\" class=\"fn\">queue_node_lookup</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    _view_number: <a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>,\n    _pk: K\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, SendError&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>, K)&gt;&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    Self: 'async_trait,</div></h4></section></summary><div class='docblock'>queues lookup of a node</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inject_consensus_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#364\">source</a><a href=\"#method.inject_consensus_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#method.inject_consensus_info\" class=\"fn\">inject_consensus_info</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    _event: <a class=\"enum\" href=\"hotshot_types/traits/network/enum.ConsensusIntentEvent.html\" title=\"enum hotshot_types::traits::network::ConsensusIntentEvent\">ConsensusIntentEvent</a>&lt;K&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    Self: 'async_trait,</div></h4></section></summary><div class='docblock'>Injects consensus data such as view number into the networking implementation\nblocking\nIdeally we would pass in the <code>Time</code> type, but that requires making the entire trait generic over NodeType</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.update_view\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#367\">source</a><a href=\"#method.update_view\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.ConnectedNetwork.html#method.update_view\" class=\"fn\">update_view</a>(&amp;self, _view: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>)</h4></section></summary><div class='docblock'>handles view update</div></details></div></details>","ConnectedNetwork<M, K>","hotshot_example_types::node_types::StaticMemoryDAComm","hotshot_example_types::node_types::StaticMemoryQuorumComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MemoryNetwork%3CM,+K%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#90\">source</a><a href=\"#impl-Clone-for-MemoryNetwork%3CM,+K%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;M, K&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;<div class=\"where\">where\n    M: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkMsg.html\" title=\"trait hotshot_types::traits::network::NetworkMsg\">NetworkMsg</a>,\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#90\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;M, K&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_example_types::node_types::StaticMemoryDAComm","hotshot_example_types::node_types::StaticMemoryQuorumComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestableNetworkingImplementation%3CTYPES%3E-for-MemoryNetwork%3CMessage%3CTYPES%3E,+%3CTYPES+as+NodeType%3E::SignatureKey%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#180-181\">source</a><a href=\"#impl-TestableNetworkingImplementation%3CTYPES%3E-for-MemoryNetwork%3CMessage%3CTYPES%3E,+%3CTYPES+as+NodeType%3E::SignatureKey%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.generator\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#183-190\">source</a><a href=\"#method.generator\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html#tymethod.generator\" class=\"fn\">generator</a>(\n    _expected_node_count: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>,\n    _num_bootstrap: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>,\n    _network_id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>,\n    _da_committee_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>,\n    _is_da: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a>,\n    reliability_config: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkReliability.html\" title=\"trait hotshot_types::traits::network::NetworkReliability\">NetworkReliability</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>) -&gt; (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;&gt;, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;&gt;)&gt;</h4></section></summary><div class='docblock'>generates a network given an expected node count</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_flight_message_count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#206\">source</a><a href=\"#method.in_flight_message_count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html#tymethod.in_flight_message_count\" class=\"fn\">in_flight_message_count</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Get the number of messages in-flight. <a href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html#tymethod.in_flight_message_count\">Read more</a></div></details></div></details>","TestableNetworkingImplementation<TYPES>","hotshot_example_types::node_types::StaticMemoryDAComm","hotshot_example_types::node_types::StaticMemoryQuorumComm"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()