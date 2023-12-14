// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
    title: 'Limon F1 | Converter | Khmer fonts — ​ពុម្ព​អក្សរ​ខ្មែរ | Capcut',
    meta: [
      { name: 'description', content: 'This is a great webiste site to handle font Khmer error on Capcut. What you need is just paste and copy.' },
      { name: 'keywords', content: 'khmer text converter, unicode khmer converter, online khmer unicode converter, free khmer unicode converter, khmer script to unicode converter, convert khmer font to unicode, transliterate khmer to unicode, khmer unicode encoding, unicode khmer typography, digital khmer documents, khmer legacy font converter, limon font converter, khmer pronunciation guide, khmer dictionary integration, copy-paste khmer unicode, khmer unicode keyboard layout, khmer document translation, batch khmer unicode conversion, custom khmer unicode settings, បម្លែងអក្សរខ្មែរទៅយូនីកូដ, អក្សរខ្មែរតួអក្សរយូនីកូដ, ស្គិតស្ទូរខ្មែរយូនីកូដ' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'google-adsense-account', content: 'ca-pub-4357194654851697' },
    ],
    script: [
      {
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4357194654851697",
        crossorigin: "anonymous",
        async: true
      }
    ]
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: '~/plugins/vercel.ts'}
  ],
})
