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
    hostname: 'https://truenetwork.io'
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/symbol.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/symbol.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ff4000' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ff4000' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'keywords', content: 'True Network, on-chain attestations, reputation scoring, web3 infrastructure, crypto attestations, decentralized reputation' }],
    ['meta', { name: 'author', content: 'True Network' }],
    ['meta', { property: 'og:site_name', content: 'True Network Docs' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://truenetwork.io/' }],
    ['meta', { property: 'og:title', content: 'True Network Docs: Attest & Score On-Chain Easily.' }],
    ['meta', { property: 'og:image', content: 'https://truenetwork.io/og-image.png' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],

    // Twitter
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:url', content: 'https://truenetwork.io/' }],
    ['meta', { property: 'twitter:title', content: 'True Network Docs: Attest & Score On-Chain Easily.' }],
    ['meta', { property: 'twitter:image', content: 'https://truenetwork.io/og-image.png' }],
    ['meta', { name: 'twitter:site', content: '@truenetworkio' }],
    ['title', {}, 'True Network Docs: Attest & Score On-Chain Easily.'],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'True Network',
      url: 'https://truenetwork.io/',
      logo: 'https://truenetwork.io/symbol.png',
      sameAs: [
        'https://x.com/truenetworkio',
        'https://www.linkedin.com/company/truenetwork',
        'https://github.com/truenetworkio'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'community',
        url: 'https://at.truenetwork.io/community'
      }
    })],
  ],
  title: "Docs",
  
  titleTemplate: "True Network",
  description: "True Network provides the infrastructure for dApps to give on-chain attestations & build reptuation systems easily in minutes.",
  transformHead({ page, siteData, title, description }) {
    const hostname = 'https://truenetwork.io'
    const canonicalUrl = `${hostname}${page}`
    const metaDescription = description || siteData.description

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is True Network?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'True Network provides infrastructure for dApps to publish verifiable on-chain attestations and build robust reputation systems quickly.'
          }
        },
        {
          '@type': 'Question',
          name: 'How can I start building with True Network?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Follow the quickstart guide to learn how to create attestations, verify proofs, and plug reputation scores into your application.'
          }
        },
        {
          '@type': 'Question',
          name: 'Where can I test True Network features?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use the True Network Playground to experiment with attestations, reputation algorithms, and API endpoints in a guided environment.'
          }
        }
      ]
    }

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      url: hostname,
      name: title || 'True Network Docs',
      description: metaDescription,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${hostname}/search?q={query}`,
        'query-input': 'required name=query'
      }
    }

    return [
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { name: 'description', content: metaDescription }],
      ['meta', { property: 'og:description', content: metaDescription }],
      ['meta', { property: 'twitter:description', content: metaDescription }],
      ['script', { type: 'application/ld+json' }, JSON.stringify([websiteSchema, faqSchema])]
    ]
  },
  themeConfig: {
    logo: '/symbol.png',
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
        text: 'Zero To Hero Guide',
        items: [
          { text: 'Starting a new project ✨', link: '/guide/start-new-project' },
          { text: 'Making an attestation', link: '/guide/make-an-attestation' },
          { text: 'Verifying user attesations', link: '/guide/verify-attestation' },
          {
            text: 'Reputation Algorithms', collapsed: false, link: '/guide/write-reputation-algo', items: [
              {
                text: 'Writing a reputation algo',
                link: '/guide/write-reputation-algo'
              },
              {
                text: 'Fetching reputation score',
                link: '/guide/fetch-reputation-score'
              }
            ]
          },
          { text: 'Essential utilities functions', link: '/guide/utilities' }
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
    announcementBar: {
      id: 'docs-2024-11-updates',
      text: 'Introducing Social Contracts: Using Reputation as Asset.',
      links: [
        { label: 'Pragma Talk', href: 'https://youtu.be/fMJm_E96ZWE?si=y5k6dLDM3eOz3eG-' }
      ],
      dismissible: true
    }
  }
})
