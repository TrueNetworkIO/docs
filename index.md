---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "True Network"
  text: "Bringing Accountability to Anonymity in Web3"
  tagline: "True Network is an on-chain reputation protocol that lets dApps issue verifiable attestations and compute programmable trust scores in minutes."
  image:
    src: /assets/reputation-header.png
    alt: "True Network on-chain reputation graphic"
  actions:
    - theme: brand
      text: Join the Testnet
      link: https://at.truenetwork.io/community
    - theme: alt
      text: Start Building
      link: /quickstart

features:
  - icon: '✅'
    title: Verifiable Attestations
    details: Publish attestations on-chain with issuer metadata, proofs and cryptographic integrity.
  - icon: '⚡'
    title: Reputation Staking & Aging
    details: Stake reputation to back claims and earn decay-resistant credibility through ongoing contribution.
  - icon: '🌐'
    title: Cross-Chain Portability
    details: Carry scores across ecosystems so users keep their identity and trust wherever they build.
  - icon: '🧠'
    title: Programmable Algorithms
    details: Deploy custom scoring logic that blends activity, endorsements and proofs for each use case.
---

<div class="page-background"></div>

<section class="section shell gap-10 md:gap-16">
  <div class="section-header">
    <p class="eyebrow">Problem → Solution</p>
    <h1>Reputation Becomes an Asset</h1>
    <p class="lede">The internet is now a patchwork of isolated profiles. Hiring, lending and verification are manual, while trust is fragmented across silos. True Network fixes this with a substrate-based blockchain that makes it easy to become an issuer, attest to work done and compose algorithms for trust scores.</p>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="card">
      <h3 class="card-title">Why Web3 Needs a Reputation Layer</h3>
      <ul class="icon-list">
        <li><span>🔒</span><div><strong>Isolated identity.</strong> Reputation is stuck inside apps and cannot move across chains or communities.</div></li>
        <li><span>⌛</span><div><strong>Manual verification.</strong> Hiring, credit checks and contributor reviews rely on screenshots and spreadsheets.</div></li>
        <li><span>🤝</span><div><strong>No standard of trust.</strong> Without verifiable attestations, dApps rely on capital-based signals instead of merit.</div></li>
      </ul>
    </div>
    <div class="card accent">
      <h3 class="card-title">True Network’s Answer</h3>
      <ul class="icon-list">
        <li><span>🛠️</span><div><strong>Issuer-first protocol.</strong> Register schemas, attest to completed work and anchor proofs directly on-chain.</div></li>
        <li><span>🧮</span><div><strong>Programmable scoring.</strong> Deploy and update algorithms that combine attestations, staking and decay for living trust scores.</div></li>
        <li><span>🪙</span><div><strong>Reputation as collateral.</strong> Staking and aging mechanics reward active contributors while reducing the cost of trust.</div></li>
      </ul>
      <div class="pill">Private testnet live: Raman Network</div>
    </div>
  </div>
</section>

<section class="section shell grid lg:grid-cols-[1.2fr,1fr] gap-10 md:gap-16 align-start">
  <div>
    <p class="eyebrow">How it Works</p>
    <h2>On-chain attestations, portable identity, flexible algorithms</h2>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div>
          <h4>Issue attestations</h4>
          <p>Create schemas for skills, contributions or milestones. Every attestation carries issuer data, proofs and integrity guarantees.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div>
          <h4>Stake & age reputation</h4>
          <p>Stake reputation to back claims. Aging mechanics keep scores fresh, incentivizing ongoing participation and penalizing dormancy.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div>
          <h4>Compose trust algorithms</h4>
          <p>Developers ship custom scoring logic—weighted endorsements, time decay, slashing or rewards—then expose them to dApps via APIs.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">4</div>
        <div>
          <h4>Carry scores across chains</h4>
          <p>Cross-chain compatibility lets users bring verified reputation to any ecosystem, unlocking mobility for work, credit and governance.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="diagram card">
    <p class="eyebrow">Trust Graph</p>
    <h3 class="card-title">Reputation flow</h3>
    <div class="diagram-grid">
      <div class="diagram-node">Issuers<br/><span>Teams, DAOs, Protocols</span></div>
      <div class="diagram-arrow">Attestations</div>
      <div class="diagram-node">True Network<br/><span>Substrate chain</span></div>
      <div class="diagram-arrow">Scores & APIs</div>
      <div class="diagram-node">dApps<br/><span>Borrowing, hiring, games</span></div>
    </div>
    <p class="small">Algorithm flexibility: deploy multiple scoring models per use case and evolve them without migrations.</p>
    <div class="cta-row">
      <a class="button" href="/guide/write-reputation-algo">Build a reputation algorithm</a>
      <a class="link" href="https://wiki.truenetwork.io">View docs ↗</a>
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-header">
    <p class="eyebrow">Use Cases</p>
    <h2>What developers are building</h2>
    <p class="lede">True Network unlocks capital-efficient, merit-based experiences that were impossible with siloed credentials.</p>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="card">
      <h3 class="card-title">Under-collateralized lending</h3>
      <p>Use on-chain work history and endorsements to underwrite credit without demanding oversized collateral.</p>
    </div>
    <div class="card">
      <h3 class="card-title">On-chain P2P exchanges</h3>
      <p>Filter counterparties by verifiable reputation to reduce fraud and improve marketplace liquidity.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Merit-based governance</h3>
      <p>Align voting power with proven contributions rather than token balances to curb plutocracy.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Gaming & tournaments</h3>
      <p>Authenticate player skill, achievements and fair play across titles with portable attestations.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Content reputation</h3>
      <p>Rank creators and curators by credibility signals so quality rises above noise in social feeds.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Hiring & bounties</h3>
      <p>Verify portfolio proof-of-work and match contributors to bounties automatically with programmatic trust scores.</p>
    </div>
  </div>
</section>

<section class="section shell grid lg:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-16 align-start">
  <div>
    <p class="eyebrow">Mission & Values</p>
    <h2>Accountability for anonymous builders</h2>
    <p class="lede">True Network’s mission is to bring accountability to anonymity and create a merit-based reputation economy. We focus on permissionless access, transparent computation and privacy-preserving attestations that respect users while elevating trustworthy actors.</p>
    <ul class="icon-list compact">
      <li><span>🚀</span><div><strong>Permissionless</strong> — anyone can issue schemas, stake reputation and compose algorithms.</div></li>
      <li><span>📖</span><div><strong>Transparent</strong> — algorithms are auditable and scores are reproducible across clients.</div></li>
      <li><span>🛡️</span><div><strong>Privacy-aware</strong> — proofs and selective disclosure keep sensitive data protected.</div></li>
    </ul>
  </div>
  <div class="card">
    <p class="eyebrow">Product & Roadmap</p>
    <ol class="roadmap">
      <li><div class="dot live"></div><div><strong>Private testnet (Raman Network)</strong><p>Developers can issue attestations, test staking mechanics and expose early APIs.</p></div></li>
      <li><div class="dot"></div><div><strong>Public testnet</strong><p>Open onboarding, explorer launch, early SDK integrations and governance bootstrapping.</p></div></li>
      <li><div class="dot"></div><div><strong>Mainnet launch</strong><p>Production-grade reputation primitives with slashing, aging and bridge support.</p></div></li>
      <li><div class="dot"></div><div><strong>SDK & tooling</strong><p>Expanded TypeScript SDK, reference apps like Dot Cade (gaming) and Skill Sync (developer hiring).</p></div></li>
    </ol>
    <div class="cta-row">
      <a class="button" href="/quickstart">Start with the SDK</a>
      <a class="link" href="/lightpaper/overview">Read the lightpaper ↗</a>
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-header">
    <p class="eyebrow">Team</p>
    <h2>Builders behind True Network</h2>
    <p class="lede">We are a product-first Web3 startup with deep substrate and developer experience.</p>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    <div class="profile">
      <img src="https://avatars.githubusercontent.com/u/12367264?s=200" alt="Portrait of Tushar Ojha" />
      <div>
        <h3 class="card-title">Tushar Ojha — Founder</h3>
        <p class="small">Polkadot Blockchain Academy (Founders Track) • ETHIndia 2022 Winner • Former DevEx at Subsocial Network • 10+ years programming</p>
        <div class="links">
          <a href="https://www.linkedin.com/in/tusharojha">LinkedIn</a>
          <a href="https://twitter.com/tushar0jha">Twitter</a>
        </div>
      </div>
    </div>
    <div class="profile">
      <img src="https://avatars.githubusercontent.com/u/41666999?s=200" alt="Portrait of Tarek Abdalla" />
      <div>
        <h3 class="card-title">Tarek Abdalla — Senior Rust Developer</h3>
        <p class="small">Former Rust developer at Subsocial Network • Open-source contributor to Flutter & Dart • 8+ years building substrate systems</p>
        <div class="links">
          <a href="https://www.linkedin.com/in/tarekabdalla">LinkedIn</a>
          <a href="https://twitter.com/tarekabdalla">Twitter</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="testnet" class="section shell cta">
  <div>
    <p class="eyebrow">Call to Action</p>
    <h2>Join the True Network testnet</h2>
    <p class="lede">Build attestations, deploy reputation algorithms and launch trust-native dApps. We respond quickly to teams shipping on Raman Network.</p>
  </div>
  <div class="cta-actions">
    <a class="button" href="https://at.truenetwork.io/community">Join the community</a>
    <a class="button ghost" href="mailto:contact@truenetwork.io">Contact: contact@truenetwork.io</a>
    <div class="socials">
      <a href="https://t.me/truenetworkio">Telegram</a>
      <a href="https://x.com/truenetworkio">Twitter/X</a>
      <a href="https://github.com/truenetworkio">GitHub</a>
    </div>
  </div>
</section>
