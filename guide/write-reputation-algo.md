---
title: Writing a Reputation Algorithm | True Network SDK | On-Chain Attestations & Reputation Protocol
description: This guide explains how to write a reputation algorithm that processes attestations to produce reputation scores and runs on-chain on the True Network.
lang: en-US
---

# Writing a reputation algorithm

This guide will walk you through the process of creating, testing, and deploying an on-chain reputation algorithm using the True Network SDK.

## Step 1: initialize the ACM (Algorithm Compute Module)

Start by setting up the ACM environment in your existing True Network project. Run this command in your project's root directory (where the `true-network` folder exists):

```shell
npx reputation-cli setup acm
```

This creates an `acm` directory in your project root.

## Step 2: configure schemas for your algorithm

Next, define the schemas your reputation algorithm will utilize by editing the `true.config.ts` file located inside the `true-network` directory:

```typescript
// true-network/true.config.ts

export default {
  //... other configurations

  algorithm: {
    id: undefined,
    path: 'acm',
    schemas: [gamePlaySchema] // add your schemas here
  }
}
```

## Step 3: prepare the ACM environment

After adding schemas, run the following command to generate the `Attestations` helper class, which simplifies reading attestations within your algorithm:

```shell
npx reputation-cli acm-prepare
```

This creates an `Attestations` class inside your `acm` directory.

## Step 4: write your reputation algorithm

Your reputation algorithm is a pure function named `calc`. It reads the **latest** attestation data using the `Attestations` class and computes a reputation score.

Here is a sample reputation algorithm implementation:

```typescript
import { Attestations } from "./attestations";

// Calculate the user's reputation score based on multiple schemas
export function calc(): i64 {
  const dayScoreSchema = Attestations.dayScoreSchema;
  const dailyProgress = Attestations.dailyProgress;

  const daily = dailyProgress.miles + dailyProgress.radioScore;
  const overallProgress = daily + dayScoreSchema.score * (
    (dayScoreSchema.durationSpent + dayScoreSchema.treesClimbedPerDay + dayScoreSchema.villansKilled) / 3
  );

  return overallProgress;
}
```

## Step 5: compile your algorithm

Compile the reputation algorithm to WebAssembly (WASM) by running:

```shell
npx reputation-cli compile
```

This generates an executable `.wasm` binary.

## Step 6: test your algorithm

To test your algorithm locally with real user data, run the following command using a user's wallet address:

```shell
npx reputation-cli test <wallet_address_of_the_user>
```

This will help you validate your algorithm before deploying it on-chain.

## Step 7: deploy your algorithm on-chain

Finally, deploy your algorithm to the True Network blockchain:

```shell
npx reputation-cli deploy
```

Once deployed successfully, you'll receive an `algorithm id`. This identifier is automatically stored in your `true-network/true.config.ts` file and is used to invoke the algorithm on-chain for calculating reputation scores.

---

Congratulations! 🎉 You've successfully created and deployed your reputation algorithm on-chain.

## Need Further Assistance?

If you encounter any issues or have questions, join our [Telegram Community](https://at.truenetwork.io/community) for support and discussion.