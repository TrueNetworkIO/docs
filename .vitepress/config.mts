import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  sitemap: {
    hostname: 'https://docs.truenetwork.io'
  },

  head: [
    ['link', { rel: 'icon', href: '/assets/symbol.png' }], 
    ['title', {}, 'True Network Docs: Attest & Score On-Chain Easily.'],
    
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://docs.truenetwork.io/' }],
    ['meta', { property: 'og:title', content: 'True Network Docs: Attest & Score On-Chain Easily.' }],
    ['meta', { property: 'og:description', content: 'True Network provides the infrastructure for dApps to give on-chain attestations & build reptuation systems easily in minutes.' }],
    ['meta', { property: 'og:image', content: 'https://docs.truenetwork.io/og-image.png' }],
    
    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: 'https://docs.truenetwork.io/' }],
    ['meta', { property: 'twitter:title', content: 'True Network Docs: Attest & Score On-Chain Easily.' }],
    ['meta', { property: 'twitter:description', content: 'True Network provides the infrastructure for dApps to give on-chain attestations & build reptuation systems easily in minutes.' }],
    ['meta', { property: 'twitter:image', content: 'https://docs.truenetwork.io/og-image.png' }],
  ],
  title: "Docs",
  
  titleTemplate: "True Network",
  description: "True Network provides the infrastructure for dApps to give on-chain attestations & build reptuation systems easily in minutes.",
  themeConfig: {
    logo: 'symbol.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Quickstart', link: '/quickstart' },
      { text: 'Playground', link: 'https://playground.truenetwork.io' },
      { text: 'Join Community 💬', link: 'https://at.truenetwork.io/community' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Quickstart ⚡️', link: '/quickstart' },
          { text: 'Attestations & Types', link: '/attestation' },
          { text: 'Tips & Tooling', link: '/tooling' }
        ]
      },
      {
        text: 'Protocol Lightpaper',
        items: [
          { text: 'Overview 📃', link: '/lightpaper/overview' },
          { text: 'Problem in the market', link: '/lightpaper/problem' },
          { text: 'Why On-Chain Reputation?', link: '/lightpaper/why-reputation' },
          { text: 'Technical Architecture', link: '/lightpaper/architecture' },
          {
            text: 'Protocol Components', collapsed: false, link: '/lightpaper/protocol/attestations', items: [
              {
                text: 'On-Chain Attestations',
                link: '/lightpaper/protocol/attestations'
              },
              {
                text: 'Algorithm Module',
                link: '/lightpaper/protocol/reputation'
              },
              {
                text: 'Reputation Utility Module',
                link: '/lightpaper/protocol/utility'
              }
            ]
          },
          { text: 'Reputation Subjectiveness', link: '/lightpaper/subjective' },
          { text: 'Our Mission', link: '/lightpaper/mission' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/truenetworkio' },

      { icon: 'twitter', link: 'https://x.com/truenetworkio' },

      { icon: 'linkedin', link: 'https://linkedin.com/company/truenetwork' }
    ],
    footer: {
      message: 'The Reputation Layer of the Internet',
      copyright: 'Copyright © 2024 Jupiter Innovations Lab Inc'
    },
  }
})
