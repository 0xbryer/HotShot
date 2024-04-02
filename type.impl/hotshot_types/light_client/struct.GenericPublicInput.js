(function() {var type_impls = {
"hotshot_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericPublicInput%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#169-223\">source</a><a href=\"#impl-GenericPublicInput%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: PrimeField&gt; <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.threshold\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#172-174\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.threshold\" class=\"fn\">threshold</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the threshold</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.view_number\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#178-180\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.view_number\" class=\"fn\">view_number</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the view number of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_height\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#184-186\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.block_height\" class=\"fn\">block_height</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the block height of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.block_comm_root\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#190-192\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.block_comm_root\" class=\"fn\">block_comm_root</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the block commitment root of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fee_ledger_comm\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#196-198\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.fee_ledger_comm\" class=\"fn\">fee_ledger_comm</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the fee ledger commitment of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stake_table_comm\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#202-204\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.stake_table_comm\" class=\"fn\">stake_table_comm</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(F, F, F)</a></h4></section></summary><div class=\"docblock\"><p>Return the stake table commitment of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.qc_key_comm\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#208-210\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.qc_key_comm\" class=\"fn\">qc_key_comm</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the qc key commitment of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state_key_comm\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#214-216\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.state_key_comm\" class=\"fn\">state_key_comm</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the state key commitment of the light client state</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.stake_amount_comm\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#220-222\">source</a><h4 class=\"code-header\">pub fn <a href=\"hotshot_types/light_client/struct.GenericPublicInput.html#tymethod.stake_amount_comm\" class=\"fn\">stake_amount_comm</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Return the stake amount commitment of the light client state</p>\n</div></details></div></details>",0,"hotshot_types::light_client::PublicInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3C%5BF%5D%3E-for-GenericPublicInput%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#157-161\">source</a><a href=\"#impl-AsRef%3C%5BF%5D%3E-for-GenericPublicInput%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.slice.html\">[F]</a>&gt; for <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#158-160\">source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.slice.html\">[F]</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<[F]>","hotshot_types::light_client::PublicInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericPublicInput%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#154\">source</a><a href=\"#impl-Debug-for-GenericPublicInput%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#154\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_types::light_client::PublicInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3CF%3E%3E-for-GenericPublicInput%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#163-167\">source</a><a href=\"#impl-From%3CVec%3CF%3E%3E-for-GenericPublicInput%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;F&gt;&gt; for <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#164-166\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(v: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;F&gt;) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<F>>","hotshot_types::light_client::PublicInput"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-GenericPublicInput%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#154\">source</a><a href=\"#impl-Clone-for-GenericPublicInput%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + PrimeField&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/light_client.rs.html#154\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot_types/light_client/struct.GenericPublicInput.html\" title=\"struct hotshot_types::light_client::GenericPublicInput\">GenericPublicInput</a>&lt;F&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_types::light_client::PublicInput"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()