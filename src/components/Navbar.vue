<script setup>
import { ref, defineExpose } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
const languages = [
    { id: 'end', label: '🇬🇧 EN' },
    { id: 'id', label: '🇮🇩 ID' },
]
const selectedLang = ref(languages[0])
const showMobileMenu = ref(true)
defineProps({
    showNavbar: {
        type: Boolean,
        default: true,
    },
});
defineExpose({
    showMobileMenu,
    selectedLang,
});
</script>

<template>
    <nav class="top-0 w-full bg-primary" :class="{ 'navbar navbar--hidden': !showNavbar, 'navbar': showNavbar }">
        <div class="mx-auto sm:px-10 px-5">
            <div class="relative flex h-16 items-center justify-between">
                <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    <!-- Mobile menu button-->
                    <button @click="showMobileMenu = !showMobileMenu" type="button" data-collapse-toggle="navbar-default"
                        class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu" aria-expanded="false">
                        <span class="absolute -inset-0.5"></span>
                        <span class="sr-only">Open main menu</span>
                        <!-- <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg> -->
                        <svg class="block h-8 w-8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.60474 4.15402C5.09042 4.15402 11.2189 4.58736 12.3953 4.15402" stroke="#D9C6B5" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.60474 7.96002C4.51817 7.81162 9.29181 8.24687 12.3953 7.96002" stroke="#D9C6B5" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.60474 11.7656C4.96125 11.9961 11.1028 11.6451 12.3953 11.7656" stroke="#D9C6B5" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="flex flex-1 items-center justify-center sm:justify-between">
                    <div class="w-1/6 hidden sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a href="#projects" class="btn-menubar" aria-current="page">Projects</a>
                            <a href="#experiences" class="btn-menubar">Experiences</a>
                            <a href="#about" class="btn-menubar">About</a>
                        </div>
                    </div>
                    <div class="flex flex-shrink-0 items-center">
                        <h1 class="logo-text">Ana</h1>
                    </div>
                    <div class="flex flex-row">
                        <div class="hidden sm:block flex space-x-4">
                            <a target="_blank" href="https://github.com/dianasaurus-debug/"><i
                                    class="fa-brands fa-github text-secondary hover:text-white hover:shadow-xl fa-2x transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"></i></a>
                            <a target="_blank" href="mailto:nadatalita76@gmail.com"><i
                                    class="fa-brands fa-google text-secondary hover:text-white hover:shadow-xl fa-2x transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/diana-fitri-b61777290/"><i
                                    class="fa-brands fa-linkedin hover:text-white hover:shadow-xl text-secondary fa-2x transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"></i></a>

                        </div>
                        <div class="hidden sm:block w-[100px] ml-10">
                            <Listbox v-model="selectedLang">
                                <div class="relative">
                                    <ListboxButton
                                        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                        <span class="block truncate">{{ selectedLang.label }}</span>
                                        <span
                                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                            <i class="fas fa-chevron-down fa-h-5 w-5 text-gray-400"
                                                aria-hidden="true"></i>
                                        </span>
                                    </ListboxButton>
                                    <transition leave-active-class="transition duration-100 ease-in"
                                        leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <ListboxOptions
                                            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            <ListboxOption v-slot="{ active, selected }" v-for="lang in languages"
                                                :key="lang.label" :value="lang" as="template">
                                                <li :class="[
                                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-10 pr-4',
                                                ]">
                                                    <span :class="[
                                                        selected ? 'font-medium' : 'font-normal',
                                                        'block truncate',
                                                    ]">{{ lang.label }}</span>
                                                    <span v-if="selected"
                                                        class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <i class="fas fa-check h-5 w-5" aria-hidden="true"></i>
                                                    </span>
                                                </li>
                                            </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu" :class="showMobileMenu ? 'open-menu' : 'closed-menu'">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a href="#" class="btn-menubar-mobile" aria-current="page">Projects</a>
                <a href="#" class="btn-menubar-mobile">Experiences</a>
                <a href="#" class="btn-menubar-mobile">About</a>
            </div>
            <div class="flex flex-row justify-between my-3 px-5">
                <div class="flex space-x-4">
                    <a target="_blank" href="https://github.com/dianasaurus-debug/"><i
                            class="fa-2x fa-brands fa-github text-secondary hover:text-white hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"></i></a>
                    <a target="_blank" href="mailto:nadatalita76@gmail.com"><i
                            class="fa-2x fa-brands fa-google text-secondary hover:text-white hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/diana-fitri-b61777290/"><i
                            class="fa-2x fa-brands fa-linkedin hover:text-white hover:shadow-xl text-secondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-500"></i></a>

                </div>
                <div class="w-[100px]">
                    <Listbox v-model="selectedLang">
                        <div class="relative">
                            <ListboxButton
                                class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                <span class="block truncate">{{ selectedLang.label }}</span>
                                <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <i class="fas fa-chevron-down fa-h-5 w-5 text-gray-400" aria-hidden="true"></i>
                                </span>
                            </ListboxButton>
                            <transition leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100" leave-to-class="opacity-0">
                                <ListboxOptions
                                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                    <ListboxOption v-slot="{ active, selected }" v-for="lang in languages"
                                        :key="lang.label" :value="lang" as="template">
                                        <li :class="[
                                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-10 pr-4',
                                        ]">
                                            <span :class="[
                                                selected ? 'font-medium' : 'font-normal',
                                                'block truncate',
                                            ]">{{ lang.label }}</span>
                                            <span v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <i class="fas fa-check h-5 w-5" aria-hidden="true"></i>
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    transform: translate3d(0, 0, 0);
    transition: 0.5s all ease-out;
}

.navbar.navbar--hidden {
    box-shadow: none;
    transform: 
    translate3d(0, -100%, 0);
}
.open-menu {
    opacity: 1;
    height: auto;
    transform: translate3d(0, 0, 0);
    transition: 0.5s all ease-out;
}
.closed-menu {
opacity: 0;
height: 0;
padding: 0;
transform: 
    translate3d(0, -100%, 0);
}
</style>
