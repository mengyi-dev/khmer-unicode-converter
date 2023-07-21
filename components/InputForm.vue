<template>
    <pre>{{ result[0] }}</pre>
    
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea v-model="message" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
</template>
<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    computed: {
        async result() {
            const { data: response } = await useFetch('https://khmer-converter-api.vercel.app/converter', {
                method: 'post',
                body: {
                    data: [
                        {
                            "content": "សួស្ដីបងប្អូន"
                        }
                    ]
                }
            })
            console.log(response);
            return response

        }
    }
}
</script>