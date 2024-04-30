<template>
    <div v-if="jenis == 'FullTime' || jenis == 'Internship' || jenis == 'Freelance'"
        v-for="(experience, idx) in experience_list" class="flex mb-6 sm:flex-row flex-col items-start">
        <div class="flex flex-row items-center sm:w-1/4">
            <img class="h-20 mr-3" :src="getImageUrl(experience.logo)">
            <div class="flex flex-col justify-center">
                <span class="text-lg font-comic text-primary">{{ experience.place }}</span>
                <span class="text-sm font-comic text-primary">{{ experience.year }}</span>
            </div>
        </div>
        <div class="sm:w-3/4 flex flex-col sm:mb-0 mt-2">
            <span class="text-lg font-comic text-primary">
                {{ experience.position }} ({{ experience.period }})
            </span>
            <ul class="max-w-md text-black list-disc list-inside font-comic">
                <li v-for="(jobdesk, index) in experience.jobdesks">
                    {{ jobdesk }}
                </li>
            </ul>

        </div>
    </div>
    <div v-else-if="jenis == 'Education'" v-for="(experience, idx) in experience_list"
        class="flex mb-6 sm:flex-row flex-col items-start">
        <div class="text-lg font-comic text-primary sm:hidden mb-2">{{ experience.place }}</div>
        <div class="flex flex-row items-center sm:hidden">
            <img class="h-20 mr-3" :src="getImageUrl(experience.logo)">
            <div class="mt-3 px-3">
                <div class="text-sm font-comic text-primary">
                    {{ experience.degree }}, {{ experience.major }}
                </div>
                <div class="text-sm font-comic text-gray">
                    {{ experience.year }}
                </div>
                <span class="text-sm font-comic text-primary">
                    Grade : {{ experience.grade }}
                </span>
            </div>
        </div>
        <img class="sm:block hidden h-20 mr-10" :src="getImageUrl(experience.logo)">
        <div class="sm:w-3/4 w-full flex flex-col">
            <span class="sm:block hidden text-xl font-comic text-primary">{{ experience.place }}</span>
            <span class="sm:block hidden text-lg font-comic text-primary">
                {{ experience.degree }}, {{ experience.major }}
            </span>
            <span class="sm:block hidden text-sm font-comic text-gray">
                {{ experience.year }}
            </span>
            <span class="sm:block hidden text-lg font-comic text-primary">
                    Grade : {{ experience.grade }}
                </span>
            <ul class="max-w-md text-black list-disc list-inside font-comic">
                <li v-for="(jobdesk, index) in experience.jobdesks">
                    {{ jobdesk }}
                </li>
            </ul>

        </div>
    </div>
    <div v-else-if="jenis == 'Organizations'" v-for="(experience, idx) in experience_list" 
     class="flex mb-6 sm:flex-row flex-col items-start">
        <div class="flex flex-row items-center sm:hidden">
            <img class="h-20 mr-3" :src="getImageUrl(experience.logo)">
            <div>
                <div class="text-lg font-comic text-primary">
                    {{ experience.position }}
                </div>
                <div class="text-sm font-comic text-primary">{{ experience.year }}</div>
            </div>
        </div>
        <img class="sm:block hidden h-20 mr-10" :src="getImageUrl(experience.logo)">
        <div class="sm:mt-0 mt-3 sm:px-0 px-3 sm:w-3/4 w-full flex flex-col">
            <span class="text-lg sm:block hidden font-comic text-primary">
                {{ experience.position }}
            </span>
            <span class="sm:block hidden text-sm font-comic text-primary">{{ experience.year }}</span>

            <ul class="max-w-md text-black list-disc list-inside font-comic">
                <li v-for="(jobdesk, index) in experience.jobdesks">
                    {{ jobdesk }}
                </li>
            </ul>

        </div>
    </div>
</template>

<script setup>
const getImageUrl = (url) => {
    return new URL(url, import.meta.url).href
}
defineProps({
    experience_list: {
        type: Array,
        default: null,
    },
    jenis: {
        type: String,
        default: 'FullTime',
    }
});
</script>