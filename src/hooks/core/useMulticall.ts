import { Interface } from "@ethersproject/abi"
import { useCallback } from "react"
import { Address } from "wagmi"
import { useMulticallContract } from "./useContract"

export const useMulticall = <T = any>(abi: any) => {
  const multicallContract = useMulticallContract()

  const multicall = useCallback(
    async (
      calls: Array<{
        name: string // Function name on the contract (example: balanceOf)
        address: Address // Address of the contract
        params?: any[] // Function params
      }>
    ): Promise<T> => {
      const itf = new Interface(abi)
      const calldata = calls.map((call) => ({
        target: call.address.toLowerCase(),
        callData: itf.encodeFunctionData(call.name, call.params),
      }))
      const { returnData } = await multicallContract.aggregate(calldata)
      return returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call)) as any
    },
    [abi, multicallContract]
  )

  return multicall
}

export const useMulticallV2 = <T = any>(
  abi: any[],
  options?: {
    requireSuccess?: boolean
  }
) => {
  const multicallContract = useMulticallContract()

  const multicall = useCallback(
    async (
      calls: Array<{
        name: string // Function name on the contract (example: balanceOf)
        address: Address // Address of the contract
        params?: any[] // Function params
      }>
    ): Promise<T> => {
      const { requireSuccess = true, ...overrides } = options || {}
      const itf = new Interface(abi)

      const calldata = calls.map((call) => ({
        target: call.address.toLowerCase(),
        callData: itf.encodeFunctionData(call.name, call.params),
      }))

      const returnData = await multicallContract.tryAggregate(requireSuccess, calldata, overrides)
      return returnData.map((call, i) => {
        const [result, data] = call
        return result ? itf.decodeFunctionResult(calls[i].name, data) : null
      }) as any
    },
    [abi, options, multicallContract]
  )

  return multicall
}
