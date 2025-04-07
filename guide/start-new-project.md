---
title: Start a new project | True Network SDK | On-Chain Attestations & Reputation Protocol
description: Let's start by creating a new project using True Network SDK in easy steps for giving on-chain attestations.
lang: en-US
---

# Starting a new project ✨

This development guide helps you start a new project leveraging the on-chain attestations & reputation features provided by the True Network Protocol.

In this guide, we will create a new project for our dapp and register the issuer on the network.

## Initiating a new project
To start, let's create a new project with your framework of choice:

1. **Node.js**: Particularly useful when you're building an attestation provider or using your server to issue attestations.
<br /><br />Run the following command locally:

```shell
mkdir trueProject && cd trueProject && npm init -y
```

This is also a great starting point if you want to focus on building a reputation algorithm for apps to use.

------

2. **Next.js**: Build a dapp that people will use, leveraging verifiable attestations using the protocol.
<br /><br />Run the following command locally:
```shell
npx create-next-app my-app --example https://github.com/truenetworkio/next-starter
```

Then, switch to the app directory:
```shell
cd my-app
```

## Setup the True Network Config

We've created a CLI tool called Reputation CLI for almost all your project setup and utility needs. You can use this to set up the configuration for Raman Network (testnet) as follows:

Inside your project directory, (make sure to use **sudo** on mac/linux): 
```shell
npx reputation-cli init .
```

This will ask a series of questions, and in the case of Next.js template, it will ask to override the existing issuer (select Yes). You'll be asked to choose an issuer name - pick a name that best represents your app/use case as it will be registered on-chain.

The CLI will automatically create the `true-network` directory inside your project and set up the project with the required network configuration.

Note: The `reputation-cli init` command creates a secret private key for the issuer in the **.env** file. If you're using Next.js, you should add the `NEXT_PUBLIC_` prefix to this key in both the **.env and true.config.ts** files.

## Faucet: Get Test Tokens for True Network
Test tokens are like free API credits that grant access to the True Network's Raman Testnet, which you'll use to build your apps.

We have an active faucet bot in our Developer's Telegram Group that you can use easily. This group will also be useful for support and questions.

[Join the Group](https://at.truenetwork.io/community)

Use this command for test tokens:
```shell
/request <your_wallet_address>
```

> You can find the wallet address in the CLI's output from the init command or inside the true.config.ts file.

## Register the Issuer On-Chain

Every dapp or attestation provider on True Network registers as an issuer for users to easily identify & recall them. The registration process is simple and can be completed via our Reputation CLI tool:

```shell
npx reputation-cli register
```

> This is only required once and will be minted on the network permanently.

**That's it!** You have successfully set up the project and registered the issuer on-chain.

::: info Facing any issues?
Join the community and ask your questions: [Telegram Group](https://at.truenetwork.io/community).
:::