import * as Web3 from 'web3';

import {
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  StateMutability,
} from '../../types';

export interface NonFungibleContractType {
  id: string;
  address: string;
}

export const ERC1155Schema: Schema<NonFungibleContractType> = {
  version: 1,
  deploymentBlock: 0, // Not indexed (for now; need asset-specific indexing strategy)
  name: 'ERC1155',
  description: 'Items conforming to the ERC1155 spec, using transferFrom.',
  thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
  website: 'https://github.com/ethereum/eips/issues/1155',
  fields: [
    {name: 'ID', type: 'uint256', description: 'Asset Token ID'},
    {name: 'Address', type: 'address', description: 'Asset Contract Address'},
  ],
  assetFromFields: (fields: any) => ({
    id: fields.ID,
    address: fields.Address,
  }),
  assetToFields: asset => ({
    ID: asset.id,
    Address: asset.address,
  }),
  formatter:
    async asset => {
      return {
        title: 'ERC1155 Asset: Token ID ' + asset.id + ' at ' + asset.address,
        description: '',
        url: '',
        thumbnail: '',
        properties: [],
      };
  },
  functions: {
    transfer: asset => ({
      type: Web3.AbiType.Function,
      name: 'transferFrom',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_from', type: 'address'},
        {kind: FunctionInputKind.Replaceable, name: '_to', type: 'address'},
        {kind: FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id},
        {kind: FunctionInputKind.Count, name: '_value', type: 'uint256', value: 1},
      ],
      outputs: [],
    }),
    transferQuantity: (asset, quantity) => ({
      type: Web3.AbiType.Function,
      name: 'transferFrom',
      payable: false,
      constant: false,
      stateMutability: StateMutability.Nonpayable,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_from', type: 'address'},
        {kind: FunctionInputKind.Replaceable, name: '_to', type: 'address'},
        {kind: FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id},
        {kind: FunctionInputKind.Count, name: '_value', type: 'uint256', value: quantity},
      ],
      outputs: [],
    }),
    countOf: asset => ({
      type: Web3.AbiType.Function,
      name: 'balanceOf',
      payable: false,
      constant: true,
      stateMutability: StateMutability.View,
      target: asset.address,
      inputs: [
        {kind: FunctionInputKind.Owner, name: '_owner', type: 'address'},
        {kind: FunctionInputKind.Asset, name: '_id', type: 'uint256', value: asset.id},
      ],
      outputs: [
        {kind: FunctionOutputKind.Count, name: 'balance', type: 'uint'},
      ],
      assetFromOutputs: (outputs: any) => outputs.balance,
    }),
    assetsOfOwnerByIndex: [],
  },
  events: {
    transfer: [],
  },
  hash: asset => asset.address + '-' + asset.id,
};
