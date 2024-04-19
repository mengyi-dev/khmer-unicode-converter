<template>
  <div>
    <Head>
      <Title>Limon F1 | Converter | Khmer fonts — ​ពុម្ព​អក្សរ​ខ្មែរ | Capcut</Title>
      <meta hid="description" name="description" content="This is a great webiste site to handle font Khmer error on Capcut. What you need is just paste and copy.">
      <meta name="keywords" content="khmer text converter, unicode khmer converter, online khmer unicode converter, free khmer unicode converter, khmer script to unicode converter, convert khmer font to unicode, transliterate khmer to unicode, khmer unicode encoding, unicode khmer typography, digital khmer documents, khmer legacy font converter, limon font converter, khmer pronunciation guide, khmer dictionary integration, copy-paste khmer unicode, khmer unicode keyboard layout, khmer document translation, batch khmer unicode conversion, custom khmer unicode settings, បម្លែងអក្សរខ្មែរទៅយូនីកូដ, អក្សរខ្មែរតួអក្សរយូនីកូដ, ស្គិតស្ទូរខ្មែរយូនីកូដ">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="google-adsense-account" content="ca-pub-4357194654851697">
      <meta name="monetag" content="0fccceb8a1b1b417dd5d073d76354632">
      <script src="https://alwingulla.com/88/tag.min.js" data-zone="59430" async data-cfasync="false"></script>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4357194654851697"
  crossorigin="anonymous"></script>
    </Head>
    <div class="mx-auto w-full p-5">
      <div class="mx-auto w-full md:w-9/12">
        <img src="@/assets/img/logo.png" width="300" alt="logo">
        <InputForm />
        <div class="lg:flex gap-x-10"> 
          <div>
            <p class="mt-10 mb-2">ចូលទៅទាញយក Limon Font 👇</p>
            <a href="https://khmersoft.net/download-font-limon-khmer-font-for-your-computer/" target="_blank">
              <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Download Limon Font</button>
            </a>
          </div>
          <div>
            <p class="mt-10 mb-2">ប៉ាវ កាហ្វេ😁</p>
            <a href="https://link.payway.com.kh/aba?id=DE6AAD8E7E3C&code=360598&acc=500050202&dynamic=true" target="_blank">
              <button @open="openDailog = true" class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Pay now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <PaymentDailog :value="openDailog" @close="openDailog = false" @open="openDailog = true"/> -->
</template>
<script>
export default {
  data() {
    return {
      openDailog: false
    }
  },
    head () {
        return {
          title: 'Adsence',
          script: [
            {
              hid: 'adsence',
              src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4357194654851697',
              crossorigin: "anonymous",
              async: true
            }
          ]
        }
      }
}
</script>
