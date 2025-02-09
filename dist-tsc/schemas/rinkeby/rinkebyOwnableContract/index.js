"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Web3 = require("web3");
const types_1 = require("../../../types");
exports.rinkebyOwnableContractSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'OwnableContract',
    description: 'Rinkeby Ownable Smart Contract',
    thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
    website: 'https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/ownership/Ownable.sol',
    fields: [
        { name: 'Name', type: 'string', description: 'Contract Name' },
        { name: 'Address', type: 'address', description: 'Contract Address' },
    ],
    assetFromFields: (fields) => ({
        name: fields.Name,
        address: fields.Address,
    }),
    formatter: async (asset) => {
        return {
            thumbnail: 'https://i.redditmedia.com/NaFzmSbDX2T2RALMxy2tmGJN_gPVNH9lJggCKUDDqcc.jpg?w=320&s=3913239508209aaf6ba1188fe3d3b5fc',
            title: 'Ownable Contract: "' + asset.name + '"',
            description: 'Ownable at address ' + asset.address,
            url: 'https://rinkeby.etherscan.io/address/' + asset.address,
            properties: [],
        };
    },
    functions: {
        transfer: asset => ({
            type: Web3.AbiType.Function,
            name: 'transferOwnership',
            payable: false,
            constant: false,
            stateMutability: types_1.StateMutability.Nonpayable,
            target: asset.address,
            inputs: [
                { kind: types_1.FunctionInputKind.Replaceable, name: 'newOwner', type: 'address' },
            ],
            outputs: [],
        }),
        ownerOf: asset => ({
            type: Web3.AbiType.Function,
            name: 'owner',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: asset.address,
            inputs: [],
            outputs: [
                { kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' },
            ],
        }),
        assetsOfOwnerByIndex: [],
    },
    events: {
        transfer: [],
    },
    hash: a => a.address,
};
//# sourceMappingURL=index.js.map