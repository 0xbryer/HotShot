(function() {var type_impls = {
"hotshot_testing":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CreateTaskState%3CTYPES,+I,+V%3E-for-QuorumVoteTaskState%3CTYPES,+I,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/tasks/task_state.rs.html#224-225\">source</a><a href=\"#impl-CreateTaskState%3CTYPES,+I,+V%3E-for-QuorumVoteTaskState%3CTYPES,+I,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, I, V&gt; <a class=\"trait\" href=\"hotshot/tasks/task_state/trait.CreateTaskState.html\" title=\"trait hotshot::tasks::task_state::CreateTaskState\">CreateTaskState</a>&lt;TYPES, I, V&gt; for <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;,\n    V: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.Versions.html\" title=\"trait hotshot_types::traits::node_implementation::Versions\">Versions</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/tasks/task_state.rs.html#223\">source</a><a href=\"#method.create_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot/tasks/task_state/trait.CreateTaskState.html#tymethod.create_from\" class=\"fn\">create_from</a>&lt;'life0, 'async_trait&gt;(\n    handle: &amp;'life0 <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, I, V&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Function to create the task state from a given <code>SystemContextHandle</code>.</div></details></div></details>","CreateTaskState<TYPES, I, V>","hotshot_testing::predicates::upgrade_with_vote::QuorumVoteTaskTestState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-QuorumVoteTaskState%3CTYPES,+I,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/quorum_vote/mod.rs.html#411\">source</a><a href=\"#impl-QuorumVoteTaskState%3CTYPES,+I,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, I, V&gt; <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;,\n    V: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.Versions.html\" title=\"trait hotshot_types::traits::node_implementation::Versions\">Versions</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/quorum_vote/mod.rs.html#542\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html#tymethod.handle\" class=\"fn\">handle</a>(\n    &amp;mut self,\n    event: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;,\n    event_receiver: Receiver&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;&gt;,\n    event_sender: Sender&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;&gt;&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"utils/anytrace/struct.Error.html\" title=\"struct utils::anytrace::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Handle a vote dependent event received on the event stream</p>\n</div></details></div></details>",0,"hotshot_testing::predicates::upgrade_with_vote::QuorumVoteTaskTestState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TaskState-for-QuorumVoteTaskState%3CTYPES,+I,+V%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/quorum_vote/mod.rs.html#707-708\">source</a><a href=\"#impl-TaskState-for-QuorumVoteTaskState%3CTYPES,+I,+V%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, I, V&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;<div class=\"where\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>,\n    I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES&gt;,\n    V: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.Versions.html\" title=\"trait hotshot_types::traits::node_implementation::Versions\">Versions</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Event\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Event\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" class=\"associatedtype\">Event</a> = <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Type of event sent and received by the task</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/quorum_vote/mod.rs.html#706\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task/task/trait.TaskState.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'life0, 'life1, 'life2, 'async_trait&gt;(\n    &amp;'life0 mut self,\n    event: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;&lt;<a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt; as <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" title=\"type hotshot_task::task::TaskState::Event\">Event</a>&gt;,\n    sender: &amp;'life1 Sender&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;&lt;<a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt; as <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" title=\"type hotshot_task::task::TaskState::Event\">Event</a>&gt;&gt;,\n    receiver: &amp;'life2 Receiver&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;&lt;<a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt; as <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_task/task/trait.TaskState.html#associatedtype.Event\" title=\"type hotshot_task::task::TaskState::Event\">Event</a>&gt;&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"utils/anytrace/struct.Error.html\" title=\"struct utils::anytrace::Error\">Error</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    'life1: 'async_trait,\n    'life2: 'async_trait,\n    <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Handles an event, providing direct access to the specific channel we received the event on.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cancel_subtasks\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/quorum_vote/mod.rs.html#706\">source</a><a href=\"#method.cancel_subtasks\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task/task/trait.TaskState.html#tymethod.cancel_subtasks\" class=\"fn\">cancel_subtasks</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    'life0: 'async_trait,\n    <a class=\"struct\" href=\"hotshot_task_impls/quorum_vote/struct.QuorumVoteTaskState.html\" title=\"struct hotshot_task_impls::quorum_vote::QuorumVoteTaskState\">QuorumVoteTaskState</a>&lt;TYPES, I, V&gt;: 'async_trait,</div></h4></section></summary><div class='docblock'>Joins all subtasks.</div></details></div></details>","TaskState","hotshot_testing::predicates::upgrade_with_vote::QuorumVoteTaskTestState"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()