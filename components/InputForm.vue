<template>
    <div class="w-full">
        <Alert v-if="copied" />
        <div class="grid grid-cols-1 gap-3 p-5">
            <div>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">អក្សរខ្មែរ</kbd>
                </label>
                <textarea v-model="inputValue" id="message" rows="4" class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="បញ្ចូលអក្សរខ្មែរនៅទីនេះ"></textarea>
                <div class="py-2">
                    <button @click="submitData" type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 256 256" enable-background="new 0 0 256 256" xml:space="preserve">
                            <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                            <g><g><g><path fill="#ffff" d="M192.7,7.7c-1.2,2.4-3.5,7.3-5.1,10.8l-3,6.3l-2.8-1.4c-17.9-9-37.2-13.2-58-12.6c-17.7,0.6-30.6,3.7-46.6,11.4c-13.7,6.6-23.9,14-34.4,24.9c-18.6,19.3-30.2,45.3-32.2,71.6L10,124l2.6,0.4c1.4,0.2,8.3,1.3,15.3,2.4c7,1.1,14.2,2.2,16.1,2.4l3.3,0.4l0.4-4c1.8-22.2,9.2-39,23.1-53.1c11-11.2,22.8-17.9,38.5-22c6.1-1.5,7.1-1.7,18.9-1.6c11.9,0,12.6,0.1,19.2,1.8c6.5,1.7,16.1,5.5,19.2,7.5l1.4,0.9l-2.5,5.4c-1.4,3-3.5,7.4-4.7,9.8c-1.2,2.4-2,4.3-1.7,4.3c1.5,0,55.2-19.3,55.2-19.9s-9.5-27.9-18.6-53.4l-0.7-2.1L192.7,7.7z"/><path fill="#ffff" d="M207.7,135.2c-1.9,19.6-9.6,36.3-23.2,49.8c-24,24-59.6,30.3-90.8,16c-2.7-1.2-5-2.4-5.1-2.7c-0.2-0.3,1.8-4.9,4.3-10.2c2.6-5.3,4.6-9.8,4.4-10c-0.2-0.2-54.2,18.5-55.1,19.1c-0.2,0.1,19.3,55.4,19.5,55.6c0.1,0.1,2.2-4.3,4.8-9.7c2.6-5.4,4.9-10.1,5.1-10.3c0.2-0.3,1-0.1,1.8,0.4c2.7,1.7,14.3,6.4,20.9,8.3c11.5,3.5,20.2,4.7,33.8,4.7c12.9,0,18.6-0.7,30.1-3.7c42.7-11.2,76.3-46.8,85.1-90.2c1.3-6.3,3-21.4,2.5-21.9c-0.2-0.1-34.4-2.6-36.6-2.6C208.7,127.7,208.3,129.3,207.7,135.2z"/></g></g></g>
                        </svg>
                        បកប្រែ
                    </button>
                </div>
            </div>
            <div v-if="result !== ''">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500 whitespace-nowrap">អក្សរសម្រាប់ប្រើនៅលើ CapCut</kbd>
                </label>
                <textarea disabled v-model="result" id="message" rows="4" class="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                :placeholder="isLoading ? 'កំពុងបកប្រែ...':''"></textarea>
                <div v-if="result !== ''" class="py-2">
                    <button @click="copy" type="button" class="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                        <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffff" height="80px" width="80px" version="1.1" id="Capa_1" viewBox="0 0 330 330" xml:space="preserve">
                            <g>
                                <path d="M35,270h45v45c0,8.284,6.716,15,15,15h200c8.284,0,15-6.716,15-15V75c0-8.284-6.716-15-15-15h-45V15   c0-8.284-6.716-15-15-15H35c-8.284,0-15,6.716-15,15v240C20,263.284,26.716,270,35,270z M280,300H110V90h170V300z M50,30h170v30H95   c-8.284,0-15,6.716-15,15v165H50V30z"/>
                                <path d="M155,120c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15s-6.716-15-15-15H155z"/>
                                <path d="M235,180h-80c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15S243.284,180,235,180z"/>
                                <path d="M235,240h-80c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h80c8.284,0,15-6.716,15-15C250,246.716,243.284,240,235,240z   "/>
                            </g>
                        </svg>
                        ចម្លង
                    </button>
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
            result: '',
            inputValue: '',
            isLoading: false,
            copied: false
        }
    },
    methods: {
        async submitData() {
            this.isLoading = true
            await axios.post('https://khmer-converter-api.vercel.app/converter', 
                [{
                    "content": this.inputValue
                }])
            .then((res) => {
                this.result = res.data[0]['result']
                this.isLoading = false
            })
            .catch((error) => {
                this.isLoading = false
            });   
        },
        copy() {
            this.copied = true
            navigator.clipboard.writeText(this.result);
            this.closeAlert()
        },
        closeAlert() {
            setTimeout(() => {
                this.copied = false
            }, 3000);
        }
    },
    // computed: {
    //     finalResult() {
    //         if(this.isTranslate) {
    //             return this.result
    //         }else{
    //             return this.result[0]['result']
    //         }
    //     }
    // }
}
</script>