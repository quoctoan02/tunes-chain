/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider } from '@ethersproject/providers'
import { Contract, Signer, utils } from 'ethers'
import type { LaunchpadFactory, LaunchpadFactoryInterface } from '../../presale/LaunchpadFactory'

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_launchpadEventBase',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_launchpadLocker',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_dexRouter',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'presaleAddress',
        type: 'address',
      },
    ],
    name: 'presaleCreated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256[10]',
        name: 'uint256_params',
        type: 'uint256[10]',
      },
      {
        internalType: 'address',
        name: 'tokenOnSale',
        type: 'address',
      },
      {
        internalType: 'uint256[9]',
        name: 'uint_params',
        type: 'uint256[9]',
      },
    ],
    name: 'create',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeTo',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'flatFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'implementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'feeReceivingAddress',
        type: 'address',
      },
    ],
    name: 'setFeeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
    ],
    name: 'setFlatFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation_',
        type: 'address',
      },
    ],
    name: 'setImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

export class LaunchpadFactory__factory {
  static readonly abi = _abi
  static createInterface(): LaunchpadFactoryInterface {
    return new utils.Interface(_abi) as LaunchpadFactoryInterface
  }
  static connect(address: string, signerOrProvider: Signer | Provider): LaunchpadFactory {
    return new Contract(address, _abi, signerOrProvider) as LaunchpadFactory
  }
}
