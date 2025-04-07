---
title: Fetching Reputation Score | True Network SDK | On-Chain Attestations & Reputation Protocol
description: This guide explains how to fetch a user's reputation score on-chain in verifiable manner using the True Network SDK.
lang: en-US
---

# Fetching reputation score ⚡️

This guide demonstrates how to fetch a user's **on-chain reputation score** quickly and seamlessly using the True Network SDK. Integrate accurate, verifiable reputation data directly into your decentralized application (dApp) to power user engagement, gating, and reward mechanisms.

## Fetching a user's reputation score

Follow these simple steps to retrieve a reputation score from True Network using the SDK:

### Step 1: setup the True Network SDK

First, ensure you've imported and initialized the SDK helper:

```typescript
// Import helper to initialize connection to True Network
const trueApi = await getTrueNetworkInstance();
```

### Step 2: define algorithm id and user address

You'll need two important pieces of information:

- **Algorithm ID**: The ID of the deployed reputation algorithm you're using.
- **User Wallet Address**: The blockchain address of the user (supports Ethereum, Solana, and Polkadot addresses).

```typescript
// Specify the algorithm ID you deployed earlier
const algoId = 158;

// Specify the user's wallet address (can be Ethereum, Solana, or DOT)
const userWalletAddress = 'nJrsrH8dov9Z36kTDpabgCZT8CbK1FbmjJvfU6qbMTG4g4c';
```

### Step 3: fetch the reputation score

Fetch the reputation score directly using the SDK's built-in function:

```typescript
const reputation = await trueApi.getReputationScore(algoId, userWalletAddress);

// Return or use the reputation value in your app
return reputation;
```

🎉 **That's it!** You've successfully fetched a verifiable, numeric reputation score directly from True Network.

## Using reputation scores in your dapp 

Once fetched, the reputation score is ready to power engaging user experiences such as:

- **Access gating** for special content or features
- **Creating dynamic tournaments & leaderboards**
- **Incentivizing and rewarding user activities**
- **Building personalized experiences**

---

## Verifiable & transparent scores

Every score fetched from True Network is computed directly on-chain, ensuring complete transparency, decentralization, and verifiability. No hidden layers—your users can trust their reputation is calculated fairly and openly.

---

## Cross-chain compatibility coming soon

We're actively working on integrating reputation score verification directly into popular Layer 2 solutions, including:

- **Optimism**
- **Arbitrum**
- **Base**

Soon, you'll be able to access True Network reputation scores seamlessly at the smart-contract level across multiple chains.

> **Open Source Contribution**:  
> True Network is proudly open source. Join our community and help shape the future of Web3 reputation. We're welcoming contributors to collaborate on expanding integrations across chains and ecosystems.

---

🧑‍💻 **Start experimenting now!**  
Try fetching reputation scores live using our interactive [**Playground Tool**](https://playground.truenetwork.io).

Need help or want to contribute? Join the discussion in our [community Telegram group](https://at.truenetwork.io/community). 🚀