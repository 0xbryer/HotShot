(function() {var type_impls = {
"hotshot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#31-41\">source</a><a href=\"#impl-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, PUBKEY: <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#34-40\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html#tymethod.new\" class=\"fn\">new</a>(\n    _nodes: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[PUBKEY]</a>,\n    nodes_with_stake: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new dummy elector</p>\n</div></details></div></details>",0,"hotshot::traits::election::static_committee::StaticCommittee"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-Debug-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, PUBKEY: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;<span class=\"where fmt-newline\">where\n    PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot::traits::election::static_committee::StaticCommittee"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-PartialEq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, PUBKEY: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;<span class=\"where fmt-newline\">where\n    PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hotshot::traits::election::static_committee::StaticCommittee"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-Clone-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, PUBKEY: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;<span class=\"where fmt-newline\">where\n    PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot::traits::election::static_committee::StaticCommittee"],["<section id=\"impl-StructuralEq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-StructuralEq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, PUBKEY: <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;</h3></section>","StructuralEq","hotshot::traits::election::static_committee::StaticCommittee"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-Hash-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, PUBKEY: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;<span class=\"where fmt-newline\">where\n    PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/hash/mod.rs.html#242-244\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut H</a>)<span class=\"where fmt-newline\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.75.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hotshot::traits::election::static_committee::StaticCommittee"],["<section id=\"impl-StructuralPartialEq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-StructuralPartialEq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, PUBKEY: <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;</h3></section>","StructuralPartialEq","hotshot::traits::election::static_committee::StaticCommittee"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Membership%3CTYPES%3E-for-GeneralStaticCommittee%3CTYPES,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#52-144\">source</a><a href=\"#impl-Membership%3CTYPES%3E-for-GeneralStaticCommittee%3CTYPES,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES, PUBKEY: <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a> + 'static&gt; <a class=\"trait\" href=\"hotshot_types/traits/election/trait.Membership.html\" title=\"trait hotshot_types::traits::election::Membership\">Membership</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;TYPES, PUBKEY&gt;<span class=\"where fmt-newline\">where\n    TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&lt;SignatureKey = PUBKEY, ElectionConfigType = <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.StaticElectionConfig.html\" title=\"struct hotshot::traits::election::static_committee::StaticElectionConfig\">StaticElectionConfig</a>&gt;,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_committee_qc_stake_table\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#58-60\">source</a><a href=\"#method.get_committee_qc_stake_table\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.get_committee_qc_stake_table\" class=\"fn\">get_committee_qc_stake_table</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Clone the public key and corresponding stake table for current elected committee</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_leader\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#64-68\">source</a><a href=\"#method.get_leader\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.get_leader\" class=\"fn\">get_leader</a>(&amp;self, view_number: TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>) -&gt; PUBKEY</h4></section></summary><div class=\"docblock\"><p>Index the vector of public keys with the current view number</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_stake\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#80-83\">source</a><a href=\"#method.has_stake\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.has_stake\" class=\"fn\">has_stake</a>(&amp;self, pub_key: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;PUBKEY</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Check if a key has stake</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_stake\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#85-95\">source</a><a href=\"#method.get_stake\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.get_stake\" class=\"fn\">get_stake</a>(\n    &amp;self,\n    pub_key: &amp;&lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&lt;TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a> as <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt;::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>&gt;</h4></section></summary><div class='docblock'>Get the stake table entry for a public key, returns <code>None</code> if the\nkey is not in the table</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_election_config\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#97-99\">source</a><a href=\"#method.default_election_config\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.default_election_config\" class=\"fn\">default_election_config</a>(num_nodes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u64.html\">u64</a>) -&gt; TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.ElectionConfigType\" title=\"type hotshot_types::traits::node_implementation::NodeType::ElectionConfigType\">ElectionConfigType</a></h4></section></summary><div class='docblock'>generate a default election configuration</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_election\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#101-113\">source</a><a href=\"#method.create_election\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.create_election\" class=\"fn\">create_election</a>(\n    keys_qc: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>&gt;,\n    config: TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.ElectionConfigType\" title=\"type hotshot_types::traits::node_implementation::NodeType::ElectionConfigType\">ElectionConfigType</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>create an election\nTODO may want to move this to a testableelection trait</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.total_nodes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#115-117\">source</a><a href=\"#method.total_nodes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.total_nodes\" class=\"fn\">total_nodes</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the number of total nodes in the committee</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.success_threshold\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#119-121\">source</a><a href=\"#method.success_threshold\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.success_threshold\" class=\"fn\">success_threshold</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/num/nonzero/struct.NonZeroU64.html\" title=\"struct core::num::nonzero::NonZeroU64\">NonZeroU64</a></h4></section></summary><div class='docblock'>Returns the threshold for a specific <code>Membership</code> implementation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.failure_threshold\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#123-125\">source</a><a href=\"#method.failure_threshold\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.failure_threshold\" class=\"fn\">failure_threshold</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/num/nonzero/struct.NonZeroU64.html\" title=\"struct core::num::nonzero::NonZeroU64\">NonZeroU64</a></h4></section></summary><div class='docblock'>Returns the threshold for a specific <code>Membership</code> implementation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgrade_threshold\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#127-129\">source</a><a href=\"#method.upgrade_threshold\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.upgrade_threshold\" class=\"fn\">upgrade_threshold</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/num/nonzero/struct.NonZeroU64.html\" title=\"struct core::num::nonzero::NonZeroU64\">NonZeroU64</a></h4></section></summary><div class='docblock'>Returns the threshold required to upgrade the network protocol</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_committee\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#131-143\">source</a><a href=\"#method.get_committee\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/election/trait.Membership.html#tymethod.get_committee\" class=\"fn\">get_committee</a>(\n    &amp;self,\n    _view_number: &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.Time\" title=\"type hotshot_types::traits::node_implementation::NodeType::Time\">Time</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/collections/btree/set/struct.BTreeSet.html\" title=\"struct alloc::collections::btree::set::BTreeSet\">BTreeSet</a>&lt;&lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;</h4></section></summary><div class='docblock'>The members of the committee for view <code>view_number</code>.</div></details></div></details>","Membership<TYPES>","hotshot::traits::election::static_committee::StaticCommittee"],["<section id=\"impl-Eq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot/traits/election/static_committee.rs.html#18\">source</a><a href=\"#impl-Eq-for-GeneralStaticCommittee%3CT,+PUBKEY%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, PUBKEY: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"hotshot/types/trait.SignatureKey.html\" title=\"trait hotshot::types::SignatureKey\">SignatureKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.GeneralStaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::GeneralStaticCommittee\">GeneralStaticCommittee</a>&lt;T, PUBKEY&gt;<span class=\"where fmt-newline\">where\n    PUBKEY::<a class=\"associatedtype\" href=\"hotshot/types/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot::types::SignatureKey::StakeTableEntry\">StakeTableEntry</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</span></h3></section>","Eq","hotshot::traits::election::static_committee::StaticCommittee"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()