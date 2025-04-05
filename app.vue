<template>
  <div>
    <Head>
      <Title>Khmer Font Converter | Fix Limon F1 & Unicode Issues</Title>
      <meta hid="description" name="description" content="Easily fix Khmer font errors in CapCut with our online converter. Just paste and copy.">
      <meta property="og:title" content="Khmer Font Converter | Fix Limon F1 & Unicode Issues">
      <meta property="og:description" content="Easily fix Khmer font errors in CapCut with our online converter. Just paste and copy.">
      <meta name="keywords" content="khmer text converter, unicode khmer converter, online khmer unicode converter, free khmer unicode converter, khmer script to unicode converter, convert khmer font to unicode, transliterate khmer to unicode, khmer unicode encoding, unicode khmer typography, digital khmer documents, khmer legacy font converter, limon font converter, khmer pronunciation guide, khmer dictionary integration, copy-paste khmer unicode, khmer unicode keyboard layout, khmer document translation, batch khmer unicode conversion, custom khmer unicode settings, បម្លែងអក្សរខ្មែរទៅយូនីកូដ, អក្សរខ្មែរតួអក្សរយូនីកូដ, ស្គិតស្ទូរខ្មែរយូនីកូដ">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Fasthand&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
      <script type='text/javascript' src='//pl26298009.effectiveratecpm.com/e6/44/b6/e644b672f9f6acd6ae49bcbaca8026f7.js'></script>
    </Head>

    <div class="bg-blue-900 min-h-screen text-white">
      <div class="container mx-auto p-5">
        <header class="flex flex-row sm:flex-row justify-between items-center py-4 border-b border-blue-700">
          <div class="flex items-center gap-2 mb-4 sm:mb-0">
            <img src="@/assets/img/logo.png" width="180" alt="logo">
          </div>
          <div class="flex items-center gap-4">
            <div class="relative">
              <button class="p-2 w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-600" @click="toggleLanguageMenu"><i class="fas fa-globe"></i></button>
              <div v-if="showLanguageMenu" class="absolute right-0 mt-2 w-32 bg-white text-blue-900 rounded-lg shadow-lg">
                <button @click="changeLanguage('km')" class="block w-full text-left px-4 py-2 hover:bg-blue-100">ភាសាខ្មែរ</button>
                <button @click="changeLanguage('en')" class="block w-full text-left px-4 py-2 hover:bg-blue-100">English</button>
              </div>
            </div>
          </div>
        </header>

        <div class="mt-6 text-center">
          <div class="flex justify-center gap-4 font-bold text-2xl">
            បំលែងអក្សរខ្មែរ <span class="text-blue-500 font-bold">Limon F1</span> ទៅ <span class="text-blue-500 font-bold">Unicode</span> <br>
          </div>
        </div>

        <div class="mt-6 bg-white text-gray-900 rounded-lg shadow-md p-5">
          <div class="flex flex-col sm:flex-row">
            <div class="w-full sm:w-1/2 p-2">
              <p class="font-semibold">{{ language === 'km' ? 'ភាសាខ្មែរ' : 'Khmer Text' }}</p>
              <textarea v-model="inputValue" class="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="10" :placeholder="language === 'km' ? 'បិទភ្ជាប់អត្ថបទខ្មែរ' : 'Paste your Khmer text here...'"></textarea>
              <p class="text-gray-500 text-sm mt-1">{{ inputValue.length }}/10000</p>
              <button @click="submitData" class="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" :disabled="isLoading">
                {{ isLoading ? (language === 'km' ? 'កំពុងបម្លែង...' : 'Converting...') : (language === 'km' ? 'បម្លែង' : 'Convert') }}
              </button>
            </div>
            <div class="w-full sm:w-1/2 p-2">
              <p class="font-semibold">{{ language === 'km' ? 'បានបំលែង' : 'Unicode' }}</p>
              <div class="relative">
                <textarea v-model="result" class="english-font w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" rows="10" readonly></textarea>
                <button @click="copy" class="absolute bottom-2 right-2 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700">
                  {{ copied ? (language === 'km' ? 'បានចម្លង!' : 'Copied!') : (language === 'km' ? 'ចម្លង' : 'Copy') }}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div v-if="copied" class="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-lg shadow-md">
          <p>{{ language === 'km' ? 'បានចម្លងទៅកាន់ក្តារចម្លង' : 'Copied to clipboard' }}</p>
        </div>
      </div>
      <div class="mx-auto w-fit flex flex-col lg:flex-row gap-x-10 mt-10"> 
        <div class="flex flex-col items-center">
          <p class="mb-2">{{ language === 'km' ? 'ចូលទៅទាញយក Limon Font 👇' : 'Download Limon Font 👇' }}</p>
          <a href="https://khmersoft.net/download-font-limon-khmer-font-for-your-computer/" target="_blank">
            <button class="rounded-full px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">{{ language === 'km' ? 'ទាញយក Limon Font' : 'Download Limon Font' }}</button>
          </a>
        </div>
        <div class="flex flex-col items-center mt-4 lg:mt-0">
          <p class="mb-2">{{ language === 'km' ? 'ប៉ាវ កាហ្វេ😁' : 'Buy me a coffee😁' }}</p>
          <a href="https://link.payway.com.kh/aba?id=DE6AAD8E7E3C&code=360598&acc=500050202&dynamic=true" target="_blank">
            <button class="rounded-full px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">{{ language === 'km' ? 'បាញ់លុយ' : 'Pay now' }}</button>
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      openDailog: false,
      inputValue: '',
      result: '',
      isLoading: false,
      copied: false,
      language: 'km',
      showLanguageMenu: false,
    }
  },
  methods: {
    async submitData() {
      this.isLoading = true
      try {
        const response = await axios.post('https://khmer-converter-api.vercel.app/converter', 
          [{
            "content": this.inputValue
          }])
        this.result = response.data[0]['result']
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },
    copy() {
      this.copied = true
      navigator.clipboard.writeText(this.result)
      this.closeAlert()
    },
    closeAlert() {
      setTimeout(() => {
        this.copied = false
      }, 3000)
    },
    changeLanguage(lang) {
      this.language = lang
      this.showLanguageMenu = false
    },
    toggleLanguageMenu() {
      this.showLanguageMenu = !this.showLanguageMenu
    },
    toggleDarkMode() {
      // logic for dark mode toggle
    }
  }
}
</script>
<style>
body {
  font-family: "Fasthand", "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.english-font {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-style: normal;
}


</style>