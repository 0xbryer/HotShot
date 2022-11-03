(function() {var implementors = {
"hotshot":[["impl&lt;S, T&gt; Election&lt;<a class=\"struct\" href=\"hotshot/types/ed25519/struct.Ed25519Pub.html\" title=\"struct hotshot::types::ed25519::Ed25519Pub\">Ed25519Pub</a>, T&gt; for <a class=\"struct\" href=\"hotshot/traits/election/static_committee/struct.StaticCommittee.html\" title=\"struct hotshot::traits::election::static_committee::StaticCommittee\">StaticCommittee</a>&lt;S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"hotshot/traits/trait.State.html\" title=\"trait hotshot::traits::State\">State</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: ConsensusTime,</span>"],["impl&lt;VRFHASHER, VRFPARAMS, VRF, SIGSCHEME, STATE&gt; Election&lt;<a class=\"struct\" href=\"hotshot/traits/election/vrf/struct.VRFPubKey.html\" title=\"struct hotshot::traits::election::vrf::VRFPubKey\">VRFPubKey</a>&lt;SIGSCHEME&gt;, &lt;STATE as <a class=\"trait\" href=\"hotshot/traits/trait.State.html\" title=\"trait hotshot::traits::State\">State</a>&gt;::<a class=\"associatedtype\" href=\"hotshot/traits/trait.State.html#associatedtype.Time\" title=\"type hotshot::traits::State::Time\">Time</a>&gt; for <a class=\"struct\" href=\"hotshot/traits/election/vrf/struct.VrfImpl.html\" title=\"struct hotshot::traits::election::vrf::VrfImpl\">VrfImpl</a>&lt;STATE, SIGSCHEME, VRF, VRFHASHER, VRFPARAMS&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME: SignatureScheme&lt;PublicParameter = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.unit.html\">()</a>, MessageUnit = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME::VerificationKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME::SigningKey: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;SIGSCHEME::Signature: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;VRF: Vrf&lt;VRFHASHER, VRFPARAMS, PublicParameter = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.unit.html\">()</a>, Input = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.array.html\">; 32]</a>, Output = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.65.0/std/primitive.array.html\">; 32]</a>, PublicKey = SIGSCHEME::VerificationKey, SecretKey = SIGSCHEME::SigningKey&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;VRF::Proof: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + for&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.147/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;VRF::PublicParameter: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;VRFHASHER: Digest + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;VRFPARAMS: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.65.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + Bls12Parameters,<br>&nbsp;&nbsp;&nbsp;&nbsp;STATE: <a class=\"trait\" href=\"hotshot/traits/trait.State.html\" title=\"trait hotshot::traits::State\">State</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;VRFPARAMS as Bls12Parameters&gt;::G1Parameters: SWHashToGroup,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()