export const streamABI = [
   {
      inputs: [],
      name: "AmountExceedsBalance",
      type: "error"
   },
   {
      inputs: [],
      name: "CallerNotPayer",
      type: "error"
   },
   {
      inputs: [],
      name: "CallerNotPayerOrRecipient",
      type: "error"
   },
   {
      inputs: [],
      name: "CantWithdrawZero",
      type: "error"
   },
   {
      inputs: [],
      name: "ETHRescueFailed",
      type: "error"
   },
   {
      inputs: [],
      name: "OnlyFactory",
      type: "error"
   },
   {
      inputs: [],
      name: "RescueTokenAmountExceedsExcessBalance",
      type: "error"
   },
   {
      inputs: [],
      name: "StreamNotActive",
      type: "error"
   },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "payer",
            type: "address"
         },
         {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
         },
         {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         }
      ],
      name: "ETHRescued",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "msgSender",
            type: "address"
         },
         {
            indexed: true,
            internalType: "address",
            name: "payer",
            type: "address"
         },
         {
            indexed: true,
            internalType: "address",
            name: "recipient",
            type: "address"
         },
         {
            indexed: false,
            internalType: "uint256",
            name: "recipientBalance",
            type: "uint256"
         }
      ],
      name: "StreamCancelled",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "payer",
            type: "address"
         },
         {
            indexed: false,
            internalType: "address",
            name: "tokenAddress",
            type: "address"
         },
         {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         },
         {
            indexed: false,
            internalType: "address",
            name: "to",
            type: "address"
         }
      ],
      name: "TokensRecovered",
      type: "event"
   },
   {
      anonymous: false,
      inputs: [
         {
            indexed: true,
            internalType: "address",
            name: "msgSender",
            type: "address"
         },
         {
            indexed: true,
            internalType: "address",
            name: "recipient",
            type: "address"
         },
         {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         }
      ],
      name: "TokensWithdrawn",
      type: "event"
   },
   {
      inputs: [],
      name: "cancel",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "elapsedTime",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "factory",
      outputs: [
         {
            internalType: "address",
            name: "",
            type: "address"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "initialize",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "payer",
      outputs: [
         {
            internalType: "address",
            name: "",
            type: "address"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "recipient",
      outputs: [
         {
            internalType: "address",
            name: "",
            type: "address"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "recipientActiveBalance",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "recipientBalance",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [],
      name: "recipientCancelBalance",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [
         {
            internalType: "address",
            name: "to",
            type: "address"
         }
      ],
      name: "recoverTokens",
      outputs: [
         {
            internalType: "uint256",
            name: "tokensToWithdraw",
            type: "uint256"
         }
      ],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [
         {
            internalType: "address",
            name: "tokenAddress",
            type: "address"
         },
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         },
         {
            internalType: "address",
            name: "to",
            type: "address"
         }
      ],
      name: "recoverTokens",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "remainingBalance",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [
         {
            internalType: "address",
            name: "to",
            type: "address"
         },
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         }
      ],
      name: "rescueETH",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [],
      name: "startTime",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "stopTime",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "token",
      outputs: [
         {
            internalType: "contract IERC20",
            name: "",
            type: "address"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "tokenAmount",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "pure",
      type: "function"
   },
   {
      inputs: [],
      name: "tokenAndOutstandingBalance",
      outputs: [
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         },
         {
            internalType: "uint256",
            name: "",
            type: "uint256"
         }
      ],
      stateMutability: "view",
      type: "function"
   },
   {
      inputs: [
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         }
      ],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         }
      ],
      name: "withdrawAfterCancel",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   },
   {
      inputs: [
         {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
         }
      ],
      name: "withdrawFromActiveBalance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
   }
] as const