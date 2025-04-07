---
title: Tips & Tooling | True Network | The Web3 Reputation Protocol
description: Explore the tooling infrastructure that makes it easy for you to build on top of True Network's On-Chain Attestation & Reputation.
lang: en-US
---

# Tips & Tooling

True Network has launched its private testnet, called the [Raman Network](https://raman.truenetwork.io), named after [C.V. Raman](https://en.wikipedia.org/wiki/C._V._Raman), the Indian scientist who discovered the Raman Effect. The current infrastructure of the Raman Network serves as version 0.1 of the True Network protocol. We already have a few dApps showing interest in building on top of it.

Raman Network includes early versions of three core pallets: Issuer, Credential, and Algorithm. Projects can register themselves as issuers and begin providing on-chain attestations to users within the Polkadot ecosystem in seconds.

---

Let's first take a look at the tools we've built to help you get started quickly.

- **Playground** ([link](https://www.playground.truenetwork.io))<br/>
True Network's Playground is your central hub for quick SDK testing and experimentation. Its web code editor lets you run SDK programs on your device instantly, without any installation needed.

- **Reputation CLI** ([link](https://www.npmjs.com/package/reputation-cli))<br/>
It offers a set of core features necessary for starting a new project, registering as an issuer, and deploying algorithms. While it's still a work in progress, it's live and ready for you to start using. If you encounter any issues, please report them to the community.


- **Typescript SDK** ([link](https://www.npmjs.com/package/@truenetworkio/sdk))<br/>
The SDK provides a simple interface for building server-side and client-side applications that interact directly with True Network nodes. The current SDK version supports the latest node release and comes pre-configured for the Raman Network.
  > Note: We recommend setting up the SDK environment in your project using our CLI, which handles all the necessary initial setup.


- **Prism Explorer** ([link](https://prism.truenetwork.io))<br/>
Prism provides a user-friendly explorer for your dApp, empowering consumers to easily verify on-chain attestations. Its dynamic customization ensures a seamless and consistent user experience, reinforcing your dApp's brand and reliability.


- **Blockchain Explorer** ([link](https://truenetwork.io/explorer/raman))<br/>
Explore the chain state, view transactions sent on-chain, and observe the extrinsics being called. While the explorer provides insights, it's not the best platform for creating and calling extrinsics directly, as byte conversion issues might occur. These are better handled within the SDK.


- **Example Repository** ([link](https://github.com/TrueNetworkIO/true-example))<br/>
This repository serves as a basic demo of the True Network’s features and SDK tools. It's a great starting point to get an early understanding, and you can refer to it when you have questions or need guidance