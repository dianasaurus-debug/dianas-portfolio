<script>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'index',
  components: {
    Navbar,
    Footer
  },
  setup() {
    const getImageUrl = (url) => {
      return new URL(url, import.meta.url).href
    }
    const count = ref(0)
    const projects = ref([
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
      { title: 'Website SuperApp Migas', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }] },
    ])
    const experiences = ref([
      {
        place : 'UISI',
        year : '2021 - 2022',
        logo : './assets/images/uisi.png',
        position : 'Web Developer - Full Time',
        period : '1 year',
        jobdesks : [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]        
      },
      {
        place : 'UISI',
        year : '2021 - 2022',
        logo : './assets/images/uisi.png',
        position : 'Web Developer - Full Time',
        period : '1 year',
        jobdesks : [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]        
      },
      {
        place : 'UISI',
        year : '2021 - 2022',
        logo : './assets/images/uisi.png',
        position : 'Web Developer - Full Time',
        period : '1 year',
        jobdesks : [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]        
      },
      
    ])

    // expose to template and other options API hooks
    return {
      count,
      getImageUrl,
      projects,
      experiences
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <div class="bg-base h-full">
    <Navbar></Navbar>
    <header class="px-6 py-14 lg:px-8">
      <div class="flex flex-row justify-between">
        <div class="flex flex-col justify-end w-1/2 pb-40">
          <div>
            <h1 class="font-satisfy text-primary text-3xl">What can I do for you?</h1>
            <div class="flex flex-col my-5 max-w-2xl mr-2">
              <div class="flex my-2 flex-row items-center">
                <i class="fas fa-gear mr-5 fa-2x"></i>
                <span class="font-imfell text-xl">I’m good with Back-end Development. Handling APIs, Databases and 3rd
                  parties.</span>
              </div>
              <div class="flex my-2 flex-row items-center">
                <i class="fas fa-eye mr-5 fa-2x"></i>
                <span class="font-imfell text-xl">Experienced with Front-end Development. Handling layout, components,
                  styling and client side logics.</span>
              </div>
              <div class="flex my-2 flex-row items-center">
                <i class="fas fa-mobile mr-5 fa-2x"></i>
                <span class="font-imfell text-xl">Developed some mobile apps with Flutter. Good at working with
                  Notifications, Deep link, Providers and Interfaces</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-4/6 ">
          <div class="flex flex-row">
            <img class="w-4/12" :src="getImageUrl('./assets/images/me.png')">
            <div class="text-3xl my-20">
              <div class="mb-10"><span class="font-imfell">I'm </span><span
                  class="font-satisfy font-bold text-4xl ml-2">Diana Fitri</span></div>
              <div><span class="font-imfell">I’m a versatile developer;<br>I code with many languages;</span></div>
            </div>
          </div>
        </div>
      </div>
      <hr class="w-3/4 ml-10 h-1 bg-primary border-0 dark:bg-primary">
    </header>
    <!-- projects section -->
    <div class="px-40 py-14">
      <h1 class="font-imfell text-primary text-5xl text-center mb-10">Projects</h1>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button type="button" class="px-4 py-2 btn-switch-left">
          Websites
        </button>
        <button type="button" class="px-4 py-2 btn-switch-right">
          Mobile Apps
        </button>
      </div>
      <div class="mt-10 mb-2 grid grid-cols-4 gap-4">
        <div v-for="(project, index) in projects" class="font-imfell card mb-4">
          <img class="w-full" :src="project.img" alt="Sunset in the mountains">
          <div class="px-4 py-2">
            <div class="font-bold text-lg mb-2">{{ project.title }}</div>
            <p class="text-black text-sm">
              {{ project.desc }}
            </p>
          </div>
          <div class="px-2 pt-3 pb-2">
            <span class="label-secondary mr-2 mb-2" v-for="(tag, index) in project.tags">{{ tag.title }}</span>

          </div>
        </div>
      </div>
      <a href="#"
        class="float-right inline-flex items-center justify-center py-2 px-4 text-base font-medium text-white rounded-lg bg-primary hover:text-gray-900 hover:bg-secondary">
        <span class="w-full">Explore more projects</span>
        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>


    </div>
    <!-- experiences section -->
    <div class="px-40 py-14">
      <h1 class="font-imfell text-primary text-5xl text-center mb-10">Experiences</h1>
      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button type="button" class="px-4 py-2 btn-switch-left">
          Full Time
        </button>
        <button type="button" class="px-4 py-2 btn-switch-center">
          Freelance
        </button>
        <button type="button" class="px-4 py-2 btn-switch-center">
          Internship
        </button>
        <button type="button" class="px-4 py-2 btn-switch-center">
          Volunteer
        </button>
        <button type="button" class="px-4 py-2 btn-switch-right">
          Club
        </button>
      </div>
      <div class="mt-10 mb-2 flex flex-col">
        <div v-for="(experience, index) in experiences" class="flex mb-6 flex-row items-start">
          <div class="flex flex-row items-end w-1/4">
            <img class="h-20 mr-3" :src="getImageUrl(experience.logo)">
            <div class="flex flex-col justify-end">
              <span class="text-xl font-imfell text-primary">{{ experience.place }}</span>
              <span class="text-lg font-imfell text-primary">{{ experience.year }}</span>
            </div>
          </div>
          <div class="w-3/4 flex flex-col">
            <span class="text-lg font-imfell text-primary">
              {{ experience.position }} ({{ experience.period }})
            </span>
            <ul class="max-w-md text-black list-disc list-inside font-imfell">
                <li  v-for="(jobdesk, index) in experience.jobdesks">
                    {{ jobdesk }}
                </li>
            </ul>

          </div>
        </div>
        
      </div>
      <a href="#"
        class="float-right inline-flex items-center justify-center py-2 px-4 text-base font-medium text-white rounded-lg bg-primary hover:text-gray-900 hover:bg-secondary">
        <span class="w-full">Explore more experiences</span>
        <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>


    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
