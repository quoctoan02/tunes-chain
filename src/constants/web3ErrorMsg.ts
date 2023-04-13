import { ErrorCode } from "@ethersproject/logger"
import { errors } from "ethers"

export const web3ErrorMsg: Partial<Record<ErrorCode, string>> = {
  [errors.ACTION_REJECTED]: "Action Rejected",
  [errors.BUFFER_OVERRUN]: "Buffer Overrun",
  [errors.CALL_EXCEPTION]: "Call Exception",
  [errors.INSUFFICIENT_FUNDS]: "Insufficient Funds",
  [errors.INVALID_ARGUMENT]: "Invalid Argument",
  [errors.MISSING_ARGUMENT]: "Missing Argument",
  [errors.MISSING_NEW]: "Missing New",
  [errors.NETWORK_ERROR]: "Network error",
  [errors.NONCE_EXPIRED]: "Nonce Expired",
  [errors.NOT_IMPLEMENTED]: "Not Implemented",
  [errors.NUMERIC_FAULT]: "Numeric Fault",
  [errors.REPLACEMENT_UNDERPRICED]: "Replacement Underpriced",
  [errors.SERVER_ERROR]: "Server error",
  [errors.TIMEOUT]: "Timeout",
  [errors.TRANSACTION_REPLACED]: "Transaction Replaced",
  [errors.UNEXPECTED_ARGUMENT]: "Unexpected Argument",
  [errors.UNKNOWN_ERROR]: "Unknown error",
  [errors.UNPREDICTABLE_GAS_LIMIT]: "Unpredictable Gas Limit",
  [errors.UNSUPPORTED_OPERATION]: "Unsupported Operation",
}
