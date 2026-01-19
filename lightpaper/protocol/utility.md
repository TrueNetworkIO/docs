---
title: Reputation Utility Module | Utilising points for rewards, staking & retention
description: This document explains the working of reputation as a secondary asset after money, it explains the working of reputation utility module of True Network that enables staking of points, receiving rewards, reputation aging and more.
lang: en-US
---

# Reputation Utility Module (RUM) 

The **Reputation Utility Module (RUM)** consists of helper methods built on the native layer after extensive research and experimentation. These methods aim to bring structural consistency to the protocol and **enhance the usability** of the **generated reputation scores**.

RUM is a Substrate pallet that provides methods for managing the generated reputation scores. This allows dApps to use reputation scores as security from users or to reward users for their contributions.

__RUM effectively turns reputation into an asset within the system.__

Initially, a few methods are planned, but more will be added through ongoing research and development, as well as in response to the needs of dApps.

### RUM's Features

RUM comprises of multiple utility methods that enables dapps to build great user experience and offers the end-consumer more control over the reputation they earned by contributing into the system / dapp. The most prominent features include:

1. **Reputation Staking** <br/>
  Assets staking has now become a common practice in web3, it gives financial assurance of rightful behavior by the involved parties thus brings accountability in the anonymous world, – but it’s fundamentally a friction too in terms of high initial value needs to be locked (promoting only the riches). <br /> <br />
  Reputation Staking is on the other hand permissionless, and easily accessible for individuals to leverage their rightful behavior in the past to get subsidy in asset staking. **It lowers the barrier for entry for people and values their past work.**<br/> <br/>
  In case the user lacks integrity, the reputation gets slashed leaving a scar for times to come making it a non-incentivised thing to do. 

2. **Reputation Aging**<br/>
  It is a common understanding for reputation to age over time, encouraging people to keep working / contributing significantly else the reputation fades away. This also opens the space for new individuals in the system to get reputed if the old ones are not contributing enough. <br/><br/>
  With passing of time, dApps can use the pallet method to dry-out the reputation earned by non-performing individuals as a part of the protocol.<br/><br/> `Rnew = Aging(Rold , curves.linear, scale.one)`


3. **Reputation Governance**<br/>
  Governance today is only explored based on ownership of the assets, that involves users to have skin in the game. Polkadot has mastered the Conviction Voting mechanism to ensure everyone gets heard. At s True Network, we also plan to research and implement a Reputation based governance system for a few configurations at the protocol level. This will be complemented with Aging techniques ensuring the system is open for new participants.
