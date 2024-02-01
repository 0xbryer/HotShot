(function() {var type_impls = {
"hotshot_testing":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MemoryCommChannel%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#459\">source</a><a href=\"#impl-MemoryCommChannel%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#462\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html#tymethod.new\" class=\"fn\">new</a>(\n    network: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;</h4></section></summary><div class=\"docblock\"><p>create new communication channel</p>\n</div></details></div></details>",0,"hotshot_testing::node_types::StaticMemoryDAComm","hotshot_testing::node_types::StaticMemoryQuorumComm","hotshot_testing::node_types::StaticMemoryViewSyncComm","hotshot_testing::node_types::StaticMemoryVIDComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-MemoryCommChannel%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#454\">source</a><a href=\"#impl-Clone-for-MemoryCommChannel%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#454\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_testing::node_types::StaticMemoryDAComm","hotshot_testing::node_types::StaticMemoryQuorumComm","hotshot_testing::node_types::StaticMemoryViewSyncComm","hotshot_testing::node_types::StaticMemoryVIDComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestableChannelImplementation%3CTYPES%3E-for-MemoryCommChannel%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#565\">source</a><a href=\"#impl-TestableChannelImplementation%3CTYPES%3E-for-MemoryCommChannel%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableChannelImplementation.html\" title=\"trait hotshot_types::traits::network::TestableChannelImplementation\">TestableChannelImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.generate_network\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#566-567\">source</a><a href=\"#method.generate_network\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.TestableChannelImplementation.html#tymethod.generate_network\" class=\"fn\">generate_network</a>(\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;&gt;) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;&gt;</h4></section></summary><div class='docblock'>generates the <code>CommunicationChannel</code> given it’s associated network type</div></details></div></details>","TestableChannelImplementation<TYPES>","hotshot_testing::node_types::StaticMemoryDAComm","hotshot_testing::node_types::StaticMemoryQuorumComm","hotshot_testing::node_types::StaticMemoryViewSyncComm","hotshot_testing::node_types::StaticMemoryVIDComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-MemoryCommChannel%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#454\">source</a><a href=\"#impl-Debug-for-MemoryCommChannel%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#454\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_testing::node_types::StaticMemoryDAComm","hotshot_testing::node_types::StaticMemoryQuorumComm","hotshot_testing::node_types::StaticMemoryViewSyncComm","hotshot_testing::node_types::StaticMemoryVIDComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TestableNetworkingImplementation%3CTYPES%3E-for-MemoryCommChannel%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#467-469\">source</a><a href=\"#impl-TestableNetworkingImplementation%3CTYPES%3E-for-MemoryCommChannel%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    <a class=\"enum\" href=\"hotshot_types/message/enum.MessageKind.html\" title=\"enum hotshot_types::message::MessageKind\">MessageKind</a>&lt;TYPES&gt;: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.ViewMessage.html\" title=\"trait hotshot_types::traits::network::ViewMessage\">ViewMessage</a>&lt;TYPES&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.generator\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#471-478\">source</a><a href=\"#method.generator\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html#tymethod.generator\" class=\"fn\">generator</a>(\n    expected_node_count: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    num_bootstrap: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    network_id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    da_committee_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>,\n    is_da: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>,\n    reliability_config: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"hotshot_types/traits/network/trait.NetworkReliability.html\" title=\"trait hotshot_types::traits::network::NetworkReliability\">NetworkReliability</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;&gt;</h4></section></summary><div class='docblock'>generates a network given an expected node count</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_flight_message_count\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#493\">source</a><a href=\"#method.in_flight_message_count\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html#tymethod.in_flight_message_count\" class=\"fn\">in_flight_message_count</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Get the number of messages in-flight. <a href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html#tymethod.in_flight_message_count\">Read more</a></div></details></div></details>","TestableNetworkingImplementation<TYPES>","hotshot_testing::node_types::StaticMemoryDAComm","hotshot_testing::node_types::StaticMemoryQuorumComm","hotshot_testing::node_types::StaticMemoryViewSyncComm","hotshot_testing::node_types::StaticMemoryVIDComm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CommunicationChannel%3CTYPES%3E-for-MemoryCommChannel%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#499-501\">source</a><a href=\"#impl-CommunicationChannel%3CTYPES%3E-for-MemoryCommChannel%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.CommunicationChannel.html\" title=\"trait hotshot_types::traits::network::CommunicationChannel\">CommunicationChannel</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    <a class=\"enum\" href=\"hotshot_types/message/enum.MessageKind.html\" title=\"enum hotshot_types::message::MessageKind\">MessageKind</a>&lt;TYPES&gt;: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.ViewMessage.html\" title=\"trait hotshot_types::traits::network::ViewMessage\">ViewMessage</a>&lt;TYPES&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.NETWORK\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.NETWORK\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#associatedtype.NETWORK\" class=\"associatedtype\">NETWORK</a> = <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;</h4></section></summary><div class='docblock'>Underlying Network implementation’s type</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pause\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#505\">source</a><a href=\"#method.pause\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.pause\" class=\"fn\">pause</a>(&amp;self)</h4></section></summary><div class='docblock'>Pauses the underlying network</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.resume\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#509\">source</a><a href=\"#method.resume\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.resume\" class=\"fn\">resume</a>(&amp;self)</h4></section></summary><div class='docblock'>Resumes the underlying network</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.wait_for_ready\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#513\">source</a><a href=\"#method.wait_for_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.wait_for_ready\" class=\"fn\">wait_for_ready</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Blocks until node is successfully initialized\ninto the network</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_ready\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#517\">source</a><a href=\"#method.is_ready\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.is_ready\" class=\"fn\">is_ready</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>checks if the network is ready\nnonblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shut_down\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#521-524\">source</a><a href=\"#method.shut_down\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.shut_down\" class=\"fn\">shut_down</a>&lt;'a, 'b&gt;(\n    &amp;'a self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'b&gt;&gt;<span class=\"where fmt-newline\">where\n    'a: 'b,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;: 'b,</span></h4></section></summary><div class='docblock'>Shut down this network. Afterwards this network should no longer be used. <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.shut_down\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.broadcast_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#532\">source</a><a href=\"#method.broadcast_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.broadcast_message\" class=\"fn\">broadcast_message</a>&lt;'life0, 'life1, 'async_trait&gt;(\n    &amp;'life0 self,\n    message: <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;,\n    election: &amp;'life1 &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Membership\" title=\"type hotshot_types::traits::node_implementation::NodeType::Membership\">Membership</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    'life1: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>broadcast message to those listening on the communication channel\nblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.direct_message\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#544\">source</a><a href=\"#method.direct_message\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.direct_message\" class=\"fn\">direct_message</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    message: <a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;,\n    recipient: &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;: 'async_trait,</span></h4></section></summary><div class='docblock'>Sends a direct message to a specific node\nblocking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recv_msgs\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/networking/memory_network.rs.html#552-558\">source</a><a href=\"#method.recv_msgs\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.recv_msgs\" class=\"fn\">recv_msgs</a>&lt;'a, 'b&gt;(\n    &amp;'a self,\n    transmit_type: <a class=\"enum\" href=\"hotshot_types/traits/network/enum.TransmitType.html\" title=\"enum hotshot_types::traits::network::TransmitType\">TransmitType</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"hotshot_types/message/struct.Message.html\" title=\"struct hotshot_types::message::Message\">Message</a>&lt;TYPES&gt;&gt;, <a class=\"enum\" href=\"hotshot_types/traits/network/enum.NetworkError.html\" title=\"enum hotshot_types::traits::network::NetworkError\">NetworkError</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'b&gt;&gt;<span class=\"where fmt-newline\">where\n    'a: 'b,\n    <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;: 'b,</span></h4></section></summary><div class='docblock'>Moves out the entire queue of received messages of ’transmit_type` <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#tymethod.recv_msgs\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.queue_node_lookup\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#284\">source</a><a href=\"#method.queue_node_lookup\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#method.queue_node_lookup\" class=\"fn\">queue_node_lookup</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    _view_number: <a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>,\n    _pk: &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>, SendError&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>, &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>)&gt;&gt;&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>queues looking up a node</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inject_consensus_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/traits/network.rs.html#294\">source</a><a href=\"#method.inject_consensus_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/network/trait.CommunicationChannel.html#method.inject_consensus_info\" class=\"fn\">inject_consensus_info</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    _event: <a class=\"enum\" href=\"hotshot_types/traits/network/enum.ConsensusIntentEvent.html\" title=\"enum hotshot_types::traits::network::ConsensusIntentEvent\">ConsensusIntentEvent</a>&lt;&lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    'life0: 'async_trait,\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Injects consensus data such as view number into the networking implementation\nblocking</div></details></div></details>","CommunicationChannel<TYPES>","hotshot_testing::node_types::StaticMemoryDAComm","hotshot_testing::node_types::StaticMemoryQuorumComm","hotshot_testing::node_types::StaticMemoryViewSyncComm","hotshot_testing::node_types::StaticMemoryVIDComm"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()