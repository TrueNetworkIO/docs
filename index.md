---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "True Network"
  text: "Reputation Becomes an Asset."
  tagline: "The programmable layer for on-chain identity and reputation—issue verifiable attestations, run custom trust algorithms, and move scores across chains."
  image:
    src: /assets/reputation-header.png
    alt: "True Network on-chain reputation graphic"
  actions:
    - theme: brand
      text: Join the Raman Testnet
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
    <p class="eyebrow">Programmable identity & reputation</p>
    <h1>Unifying work, proof, and trust</h1>
    <p class="lede">True Network is a substrate chain purpose-built for attestations and trust. dApps become issuers, anchor proofs, and deploy algorithms so identity, credit and reputation can travel fluidly across chains.</p>
  </div>
  <div class="grid md:grid-cols-[1.2fr,0.8fr] gap-6 items-start">
    <div class="card">
      <h3 class="card-title">Problem → Solution</h3>
      <ul class="icon-list">
        <li><span>🔒</span><div><strong>Silos break trust.</strong> Identity and history stay locked in apps; coordination requires screenshots and spreadsheets.</div></li>
        <li><span>⌛</span><div><strong>Manual verification.</strong> Hiring, credit, and bounty payouts rely on humans instead of verifiable proofs.</div></li>
        <li><span>🌐</span><div><strong>Cross-chain gaps.</strong> Moving reputation between ecosystems is brittle and expensive.</div></li>
        <li><span>🛠️</span><div><strong>True Network fixes it.</strong> Issue attestations, stake reputation, and run portable scoring algorithms that any dApp can consume.</div></li>
      </ul>
      <div class="pill">Raman private testnet live for builders</div>
    </div>
    <div class="card accent diagram">
      <p class="eyebrow">Trust flow</p>
      <h3 class="card-title">Proofs → Scores → Utility</h3>
      <div class="diagram-grid">
        <div class="diagram-node">Issuers<br/><span>Teams, DAOs, Protocols</span></div>
        <div class="diagram-arrow">Attestations</div>
        <div class="diagram-node">True Network<br/><span>Programmable reputation</span></div>
        <div class="diagram-arrow">Scores & APIs</div>
        <div class="diagram-node">dApps<br/><span>Credit, hiring, games</span></div>
      </div>
      <p class="small">Built on Substrate with cross-chain pathways so reputation moves wherever users build.</p>
      <div class="cta-row">
        <a class="button" href="/guide/write-reputation-algo">Design an algorithm</a>
        <a class="link" href="https://wiki.truenetwork.io">Docs ↗</a>
      </div>
    </div>
  </div>
</section>

<section class="section shell grid lg:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-16 align-start">
  <div>
    <p class="eyebrow">How we do it</p>
    <h2>Fluid identity rails for every chain</h2>
    <div class="steps">
      <div class="step">
        <div class="step-number">1</div>
        <div>
          <h4>Attest with structure</h4>
          <p>Create schemas, attach issuer metadata, and sign proofs. Merkle-ready storage makes attestations queryable and compact.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">2</div>
        <div>
          <h4>Programmable trust</h4>
          <p>Deploy scoring algorithms with staking, aging, expiry and custom logic—no migrations required as they evolve.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">3</div>
        <div>
          <h4>Portable reputation</h4>
          <p>Light-client bridging, signature types, and selective disclosure let users carry trust across EVM chains and beyond.</p>
        </div>
      </div>
      <div class="step">
        <div class="step-number">4</div>
        <div>
          <h4>Build apps fast</h4>
          <p>Use the upgraded JS SDK, CLI, and issuer explorer to issue, verify, and index attestations for consumer-ready UX.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <p class="eyebrow">Roadmap snapshot</p>
    <ol class="roadmap">
      <li><div class="dot live"></div><div><strong>Now: Raman private testnet</strong><p>Developers experiment with attestations, staking, and algorithm prototypes.</p></div></li>
      <li><div class="dot"></div><div><strong>Next 3 months</strong><p>Merkle storage for attestations, light-client bridges to EVM/Solana, IPFS support, richer SDK/CLI, issuer explorer, and private attestations.</p></div></li>
      <li><div class="dot"></div><div><strong>Next 6 months</strong><p>Public testnet → mainnet prep with token bridges, staking, devops hardening, multi-app launches, and BD partnerships.</p></div></li>
      <li><div class="dot"></div><div><strong>Vision</strong><p>Social contracts and reputation-native apps built on a unified, programmable identity layer.</p></div></li>
    </ol>
    <div class="cta-row">
      <a class="button" href="/quickstart">Start with the SDK</a>
      <a class="link" href="/lightpaper/overview">Read the lightpaper ↗</a>
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-header">
    <p class="eyebrow">What we do</p>
    <h2>Programmable reputation for real apps</h2>
    <p class="lede">True Network makes identity and credit usable: issuers attest on-chain, algorithms score contextually, and dApps consume trust programmatically.</p>
  </div>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="card">
      <h3 class="card-title">Under-collateralized lending</h3>
      <p>Combine work history, skill proofs, and staking to underwrite fairer credit.</p>
    </div>
    <div class="card">
      <h3 class="card-title">On-chain P2P & commerce</h3>
      <p>Filter counterparties by portable trust scores to cut fraud and boost liquidity.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Merit-based governance</h3>
      <p>Align votes with proven contributions instead of token balances.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Gaming & tournaments</h3>
      <p>Carry player skill and achievements across titles for fair matchmaking and rewards.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Content & social reputation</h3>
      <p>Rank creators and curators by verifiable signals so quality wins over noise.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Hiring & bounties</h3>
      <p>Verify proof-of-work automatically and route talent to roles or tasks.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Airdrops & rewards</h3>
      <p>Distribute incentives based on reputation metrics, not only token holdings.</p>
    </div>
    <div class="card">
      <h3 class="card-title">Attestation-based bridges</h3>
      <p>Move trustworthy state across chains with bridgeable attestation data.</p>
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-header">
    <p class="eyebrow">Highlights & Hackathons</p>
    <h2>Where builders shipped with True Network</h2>
    <p class="lede">ETHIndia finalists, Pragma demos, UN University showcase, and community projects across gaming, social, and identity.</p>
  </div>
  <Carousel />
</section>

<section class="section shell">
  <div class="section-header">
    <p class="eyebrow">Apps built on True</p>
    <h2>Community projects</h2>
    <p class="lede">Start from real examples: gaming, social reputation, IoT proofs and more.</p>
  </div>
  <Projects />
</section>

<section class="section shell grid lg:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-16 align-start">
  <div>
    <p class="eyebrow">Mission & values</p>
    <h2>Accountability with privacy by design</h2>
    <p class="lede">True Network exists to make on-chain identity usable. We bring accountability to anonymity, enabling a merit-based reputation economy with permissionless access, transparent computation, and privacy-preserving proofs.</p>
    <ul class="icon-list compact">
      <li><span>🚀</span><div><strong>Permissionless</strong> — anyone can issue schemas, stake reputation, and deploy algorithms.</div></li>
      <li><span>📖</span><div><strong>Transparent</strong> — algorithms are auditable; scores are reproducible across clients.</div></li>
      <li><span>🛡️</span><div><strong>Privacy-aware</strong> — selective disclosure, private attestations, and TEE/zk-friendly design.</div></li>
    </ul>
  </div>
  <div class="card">
    <p class="eyebrow">Product momentum</p>
    <p class="small">Shipping towards a unified identity & reputation fabric with SDK upgrades, indexers, issuer explorer, Prism UI refresh, and devops for chain + tooling.</p>
    <div class="cta-row">
      <a class="button" href="/quickstart">Build on True</a>
      <a class="link" href="https://github.com/truenetworkio">GitHub ↗</a>
    </div>
  </div>
</section>

<section class="section shell">
  <div class="section-header">
    <p class="eyebrow">Team</p>
    <h2>Builders behind True Network</h2>
    <p class="lede">We are a digital-native startup shipping protocol, SDKs, apps, and community programs.</p>
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
    <p class="eyebrow">Call to action</p>
    <h2>Join the Raman testnet</h2>
    <p class="lede">Issue attestations, generate proofs, and build apps atop the True Network identity layer. We respond quickly to teams shipping on Raman.</p>
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
