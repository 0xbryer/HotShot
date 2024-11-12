searchState.loadedDescShard("hotshot_task_impls", 0, "The consensus layer for hotshot. This currently implements …\nImplementations for builder client Should contain builder …\nThe task which implements the core state logic of …\nThe task which implements the main parts of data …\nDefines the events passed between tasks\nDefines the types to run unit tests for a task.\nHelper functions used by any task\nThe task which implements the network.\nTask for handling logic for quorum proposals\nTask for handling QuorumProposalRecv events\nThe task which handles the logic for the quorum vote.\nTask for requesting the network for things\nTask which responses to requests from the network\nTask for storing and replaying all received tasks by a node\nThe task which implements all transaction handling\nTask for handling upgrades\nThe task which implements verifiable information dispersal\nThe task which implements view synchronization\nGeneric task for collecting votes\nGeneric error while accessing the API\nThe requested block was missing\nThe requested block was not found\nClient for builder API\nRepresents errors that can occur while interacting with …\nMarker for <code>NodeType</code> used here\nQuery builder for available blocks\nClaim block\nClaim block\nClaim block header input\nClaim block and provide the number of nodes information to …\nUnderlying surf_disco::Client for the legacy builder api\nWait for server to become available Returns <code>false</code> if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new client from base url\nVersion 0.1\nVersion 0.2. No changes in API\nVersion 0.3: marketplace. Bundles.\nClient for builder API\nMarker for <code>NodeType</code> used here\nClaim block\nClaim block header input\nClaim block and provide the number of nodes information to …\nUnderlying surf_disco::Client for the legacy builder api\nBuilder API version\nClient for builder API\nMarker for <code>NodeType</code> used here\nClaim block\nUnderlying surf_disco::Client for the legacy builder api\nTask state for the Consensus task.\nJoins all subtasks.\nMembership for DA committee Votes/certs\nA reference to the metrics trait.\nThe epoch number that this node is currently executing in.\nThe view number that this node is currently executing in.\nTimestamp this view starts at.\nReturns the argument unchanged.\nHandles a consensus event received on the event stream\nEvent handlers for use in the <code>handle</code> method.\nThe node’s id\nImmutable instance state\nCalls <code>U::from(self)</code>.\nThe last decided view\nThe underlying network\nOutput events to application\nOur Private Key\nOur public key\nMembership for Quorum Certs/votes\nThis node’s storage ref\nView timeout from config.\nMembership for Timeout votes/certs\nTimeout task handle\nA map of <code>TimeoutVote</code> collector tasks.\nLock for a decided upgrade\nA map of <code>QuorumVote</code> collector tasks.\nHandle a <code>QuorumVoteRecv</code> event.\nHandle a <code>Timeout</code> event.\nHandle a <code>TimeoutVoteRecv</code> event.\nHandle a <code>ViewChange</code> event.\nTracks state of a DA task\nReference to consensus. Leader will require a read lock on …\nEpoch number this node is executing in.\nView number this view is executing in.\nMembership for the DA committee\nReturns the argument unchanged.\nmain task event handler\nThis state’s ID\nCalls <code>U::from(self)</code>.\nThe underlying network\nOutput events to application\nThis Nodes private key\nThis Nodes public key\nMembership for the quorum committee We need this only for …\nThis node’s storage ref\nLock for a decided upgrade\nA map of <code>DaVote</code> collector tasks.\nEvent when the transactions task has a block formed\nEvent when the transactions task has sequenced …\nA Data Availability Certificate (DAC) has been received by …\nA DAC is validated.\nA DA proposal has been received from the network; handled …\nSend a DA proposal to the DA committee; emitted by the DA …\nA DA proposal has been validated; handled by the DA task …\nA DA vote has been received by the network; handled by the …\nSend a DA vote to the DA leader; emitted by DA committee …\nThe DA leader has collected enough votes to form a DAC; …\nA new high_qc has been updated in <code>Consensus</code>.\nAll of the possible events that can be passed between …\nMarker that the task completed\nA new anchor view has been successfully reached by this …\nEvent when consensus decided on a leaf\nA new locked view has been created (2-chain)\nWrapper type for the event to notify tasks that a proposal …\nThe next leader has collected enough votes to form a QC; …\nA quorum proposal has been preliminarily validated. The …\nA quorum proposal has been received from the network; …\nA quorum proposal was requested by a node for a view.\nA quorum proposal is missing for a view that we need.\nA quorum proposal was requested by a node for a view.\nA quorum proposal was missing for a view. As the leader, …\nSend a quorum proposal to the network; emitted by the …\nA quorum proposal with the given parent leaf is validated. …\nAll dependencies for the quorum vote are validated.\nA quorum vote has been received from the network; handled …\nSend a quorum vote to the next leader; emitted by a …\nEvent to send block payload commitment and metadata from …\nShutdown the task\nA consensus view has timed out; emitted by a replica in …\nA timeout vote received from the network; handled by …\nSend a timeout vote to the network; emitted by consensus …\nSend transactions to the network\nReceive transactions from the network\nA new high_qc has been reached by this node.\nUpgrade certificate has been sent to the network\nUpgrade proposal has been received from the network\nUpgrade proposal has been sent to the network\nUpgrade vote has been received from the network\nUpgrade vote has been sent to the network\nSend VID shares to VID storage nodes; emitted by the DA …\nReceive a VID request from the network; Received by a node …\nSend a VID request to the network; emitted to on of the …\nReceive a VID response from the network; received by the …\nSend a VID response to the network; emitted to the sending …\nVid disperse share has been received from the network; …\nVID share data is validated.\nThe current view has changed; emitted by the replica in …\nReceive a <code>ViewSyncCommitCertificate2</code> from the network; …\nSend a <code>ViewSyncCommitCertificate2</code> from the network; …\nReceive a <code>ViewSyncCommitVote</code> from the network; received by …\nSend a <code>ViewSyncCommitVote</code> from the network; emitted by a …\nReceive a <code>ViewSyncFinalizeCertificate2</code> from the network; …\nSend a <code>ViewSyncFinalizeCertificate2</code> from the network; …\nReceive a <code>ViewSyncFinalizeVote</code> from the network; received …\nSend a <code>ViewSyncFinalizeVote</code> from the network; emitted by a …\nReceive a <code>ViewSyncPreCommitCertificate2</code> from the network; …\nSend a <code>ViewSyncPreCommitCertificate2</code> from the network; …\nReceive a <code>ViewSyncPreCommitVote</code> from the network; received …\nSend a <code>ViewSyncPreCommitVote</code> from the network; emitted by …\nTimeout for the view sync protocol; emitted by a replica …\nTrigger the start of the view sync protocol; emitted by …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nChannel to send the response back to\nView of missing proposal\nReturn the view number for a hotshot event if present\nThe state for the test harness task. Keeps track of which …\nIf true we won’t fail the test if extra events come in\nHandles an event for the Test Harness Task.  If the event …\nThe expected events we get from the test.  Maps an event …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nRuns a test by building the task using <code>build_fn</code> and then …\nHelper type to give names and to the output values of the …\nHelper function to send events and log errors\nAscends the leaf chain by traversing through the parent …\nThe most recent upgrade certificate from one of the leaves.\nThe default method for this type is to set all of the …\nTrigger a request to the network for a proposal for a view …\nReturns the argument unchanged.\nThe transactions in the block payload for each leaf.\nCalls <code>U::from(self)</code>.\nThe decided leaves with corresponding validated state and …\nThe decided leaves.\nThe qc for the decided chain.\nThe new decided view obtained from a 3 chain starting from …\nThe new locked view obtained from a 2 chain starting from …\nGets the parent leaf and state from the parent of a …\nValidate the state and safety and liveness of a proposal …\nValidates, from a given <code>proposal</code> that the view that it is …\nnetwork event task state\nthe network message task state\nCancel all tasks for previous views\nShared consensus state\nda for the network\nepoch number\nSender to send external events this task generates to the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nHandle the given event.\nHandles a (deserialized) message from the network\nhandle <code>VidDisperseSend</code>\nSender to send internal events this task generates to …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRecord <code>HotShotAction</code> if available\ncomm network\nParses a <code>HotShotEvent</code> and returns a tuple of: (sender’s …\nThis nodes public key\nquorum for the network\nCreates a network message and spawns a task that transmits …\nStorage to store actionable events\nA module with test helpers\nmap view number to transmit tasks\nLock for a decided upgrade\nview number\nA dynamic type alias for a function that takes the result …\nA helper wrapper around <code>NetworkEventTaskState</code> that can …\nReturns the argument unchanged.\nHandles the received event modifying it before sending on …\nCalls <code>U::from(self)</code>.\nA function that takes the result of …\nThe real <code>NetworkEventTaskState</code>\nThe state for the quorum proposal task.\nCancel all tasks the consensus tasks has spawned before …\nShared consensus task state\nCreates the requisite dependencies for the Quorum Proposal …\nCreate and store an <code>AndDependency</code> combining <code>EventDependency</code>…\nCreate an event dependency\nNumber of blocks in an epoch, zero means there are no …\nThe most recent upgrade certificate this node formed. …\nReturns the argument unchanged.\nHandles a consensus event received on the event stream\nThis module holds the dependency task for the …\nThe node’s id\nImmutable instance state\nCalls <code>U::from(self)</code>.\nLatest view number that has been proposed for.\nThe underlying network\nOutput events to application\nOur Private Key\nTable for the in-progress proposal dependency tasks.\nOur public key\nMembership for Quorum Certs/votes\nThis node’s storage ref\nView timeout from config.\nMembership for Timeout votes/certs\nUpdate the latest proposed view number.\nLock for a decided upgrade\nFor the <code>SendPayloadCommitmentAndMetadata</code> event.\nFor the <code>QuroumProposalRecv</code> event.\nProposal dependency types. These types represent events …\nHandler for the proposal dependency\nFor the <code>QcFormed</code> event.\nFor the <code>QcFormed</code> event timeout branch.\nFor the <code>VidShareValidated</code> event.\nFor the <code>ViewSyncFinalizeCertificate2Recv</code> event.\nShared consensus task state\nThe most recent upgrade certificate this node formed. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe node’s id\nImmutable instance state\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLatest view number that has been proposed for (proxy for …\nOur Private Key\nOur public key\nPublishes a proposal given the <code>CommitmentAndMetadata</code>, …\nMembership for Quorum Certs/votes\nThe event receiver.\nThe event sender.\nLock for a decided upgrade\nThe view number to propose for.\nThe state for the quorum proposal task. Contains all of …\nall the info we need to validate a proposal.  This makes …\nCancel all tasks the consensus tasks has spawned before …\nReference to consensus. The replica will require a write …\nReference to consensus. The replica will require a write …\nEpoch number this node is executing in.\nEpoch number this node is executing in.\nView number this view is executing in.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHandles all consensus events relating to propose and …\nEvent handlers for this task.\nThe node’s id\nThe node’s id\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nOutput events to application\nOutput events to application\nOur Private Key\nOur Private Key\nOur public key\nOur public key\nMembership for Quorum Certs/votes\nMembership for Quorum Certs/votes\nSpawned tasks related to a specific view, so we can cancel …\nThis node’s storage ref\nThis node’s storage ref\nView timeout from config.\nLock for a decided upgrade\nLock for a decided upgrade\nHandles the <code>QuorumProposalRecv</code> event by first validating …\nSpawn a task which will fire a request to get a proposal, …\nUpdate states in the event that the parent state is not …\nFor the <code>DaCertificateRecv</code> event.\nFor the <code>QuroumProposalValidated</code> event after validating …\nThe state for the quorum vote task.\nFor the <code>VidShareRecv</code> event.\nVote dependency types.\nHandler for the vote dependency.\nReference to consensus. The replica will require a write …\nReference to consensus. The replica will require a write …\nCreate and store an <code>AndDependency</code> combining <code>EventDependency</code>…\nCreate an event dependency.\nMembership for DA committee certs/votes.\nEpoch number to vote on.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHandle a vote dependent event received on the event stream\nHandles voting for the last block in the epoch to form the …\nEvent handlers for <code>QuorumProposalValidated</code>.\nThe node’s id\nThe node’s id\nImmutable instance state\nImmutable instance state\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLatest view number that has been voted for.\nThe underlying network\nOutput events to application\nPrivate Key.\nPrivate Key.\nPublic key.\nPublic key.\nMembership for Quorum certs/votes.\nMembership for Quorum certs/votes.\nEvent receiver.\nEvent sender.\nReference to the storage.\nReference to the storage.\nUpdate the latest voted view number.\nLock for a decided upgrade\nLock for a decided upgrade\nView number to vote on.\nTable for the in-progress dependency tasks.\nHandles the <code>QuorumProposalValidated</code> event.\nSubmits the <code>QuorumVoteSend</code> event if all the dependencies …\nUpdates the shared consensus state with the new voting …\nLong running task which will request information after a …\nAmount of time to try for a request before timing out.\nAlias for a signature\nReturns true if we got the data we wanted, a shutdown even …\nConsensus shared state so we can check if we’ve gotten …\nCreates a task that will request a VID share from a DA …\nDA Membership\nDelay before requesting peers\nReturns the argument unchanged.\nCreate event dependency and wait for <code>VidResponseRecv</code> after …\nHandles main logic for the Request / Response of a vid …\nThe node’s id\nCalls <code>U::from(self)</code>.\nNetwork to send requests over The underlying network\nThis nodes private/signing key, used to sign requests.\nThis nodes public key\nSign the serialized version of the request\nA flag indicating that <code>HotShotEvent::Shutdown</code> has been …\nCreates and signs the payload, then will create a request …\nA flag indicating that <code>HotShotEvent::Shutdown</code> has been …\nLast seen view, we won’t request for proposals before …\nTask state for the Network Request Task. The task is …\nTime to wait for txns before sending …\nLocked consensus state\nReturns the argument unchanged.\nGet the VID share from consensus storage, or calculate it …\nThe node’s id\nCalls <code>U::from(self)</code>.\nCreate the network request state with the info it needs\nThis replicas private key\nThis replicas public key\nQuorum membership for checking if requesters have state\nProcess request events or loop until a …\nSpawn the network response task to handle incoming request …\nMakes sure the sender is allowed to send a request in the …\nCheck the signature\nThe task state for the <code>Rewind</code> task is used to capture all …\nAll events received by this node since the beginning of …\nReturns the argument unchanged.\nHandles all events, storing them to the private state\nThe id of this node\nCalls <code>U::from(self)</code>.\nMultiplier for extra time to give to the second batch of …\nTime the first batch of builders has to respond\nProportion of builders queried in first batch, dividend\nProportion of builders queried in the first batch, divisor\nMinimum amount of time allotted to both batches, cannot be …\nBuilder Provided Responses\nDelay between re-tries on unsuccessful calls\nTracks state of a Transaction task\nauction results provider\nGet a block from builder. Queries the sufficiently fast …\nBlock payload\nBuilder 0.1 API clients\nThe state’s api\nReference to consensus. Leader will require a read lock on …\nEpoch number this node is executing in.\nView number this view is executing in.\nfallback builder url\nFee information\nReturns the argument unchanged.\nReturns the argument unchanged.\nQuery the builders for available blocks. Queries only …\nmain task event handler\nhandle view change decide legacy or not\nepochs view change handler\nlegacy view change handler\nmarketplace view change handler\nThis state’s ID\nInstanceState\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet VID commitment for the last successful view before …\nGet VID commitment for the last successful view before …\nMembership for the quorum\nBlock metadata\nThe underlying network\nProduce a null block\nOutput events to application\nOptional precomputed commitment\nOur Private Key\nProduce a block by fetching auction results from the …\nThis Nodes Public Key\nLock for a decided upgrade\nTracks state of an upgrade task\nEpoch number this node is executing in.\nView number this view is executing in.\nReturns the argument unchanged.\nmain task event handler\nThis state’s ID\nCalls <code>U::from(self)</code>.\nThe underlying network\nOutput events to application\nThis Nodes private key\nThis Nodes public key\nMembership for Quorum Certs/votes\nUnix time in seconds at which we start proposing an upgrade\nView to start proposing an upgrade\nUnix time in seconds at which we start voting on an upgrade\nView to start voting on an upgrade\nUnix time in seconds at which we stop proposing an upgrade\nView to stop proposing an upgrade\nUnix time in seconds at which we stop voting on an upgrade\nView to stop voting on an upgrade\nLock for a decided upgrade\nCheck if we have decided on an upgrade certificate\nA map of <code>UpgradeVote</code> collector tasks\nTracks state of a VID task\nReference to consensus. Leader will require a read lock on …\nEpoch number this node is executing in.\nView number this view is executing in.\nReturns the argument unchanged.\nmain task event handler\nThis state’s ID\nCalls <code>U::from(self)</code>.\nMembership for the quorum\nThe underlying network\nOur Private Key\nThis Nodes Public Key\nThe view and ID of the current vote collection task, if …\nCommit phase\nFinalize phase\nNo phase; before the protocol has begun\nPreCommit phase\nType alias for a map from View Number to Relay to Vote Task\nPhases of view sync\nState of a view sync replica task\nMain view sync task state\nMap of commit vote accumulates for the relay\nEpoch HotShot is currently in\nCurrent epoch HotShot is in\nView HotShot is currently in\nCurrent round HotShot is in\nMap of finalize vote accumulates for the relay\nWhether we have seen a finalized certificate\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHandles incoming events for the main view sync task\nHandle incoming events for the view sync replica task\nOur node id; for logging\nOur node id; for logging\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLast view we garbage collected old tasks\nMembership for the quorum\nMembership for the quorum\nThe underlying network\nThe underlying network\nView HotShot wishes to be in\nRound HotShot wishes to be in\nHow many timeouts we’ve seen in a row; is reset upon a …\nMap of pre-commit vote accumulates for the relay\nOur Private Key\nOur Private Key\nThis Nodes Public Key\nThis Nodes Public Key\nThe relay index we are currently on\nMap of running replica tasks\nHandles incoming events for the main view sync task\nWhether we have already sent a view change event for …\nTimeout task handle, when it expires we try the next relay\nLock for a decided upgrade\nLock for a decided upgrade\nTimeout duration for view sync rounds\nTimeout for view sync rounds\nInfo needed to create a vote accumulator task\nDescribes the functions a vote must implement for it to be …\nAlias for DA vote accumulator\nTrait for types which will handle a vote event.\nAlias for Quorum vote accumulator\nAlias for Timeout vote accumulator\nAlias for upgrade vote accumulator\nAlias for View Sync Commit vote accumulator\nAlias for View Sync Finalize vote accumulator\nAlias for View Sync Pre Commit vote accumulator\nTask state for collecting votes of one type and emitting a …\nAlias for a map of Vote Collectors\nTake one vote and accumulate it. Returns either the cert …\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\naccumulator handles aggregating the votes\nGeneric function for spawning a vote task.  Returns the …\nThe epoch which we are collecting votes for\nEpoch of the votes we are collecting\nThe epoch which we are collecting votes for\nThe epoch which we are collecting votes for\nThe epoch which we are collecting votes for\nThe epoch which we are collecting votes for\nThe epoch which we are collecting votes for\nThe epoch which we are collecting votes for\nThe epoch which we are collecting votes for\nEvent filter to use for this event\nReturns the argument unchanged.\nReturns the argument unchanged.\nA helper function that handles a vote regardless whether it…\nHandle a vote event\nNode id\nThis nodes id\nNode id\nNode id\nNode id\nNode id\nNode id\nNode id\nNode id\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nreturn the leader for this votes\nreturn the Hotshot event for the completion of this CERT\nMembership for voting\nMembership we are accumulation votes for\nMembership for voting\nMembership for voting\nMembership for voting\nMembership for voting\nMembership for voting\nMembership for voting\nMembership for voting\nPublic key for this node.\nThis nodes Pub Key\nPublic key for this node.\nPublic key for this node.\nPublic key for this node.\nPublic key for this node.\nPublic key for this node.\nPublic key for this node.\nPublic key for this node.\nThe view which we are collecting votes for\nView of the votes we are collecting\nThe view which we are collecting votes for\nThe view which we are collecting votes for\nThe view which we are collecting votes for\nThe view which we are collecting votes for\nThe view which we are collecting votes for\nThe view which we are collecting votes for\nThe view which we are collecting votes for")