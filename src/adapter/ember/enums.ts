/** Status Codes contains error and status code definitions used by Simplicity SDK software components and stacks. */
export enum SLStatus {
    // -----------------------------------------------------------------------------
    // Generic Errors

    /** No error. */
    OK = 0x0000,
    /** Generic error. */
    FAIL = 0x0001,

    // -----------------------------------------------------------------------------
    // State Errors

    /** Generic invalid state error. */
    INVALID_STATE = 0x0002,
    /** Module is not ready for requested operation. */
    NOT_READY = 0x0003,
    /** Module is busy and cannot carry out requested operation. */
    BUSY = 0x0004,
    /** Operation is in progress and not yet complete (pass or fail). */
    IN_PROGRESS = 0x0005,
    /** Operation aborted. */
    ABORT = 0x0006,
    /** Operation timed out. */
    TIMEOUT = 0x0007,
    /** Operation not allowed per permissions. */
    PERMISSION = 0x0008,
    /** Non-blocking operation would block. */
    WOULD_BLOCK = 0x0009,
    /** Operation/module is Idle, cannot carry requested operation. */
    IDLE = 0x000a,
    /** Operation cannot be done while construct is waiting. */
    IS_WAITING = 0x000b,
    /** No task/construct waiting/pending for that action/event. */
    NONE_WAITING = 0x000c,
    /** Operation cannot be done while construct is suspended. */
    SUSPENDED = 0x000d,
    /** Feature not available due to software configuration. */
    NOT_AVAILABLE = 0x000e,
    /** Feature not supported. */
    NOT_SUPPORTED = 0x000f,
    /** Initialization failed. */
    INITIALIZATION = 0x0010,
    /** Module has not been initialized. */
    NOT_INITIALIZED = 0x0011,
    /** Module has already been initialized. */
    ALREADY_INITIALIZED = 0x0012,
    /** Object/construct has been deleted. */
    DELETED = 0x0013,
    /** Illegal call from ISR. */
    ISR = 0x0014,
    /** Illegal call because network is up. */
    NETWORK_UP = 0x0015,
    /** Illegal call because network is down. */
    NETWORK_DOWN = 0x0016,
    /** Failure due to not being joined in a network. */
    NOT_JOINED = 0x0017,
    /** Invalid operation as there are no beacons. */
    NO_BEACONS = 0x0018,

    // -----------------------------------------------------------------------------
    // Allocation/ownership Errors

    /** Generic allocation error. */
    ALLOCATION_FAILED = 0x0019,
    /** No more resource available to perform the operation. */
    NO_MORE_RESOURCE = 0x001a,
    /** Item/list/queue is empty. */
    EMPTY = 0x001b,
    /** Item/list/queue is full. */
    FULL = 0x001c,
    /** Item would overflow. */
    WOULD_OVERFLOW = 0x001d,
    /** Item/list/queue has been overflowed. */
    HAS_OVERFLOWED = 0x001e,
    /** Generic ownership error. */
    OWNERSHIP = 0x001f,
    /** Already/still owning resource. */
    IS_OWNER = 0x0020,

    // -----------------------------------------------------------------------------
    // Invalid Parameters Errors

    /** Generic invalid argument or consequence of invalid argument. */
    INVALID_PARAMETER = 0x0021,
    /** Invalid null pointer received as argument. */
    NULL_POINTER = 0x0022,
    /** Invalid configuration provided. */
    INVALID_CONFIGURATION = 0x0023,
    /** Invalid mode. */
    INVALID_MODE = 0x0024,
    /** Invalid handle. */
    INVALID_HANDLE = 0x0025,
    /** Invalid type for operation. */
    INVALID_TYPE = 0x0026,
    /** Invalid index. */
    INVALID_INDEX = 0x0027,
    /** Invalid range. */
    INVALID_RANGE = 0x0028,
    /** Invalid key. */
    INVALID_KEY = 0x0029,
    /** Invalid credentials. */
    INVALID_CREDENTIALS = 0x002a,
    /** Invalid count. */
    INVALID_COUNT = 0x002b,
    /** Invalid signature / verification failed. */
    INVALID_SIGNATURE = 0x002c,
    /** Item could not be found. */
    NOT_FOUND = 0x002d,
    /** Item already exists. */
    ALREADY_EXISTS = 0x002e,

    // -----------------------------------------------------------------------------
    // IO/Communication Errors

    /** Generic I/O failure. */
    IO = 0x002f,
    /** I/O failure due to timeout. */
    IO_TIMEOUT = 0x0030,
    /** Generic transmission error. */
    TRANSMIT = 0x0031,
    /** Transmit underflowed. */
    TRANSMIT_UNDERFLOW = 0x0032,
    /** Transmit is incomplete. */
    TRANSMIT_INCOMPLETE = 0x0033,
    /** Transmit is busy. */
    TRANSMIT_BUSY = 0x0034,
    /** Generic reception error. */
    RECEIVE = 0x0035,
    /** Failed to read on/via given object. */
    OBJECT_READ = 0x0036,
    /** Failed to write on/via given object. */
    OBJECT_WRITE = 0x0037,
    /** Message is too long. */
    MESSAGE_TOO_LONG = 0x0038,

    // -----------------------------------------------------------------------------
    // EEPROM/Flash Errors

    /** EEPROM MFG version mismatch. */
    EEPROM_MFG_VERSION_MISMATCH = 0x0039,
    /** EEPROM Stack version mismatch. */
    EEPROM_STACK_VERSION_MISMATCH = 0x003a,
    /** Flash write is inhibited. */
    FLASH_WRITE_INHIBITED = 0x003b,
    /** Flash verification failed. */
    FLASH_VERIFY_FAILED = 0x003c,
    /** Flash programming failed. */
    FLASH_PROGRAM_FAILED = 0x003d,
    /** Flash erase failed. */
    FLASH_ERASE_FAILED = 0x003e,

    // -----------------------------------------------------------------------------
    // MAC Errors

    /** MAC no data. */
    MAC_NO_DATA = 0x003f,
    /** MAC no ACK received. */
    MAC_NO_ACK_RECEIVED = 0x0040,
    /** MAC indirect timeout. */
    MAC_INDIRECT_TIMEOUT = 0x0041,
    /** MAC unknown header type. */
    MAC_UNKNOWN_HEADER_TYPE = 0x0042,
    /** MAC ACK unknown header type. */
    MAC_ACK_HEADER_TYPE = 0x0043,
    /** MAC command transmit failure. */
    MAC_COMMAND_TRANSMIT_FAILURE = 0x0044,

    // -----------------------------------------------------------------------------
    // CLI_STORAGE Errors

    /** Error in open NVM */
    CLI_STORAGE_NVM_OPEN_ERROR = 0x0045,

    // -----------------------------------------------------------------------------
    // Security status codes

    /** Image checksum is not valid. */
    SECURITY_IMAGE_CHECKSUM_ERROR = 0x0046,
    /** Decryption failed */
    SECURITY_DECRYPT_ERROR = 0x0047,

    // -----------------------------------------------------------------------------
    // Command status codes

    /** Command was not recognized */
    COMMAND_IS_INVALID = 0x0048,
    /** Command or parameter maximum length exceeded */
    COMMAND_TOO_LONG = 0x0049,
    /** Data received does not form a complete command */
    COMMAND_INCOMPLETE = 0x004a,

    // -----------------------------------------------------------------------------
    // Misc Errors

    /** Bus error, e.g. invalid DMA address */
    BUS_ERROR = 0x004b,

    // -----------------------------------------------------------------------------
    // Unified MAC Errors

    /** CCA failure. */
    CCA_FAILURE = 0x004c,

    // -----------------------------------------------------------------------------
    // Scan errors

    /** MAC scanning. */
    MAC_SCANNING = 0x004d,
    /** MAC incorrect scan type. */
    MAC_INCORRECT_SCAN_TYPE = 0x004e,
    /** Invalid channel mask. */
    INVALID_CHANNEL_MASK = 0x004f,
    /** Bad scan duration. */
    BAD_SCAN_DURATION = 0x0050,

    // -----------------------------------------------------------------------------
    // MAC transmit related status

    /** The MAC transmit queue is full */
    MAC_TRANSMIT_QUEUE_FULL = 0x0053,
    /**
     * The transmit attempt failed because the radio scheduler could not find a slot to transmit this packet in or
     * a higher priority event interrupted it
     */
    TRANSMIT_SCHEDULER_FAIL = 0x0054,
    /** An unsupported channel setting was specified */
    TRANSMIT_INVALID_CHANNEL = 0x0055,
    /** An unsupported power setting was specified */
    TRANSMIT_INVALID_POWER = 0x0056,
    /** The expected ACK was received after the last transmission */
    TRANSMIT_ACK_RECEIVED = 0x0057,
    /**
     * The transmit attempt was blocked from going over the air.
     * Typically this is due to the Radio Hold Off (RHO) or Coexistence plugins as they can prevent transmits based on external signals.
     */
    TRANSMIT_BLOCKED = 0x0058,

    // -----------------------------------------------------------------------------
    // NVM3 specific errors

    /** The initialization was aborted as the NVM3 instance is not aligned properly in memory */
    NVM3_ALIGNMENT_INVALID = 0x0059,
    /** The initialization was aborted as the size of the NVM3 instance is too small */
    NVM3_SIZE_TOO_SMALL = 0x005a,
    /** The initialization was aborted as the NVM3 page size is not supported */
    NVM3_PAGE_SIZE_NOT_SUPPORTED = 0x005b,
    /** The application that there was an error initializing some of the tokens */
    NVM3_TOKEN_INIT_FAILED = 0x005c,
    /** The initialization was aborted as the NVM3 instance was already opened with other parameters */
    NVM3_OPENED_WITH_OTHER_PARAMETERS = 0x005d,

    // -----------------------------------------------------------------------------
    // MVP Driver and MVP Math status codes

    /** Critical fault */
    COMPUTE_DRIVER_FAULT = 0x1501,
    /** ALU operation output NaN */
    COMPUTE_DRIVER_ALU_NAN = 0x1502,
    /** ALU numeric overflow */
    COMPUTE_DRIVER_ALU_OVERFLOW = 0x1503,
    /** ALU numeric underflow */
    COMPUTE_DRIVER_ALU_UNDERFLOW = 0x1504,
    /** Overflow during array store */
    COMPUTE_DRIVER_STORE_CONVERSION_OVERFLOW = 0x1505,
    /** Underflow during array store conversion */
    COMPUTE_DRIVER_STORE_CONVERSION_UNDERFLOW = 0x1506,
    /** Infinity encountered during array store conversion */
    COMPUTE_DRIVER_STORE_CONVERSION_INFINITY = 0x1507,
    /** NaN encountered during array store conversion */
    COMPUTE_DRIVER_STORE_CONVERSION_NAN = 0x1508,

    /** MATH NaN encountered */
    COMPUTE_MATH_NAN = 0x1512,
    /** MATH Infinity encountered */
    COMPUTE_MATH_INFINITY = 0x1513,
    /** MATH numeric overflow */
    COMPUTE_MATH_OVERFLOW = 0x1514,
    /** MATH numeric underflow */
    COMPUTE_MATH_UNDERFLOW = 0x1515,

    // -----------------------------------------------------------------------------
    // Zigbee status codes

    /** Packet is dropped by packet-handoff callbacks */
    ZIGBEE_PACKET_HANDOFF_DROPPED = 0x0c01,
    /** The APS layer attempted to send or deliver a message and failed */
    ZIGBEE_DELIVERY_FAILED = 0x0c02,
    /** The maximum number of in-flight messages ::EMBER_APS_UNICAST_MESSAGE_COUNT has been reached */
    ZIGBEE_MAX_MESSAGE_LIMIT_REACHED = 0x0c03,
    /** The application is trying to delete or overwrite a binding that is in use */
    ZIGBEE_BINDING_IS_ACTIVE = 0x0c04,
    /** The application is trying to overwrite an address table entry that is in use */
    ZIGBEE_ADDRESS_TABLE_ENTRY_IS_ACTIVE = 0x0c05,
    /** After moving, a mobile node's attempt to re-establish contact with the network failed */
    ZIGBEE_MOVE_FAILED = 0x0c06,
    /** The local node ID has changed. The application can get the new node ID by calling ::sl_zigbee_get_node_id() */
    ZIGBEE_NODE_ID_CHANGED = 0x0c07,
    /** The chosen security level is not supported by the stack */
    ZIGBEE_INVALID_SECURITY_LEVEL = 0x0c08,
    /** An error occurred when trying to encrypt at the APS Level */
    ZIGBEE_IEEE_ADDRESS_DISCOVERY_IN_PROGRESS = 0x0c09,
    /** An error occurred when trying to encrypt at the APS Level */
    ZIGBEE_APS_ENCRYPTION_ERROR = 0x0c0a,
    /** There was an attempt to form or join a network with security without calling ::sl_zigbee_set_initial_security_state() first */
    ZIGBEE_SECURITY_STATE_NOT_SET = 0x0c0b,
    /**
     * There was an attempt to broadcast a key switch too quickly after broadcasting the next network key.
     * The Trust Center must wait at least a period equal to the broadcast timeout so that all routers have a chance
     * to receive the broadcast of the new network key
     */
    ZIGBEE_TOO_SOON_FOR_SWITCH_KEY = 0x0c0c,
    /** The received signature corresponding to the message that was passed to the CBKE Library failed verification and is not valid */
    ZIGBEE_SIGNATURE_VERIFY_FAILURE = 0x0c0d,
    /** The message could not be sent because the link key corresponding to the destination is not authorized for use in APS data messages */
    ZIGBEE_KEY_NOT_AUTHORIZED = 0x0c0e,
    /** The application tried to use a binding that has been remotely modified and the change has not yet been reported to the application */
    ZIGBEE_BINDING_HAS_CHANGED = 0x0c0f,
    /** The EUI of the Trust center has changed due to a successful rejoin after TC Swapout */
    ZIGBEE_TRUST_CENTER_SWAP_EUI_HAS_CHANGED = 0x0c10,
    /** A Trust Center Swapout Rejoin has occurred without the EUI of the TC changing */
    ZIGBEE_TRUST_CENTER_SWAP_EUI_HAS_NOT_CHANGED = 0x0c11,
    /** An attempt to generate random bytes failed because of insufficient random data from the radio */
    ZIGBEE_INSUFFICIENT_RANDOM_DATA = 0x0c12,
    /** A Zigbee route error command frame was received indicating that a source routed message from this node failed en route */
    ZIGBEE_SOURCE_ROUTE_FAILURE = 0x0c13,
    /** A Zigbee route error command frame was received indicating that a message sent to this node along a many-to-one route failed en route */
    ZIGBEE_MANY_TO_ONE_ROUTE_FAILURE = 0x0c14,
    /** A critical and fatal error indicating that the version of the stack trying to run does not match with the chip it's running on */
    ZIGBEE_STACK_AND_HARDWARE_MISMATCH = 0x0c15,
    /** The local PAN ID has changed. The application can get the new PAN ID by calling ::emberGetPanId() */
    ZIGBEE_PAN_ID_CHANGED = 0x0c16,
    /** The channel has changed. */
    ZIGBEE_CHANNEL_CHANGED = 0x0c17,
    /** The network has been opened for joining. */
    ZIGBEE_NETWORK_OPENED = 0x0c18,
    /** The network has been closed for joining. */
    ZIGBEE_NETWORK_CLOSED = 0x0c19,
    /**
     * An attempt was made to join a Secured Network using a pre-configured key, but the Trust Center sent back a
     * Network Key in-the-clear when an encrypted Network Key was required. (::EMBER_REQUIRE_ENCRYPTED_KEY)
     */
    ZIGBEE_RECEIVED_KEY_IN_THE_CLEAR = 0x0c1a,
    /** An attempt was made to join a Secured Network, but the device did not receive a Network Key. */
    ZIGBEE_NO_NETWORK_KEY_RECEIVED = 0x0c1b,
    /** After a device joined a Secured Network, a Link Key was requested (::EMBER_GET_LINK_KEY_WHEN_JOINING) but no response was ever received. */
    ZIGBEE_NO_LINK_KEY_RECEIVED = 0x0c1c,
    /**
     * An attempt was made to join a Secured Network without a pre-configured key, but the Trust Center sent encrypted data using a
     * pre-configured key.
     */
    ZIGBEE_PRECONFIGURED_KEY_REQUIRED = 0x0c1d,
    /** A Zigbee EZSP error has occured. Track the origin and corresponding EzspStatus for more info. */
    ZIGBEE_EZSP_ERROR = 0x0c1e,
    /** Node ID discovery failed. */
    ZIGBEE_ID_DISCOVERY_FAILED = 0x0c1f,
    /** Message was sent but no APS ACK received. */
    ZIGBEE_NO_APS_ACK = 0x0c20,
    /** APS message was canceled. */
    ZIGBEE_APS_MESSAGE_CANCELED = 0x0c21,
    /** Node ID discovery not enabled. */
    ZIGBEE_ID_DISCOVERY_NOT_ENABLED = 0x0c22,
    /** Message was not sent, Node ID discovery is underway. */
    ZIGBEE_ID_DISCOVERY_UNDERWAY = 0x0c23,
    /** The message was not sent because a route discovery is currently underway. There is no route to the target until the route discovery completes. */
    ZIGBEE_SEND_UNICAST_ROUTE_DISCOVERY_UNDERWAY = 0x0c24,
    /** Radius is 0 or message has been dropped because route request failed or failed to submit message to tx queue. */
    ZIGBEE_SEND_UNICAST_FAILURE = 0x0c25,
    /** No active route to the destination. */
    ZIGBEE_SEND_UNICAST_NO_ROUTE = 0x0c26,
    /** Broadcast message timeout while waiting for sleepy children to poll. */
    ZIGBEE_BROADCAST_TO_SLEEPY_CHILDREN_TIMEOUT = 0x0c27,
    /** Expected a neighbor to relay the message, but none did. */
    ZIGBEE_BROADCAST_RELAY_FAILED = 0x0c28,
}

/** Status values used by EZSP. */
export enum EzspStatus {
    /** Success. */
    SUCCESS = 0x00,
    /** Fatal error. */
    SPI_ERR_FATAL = 0x10,
    /** The Response frame of the current transaction indicates the NCP has reset. */
    SPI_ERR_NCP_RESET = 0x11,
    /** The NCP is reporting that the Command frame of the current transaction is oversized (the length byte is too large). */
    SPI_ERR_OVERSIZED_EZSP_FRAME = 0x12,
    /** The Response frame of the current transaction indicates the previous transaction was aborted (nSSEL deasserted too soon). */
    SPI_ERR_ABORTED_TRANSACTION = 0x13,
    /** The Response frame of the current transaction indicates the frame terminator is missing from the Command frame. */
    SPI_ERR_MISSING_FRAME_TERMINATOR = 0x14,
    /** The NCP has not provided a Response within the time limit defined by WAIT_SECTION_TIMEOUT. */
    SPI_ERR_WAIT_SECTION_TIMEOUT = 0x15,
    /** The Response frame from the NCP is missing the frame terminator. */
    SPI_ERR_NO_FRAME_TERMINATOR = 0x16,
    /** The Host attempted to send an oversized Command (the length byte is too large) and the AVR's spi-protocol.c blocked the transmission. */
    SPI_ERR_EZSP_COMMAND_OVERSIZED = 0x17,
    /** The NCP attempted to send an oversized Response (the length byte is too large) and the AVR's spi-protocol.c blocked the reception. */
    SPI_ERR_EZSP_RESPONSE_OVERSIZED = 0x18,
    /** The Host has sent the Command and is still waiting for the NCP to send a Response. */
    SPI_WAITING_FOR_RESPONSE = 0x19,
    /** The NCP has not asserted nHOST_INT within the time limit defined by WAKE_HANDSHAKE_TIMEOUT. */
    SPI_ERR_HANDSHAKE_TIMEOUT = 0x1a,
    /** The NCP has not asserted nHOST_INT after an NCP reset within the time limit defined by STARTUP_TIMEOUT. */
    SPI_ERR_STARTUP_TIMEOUT = 0x1b,
    /** The Host attempted to verify the SPI Protocol activity and version number, and the verification failed. */
    SPI_ERR_STARTUP_FAIL = 0x1c,
    /** The Host has sent a command with a SPI Byte that is unsupported by the current mode the NCP is operating in. */
    SPI_ERR_UNSUPPORTED_SPI_COMMAND = 0x1d,
    /** Operation not yet complete. */
    ASH_IN_PROGRESS = 0x20,
    /** Fatal error detected by host. */
    HOST_FATAL_ERROR = 0x21,
    /** Fatal error detected by NCP. */
    ASH_NCP_FATAL_ERROR = 0x22,
    /** Tried to send DATA frame too long. */
    DATA_FRAME_TOO_LONG = 0x23,
    /** Tried to send DATA frame too short. */
    DATA_FRAME_TOO_SHORT = 0x24,
    /** No space for tx'ed DATA frame. */
    NO_TX_SPACE = 0x25,
    /** No space for rec'd DATA frame. */
    NO_RX_SPACE = 0x26,
    /** No receive data available. */
    NO_RX_DATA = 0x27,
    /** Not in Connected state. */
    NOT_CONNECTED = 0x28,
    /** The NCP received a command before the EZSP version had been set. */
    ERROR_VERSION_NOT_SET = 0x30,
    /** The NCP received a command containing an unsupported frame ID. */
    ERROR_INVALID_FRAME_ID = 0x31,
    /** The direction flag in the frame control field was incorrect. */
    ERROR_WRONG_DIRECTION = 0x32,
    /**
     * The truncated flag in the frame control field was set, indicating there was not enough memory available to
     * complete the response or that the response would have exceeded the maximum EZSP frame length.
     */
    ERROR_TRUNCATED = 0x33,
    /**
     * The overflow flag in the frame control field was set, indicating one or more callbacks occurred since the previous
     * response and there was not enough memory available to report them to the Host.
     */
    ERROR_OVERFLOW = 0x34,
    /** Insufficient memory was available. */
    ERROR_OUT_OF_MEMORY = 0x35,
    /** The value was out of bounds. */
    ERROR_INVALID_VALUE = 0x36,
    /** The configuration id was not recognized. */
    ERROR_INVALID_ID = 0x37,
    /** Configuration values can no longer be modified. */
    ERROR_INVALID_CALL = 0x38,
    /** The NCP failed to respond to a command. */
    ERROR_NO_RESPONSE = 0x39,
    /** The length of the command exceeded the maximum EZSP frame length. */
    ERROR_COMMAND_TOO_LONG = 0x40,
    /** The UART receive queue was full causing a callback response to be dropped. */
    ERROR_QUEUE_FULL = 0x41,
    /** The command has been filtered out by NCP. */
    ERROR_COMMAND_FILTERED = 0x42,
    /** EZSP Security Key is already set */
    ERROR_SECURITY_KEY_ALREADY_SET = 0x43,
    /** EZSP Security Type is invalid */
    ERROR_SECURITY_TYPE_INVALID = 0x44,
    /** EZSP Security Parameters are invalid */
    ERROR_SECURITY_PARAMETERS_INVALID = 0x45,
    /** EZSP Security Parameters are already set */
    ERROR_SECURITY_PARAMETERS_ALREADY_SET = 0x46,
    /** EZSP Security Key is not set */
    ERROR_SECURITY_KEY_NOT_SET = 0x47,
    /** EZSP Security Parameters are not set */
    ERROR_SECURITY_PARAMETERS_NOT_SET = 0x48,
    /** Received frame with unsupported control byte */
    ERROR_UNSUPPORTED_CONTROL = 0x49,
    /** Received frame is unsecure, when security is established */
    ERROR_UNSECURE_FRAME = 0x4a,
    /** Incompatible ASH version */
    ASH_ERROR_VERSION = 0x50,
    /** Exceeded max ACK timeouts */
    ASH_ERROR_TIMEOUTS = 0x51,
    /** Timed out waiting for RSTACK */
    ASH_ERROR_RESET_FAIL = 0x52,
    /** Unexpected ncp reset */
    ASH_ERROR_NCP_RESET = 0x53,
    /** Serial port initialization failed */
    ERROR_SERIAL_INIT = 0x54,
    /** Invalid ncp processor type */
    ASH_ERROR_NCP_TYPE = 0x55,
    /** Invalid ncp reset method */
    ASH_ERROR_RESET_METHOD = 0x56,
    /** XON/XOFF not supported by host driver */
    ASH_ERROR_XON_XOFF = 0x57,
    /** ASH protocol started */
    ASH_STARTED = 0x70,
    /** ASH protocol connected */
    ASH_CONNECTED = 0x71,
    /** ASH protocol disconnected */
    ASH_DISCONNECTED = 0x72,
    /** Timer expired waiting for ack */
    ASH_ACK_TIMEOUT = 0x73,
    /** Frame in progress cancelled */
    ASH_CANCELLED = 0x74,
    /** Received frame out of sequence */
    ASH_OUT_OF_SEQUENCE = 0x75,
    /** Received frame with CRC error */
    ASH_BAD_CRC = 0x76,
    /** Received frame with comm error */
    ASH_COMM_ERROR = 0x77,
    /** Received frame with bad ackNum */
    ASH_BAD_ACKNUM = 0x78,
    /** Received frame shorter than minimum */
    ASH_TOO_SHORT = 0x79,
    /** Received frame longer than maximum */
    ASH_TOO_LONG = 0x7a,
    /** Received frame with illegal control byte */
    ASH_BAD_CONTROL = 0x7b,
    /** Received frame with illegal length for its type */
    ASH_BAD_LENGTH = 0x7c,
    /** Received ASH Ack */
    ASH_ACK_RECEIVED = 0x7d,
    /** Sent ASH Ack */
    ASH_ACK_SENT = 0x7e,
    /** Received ASH Nak */
    ASH_NAK_RECEIVED = 0x7f,
    /** Sent ASH Nak */
    ASH_NAK_SENT = 0x80,
    /** Received ASH RST */
    ASH_RST_RECEIVED = 0x81,
    /** Sent ASH RST */
    ASH_RST_SENT = 0x82,
    /** ASH Status */
    ASH_STATUS = 0x83,
    /** ASH TX */
    ASH_TX = 0x84,
    /** ASH RX */
    ASH_RX = 0x85,
    /** Failed to connect to CPC daemon or failed to open CPC endpoint */
    CPC_ERROR_INIT = 0x86,
    /** No reset or error */
    NO_ERROR = 0xff,
}

export enum EmberStackError {
    // Error codes that a router uses to notify the message initiator about a broken route.
    ROUTE_ERROR_NO_ROUTE_AVAILABLE = 0x00,
    ROUTE_ERROR_TREE_LINK_FAILURE = 0x01,
    ROUTE_ERROR_NON_TREE_LINK_FAILURE = 0x02,
    ROUTE_ERROR_LOW_BATTERY_LEVEL = 0x03,
    ROUTE_ERROR_NO_ROUTING_CAPACITY = 0x04,
    ROUTE_ERROR_NO_INDIRECT_CAPACITY = 0x05,
    ROUTE_ERROR_INDIRECT_TRANSACTION_EXPIRY = 0x06,
    ROUTE_ERROR_TARGET_DEVICE_UNAVAILABLE = 0x07,
    ROUTE_ERROR_TARGET_ADDRESS_UNALLOCATED = 0x08,
    ROUTE_ERROR_PARENT_LINK_FAILURE = 0x09,
    ROUTE_ERROR_VALIDATE_ROUTE = 0x0a,
    ROUTE_ERROR_SOURCE_ROUTE_FAILURE = 0x0b,
    ROUTE_ERROR_MANY_TO_ONE_ROUTE_FAILURE = 0x0c,
    ROUTE_ERROR_ADDRESS_CONFLICT = 0x0d,
    ROUTE_ERROR_VERIFY_ADDRESSES = 0x0e,
    ROUTE_ERROR_PAN_IDENTIFIER_UPDATE = 0x0f,

    NETWORK_STATUS_NETWORK_ADDRESS_UPDATE = 0x10,
    NETWORK_STATUS_BAD_FRAME_COUNTER = 0x11,
    NETWORK_STATUS_BAD_KEY_SEQUENCE_NUMBER = 0x12,
    NETWORK_STATUS_UNKNOWN_COMMAND = 0x13,
}

export enum EmberGPStatus {
    /** Success Status */
    OK = 0,
    /** Match Frame */
    MATCH = 1,
    /** Drop Frame */
    DROP_FRAME = 2,
    /** Frame Unprocessed */
    UNPROCESSED = 3,
    /** Frame Pass Unprocessed */
    PASS_UNPROCESSED = 4,
    /** Frame TX Then Drop */
    TX_THEN_DROP = 5,
    /** No Security */
    NO_SECURITY = 6,
    /** Security Failure */
    AUTH_FAILURE = 7,
}

/** Type of Ember software version */
export enum EmberVersionType {
    PRE_RELEASE = 0x00,

    // Alpha, should be used rarely
    ALPHA_1 = 0x11,
    ALPHA_2 = 0x12,
    ALPHA_3 = 0x13,
    // Leave space in case we decide to add other types in the future.
    BETA_1 = 0x21,
    BETA_2 = 0x22,
    BETA_3 = 0x23,

    // Anything other than 0xAA is considered pre-release
    // Silicon Labs may define other types in the future (e.g. beta, alpha)
    // Silicon Labs chose an arbitrary number (0xAA) to allow for expansion, but
    // to prevent ambiguity in case 0x00 or 0xFF is accidentally retrieved
    // as the version type.
    GA = 0xaa,
}

/**
 * For emberSetTxPowerMode and mfglibSetPower.
 * uint16_t
 */
export enum EmberTXPowerMode {
    /**
     * The application should call ::emberSetTxPowerMode() with the
     * txPowerMode parameter set to this value to disable all power mode options,
     * resulting in normal power mode and bi-directional RF transmitter output.
     */
    DEFAULT = 0x0000,
    /**
     * The application should call ::emberSetTxPowerMode() with the
     * txPowerMode parameter set to this value to enable boost power mode.
     */
    BOOST = 0x0001,
    /**
     * The application should call ::emberSetTxPowerMode() with the
     * txPowerMode parameter set to this value to enable the alternate transmitter
     * output.
     */
    ALTERNATE = 0x0002,
    /**
     * The application should call ::emberSetTxPowerMode() with the
     * txPowerMode parameter set to this value to enable both boost mode and the
     * alternate transmitter output.
     */
    BOOST_AND_ALTERNATE = 0x0003, // (BOOST | ALTERNATE)
    // The application does not ever need to call emberSetTxPowerMode() with the
    // txPowerMode parameter set to this value.  This value is used internally by
    // the stack to indicate that the default token configuration has not been
    // overridden by a prior call to emberSetTxPowerMode().
    USE_TOKEN = 0x8000,
}

/** uint8_t */
export enum EmberKeepAliveMode {
    KEEP_ALIVE_SUPPORT_UNKNOWN = 0x00,
    MAC_DATA_POLL_KEEP_ALIVE = 0x01,
    END_DEVICE_TIMEOUT_KEEP_ALIVE = 0x02,
    KEEP_ALIVE_SUPPORT_ALL = 0x03,
}

/** This is the Extended Security Bitmask that controls the use of various extended security features. */
export enum EmberExtendedSecurityBitmask {
    /**
     * If this bit is set, the 'key token data' field is set in the Initial Security Bitmask to 0 (No Preconfig Key token).
     * Otherwise, the field is left as is.
     */
    PRECONFIG_KEY_NOT_VALID = 0x0001,
    // bits 2-3 are unused.
    /**
     * This denotes that the network key update can only happen if the network key update request is unicast and encrypted
     * i.e. broadcast network key update requests will not be processed if bit 1 is set
     */
    SECURE_NETWORK_KEY_ROTATION = 0x0002,
    /** This denotes whether a joiner node (router or end-device) uses a Global Link Key or a Unique Link Key. */
    JOINER_GLOBAL_LINK_KEY = 0x0010,
    /**
     * This denotes whether the device's outgoing frame counter is allowed to be reset during forming or joining.
     * If the flag is set, the outgoing frame counter is not allowed to be reset.
     * If the flag is not set, the frame counter is allowed to be reset.
     */
    EXT_NO_FRAME_COUNTER_RESET = 0x0020,
    /** This denotes whether a device should discard or accept network leave without rejoin commands. */
    NWK_LEAVE_WITHOUT_REJOIN_NOT_ALLOWED = 0x0040,
    // Bit 7 reserved for future use (stored in TOKEN).
    /** This denotes whether a router node should discard or accept network Leave Commands. */
    NWK_LEAVE_REQUEST_NOT_ALLOWED = 0x0100,
    /**
     * This denotes whether a node is running the latest stack specification or is emulating R18 specs behavior.
     * If this flag is enabled, a router node should only send encrypted Update Device messages while the TC
     * should only accept encrypted Updated Device messages.
     */
    R18_STACK_BEHAVIOR = 0x0200,
    // Bit 10 is reserved for future use (stored in TOKEN).
    // Bit 11 is reserved for future use(stored in RAM).
    // Bit 12 - This denotes whether an end device should discard or accept ZDO Leave
    // from a network node other than its parent.
    ZDO_LEAVE_FROM_NON_PARENT_NOT_ALLOWED = 0x1000,
    // Bits 13-15 are unused.
}

/** This is the Initial Security Bitmask that controls the use of various security features. */
export enum EmberInitialSecurityBitmask {
    /** Enables Distributed Trust Center Mode for the device forming the network. (Previously known as ::EMBER_NO_TRUST_CENTER_MODE) */
    DISTRIBUTED_TRUST_CENTER_MODE = 0x0002,
    /** Enables a Global Link Key for the Trust Center. All nodes will share the same Trust Center Link Key. */
    TRUST_CENTER_GLOBAL_LINK_KEY = 0x0004,
    /** Enables devices that perform MAC Association with a pre-configured Network Key to join the network. It is only set on the Trust Center. */
    PRECONFIGURED_NETWORK_KEY_MODE = 0x0008,
    // Hidden field used internally.
    HAVE_TRUST_CENTER_UNKNOWN_KEY_TOKEN = 0x0010,
    // Hidden field used internally.
    HAVE_TRUST_CENTER_LINK_KEY_TOKEN = 0x0020,
    /**
     * This denotes that the ::EmberInitialSecurityState::preconfiguredTrustCenterEui64 has a value in it containing the trust center EUI64.
     * The device will only join a network and accept commands from a trust center with that EUI64.
     * Normally this bit is NOT set and the EUI64 of the trust center is learned during the join process.
     * When commissioning a device to join onto an existing network that is using a trust center and without sending any messages,
     * this bit must be set and the field ::EmberInitialSecurityState::preconfiguredTrustCenterEui64 must be populated with the appropriate EUI64.
     */
    HAVE_TRUST_CENTER_EUI64 = 0x0040,
    /**
     * This denotes that the ::EmberInitialSecurityState::preconfiguredKey is not the actual Link Key but a Root Key known only to the Trust Center.
     * It is hashed with the IEEE Address of the destination device to create the actual Link Key used in encryption.
     * This is bit is only used by the Trust Center. The joining device need not set this.
     */
    TRUST_CENTER_USES_HASHED_LINK_KEY = 0x0084,
    /**
     * This denotes that the ::EmberInitialSecurityState::preconfiguredKey element has valid data that should be used to configure
     * the initial security state.
     */
    HAVE_PRECONFIGURED_KEY = 0x0100,
    /**
     * This denotes that the ::EmberInitialSecurityState::networkKey element has valid data that should be used to configure
     * the initial security state.
     */
    HAVE_NETWORK_KEY = 0x0200,
    /**
     * This denotes to a joining node that it should attempt to acquire a Trust Center Link Key during joining.
     * This is necessary if the device does not have a pre-configured key, or wants to obtain a new one
     * (since it may be using a well-known key during joining).
     */
    GET_LINK_KEY_WHEN_JOINING = 0x0400,
    /**
     * This denotes that a joining device should only accept an encrypted network key from the Trust Center (using its pre-configured key).
     * A key sent in-the-clear by the Trust Center will be rejected and the join will fail.
     * This option is only valid when using a pre-configured key.
     */
    REQUIRE_ENCRYPTED_KEY = 0x0800,
    /**
     * This denotes whether the device should NOT reset its outgoing frame counters (both NWK and APS) when
     * ::emberSetInitialSecurityState() is called.
     * Normally it is advised to reset the frame counter before joining a new network.
     * However, when a device is joining to the same network again (but not using ::emberRejoinNetwork()),
     * it should keep the NWK and APS frame counters stored in its tokens.
     *
     * NOTE: The application is allowed to dynamically change the behavior via EMBER_EXT_NO_FRAME_COUNTER_RESET field.
     */
    NO_FRAME_COUNTER_RESET = 0x1000,
    /**
     * This denotes that the device should obtain its pre-configured key from an installation code stored in the manufacturing token.
     * The token contains a value that will be hashed to obtain the actual pre-configured key.
     * If that token is not valid, the call to ::emberSetInitialSecurityState() will fail.
     */
    GET_PRECONFIGURED_KEY_FROM_INSTALL_CODE = 0x2000,
    // Internal data
    EM_SAVED_IN_TOKEN = 0x4000,
    /* All other bits are reserved and must be zero. */
}

/** Either marks an event as inactive or specifies the units for the event execution time. uint8_t */
export enum EmberEventUnits {
    /** The event is not scheduled to run. */
    INACTIVE = 0,
    /** The execution time is in approximate milliseconds.  */
    MS_TIME = 1,
    /** The execution time is in 'binary' quarter seconds (256 approximate milliseconds each). */
    QS_TIME = 2,
    /** The execution time is in 'binary' minutes (65536 approximate milliseconds each). */
    MINUTE_TIME = 3,
    /** The event is scheduled to run at the earliest opportunity. */
    ZERO_DELAY = 4,
}

/**
 * Defines the events reported to the application by the ::emberCounterHandler().
 * Usage of the destinationNodeId or data fields found in the EmberCounterInfo or EmberExtraCounterInfo
 * structs is denoted for counter types that use them.
 * (See comments accompanying enum definitions in this source file for details.)
 */
export enum EmberCounterType {
    /**
     * The MAC received a broadcast Data frame, Command frame, or Beacon.
     * - destinationNodeId: BROADCAST_ADDRESS or Data frames or sender node ID for Beacon frames
     * - data: not used
     */
    MAC_RX_BROADCAST = 0,
    /**
     * The MAC transmitted a broadcast Data frame, Command frame or Beacon.
     * - destinationNodeId: BROADCAST_ADDRESS
     * - data: not used
     */
    MAC_TX_BROADCAST = 1,
    /**
     * The MAC received a unicast Data or Command frame.
     * - destinationNodeId: MAC layer source or EMBER_UNKNOWN_NODE_ID if no 16-bit source node ID is present in the frame
     * - data: not used
     */
    MAC_RX_UNICAST = 2,
    /**
     * The MAC successfully transmitted a unicast Data or Command frame.
     *   Note: Only frames with a 16-bit destination node ID are counted.
     * - destinationNodeId: MAC layer destination address
     * - data: not used
     */
    MAC_TX_UNICAST_SUCCESS = 3,
    /**
     * The MAC retried a unicast Data or Command frame after initial Tx attempt.
     *   Note: CSMA-related failures are tracked separately via PHY_CCA_FAIL_COUNT.
     * - destinationNodeId: MAC layer destination or EMBER_UNKNOWN_NODE_ID if no 16-bit destination node ID is present in the frame
     * - data: number of retries (after initial Tx attempt) accumulated so far for this packet. (Should always be >0.)
     */
    MAC_TX_UNICAST_RETRY = 4,
    /**
     * The MAC unsuccessfully transmitted a unicast Data or Command frame.
     *   Note: Only frames with a 16-bit destination node ID are counted.
     * - destinationNodeId: MAC layer destination address
     * - data: not used
     */
    MAC_TX_UNICAST_FAILED = 5,
    /**
     * The APS layer received a data broadcast.
     * - destinationNodeId: sender's node ID
     * - data: not used
     */
    APS_DATA_RX_BROADCAST = 6,
    /** The APS layer transmitted a data broadcast. */
    APS_DATA_TX_BROADCAST = 7,
    /**
     * The APS layer received a data unicast.
     * - destinationNodeId: sender's node ID
     * - data: not used
     */
    APS_DATA_RX_UNICAST = 8,
    /**
     * The APS layer successfully transmitted a data unicast.
     * - destinationNodeId: NWK destination address
     * - data: number of APS retries (>=0) consumed for this unicast.
     */
    APS_DATA_TX_UNICAST_SUCCESS = 9,
    /**
     * The APS layer retried a unicast Data frame.
     * This is a placeholder and is not used by the @c ::emberCounterHandler() callback.
     * Instead, the number of APS retries are returned in the data parameter of the callback
     * for the @c ::APS_DATA_TX_UNICAST_SUCCESS and @c ::APS_DATA_TX_UNICAST_FAILED types.
     * However, our supplied Counters component code will attempt to collect this information
     * from the aforementioned counters and populate this counter.
     * Note that this counter's behavior differs from that of @c ::MAC_TX_UNICAST_RETRY .
     */
    APS_DATA_TX_UNICAST_RETRY = 10,
    /**
     * The APS layer unsuccessfully transmitted a data unicast.
     * - destinationNodeId: NWK destination address
     * - data: number of APS retries (>=0) consumed for this unicast.
     */
    APS_DATA_TX_UNICAST_FAILED = 11,
    /** The network layer successfully submitted a new route discovery to the MAC. */
    ROUTE_DISCOVERY_INITIATED = 12,
    /** An entry was added to the neighbor table. */
    NEIGHBOR_ADDED = 13,
    /** An entry was removed from the neighbor table. */
    NEIGHBOR_REMOVED = 14,
    /** A neighbor table entry became stale because it had not been heard from. */
    NEIGHBOR_STALE = 15,
    /**
     * A node joined or rejoined to the network via this node.
     * - destinationNodeId: node ID of child
     * - data: not used
     */
    JOIN_INDICATION = 16,
    /**
     * An entry was removed from the child table.
     * - destinationNodeId: node ID of child
     * - data: not used
     */
    CHILD_REMOVED = 17,
    /** EZSP-UART only. An overflow error occurred in the UART. */
    ASH_OVERFLOW_ERROR = 18,
    /** EZSP-UART only. A framing error occurred in the UART. */
    ASH_FRAMING_ERROR = 19,
    /** EZSP-UART only. An overrun error occurred in the UART. */
    ASH_OVERRUN_ERROR = 20,
    /** A message was dropped at the Network layer because the NWK frame counter was not higher than the last message seen from that source. */
    NWK_FRAME_COUNTER_FAILURE = 21,
    /**
     * A message was dropped at the APS layer because the APS frame counter was not higher than the last message seen from that source.
     * - destinationNodeId: node ID of MAC source that relayed the message
     * - data: not used
     */
    APS_FRAME_COUNTER_FAILURE = 22,
    /** EZSP-UART only. An XOFF was transmitted by the UART. */
    ASH_XOFF = 23,
    /**
     * An encrypted message was dropped by the APS layer because the sender's key has not been authenticated.
     * As a result, the key is not authorized for use in APS data messages.
     * - destinationNodeId: EMBER_NULL_NODE_ID
     * - data: APS key table index related to the sender
     */
    APS_LINK_KEY_NOT_AUTHORIZED = 24,
    /**
     * A NWK encrypted message was received but dropped because decryption failed.
     * - destinationNodeId: sender of the dropped packet
     * - data: not used
     */
    NWK_DECRYPTION_FAILURE = 25,
    /**
     * An APS encrypted message was received but dropped because decryption failed.
     * - destinationNodeId: sender of the dropped packet
     * - data: not used
     */
    APS_DECRYPTION_FAILURE = 26,
    /**
     * The number of failures to allocate a set of linked packet buffers.
     * This doesn't necessarily mean that the packet buffer count was 0 at the time,
     * but that the number requested was greater than the number free.
     */
    ALLOCATE_PACKET_BUFFER_FAILURE = 27,
    /**
     * The number of relayed unicast packets.
     * - destinationId: NWK layer destination address of relayed packet
     * - data: not used
     */
    RELAYED_UNICAST = 28,
    /**
     * The number of times a packet was dropped due to reaching the preset PHY-to-MAC queue limit (sli_mac_phy_to_mac_queue_length).
     * The limit will determine how many messages are accepted by the PHY between calls to emberTick().
     * After that limit is reached, packets will be dropped. The counter records the number of dropped packets.
     *
     * NOTE: For each call to emberCounterHandler() there may be more than 1 packet that was dropped due to the limit reached.
     * The actual number of packets dropped will be returned in the 'data' parameter passed to that function.
     *
     * - destinationNodeId: not used
     * - data: number of dropped packets represented by this counter event
     * - phyIndex: present
     */
    PHY_TO_MAC_QUEUE_LIMIT_REACHED = 29,
    /**
     * The number of times a packet was dropped due to the packet-validate library checking a packet
     * and rejecting it due to length or other formatting problems.
     * - destinationNodeId: not used
     * - data: type of validation condition that failed
     */
    PACKET_VALIDATE_LIBRARY_DROPPED_COUNT = 30,
    /**
     * The number of times the NWK retry queue is full and a new message failed to be added.
     * - destinationNodeId; not used
     * - data: NWK retry queue size that has been exceeded
     */
    TYPE_NWK_RETRY_OVERFLOW = 31,
    /**
     * The number of times the PHY layer was unable to transmit due to a failed CCA (Clear Channel Assessment) attempt.
     * See also: MAC_TX_UNICAST_RETRY.
     * - destinationNodeId: MAC layer destination or EMBER_UNKNOWN_NODE_ID if no 16-bit destination node ID is present in the frame
     * - data: not used
     */
    PHY_CCA_FAIL_COUNT = 32,
    /** The number of times a NWK broadcast was dropped because the broadcast table was full. */
    BROADCAST_TABLE_FULL = 33,
    /** The number of times a low-priority packet traffic arbitration request has been made. */
    PTA_LO_PRI_REQUESTED = 34,
    /** The number of times a high-priority packet traffic arbitration request has been made. */
    PTA_HI_PRI_REQUESTED = 35,
    /** The number of times a low-priority packet traffic arbitration request has been denied. */
    PTA_LO_PRI_DENIED = 36,
    /** The number of times a high-priority packet traffic arbitration request has been denied. */
    PTA_HI_PRI_DENIED = 37,
    /** The number of times a low-priority packet traffic arbitration transmission has been aborted. */
    PTA_LO_PRI_TX_ABORTED = 38,
    /** The number of times a high-priority packet traffic arbitration transmission has been aborted. */
    PTA_HI_PRI_TX_ABORTED = 39,
    /** The number of times an address conflict has caused node_id change, and an address conflict error is sent. */
    ADDRESS_CONFLICT_SENT = 40,
    /** The number of times CSL failed to schedule Rx on target */
    CSL_RX_SCHEDULE_FAILED = 41,
    /** A placeholder giving the number of Ember counter types. */
    COUNT = 42,
}

/** An enumerated list of library identifiers. */
export enum EmberLibraryId {
    FIRST = 0x00,

    ZIGBEE_PRO = 0x00,
    BINDING = 0x01,
    END_DEVICE_BIND = 0x02,
    SECURITY_CORE = 0x03,
    SECURITY_LINK_KEYS = 0x04,
    ALARM = 0x05,
    CBKE = 0x06,
    CBKE_DSA_SIGN = 0x07,
    ECC = 0x08,
    CBKE_DSA_VERIFY = 0x09,
    PACKET_VALIDATE = 0x0a,
    INSTALL_CODE = 0x0b,
    ZLL = 0x0c,
    CBKE_283K1 = 0x0d,
    ECC_283K1 = 0x0e,
    CBKE_CORE = 0x0f,
    NCP = 0x10,
    MULTI_NETWORK = 0x11,
    ENHANCED_BEACON_REQUEST = 0x12,
    CBKE_283K1_DSA_VERIFY = 0x13,
    MULTI_PAN = 0x14,

    NUMBER_OF_LIBRARIES = 0x15,
    NULL = 0xff,
}

/** This indicates the presence, absence, or status of an Ember stack library. */
export enum EmberLibraryStatus {
    // Base return codes. These may be ORed with statuses further below.
    LIBRARY_PRESENT_MASK = 0x80,
    LIBRARY_IS_STUB = 0x00,
    LIBRARY_ERROR = 0xff,

    // The ZigBee Pro library uses the following to indicate additional functionality:
    /** no router capability */
    ZIGBEE_PRO_LIBRARY_END_DEVICE_ONLY = 0x00,
    ZIGBEE_PRO_LIBRARY_HAVE_ROUTER_CAPABILITY = 0x01,
    ZIGBEE_PRO_LIBRARY_ZLL_SUPPORT = 0x02,

    // The Security library uses the following to indicate additional functionality:
    SECURITY_LIBRARY_END_DEVICE_ONLY = 0x00,
    /** router or trust center support */
    SECURITY_LIBRARY_HAVE_ROUTER_SUPPORT = 0x01,

    // The Packet Validate library may be globally turned on/off. Bit 0 indicates whether the library is enabled/disabled.
    PACKET_VALIDATE_LIBRARY_DISABLED = 0x00,
    PACKET_VALIDATE_LIBRARY_ENABLED = 0x01,
    PACKET_VALIDATE_LIBRARY_ENABLE_MASK = 0x01,
}

/** Defines the entropy source used by the stack. */
export enum EmberEntropySource {
    /** Error in identifying the entropy source. */
    ERROR = 0x00,
    /** The default radio entropy source. */
    RADIO = 0x01,
    /** TRNG with mbed TLS support. */
    MBEDTLS_TRNG = 0x02,
    /** Other mbed TLS entropy source. */
    MBEDTLS = 0x03,
}

/** Defines the options that should be used when initializing the node's network configuration. */
export enum EmberNetworkInitBitmask {
    NO_OPTIONS = 0x0000,
    /** The Parent Node ID and EUI64 are stored in a token. This prevents the need to perform an Orphan scan on startup. */
    PARENT_INFO_IN_TOKEN = 0x0001,
    /** Z3 compliant end devices on a network must send a rejoin request on reboot. */
    END_DEVICE_REJOIN_ON_REBOOT = 0x0002,
}

/** Defines the possible join states for a node. uint8_t */
export enum EmberNetworkStatus {
    /** The node is not associated with a network in any way. */
    NO_NETWORK = 0,
    /** The node is currently attempting to join a network. */
    JOINING_NETWORK = 1,
    /** The node is joined to a network. */
    JOINED_NETWORK = 2,
    /** The node is an end device joined to a network but its parent is not responding. */
    JOINED_NETWORK_NO_PARENT = 3,
    /** The node is a Sleepy-to-Sleepy initiator */
    JOINED_NETWORK_S2S_INITIATOR = 4,
    /** The node is a Sleepy-to-Sleepy target */
    JOINED_NETWORK_S2S_TARGET = 5,
    /** The node is in the process of leaving its current network. */
    LEAVING_NETWORK = 6,
}

/** Network scan types. */
export enum EzspNetworkScanType {
    /** An energy scan scans each channel for its RSSI value. */
    ENERGY_SCAN = 0x00,
    /** An active scan scans each channel for available networks. */
    ACTIVE_SCAN = 0x01,
}

/** The type of method used for joining. uint8_t */
export enum EmberJoinMethod {
    /** Devices normally use MAC association to join a network, which respects
     *  the "permit joining" flag in the MAC beacon.
     *  This value should be used by default.
     */
    MAC_ASSOCIATION = 0,
    /** For networks where the "permit joining" flag is never turned
     *  on, devices will need to use a ZigBee NWK Rejoin.  This value causes the
     *  rejoin to be sent withOUT NWK security and the Trust Center will be
     *  asked to send the NWK key to the device.  The NWK key sent to the device
     *  can be encrypted with the device's corresponding Trust Center link key.
     *  That is determined by the ::EmberJoinDecision on the Trust Center
     *  returned by the ::emberTrustCenterJoinHandler().
     */
    NWK_REJOIN = 1,
    /* For networks where the "permit joining" flag is never turned
     * on, devices will need to use a NWK Rejoin.  If those devices have been
     * preconfigured with the  NWK key (including sequence number), they can use
     * a secured rejoin.  This is only necessary for end devices since they need
     * a parent.  Routers can simply use the ::CONFIGURED_NWK_STATE
     * join method below.
     */
    NWK_REJOIN_HAVE_NWK_KEY = 2,
    /** For networks where all network and security information is known
         ahead of time, a router device may be commissioned such that it does
        not need to send any messages to begin communicating on the network.
    */
    CONFIGURED_NWK_STATE = 3,
    /** This enumeration causes an unencrypted Network Commissioning Request to be
         sent out with joinType set to initial join. The trust center may respond
        by establishing a new dynamic link key and then sending the network key.
        Network Commissioning Requests should only be sent to parents that support
        processing of the command.
    */
    NWK_COMMISSIONING_JOIN = 4,
    /** This enumeration causes an unencrypted Network Commissioning Request to be
         sent out with joinType set to rejoin. The trust center may respond
        by establishing a new dynamic link key and then sending the network key.
        Network Commissioning Requests should only be sent to parents that support
        processing of the command.
    */
    NWK_COMMISSIONING_REJOIN = 5,
    /** This enumeration causes an encrypted Network Commissioning Request to be
         sent out with joinType set to rejoin. This enumeration is used by devices
        that already have the network key and wish to recover connection to a
        parent or the network in general.
        Network Commissioning Requests should only be sent to parents that support
        processing of the command.
    */
    NWK_COMMISSIONING_REJOIN_HAVE_NWK_KEY = 6,
}

/** Defines the possible types of nodes and the roles that a node might play in a network. */
export enum EmberNodeType {
    /** The device is not joined. */
    UNKNOWN_DEVICE = 0,
    /** Will relay messages and can act as a parent to other nodes. */
    COORDINATOR = 1,
    /** Will relay messages and can act as a parent to other nodes. */
    ROUTER = 2,
    /** Communicates only with its parent and will not relay messages. */
    END_DEVICE = 3,
    /** An end device whose radio can be turned off to save power. The application must call ::emberPollForData() to receive messages. */
    SLEEPY_END_DEVICE = 4,
    /** Sleepy end device which transmits with wake up frames (CSL). */
    S2S_INITIATOR_DEVICE = 5,
    /** Sleepy end device which duty cycles the radio Rx (CSL). */
    S2S_TARGET_DEVICE = 6,
}

/**  */
export enum EmberMultiPhyNwkConfig {
    ROUTERS_ALLOWED = 0x01,
    BROADCASTS_ENABLED = 0x02,
    DISABLED = 0x80,
}

/**
 * Duty cycle states
 *
 * Applications have no control over the state but the callback exposes
 * state changes to the application.
 */
export enum EmberDutyCycleState {
    /** No duty cycle tracking or metrics are taking place. */
    TRACKING_OFF = 0,
    /** Duty Cycle is tracked and has not exceeded any thresholds. */
    LBT_NORMAL = 1,
    /** The limited threshold of the total duty cycle allotment was exceeded. */
    LBT_LIMITED_THRESHOLD_REACHED = 2,
    /** The critical threshold of the total duty cycle allotment was exceeded. */
    LBT_CRITICAL_THRESHOLD_REACHED = 3,
    /** The suspend limit was reached and all outbound transmissions are blocked. */
    LBT_SUSPEND_LIMIT_REACHED = 4,
}

/** Defines binding types. uint8_t */
export enum EmberBindingType {
    /** A binding that is currently not in use. */
    UNUSED_BINDING = 0,
    /** A unicast binding whose 64-bit identifier is the destination EUI64. */
    UNICAST_BINDING = 1,
    /**
     * A unicast binding whose 64-bit identifier is the many-to-one destination EUI64.
     * Route discovery should be disabled when sending unicasts via many-to-one bindings.
     */
    MANY_TO_ONE_BINDING = 2,
    /**
     * A multicast binding whose 64-bit identifier is the group address.
     * This binding can be used to send messages to the group and to receive messages sent to the group.
     */
    MULTICAST_BINDING = 3,
}

/** Defines the possible outgoing message types. uint8_t */
export enum EmberOutgoingMessageType {
    /** Unicast sent directly to an EmberNodeId. */
    DIRECT = 0,
    /** Unicast sent using an entry in the address table. */
    VIA_ADDRESS_TABLE = 1,
    /** Unicast sent using an entry in the binding table. */
    VIA_BINDING = 2,
    /** Multicast message. This value is passed to emberMessageSentHandler() only. It may not be passed to emberSendUnicast(). */
    MULTICAST = 3,
    /** An aliased multicast message. This value is passed to emberMessageSentHandler() only. It may not be passed to emberSendUnicast(). */
    MULTICAST_WITH_ALIAS = 4,
    /** An aliased Broadcast message. This value is passed to emberMessageSentHandler() only. It may not be passed to emberSendUnicast(). */
    BROADCAST_WITH_ALIAS = 5,
    /** A broadcast message. This value is passed to emberMessageSentHandler() only. It may not be passed to emberSendUnicast(). */
    BROADCAST = 6,
}

/** Defines the possible incoming message types. uint8_t */
export enum EmberIncomingMessageType {
    /** Unicast. */
    UNICAST = 0,
    /** Unicast reply. */
    UNICAST_REPLY = 1,
    /** Multicast. */
    MULTICAST = 2,
    /** Multicast sent by the local device. */
    MULTICAST_LOOPBACK = 3,
    /** Broadcast. */
    BROADCAST = 4,
    /** Broadcast sent by the local device. */
    BROADCAST_LOOPBACK = 5,
}

/**
 * Options to use when sending a message.
 *
 * The discover-route, APS-retry, and APS-indirect options may be used together.
 * Poll response cannot be combined with any other options.
 * uint16_t
 */
export enum EmberApsOption {
    /** No options. */
    NONE = 0x0000,
    ENCRYPT_WITH_TRANSIENT_KEY = 0x0001,
    USE_ALIAS_SEQUENCE_NUMBER = 0x0002,
    /**
     * This signs the application layer message body (APS Frame not included) and appends the ECDSA signature to the end of the message,
     * which is needed by Smart Energy applications and requires the CBKE and ECC libraries.
     * The ::emberDsaSignHandler() function is called after DSA signing is complete but before the message has been sent by the APS layer.
     * Note that when passing a buffer to the stack for DSA signing, the final byte in the buffer has a special significance as an indicator
     * of how many leading bytes should be ignored for signature purposes. See the API documentation of emberDsaSign()
     * or the dsaSign EZSP command for more details about this requirement.
     */
    DSA_SIGN = 0x0010,
    /** Send the message using APS Encryption using the Link Key shared with the destination node to encrypt the data at the APS Level. */
    ENCRYPTION = 0x0020,
    /**
     * Resend the message using the APS retry mechanism.
     * This option and the enable route discovery option must be enabled for an existing route to be repaired automatically.
     */
    RETRY = 0x0040,
    /**
     * Send the message with the NWK 'enable route discovery' flag, which  causes a route discovery to be initiated if no route to the
     * destination is known. Note that in the mesh stack, this option and the APS retry option must be enabled an existing route to be
     * repaired automatically.
     */
    ENABLE_ROUTE_DISCOVERY = 0x0100,
    /** Send the message with the NWK 'force route discovery' flag, which causes a route discovery to be initiated even if one is known. */
    FORCE_ROUTE_DISCOVERY = 0x0200,
    /** Include the source EUI64 in the network frame. */
    SOURCE_EUI64 = 0x0400,
    /** Include the destination EUI64 in the network frame. */
    DESTINATION_EUI64 = 0x0800,
    /** Send a ZDO request to discover the node ID of the destination if it is not already known. */
    ENABLE_ADDRESS_DISCOVERY = 0x1000,
    /**
     * This message is being sent in response to a call to  ::emberPollHandler().
     * It causes the message to be sent immediately instead of being queued up until the next poll from the (end device) destination.
     */
    POLL_RESPONSE = 0x2000,
    /**
     * This incoming message is a valid ZDO request and the application is responsible for sending a ZDO response.
     * This flag is used only within emberIncomingMessageHandler() when EMBER_APPLICATION_RECEIVES_UNSUPPORTED_ZDO_REQUESTS is defined. */
    ZDO_RESPONSE_REQUIRED = 0x4000,
    /**
     * This message is part of a fragmented message.  This option may only  be set for unicasts.
     * The groupId field gives the index of this fragment in the low-order byte.
     * If the low-order byte is zero this is the first fragment and the high-order byte contains the number of fragments in the message.
     */
    FRAGMENT = 0x8000, // SIGNED_ENUM 0x8000
}

/**
 * Types of source route discovery modes used by the concentrator.
 *
 * OFF no source route discovery is scheduled
 *
 * ON source routes discovery is scheduled, and it is triggered periodically
 *
 * RESCHEDULE  source routes discoveries are re-scheduled to be sent once immediately and then triggered periodically
 */
export enum EmberSourceRouteDiscoveryMode {
    /** off  */
    OFF = 0x00,
    /** on  */
    ON = 0x01,
    /** reschedule */
    RESCHEDULE = 0x02,
}

/** The types of MAC passthrough messages that an application may receive. This is a bitmask. */
export enum EmberMacPassthroughType {
    /** No MAC passthrough messages. */
    NONE = 0x00,
    /** SE InterPAN messages. */
    SE_INTERPAN = 0x01,
    /** EmberNet and first generation (v1) standalone bootloader messages. */
    EMBERNET = 0x02,
    /** EmberNet messages filtered by their source address. */
    EMBERNET_SOURCE = 0x04,
    /** Application-specific passthrough messages. */
    APPLICATION = 0x08,
    /** Custom inter-pan filter. */
    CUSTOM = 0x10,

    /** Internal Stack passthrough. */
    INTERNAL_ZLL = 0x80,
    INTERNAL_GP = 0x40,
}

/**
 * Interpan Message type: unicast, broadcast, or multicast.
 * uint8_t
 */
export enum EmberInterpanMessageType {
    UNICAST = 0x00,
    BROADCAST = 0x08,
    MULTICAST = 0x0c,
}

/** This is the Current Security Bitmask that details the use of various security features. */
export enum EmberCurrentSecurityBitmask {
    // These options are the same for Initial and Current Security state.

    /** This denotes that the device is running in a network with ZigBee
     *  Standard Security. */
    STANDARD_SECURITY_MODE = 0x0000,
    /** This denotes that the device is running in a network without
     *  a centralized Trust Center. */
    DISTRIBUTED_TRUST_CENTER_MODE = 0x0002,
    /** This denotes that the device has a Global Link Key.  The Trust Center
     *  Link Key is the same across multiple nodes. */
    TRUST_CENTER_GLOBAL_LINK_KEY = 0x0004,

    // Bit 3 reserved

    /** This denotes that the node has a Trust Center Link Key. */
    HAVE_TRUST_CENTER_LINK_KEY = 0x0010,

    /** This denotes that the Trust Center is using a Hashed Link Key. */
    TRUST_CENTER_USES_HASHED_LINK_KEY = 0x0084,

    // Bits 1, 5, 6, and 8-15 reserved.
}

/**
 * The list of supported key types used by Zigbee Security Manager.
 * uint8_t
 */
export enum SecManKeyType {
    NONE = 0,
    /**
     * This is the network key, used for encrypting and decrypting network payloads.
     * There is only one of these keys in storage.
     */
    NETWORK = 1,
    /**
     * This is the Trust Center Link Key. On the joining device, this is the APS
     * key used to communicate with the trust center. On the trust center, this
     * key can be used as a root key for APS encryption and decryption when
     * communicating with joining devices (if the security policy has the
     * EMBER_TRUST_CENTER_USES_HASHED_LINK_KEY bit set).
     * There is only one of these keys in storage.
     */
    TC_LINK = 2,
    /**
     * This is a Trust Center Link Key, but it times out after either
     * ::EMBER_TRANSIENT_KEY_TIMEOUT_S or
     * ::EMBER_AF_PLUGIN_NETWORK_CREATOR_SECURITY_NETWORK_OPEN_TIME_S (if
     * defined), whichever is longer. This type of key is set on trust centers
     * who wish to open joining with a temporary, or transient, APS key for
     * devices to join with. Joiners who wish to try several keys when joining a
     * network may set several of these types of keys before attempting to join.
     * This is an indexed key, and local storage can fit as many keys as
     * available RAM allows.
     */
    TC_LINK_WITH_TIMEOUT = 3,
    /**
     * This is an Application link key. On both joining devices and the trust
     * center, this key is used in APS encryption and decryption when
     * communicating to a joining device.
     * This is an indexed key table of size EMBER_KEY_TABLE_SIZE, so long as there
     * is sufficient nonvolatile memory to store keys.
     */
    APP_LINK = 4,
    /** This is the ZLL encryption key for use by algorithms that require it. */
    ZLL_ENCRYPTION_KEY = 5,
    /** For ZLL, this is the pre-configured link key used during classical ZigBee commissioning. */
    ZLL_PRECONFIGURED_KEY = 6,
    /** This is a Green Power Device (GPD) key used on a Proxy device. */
    GREEN_POWER_PROXY_TABLE_KEY = 7,
    /** This is a Green Power Device (GPD) key used on a Sink device. */
    GREEN_POWER_SINK_TABLE_KEY = 8,
    /**
     * This is a generic key type intended to be loaded for one-time hashing or crypto operations.
     * This key is not persisted. Intended for use by the Zigbee stack.
     */
    INTERNAL = 9,
}

/**
 * Derived keys are calculated when performing Zigbee crypto operations. The stack makes use of these derivations.
 * Compounding derivations can be specified by using an or-equals on two derived types if applicable;
 * this is limited to performing the key-transport, key-load, or verify-key hashes on either the TC Swap Out or TC Hashed Link keys.
 * uint16_t
 */
export enum SecManDerivedKeyType {
    /** Perform no derivation; use the key as is. */
    NONE = 0x0000,
    /** Perform the Key-Transport-Key hash. */
    KEY_TRANSPORT_KEY = 0x0001,
    /** Perform the Key-Load-Key hash. */
    KEY_LOAD_KEY = 0x0002,
    /** Perform the Verify Key hash. */
    VERIFY_KEY = 0x0004,
    /** Perform a simple AES hash of the key for TC backup. */
    TC_SWAP_OUT_KEY = 0x0008,
    /** For a TC using hashed link keys, hashed the root key against the supplied EUI in context. */
    TC_HASHED_LINK_KEY = 0x0010,
}

/**
 * Security Manager context flags.
 * uint8_t
 */
export enum SecManFlag {
    NONE = 0x00,
    /**
     * For export APIs, this flag indicates the key_index parameter is valid in
     *  the ::sl_zb_sec_man_context_t structure. This bit is set by the caller
     *  when intending to search for a key by key_index. This flag has no
     *  significance for import APIs. */
    KEY_INDEX_IS_VALID = 0x01,
    /**
     * For export APIs, this flag indicates the eui64 parameter is valid in the
     *  ::sl_zb_sec_man_context_t structure. This bit is set by the caller when
     *  intending to search for a key by eui64. It is also set when searching by
     *  key_index and an entry is found. This flag has no significance for import
     *  APIs. */
    EUI_IS_VALID = 0x02,
    /**
     * Internal use only. This indicates that the transient key being added is an
     * unconfirmed, updated key. This bit is set when we add a transient key and
     * the ::EmberTcLinkKeyRequestPolicy policy
     * is ::EMBER_ALLOW_TC_LINK_KEY_REQUEST_AND_GENERATE_NEW_KEY, whose behavior
     * dictates that we generate a new, unconfirmed key, send it to the requester,
     * and await for a Verify Key Confirm message. */
    UNCONFIRMED_TRANSIENT_KEY = 0x04,
    /**
     * Internal use only.  This indicates that the key being added was derived via
     * dynamic link key negotiation.  This may be used in conjunction with the above
     * ::UNCONFIRMED_TRANSIENT_KEY while the derived link key awaits
     * confirmation
     */
    AUTHENTICATED_DYNAMIC_LINK_KEY = 0x08,
    /**
     * Internal use only.  This indicates that the "key" being added is instead the
     * symmetric passphrase to be stored in the link key table. This flag will trigger the
     * addition of the KEY_TABLE_SYMMETRIC_PASSPHRASE bitmask when storing the symmetric
     * passphrase so that it can be differentiated from other keys with the same EUI64.
     */
    SYMMETRIC_PASSPHRASE = 0x10,
}

/** This denotes the status of an attempt to establish a key with another device. */
export enum EmberKeyStatus {
    STATUS_NONE = 0x00,
    APP_LINK_KEY_ESTABLISHED = 0x01,
    TRUST_CENTER_LINK_KEY_ESTABLISHED = 0x03,

    ESTABLISHMENT_TIMEOUT = 0x04,
    TABLE_FULL = 0x05,

    // These are success status values applying only to the Trust Center answering key requests.
    TC_RESPONDED_TO_KEY_REQUEST = 0x06,
    TC_APP_KEY_SENT_TO_REQUESTER = 0x07,

    // These are failure status values applying only to the
    // Trust Center answering key requests.
    TC_RESPONSE_TO_KEY_REQUEST_FAILED = 0x08,
    TC_REQUEST_KEY_TYPE_NOT_SUPPORTED = 0x09,
    TC_NO_LINK_KEY_FOR_REQUESTER = 0x0a,
    TC_REQUESTER_EUI64_UNKNOWN = 0x0b,
    TC_RECEIVED_FIRST_APP_KEY_REQUEST = 0x0c,
    TC_TIMEOUT_WAITING_FOR_SECOND_APP_KEY_REQUEST = 0x0d,
    TC_NON_MATCHING_APP_KEY_REQUEST_RECEIVED = 0x0e,
    TC_FAILED_TO_SEND_APP_KEYS = 0x0f,
    TC_FAILED_TO_STORE_APP_KEY_REQUEST = 0x10,
    TC_REJECTED_APP_KEY_REQUEST = 0x11,
    TC_FAILED_TO_GENERATE_NEW_KEY = 0x12,
    TC_FAILED_TO_SEND_TC_KEY = 0x13,

    // These are generic status values for a key requester.
    TRUST_CENTER_IS_PRE_R21 = 0x1e,

    // These are status values applying only to the Trust Center verifying link keys.
    TC_REQUESTER_VERIFY_KEY_TIMEOUT = 0x32,
    TC_REQUESTER_VERIFY_KEY_FAILURE = 0x33,
    TC_REQUESTER_VERIFY_KEY_SUCCESS = 0x34,

    // These are status values applying only to the key requester
    // verifying link keys.
    VERIFY_LINK_KEY_FAILURE = 0x64,
    VERIFY_LINK_KEY_SUCCESS = 0x65,
}

/** This bitmask describes the presence of fields within the ::EmberKeyStruct. uint16_t */
export enum EmberKeyStructBitmask {
    /** This indicates that the key has a sequence number associated with it. (i.e., a Network Key). */
    HAS_SEQUENCE_NUMBER = 0x0001,
    /** This indicates that the key has an outgoing frame counter and the corresponding value within the ::EmberKeyStruct has been populated.*/
    HAS_OUTGOING_FRAME_COUNTER = 0x0002,
    /** This indicates that the key has an incoming frame counter and the corresponding value within the ::EmberKeyStruct has been populated.*/
    HAS_INCOMING_FRAME_COUNTER = 0x0004,
    /**
     * This indicates that the key has an associated Partner EUI64 address and the corresponding value
     * within the ::EmberKeyStruct has been populated.
     */
    HAS_PARTNER_EUI64 = 0x0008,
    /**
     * This indicates the key is authorized for use in APS data messages.
     * If the key is not authorized for use in APS data messages it has not yet gone through a key agreement protocol, such as CBKE (i.e., ECC).
     */
    IS_AUTHORIZED = 0x0010,
    /**
     * This indicates that the partner associated with the link is a sleepy end device.
     * This bit is set automatically if the local device hears a device announce from the partner indicating it is not an 'RX on when idle' device.
     */
    PARTNER_IS_SLEEPY = 0x0020,
    /**
     * This indicates that the transient key which is being added is unconfirmed.
     * This bit is set when we add a transient key while the EmberTcLinkKeyRequestPolicy is EMBER_ALLOW_TC_LINK_KEY_REQUEST_AND_GENERATE_NEW_KEY
     */
    UNCONFIRMED_TRANSIENT = 0x0040,
    /** This indicates that the actual key data is stored in PSA, and the respective PSA ID is recorded in the psa_id field. */
    HAS_PSA_ID = 0x0080,
    /**
     * This indicates that the keyData field has valid data. On certain parts and depending on the security configuration,
     * keys may live in secure storage and are not exportable. In such cases, keyData will not house the actual key contents.
     */
    HAS_KEY_DATA = 0x0100,
    /**
     * This indicates that the key represents a Device Authentication Token and is not an encryption key.
     * The Authentication token is persisted for the lifetime of the device on the network and used to validate and update the device connection.
     * It is only removed when the device leaves or is decommissioned from the network
     */
    IS_AUTHENTICATION_TOKEN = 0x0200,
    /** This indicates that the key has been derived by the Dynamic Link Key feature. */
    DLK_DERIVED = 0x0400,
    /** This indicates that the device this key is being used to communicate with supports the APS frame counter synchronization procedure. */
    FC_SYNC_SUPPORTED = 0x0800,
}

/**
 * The Status of the Update Device message sent to the Trust Center.
 * The device may have joined or rejoined insecurely, rejoined securely, or left.
 * MAC Security has been deprecated and therefore there is no secure join.
 * These map to the actual values within the APS Command frame so they cannot be arbitrarily changed.
 * uint8_t
 */
export enum EmberDeviceUpdate {
    STANDARD_SECURITY_SECURED_REJOIN = 0,
    STANDARD_SECURITY_UNSECURED_JOIN = 1,
    DEVICE_LEFT = 2,
    STANDARD_SECURITY_UNSECURED_REJOIN = 3,
}

/** The decision made by the Trust Center when a node attempts to join. uint8_t */
export enum EmberJoinDecision {
    /** Allow the node to join. The node has the key. */
    USE_PRECONFIGURED_KEY = 0,
    /** Allow the node to join. Send the key to the node. */
    SEND_KEY_IN_THE_CLEAR = 1,
    /** Deny join. */
    DENY_JOIN = 2,
    /** Take no action. */
    NO_ACTION = 3,
    /** Allow rejoins only.*/
    ALLOW_REJOINS_ONLY = 4,
}

/** A bitmask indicating the state of the ZLL device. This maps directly to the ZLL information field in the scan response. uint16_t */
export enum EmberZllState {
    /** No state. */
    NONE = 0x0000,
    /** The device is factory new. */
    FACTORY_NEW = 0x0001,
    /** The device is capable of assigning addresses to other devices. */
    ADDRESS_ASSIGNMENT_CAPABLE = 0x0002,
    /** The device is initiating a link operation. */
    LINK_INITIATOR = 0x0010,
    /** The device is requesting link priority. */
    LINK_PRIORITY_REQUEST = 0x0020,
    /** The device is a ZigBee 3.0 device. */
    PROFILE_INTEROP = 0x0080,
    /** The device is on a non-ZLL network. */
    NON_ZLL_NETWORK = 0x0100,
    /** Internal use: the ZLL token's key values point to a PSA key identifier */
    TOKEN_POINTS_TO_PSA_ID = 0x0200,
}

/** Differentiates among ZLL network operations. */
export enum EzspZllNetworkOperation {
    /** ZLL form network command. */
    FORM_NETWORK = 0x00,
    /** ZLL join target command. */
    JOIN_TARGET = 0x01,
}

/** The key encryption algorithms supported by the stack. */
export enum EmberZllKeyIndex {
    /** The key encryption algorithm for use during development. */
    DEVELOPMENT = 0x00,
    /** The key encryption algorithm shared by all certified devices. */
    MASTER = 0x04,
    /** The key encryption algorithm for use during development and certification. */
    CERTIFICATION = 0x0f,
}

/** uint8_t */
export enum EmberGpApplicationId {
    /** Source identifier. */
    SOURCE_ID = 0x00,
    /** IEEE address. */
    IEEE_ADDRESS = 0x02,
}

/** Green Power Security Level. uint8_t */
export enum EmberGpSecurityLevel {
    /** No Security  */
    NONE = 0x00,
    /** Reserved  */
    RESERVED = 0x01,
    /** 4 Byte Frame Counter and 4 Byte MIC */
    FC_MIC = 0x02,
    /** 4 Byte Frame Counter and 4 Byte MIC with encryption */
    FC_MIC_ENCRYPTED = 0x03,
}

/** Green Power Security Security Key Type. uint8_t */
export enum EmberGpKeyType {
    /** No Key */
    NONE = 0x00,
    /** GP Security Key Type is Zigbee Network Key */
    NWK = 0x01,
    /** GP Security Key Type is Group Key */
    GPD_GROUP = 0x02,
    /** GP Security Key Type is Derived Network Key */
    NWK_DERIVED = 0x03,
    /** GP Security Key Type is Out Of Box Key */
    GPD_OOB = 0x04,
    /** GP Security Key Type is GPD Derived Key */
    GPD_DERIVED = 0x07,
}

/** uint8_t */
export enum EmberGpProxyTableEntryStatus {
    /** The GP table entry is in use for a Proxy Table Entry. */
    ACTIVE = 0x01,
    /** The proxy table entry is not in use. */
    UNUSED = 0xff,
}

/** GP Sink Type. */
export enum EmberGpSinkType {
    /** Sink Type is Full Unicast */
    FULL_UNICAST = 0,
    /** Sink Type is Derived groupcast, the group ID is derived from the GpdId during commissioning.
     * The sink is added to the APS group with that groupId.
     */
    D_GROUPCAST = 1,
    /** Sink type GROUPCAST, the groupId can be obtained from the APS group table
     * or from the sink table.
     */
    GROUPCAST = 2,
    /** Sink Type is Light Weight Unicast. */
    LW_UNICAST = 3,
    /** Unused sink type */
    UNUSED = 0xff,
}

/** uint8_t */
export enum EmberGpSinkTableEntryStatus {
    /** The GP table entry is in use for a Sink Table Entry. */
    ACTIVE = 0x01,
    /** The proxy table entry is not in use. */
    UNUSED = 0xff,
}

export enum EmberLeaveNetworkOption {
    /** Leave with no option. */
    WITH_NO_OPTION = 0x00,
    /** Leave with option rejoin. */
    WITH_OPTION_REJOIN = 0x20,
    /** Leave is requested. */
    IS_REQUESTED = 0x40,
}

/**
 * Packet transmit priorities in terms of getting into the MAC queue.
 *
 * SL_802154_TRANSMIT_PRIORITY_HIGH High priority headers go on the front of the queue.
 * SL_802154_TRANSMIT_PRIORITY_NORMAL  Normal priority headers go on the back of the queue.
 * SL_802154_TRANSMIT_PRIORITY_SCAN_OKAY Normally, only beacon requests and orphan notifications can be sent during a scan.
 * They are submitted with SCAN_OKAY and go on the front of the queue. Other packets could be submitted with this priority, but it is not recommended.
 */
export enum EmberTransmitPriority {
    HIGH = 0,
    NORMAL = 1,
    SCAN_OKAY = 2,
}

export enum IEEE802154CcaMode {
    /** RSSI-based CCA. CCA reports a busy medium upon detecting any energy above -75 (default RAIL_CsmaConfig_t.ccaThreshold). */
    RSSI = 0,
    /**
     * Signal Identifier-based CCA. CCA reports a busy medium only upon the detection of a signal compliant with this standard
     * with the same modulation and spreading characteristics of the PHY that is currently in use.
     */
    SIGNAL = 1,
    /**
     * RSSI or signal identifier-based CCA. CCA reports a busy medium on either detecting any energy above
     * -75 (default RAIL_CsmaConfig_t.ccaThreshold) or detection of a signal compliant with this standard with the same modulation
     * and spreading characteristics of the PHY that is currently in use.
     */
    SIGNAL_OR_RSSI = 2,
    /**
     * RSSI and signal identifier-based CCA. CCA reports a busy medium only on detecting any energy above -75 (default RAIL_CsmaConfig_t.ccaThreshold)
     * of a signal compliant with this standard with the same modulation and spreading characteristics of the PHY that is currently in use.
     */
    SIGNAL_AND_RSSI = 3,
    /** ALOHA. Always transmit CCA=1. CCA always reports an idle medium. */
    ALWAYS_TRANSMIT = 4,
}
