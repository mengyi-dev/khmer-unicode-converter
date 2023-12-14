// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
      meta: {
      title: 'Limon F1 | Converter | Khmer fonts — ​ពុម្ព​អក្សរ​ខ្មែរ | Capcut',
      description: 'This is a great webiste site to handle font Khmer error on Capcut. What you need is just paste and copy',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
    },
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
