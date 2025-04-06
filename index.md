---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "True Network"
  text: "Documentation"
  tagline: "Create Schemas, Attest On-Chain & Build Reputation Algorithms for your apps easily."
  image: 
    src: symbol.png
    alt: "True Network Logo Symbol"
  actions:
    - theme: brand
      text: Start Building
      link: /quickstart
    - theme: alt
      text: About Protocol
      link: /lightpaper/overview

features:
  - icon: '✅'
    title: On-Chain Attestations
    details: Attest to your users as they progress
  - icon: '⚙️'
    title: Custom Reputation Models
    details: Design custom models for reputation system
  - icon: 
      src: 'https://cdn.iconscout.com/icon/free/png-256/free-typescript-3521774-2945272.png'
    title: Typescript SDK
    details: Powerful Typescript SDK for integration
---

<div class="mt-12">
  <h1>Truly Awesome Apps</h1>

  <Projects />
</div>

<div class="w-full rounded-xl mt-12">
  <h1>Highlights & Hackathons</h1>
  <Carousel />
</div>

<div class="mt-12">
  <h1>Recent Blogs</h1>
  <div class="blog-container">
    <div class="blog-list">
      <!-- Blog Item 1 -->
      <div class="blog-item">
        <div class="blog-meta">
          <span class="blog-date">May 19, 2024</span>
          <span class="blog-tag">dApps</span>
        </div>
        <h3 class="blog-title">
          <a href="https://wiki.truenetwork.io/building-sticky-dapps">Building Sticky dApps: The Power of On-Chain Reputation</a>
        </h3>
        <p class="blog-excerpt">
          Forget disruption, web3 dApps are struggling to keep users. A measly 5% stick around after a year, exposing a deeper problem in the ecosystem...
        </p>
      </div>
      <!-- Blog Item 2 -->
      <div class="blog-item">
        <div class="blog-meta">
          <span class="blog-date">Jan 22, 2024</span>
          <span class="blog-tag">Protocol</span>
        </div>
        <h3 class="blog-title">
          <a href="https://wiki.truenetwork.io/about">Welcome to True Network</a>
        </h3>
        <p class="blog-excerpt">
          Building Blockchain for Reputation Layer of the Internet.
          True Network is a substrate-based blockchain that enables entities to become issuers by creating models (i.e., setting weights and algorithms) for different forms of reputation.
        </p>
      </div>
    </div>
    <div class="blog-foote flex flex-1 justify-center mt-4">
      <a target="_blank" href="https://wiki.truenetwork.io" class="view-all-link">View all posts →</a>
    </div>
  </div>
</div>

