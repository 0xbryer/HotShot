(function() {var type_impls = {
"hotshot_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CanonicalDeserialize-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-CanonicalDeserialize-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; CanonicalDeserialize for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize_with_mode\" class=\"method trait-impl\"><a href=\"#method.deserialize_with_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_with_mode</a>&lt;R&gt;(\n    reader: R,\n    compress: Compress,\n    validate: Validate\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SignKey&lt;F&gt;, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section></summary><div class='docblock'>The general deserialize method that takes in customization flags.</div></details><section id=\"method.deserialize_compressed\" class=\"method trait-impl\"><a href=\"#method.deserialize_compressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_compressed</a>&lt;R&gt;(reader: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section><section id=\"method.deserialize_compressed_unchecked\" class=\"method trait-impl\"><a href=\"#method.deserialize_compressed_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_compressed_unchecked</a>&lt;R&gt;(\n    reader: R\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section><section id=\"method.deserialize_uncompressed\" class=\"method trait-impl\"><a href=\"#method.deserialize_uncompressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_uncompressed</a>&lt;R&gt;(reader: R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section><section id=\"method.deserialize_uncompressed_unchecked\" class=\"method trait-impl\"><a href=\"#method.deserialize_uncompressed_unchecked\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">deserialize_uncompressed_unchecked</a>&lt;R&gt;(\n    reader: R\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>,</div></h4></section></div></details>","CanonicalDeserialize","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CanonicalSerialize-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-CanonicalSerialize-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; CanonicalSerialize for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize_with_mode\" class=\"method trait-impl\"><a href=\"#method.serialize_with_mode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_with_mode</a>&lt;W&gt;(\n    &amp;self,\n    writer: W,\n    compress: Compress\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section></summary><div class='docblock'>The general serialize method that takes in customization flags.</div></details><section id=\"method.serialized_size\" class=\"method trait-impl\"><a href=\"#method.serialized_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialized_size</a>(&amp;self, compress: Compress) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.serialize_compressed\" class=\"method trait-impl\"><a href=\"#method.serialize_compressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_compressed</a>&lt;W&gt;(&amp;self, writer: W) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section><section id=\"method.compressed_size\" class=\"method trait-impl\"><a href=\"#method.compressed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">compressed_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section><section id=\"method.serialize_uncompressed\" class=\"method trait-impl\"><a href=\"#method.serialize_uncompressed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">serialize_uncompressed</a>&lt;W&gt;(&amp;self, writer: W) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,</div></h4></section><section id=\"method.uncompressed_size\" class=\"method trait-impl\"><a href=\"#method.uncompressed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">uncompressed_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.usize.html\">usize</a></h4></section></div></details>","CanonicalSerialize","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; SignKey&lt;F&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Default-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; SignKey&lt;F&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.78.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;__D&gt;(\n    __deserializer: __D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SignKey&lt;F&gt;, &lt;__D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.204/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Display-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Drop-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.78.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromStr-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-FromStr-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Err\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Err\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.78.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" class=\"associatedtype\">Err</a> = Tb64Error</h4></section></summary><div class='docblock'>The associated error which can be returned from parsing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_str\" class=\"method trait-impl\"><a href=\"#method.from_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/str/traits/trait.FromStr.html#tymethod.from_str\" class=\"fn\">from_str</a>(s: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SignKey&lt;F&gt;, &lt;SignKey&lt;F&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.78.0/core/str/traits/trait.FromStr.html#associatedtype.Err\" title=\"type core::str::traits::FromStr::Err\">Err</a>&gt;</h4></section></summary><div class='docblock'>Parses a string <code>s</code> to return a value of this type. <a href=\"https://doc.rust-lang.org/1.78.0/core/str/traits/trait.FromStr.html#tymethod.from_str\">Read more</a></div></details></div></details>","FromStr","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Hash-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.78.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;SignKey&lt;F&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Serialize-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(\n    &amp;self,\n    __serializer: __S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;__S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.204/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Tagged-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Tagged-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; Tagged for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.tag\" class=\"method trait-impl\"><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">tag</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a></h4></section></div></details>","Tagged","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26TaggedBase64%3E-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-TryFrom%3C%26TaggedBase64%3E-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt; for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = Tb64Error</h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(\n    t: &amp;TaggedBase64\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SignKey&lt;F&gt;, &lt;SignKey&lt;F&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;TaggedBase64&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<&TaggedBase64>","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CTaggedBase64%3E-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-TryFrom%3CTaggedBase64%3E-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt; for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = Tb64Error</h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(\n    t: TaggedBase64\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;SignKey&lt;F&gt;, &lt;SignKey&lt;F&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;TaggedBase64&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.78.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<TaggedBase64>","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Valid-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Valid-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; Valid for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.check\" class=\"method trait-impl\"><a href=\"#method.check\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">check</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, SerializationError&gt;</h4></section><section id=\"method.batch_check\" class=\"method trait-impl\"><a href=\"#method.batch_check\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">batch_check</a>&lt;'a&gt;(\n    batch: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a SignKey&lt;F&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, SerializationError&gt;<div class=\"where\">where\n    SignKey&lt;F&gt;: 'a,</div></h4></section></div></details>","Valid","hotshot_types::light_client::StateSignKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Zeroize-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Zeroize-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; Zeroize for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField + Zeroize,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.zeroize\" class=\"method trait-impl\"><a href=\"#method.zeroize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">zeroize</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Zero out this object from memory using Rust intrinsics which ensure the\nzeroization operation is not “optimized away” by the compiler.</div></details></div></details>","Zeroize","hotshot_types::light_client::StateSignKey"],["<section id=\"impl-Eq-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-Eq-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + PrimeField,</div></h3></section>","Eq","hotshot_types::light_client::StateSignKey"],["<section id=\"impl-StructuralPartialEq-for-SignKey%3CF%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SignKey%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for SignKey&lt;F&gt;<div class=\"where\">where\n    F: PrimeField,</div></h3></section>","StructuralPartialEq","hotshot_types::light_client::StateSignKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()