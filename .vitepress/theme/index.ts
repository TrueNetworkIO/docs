// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Carousel from './components/Carousel.vue'
import AnnouncementBar from './components/AnnouncementBar.vue'
import Projects from './components/Projects.vue'
import './style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => h(AnnouncementBar)
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Carousel', Carousel)
    app.component('Projects', Projects)
  }
} satisfies Theme
