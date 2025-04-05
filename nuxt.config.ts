// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
    title: 'Khmer Font Converter | Fix Limon F1 & Unicode Issues',
    meta: [
      { hid: 'description', name: 'description', content: 'Fix Khmer font errors in CapCut easily. Just paste, convert, and copy the text in seconds.' },
      { name: 'keywords', content: 'khmer text converter, unicode khmer converter, limon font converter, khmer legacy font converter' },
      { property: 'og:title', content: 'Khmer Font Converter | Fix Limon F1 & Unicode Issues' },
      { property: 'og:description', content: 'Easily fix Khmer font errors in CapCut with our online converter. Just paste and copy.' },
      { property: 'og:image', content: 'https://yourwebsite.com/path-to-preview-image.jpg' },
      { property: 'og:url', content: 'https://yourwebsite.com' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Khmer Font Converter",
          "description": "Convert Limon F1 to Unicode and fix Khmer font errors.",
          "applicationCategory": "Utility",
          "operatingSystem": "Web",
          "url": "https://khmer-unicode-converter.vercel.app"
        })
      },
    ],
    __dangerouslyDisableSanitizers: ['script']
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
