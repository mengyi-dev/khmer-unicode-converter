<template>
    <div class="mx-auto w-full p-5">
        <div class="mx-auto w-full md:w-9/12">
            <img src="@/assets/img/logo.png" width="300">
            <InputForm />
        </div>
    </div>
</template>
<script>
export default {
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
