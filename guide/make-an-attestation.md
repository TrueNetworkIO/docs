---
title: Making an attestation | True Network SDK | On-Chain Attestations & Reputation Protocol
description: Let's see how to make an attestation on-chain using True Network SDK. This guide will give you code snippets, and easy steps to integrate True Network protocol into your dapp easily.
lang: en-US
---

# Making an attestation

This guide will show you how to quickly issue on-chain attestations using the True Network SDK. You’ll learn how to define schemas, set up your environment, and perform attestations to different blockchain addresses.

## Prerequisites

Make sure you've a project setup done as shown in the last step.

## Creating an attestation schema

Schemas define the structure of your attestation data. Here's how you define a simple game performance schema:

```typescript
import { Schema, U32, U64 } from "@truenetworkio/sdk"

export const gamePlaySchema = Schema.create({
  score: U32,
  durationSpent: U64,
  treesClimbedPerDay: U64,
  villansKilled: U32
})
```

See supported property types: [here](/attestation.md).

## Performing an attestation

Now, let's issue an attestation:

```typescript
import { gamePlaySchema } from './schemas'
import { getTrueNetworkInstance } from './true-network/true.config'

const attestGamePlayToUser = async () => {
  const api = await getTrueNetworkInstance()

  // Supports popular wallet schemes: Ethereum, Solana & Substrate.
  const ethereumUserWallet = '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97'

  const output = await gamePlaySchema.attest(api, ethereumUserWallet, {
    score: 5,
    durationSpent: 11,
    treesClimbedPerDay: 23,
    villansKilled: 3
  })

  console.log('Attestation ID:', output.attestationId)
  console.log('Prism URL:', output.prismUrl)
  console.log('Transaction hash:', output.transaction.hash)
  console.log('Explorer URL:', output.transaction.explorerUrl)
}

attestGamePlayToUser()
```

**That's it!** You've successfully issued an attestation on-chain.

## Output Format

The output of an attestation will be an object like this:

```json
{
  "attestationId": 10,
  "prismUrl": "https://prism.truenetwork.io/query/0x3d0059c3f30ec3ab23ff2f8943f1ee36690ca714a203938c0972ba538741df37",
  "transaction": {
    "hash": "0x3d0059c3f30ec3ab23ff2f8943f1ee36690ca714a203938c0972ba538741df37",
    "explorerUrl": "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Framan.truenetwork.io%2Fws#/explorer/query/0x3d0059c3f30ec3ab23ff2f8943f1ee36690ca714a203938c0972ba538741df37",
    "events": [ "Substrate events data..." ]
  }
}
```

## About Prism

[Prism](https://prism.truenetwork.io) provides a user-friendly explorer for your dApp, empowering consumers to easily verify on-chain attestations. Its dynamic customization ensures a seamless and consistent user experience, reinforcing your dApp's brand and reliability.

![Prism](/prism.png)

## Updating an attestation 
Now, let's try to update an existing attestation:

```typescript
import { gamePlaySchema } from './schemas'
import { getTrueNetworkInstance } from './true-network/true.config'

const updatePlayerAttestation = async () => {
  const api = await getTrueNetworkInstance()

  // Supports popular wallet schemes: Ethereum, Solana & Substrate.
  const ethereumUserWallet = '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97'

  const attestationIndex = 10; // Attestation Index of the one you want to update.

  const output = await gamePlaySchema.updateAttestation(api, ethereumUserWallet, attestationIndex, {
    score: 8,
    durationSpent: 121,
    treesClimbedPerDay: 323,
    villansKilled: 31
  })

  console.log('Attestation ID:', output.attestationId)
  console.log('Prism URL:', output.prismUrl)
  console.log('Transaction hash:', output.transaction.hash)
  console.log('Explorer URL:', output.transaction.explorerUrl)
}

updatePlayerAttestation()
```

**Amazing!** You've successfully updated an issued attestation on-chain.


## Supported blockchain addresses

True Network supports issuing attestations to accounts on:

- **Ethereum** (Ethereum address - H160)
- **Solana** (Solana public key - base58 encoded)
- **Substrate** (Standard Substrate account - AccountId32)

## Attestation playground

You can quickly test issuing attestations using our interactive playground tool:

[playground.truenetwork.io](https://playground.truenetwork.io)

## Need help?

Join our community on [Telegram](https://at.truenetwork.io/community) to ask questions, discuss ideas, or seek support from fellow developers.

