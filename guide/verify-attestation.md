---
title: Verifying Attestations | True Network SDK | On-Chain Attestations & Reputation Protocol
description: Let's start by verifying & reading on-chain attestations on True Network Protocol.
lang: en-US
---

# Verifying user attestations

This guide explains how to retrieve and verify on-chain attestations for user accounts using the True Network SDK.

## Prerequisites

Ensure you've initialized the True Network SDK and have the helper function `getTrueNetworkInstance` available in your project.

## Defining a schema

First, define the schema that matches your attestation structure:

```typescript
import { Schema, Text, U64 } from "@truenetworkio/sdk"

const userSignupSchema = Schema.create({
  name: Text,
  dateOfRegistry: U64,
  profileCid: Text
})
```

## Reading user attestations

Here's a quick example of how you can fetch attestations for a specific user's wallet address:

```typescript
// Importing the trueApi from the helper function.
const trueApi = await getTrueNetworkInstance();

// User wallet address (EVM, Solana, DOT, etc.).
const userWalletAddress = 'nJrsrH8dov9Z36kTDpabgCZT8CbK1FbmjJvfU6qbMTG4g4c';

// Fetching attestations for the user.
const response = await userSignupSchema.getAttestations(
  trueApi,
  userWalletAddress
);

console.log(response);
```

You can quickly test and run these examples directly using our interactive playground at [playground.truenetwork.io](https://playground.truenetwork.io).

## Example response

The response would be an array of attestations like this:

```json
[
  {
    "profileCid": "bafyreicnokmhmrnlp2wjhyk2haep4tqxiptwfrp2rrs7rzq7uk766chqvq",
    "name": "Ram",
    "dateOfRegistry": 1744027982362
  },
  {
    "profileCid": "baguqeerasords4njcts6vs7qvdjfcvgnume4hqohf65zsfguprqphs3icwea",
    "name": "Ram",
    "dateOfRegistry": 1743674189773
  }
  // More attestations...
]
```

## Future integration: L2 Light-Clients

We are currently working on enabling lightweight, client-based attestation and reputation verification for popular Layer 2 networks such as Arbitrum, Base, Optimism, and others. Stay tuned for updates!

## Need further assistance?

Join our community on [Telegram](https://at.truenetwork.io/community) for questions, support, and discussions.

