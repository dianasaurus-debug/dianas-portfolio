<template>
    <div v-if="jenis == 'FullTime' || jenis == 'Internship' || jenis == 'Freelance'"
        v-for="(experience, idx) in experience_list" class="flex mb-6 flex-row items-start">
        <div class="flex flex-row items-center w-1/4">
            <img class="h-20 mr-3" :src="getImageUrl(experience.logo)">
            <div class="flex flex-col justify-center">
                <span class="text-lg font-comic text-primary">{{ experience.place }}</span>
                <span class="text-sm font-comic text-primary">{{ experience.year }}</span>
            </div>
        </div>
        <div class="w-3/4 flex flex-col">
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
        class="flex mb-6 flex-row items-start">
        <img class="h-20 mr-10" :src="getImageUrl(experience.logo)">
        <div class="w-3/4 flex flex-col">
            <span class="text-xl font-comic text-primary">{{ experience.place }}</span>
            <span class="text-lg font-comic text-primary">
                {{ experience.degree }}, {{ experience.major }}
            </span>
            <span class="text-sm font-comic text-gray">
                {{ experience.year }}
            </span>
            <span class="text-lg font-comic text-primary">
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
        class="flex mb-6 flex-row items-start">
        <img class="h-20 mr-10" :src="getImageUrl(experience.logo)">
        <div class="w-3/4 flex flex-col">
            <span class="text-lg font-comic text-primary">
                {{ experience.position }}
            </span>
            <span class="text-sm font-comic text-primary">{{ experience.year }}</span>

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