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
    const skills = ['HTML', 'CSS', 'PHP', 'Javascript', 'Dart', 'JQuery', 'Laravel', 'Express JS', 'Vue', 'Flutter', 'Tailwind', 'Bootstrap']
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
        place: 'UISI',
        year: '2021 - 2022',
        logo: '../assets/images/uisi.png',
        position: 'Web Developer - Full Time',
        period: '1 year',
        jobdesks: [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]
      },
      {
        place: 'UISI',
        year: '2021 - 2022',
        logo: '../assets/images/uisi.png',
        position: 'Web Developer - Full Time',
        period: '1 year',
        jobdesks: [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]
      },
      {
        place: 'UISI',
        year: '2021 - 2022',
        logo: '../assets/images/uisi.png',
        position: 'Web Developer - Full Time',
        period: '1 year',
        jobdesks: [
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
      skills,
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
        <div class="flex flex-col justify-end w-1/2 pb-20">
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
            <img class="w-4/12" :src="getImageUrl('../assets/images/me.png')">
            <div class="text-3xl my-20">
              <div class="mb-10"><span class="font-imfell">I'm </span><span
                  class="font-satisfy font-bold text-4xl ml-2">Diana Fitri</span></div>
              <div><span class="font-imfell">I’m a versatile developer;<br>I code with many languages;</span></div>
              <div>
                <div class="grid grid-cols-5 gap-2 my-5">
                  <div class="badge-primary text-sm text-center" v-for="(skill, index) in skills">{{ skill }}</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr class="w-3/4 ml-10 h-1 bg-primary border-0 dark:bg-primary">
    </header>
    <!-- projects section -->
    <div class="px-40 py-14">
      <h1 class="font-imfell text-primary text-5xl text-center mb-10">Projects</h1>
      <div class="border-b border-secondary">
        <ul class="flex flex-wrap -mb-px text-lg font-medium text-center text-primary">
          <li class="me-2">
            <a href="#"
              class="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg text-primary bg-secondary border-primary group">
              <i class="fa-solid fa-globe mr-2"></i>Websites
            </a>
          </li>
          <li class="me-2">
            <a href="#"
              class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-primary hover:bg-secondary hover:border-primary group">
              <i class="fa-solid fa-mobile mr-2"></i>Mobile Apps
            </a>
          </li>
        </ul>
      </div>
      <div class="mt-10 mb-2 grid grid-cols-4 gap-4">
        <div v-for="(project, index) in projects" class="font-imfell card mb-4 cursor-pointer">
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



      <div class="md:flex">
        <ul
          class="flex-column space-y space-y-4 text-md font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <a href="#"
              class="shadow-md inline-flex items-center px-4 py-3 text-primary rounded-lg active w-full border-2 border-primary bg-secondary"
              aria-current="page">
              Full-time
            </a>
          </li>
          <li>
            <a href="#"
              class="shadow-md inline-flex items-center px-4 py-3 text-primary rounded-lg w-full border-2 border-primary hover:bg-secondary"
              aria-current="page">
              Freelance
            </a>
          </li>
          <li>
            <a href="#"
              class="shadow-md inline-flex items-center px-4 py-3 text-primary rounded-lg w-full border-2 border-primary hover:bg-secondary"
              aria-current="page">
              Internship
            </a>
          </li>
          <li>
            <a href="#"
              class="shadow-md inline-flex items-center px-4 py-3 text-primary rounded-lg w-full border-2 border-primary hover:bg-secondary"
              aria-current="page">
              Volunteer
            </a>
          </li>
          <li>
            <a href="#"
              class="shadow-md inline-flex items-center px-4 py-3 text-primary rounded-lg w-full border-2 border-primary hover:bg-secondary"
              aria-current="page">
              Club
            </a>
          </li>

        </ul>
        <div class="p-6 border-2 border-primary rounded-lg w-full">
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
                  <li v-for="(jobdesk, index) in experience.jobdesks">
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
      </div>



    </div>
    <div class="px-40 pt-20">
      <div class="w-full flex flex-between">
        <div class="mr-20">
          <div class="text-5xl text-primary mb-6 font-satisfy">Nice to meet you!</div>
          <div class="font-imfell mb-4 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. </div>
          <div class="font-imfell text-lg">It has survived not only five centuries, but also the leap into electronic
            typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</div>
        </div>
        <div>
          <img class="border-solid border-4 rounded-md border-double border-primary h-200"
            :src="getImageUrl('../assets/images/boutme1.jpg')" />
        </div>
      </div>

    </div>
    <div class="bg-primary my-10">
      <div class="w-full flex flex-between items-center px-40 py-3">
        <div class="mr-20">
          <img class="border-solid border-4 rotate-12 rounded-md border-white h-200"
            :src="getImageUrl('../assets/images/boutme1.jpg')" />
        </div>
        <div class="text-right">
          <div class="text-5xl text-secondary mb-6 font-satisfy">How much I love my jobs</div>
          <div class="font-imfell mb-4 text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
            typesetting
            industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. </div>
          <div class="font-imfell text-lg text-white">It has survived not only five centuries, but also the leap into
            electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</div>
        </div>

      </div>
      <div class="w-full flex flex-between items-center px-40 pt-3">
        <div class="mr-20">
          <div class="text-5xl text-secondary mb-6 font-satisfy">My hobbies?</div>
          <div class="font-imfell mb-4 text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
            typesetting
            industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. </div>
          <div class="font-imfell text-lg text-white">It has survived not only five centuries, but also the leap into
            electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</div>
      </div>
      <img class="w-1/3" :src="getImageUrl('../assets/images/taylor-guitar.png')" />

    </div>
  </div>
  <Footer></Footer>
</div></template>

<style scoped></style>
