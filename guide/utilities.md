---
title: Utility Functions | True Network SDK | On-Chain Attestations & Reputation Protocol
description: This guide explains the utility functions from True Network SDK that helps you build hassle-free and quickly.
lang: en-US
---

# Explore Utility Functions

Explore powerful utility functions included in the **True Network SDK**, designed to simplify your development experience and accelerate integration of on-chain attestations and reputation into your dApps.

## Check TRUE token balance

Easily retrieve a user's free balance of TRUE tokens available on True Network.

**Example Usage:**

```typescript
// Import the SDK helper function.
const trueApi = await getTrueNetworkInstance();

// User wallet address (Ethereum, Solana, or Polkadot).
const userWalletAddress = 'nJrsrH8dov9Z36kTDpabgCZT8CbK1FbmjJvfU6qbMTG4g4c';

// Fetch user's free TRUE token balance.
const balance = await trueApi.getBalance(userWalletAddress);

// View the response.
return balance;
```

**Output Structure:**
```json
{
  "text": "999.0639 milli TRUE",
  "numeric": 999063955047,
  "decimals": 12
}
```

**Note:**  
This balance represents the user's *free* tokens available to transfer. Users may have additional tokens reserved or locked for staking or other protocol functions.

## Generate a BlakeTwo256 Hash

Create a cryptographic hash (BlakeTwo256) from any input string. Useful for securely referencing data within attestations.

**Example Usage:**

```typescript
const randomString = 'ABCDEFHGHIJKLMNOPQRSTUVWXYZ';

// Generate hash using BlakeTwo256 algorithm.
const hash = '0x' + stringToBlakeTwo256Hash(randomString);

// View the hash.
return hash;
```

Use these hashes when you need unique, verifiable identifiers for on-chain data.


## Get schema hash

Generate the hash of an attestation schema object. This hash uniquely identifies your schema on-chain.

**Example Usage:**

```typescript
// Define schema using SDK.
const userSignupSchema = Schema.create({
  name: Text,
  dateOfRegistry: U64,
  profileCid: Text
});

// Get schema hash.
const schemaHash = userSignupSchema.getSchemaHash();

// View the schema hash.
return schemaHash;
```

Use the returned hash for on-chain schema references and attestation verification.

## Get issuer hash

Quickly retrieve your issuer's unique identifier hash from the SDK instance.

**Example Usage:**

```typescript
// Import the SDK helper function.
const trueApi = await getTrueNetworkInstance();

// Retrieve issuer hash.
const issuerHash = trueApi.issuerHash;

// View the issuer hash.
return issuerHash;
```

This issuer hash can verify attestations issued from your registered account.

## 🚀 Test these Functions Live!

Try out all these utility functions—and many more—directly in our interactive [**Playground Tool**](https://playground.truenetwork.io).

Experiment, test, and accelerate your integration workflow effortlessly.

---

Need more assistance or have questions?  
Join our supportive developer community at our [**Telegram Group**](https://at.truenetwork.io/community).