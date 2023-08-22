use hotshot_task::{event_stream::ChannelStream, task_impls::HSTWithEvent};

/// Initialized system context handle.
pub mod system_handle;

///  builder
pub mod test_builder;

/// launcher
pub mod test_launcher;

/// runner
pub mod test_runner;

/// task that's consuming events and asserting safety
pub mod overall_safety_task;

/// task that's submitting transactions to the stream
pub mod txn_task;

/// task that decides when things are complete
pub mod completion_task;

/// node types
pub mod node_types;

/// task to spin nodes up and down
pub mod spinning_task;

// TODO node changer (spin up and down)

#[derive(Clone, Debug)]
pub enum GlobalTestEvent {
    ShutDown,
}

pub enum ShutDownReason {
    SafetyViolation,
    SuccessfullyCompleted,
}

pub type TestTask<ERR, STATE> =
    HSTWithEvent<ERR, GlobalTestEvent, ChannelStream<GlobalTestEvent>, STATE>;
