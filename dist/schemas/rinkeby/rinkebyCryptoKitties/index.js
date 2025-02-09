"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", { value: true });
var Web3 = require("web3");
var types_1 = require("../../../types");
exports.rinkebyCryptoKittiesSchema = {
    version: 1,
    deploymentBlock: 0,
    name: 'RinkebyCryptoKitties',
    description: 'Rinkeby Testnet CryptoKitties',
    thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
    website: 'https://cryptokitties.co',
    fields: [{ name: 'ID', type: 'uint256', description: 'CryptoKitty number.' }],
    assetFromFields: function assetFromFields(fields) {
        return fields.ID;
    },
    assetToFields: function assetToFields(asset) {
        return { ID: asset };
    },
    formatter: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(asset) {
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            return _context.abrupt("return", {
                                thumbnail: 'https://www.cryptokitties.co/images/kitty-eth.svg',
                                title: 'RinkebyCryptoKitty #' + asset,
                                description: 'A Rinkeby kitten!',
                                url: 'https://www.cryptokitties.co/kitty/' + asset,
                                properties: []
                            });

                        case 1:
                        case "end":
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        function formatter(_x) {
            return _ref.apply(this, arguments);
        }

        return formatter;
    }(),
    functions: {
        transfer: function transfer(asset) {
            return {
                type: Web3.AbiType.Function,
                name: 'transfer',
                payable: false,
                constant: false,
                stateMutability: types_1.StateMutability.Nonpayable,
                target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
                inputs: [{ kind: types_1.FunctionInputKind.Replaceable, name: '_to', type: 'address' }, { kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset }],
                outputs: []
            };
        },
        ownerOf: function ownerOf(asset) {
            return {
                type: Web3.AbiType.Function,
                name: 'ownerOf',
                payable: false,
                constant: true,
                stateMutability: types_1.StateMutability.View,
                target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
                inputs: [{ kind: types_1.FunctionInputKind.Asset, name: '_tokenId', type: 'uint256', value: asset }],
                outputs: [{ kind: types_1.FunctionOutputKind.Owner, name: 'owner', type: 'address' }]
            };
        },
        assetsOfOwnerByIndex: [{
            type: Web3.AbiType.Function,
            name: 'tokensOfOwnerByIndex',
            payable: false,
            constant: true,
            stateMutability: types_1.StateMutability.View,
            target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
            inputs: [{ kind: types_1.FunctionInputKind.Owner, name: '_owner', type: 'address' }, { kind: types_1.FunctionInputKind.Index, name: '_index', type: 'uint' }],
            outputs: [{ kind: types_1.FunctionOutputKind.Asset, name: 'tokenId', type: 'uint' }],
            assetFromOutputs: function assetFromOutputs(output) {
                if (output.toNumber() === 0) {
                    return null;
                } else {
                    return output.toString();
                }
            }
        }]
    },
    events: {
        transfer: [{
            type: Web3.AbiType.Event,
            name: 'Transfer',
            target: '0x16baf0de678e52367adc69fd067e5edd1d33e3bf',
            anonymous: false,
            inputs: [{ kind: types_1.EventInputKind.Source, indexed: true, name: 'from', type: 'address' }, { kind: types_1.EventInputKind.Destination, indexed: true, name: 'to', type: 'address' }, { kind: types_1.EventInputKind.Asset, indexed: true, name: 'tokenId', type: 'uint256' }],
            assetFromInputs: function () {
                var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(inputs) {
                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    return _context2.abrupt("return", inputs.tokenId);

                                case 1:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, undefined);
                }));

                function assetFromInputs(_x2) {
                    return _ref2.apply(this, arguments);
                }

                return assetFromInputs;
            }()
        }]
    },
    hash: function hash(a) {
        return a;
    }
};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map