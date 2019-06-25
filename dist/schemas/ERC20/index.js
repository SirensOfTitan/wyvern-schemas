"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Web3 = require("web3");
const types_1 = require("../../types");
const unit = '1';
exports.ERC20Schema = {
    version: 1,
    deploymentBlock: 0,
    name: 'ERC20',
    description: 'Items conforming to the ERC20 spec, using transferFrom.',
    thumbnail: 'https://opensea.io/static/images/opensea-icon.png',
    website: 'https://github.com/ethereum/eips/issues/20',
    fields: [
        { name: 'Address', type: 'address', description: 'Asset Contract Address' },
    ],
    assetFromFields: (fields) => ({
        address: fields.Address,
    }),
    assetToFields: asset => ({
        Address: asset.address,
    }),
    formatter: (asset) => __awaiter(this, void 0, void 0, function* () {
        return {
            title: 'ERC20 Asset at ' + asset.address,
            description: '',
            url: '',
            thumbnail: '',
            properties: [],
        };
    }),
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferFrom',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_from', type: 'address' },
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Asset, name: '_value', type: 'uint256', value: unit },
            ],
            outputs: [],
        }),
        transferQuantity: (asset, quantity) => ({
            type: Web3.AbiType.Function,
            name: 'transferFrom',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_from', type: 'address' },
                { kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' },
                { kind: types_1.FunctionInputKind.Count, name: '_value', type: 'uint256', value: quantity },
            ],
            outputs: [],
        }),
        countOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'balanceOf',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Owner, name: '_owner', type: 'address' },
            ],
            outputs: [
                { kind: types_1.FunctionOutputKind.Count, name: 'balance', type: 'uint' },
            ],
            assetFromOutputs: (outputs) => outputs.balance,
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: asset => asset.address,
};
//# sourceMappingURL=index.js.map