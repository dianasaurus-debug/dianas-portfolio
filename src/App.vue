<script>
import { ref, defineExpose, onMounted, computed } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Experience from './components/Experience.vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild
} from '@headlessui/vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'index',
  components: {
    Navbar,
    Footer,
    Dialog,
    Experience,
    DialogPanel,
    DialogTitle,
    DialogDescription,
    TransitionRoot,
    TransitionChild,
    TabGroup, TabList, Tab, TabPanels, TabPanel,
    Carousel, Navigation, Pagination, Slide
  },

  setup() {

    // Show button when user scrolls down

    // Smooth scroll to top
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    const portoParent = ref(null);
    const navbar = ref(null);
        
    const showMobileMenu = computed(() => {
      console.log(navbar.value?.showMobileMenu)
      return navbar.value?.showMobileMenu;
      // if child count update it will return the latest count;
    });


    onMounted(() => {
      showMobileMenu.value = navbar.value.showMobileMenu;
      window.addEventListener('scroll', onScroll);
      window.addEventListener('scroll', () => {
        var scrollToTopButton = document.getElementById('scroll-to-top');
        if (window.pageYOffset > 100) {
          scrollToTopButton.style.display = 'block';
        } else {
          scrollToTopButton.style.display = 'none';
        }
      });
    });

    const showNavbar = ref(true)
    const lastScrollPosition = ref(0)
    function onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Stop executing this function if the difference between
      // current scroll position and last scroll position is less than some offset
      if (Math.abs(currentScrollPosition - lastScrollPosition.value) < 60) {
        return
      }
      showNavbar.value = currentScrollPosition < lastScrollPosition.value
      lastScrollPosition.value = currentScrollPosition
    }
    const getImageUrl = (url) => {
      return new URL(url, import.meta.url).href
    }
    let isProjectModalOpen = ref(false);
    let currProject = ref(null);
    function setIsOpen(project) {
      currProject.value = project;
      isProjectModalOpen.value = true
    }
    function closeModal() {
      isProjectModalOpen.value = false

    }

    const selectedExperienceTab = ref(0)

    function changeselectedExperienceTab(index) {
      selectedExperienceTab.value = index
      console.log(`curr index : ${index}`);
    }

    const selectedProjectIndex = ref(0)

    function changeSelectedProject(index) {
      selectedProjectIndex.value = index
      console.log(`curr index : ${index}`);
    }

    const count = ref(0)
    const skills = ['HTML', 'CSS', 'PHP', 'Javascript', 'Dart', 'JQuery', 'Laravel', 'Express JS', 'Vue', 'Flutter', 'Tailwind', 'Bootstrap']
    const projects = ref({
      Website: [
        {
          title: 'Website SuperApp Migas',
          desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.',
          img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg',
          tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Ninuninu.id', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'PMB UISI', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Presensi UISI', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'SFL UNAIR', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Online Cash Waqf Management Information System', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Short Interval Meeting System Website (SIM)', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Otodeli.id', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }],
          features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'UISI Pay', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', img: 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },

      ],
      Mobile: [
        {
          title: 'EV EDU', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Ninuninu.id', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Otodeli', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Wanto Wedding', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Store Barcode Project', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Online Cash Waqf Management Information System', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Falling Detection', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },
        {
          title: 'Sistem Tanggap Darurat Kabupaten Bojonegoro', desc: 'The plugins for Craft CMS that I sell through their dedicated plugins store.', 'img': 'https://assets-a1.kompasiana.com/items/album/2020/12/19/evermore-5fdde993d541df216e23c974.jpg', tags: [{ title: 'Laravel' }, { title: 'Tailwind' }, { title: 'Vue 3' }], features: ['The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',
            'The plugins for Craft CMS that I sell through their dedicated plugins store',]
        },

      ]
    });

    const project_icons = ref({ Website: 'web.png', Mobile: 'mobile.png', })


    const experiences = ref({
      FullTime: [
        {
          place: 'Tamura Indonesia',
          year: '2022 - 2024',
          logo: '../assets/images/tamura.png',
          position: 'Software Engineer',
          period: '2 years',
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
      ],
      Internship: [
        {
          place: 'PT Lanius Inovasi Indonesia',
          year: '2021 - 2022',
          logo: '../assets/images/machine.png',
          position: 'Backend Developer',
          period: '3 Months',
          jobdesks: [
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)'
          ]
        },
      ],
      Freelance: [{
        place: 'PPSDM Migas',
        year: '2023 - Now',
        logo: '../assets/images/esdm-logo.png',
        position: 'FullStack Developer',
        period: '1 Year',
        jobdesks: [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]
      },
      {
        place: 'PT Vascomm Solusi Teknologi',
        year: '2022 - 2023',
        logo: '../assets/images/vascomm.png',
        position: 'FullStack Developer',
        period: '4 Months',
        jobdesks: [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]
      },
      {
        place: 'DOT Indonesia',
        year: '2022',
        logo: '../assets/images/dot.png',
        position: 'Frontend Developer',
        period: '2 Months',
        jobdesks: [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]
      },
      {
        place: 'Ngoding Cerdas',
        year: '2020-2023',
        logo: '../assets/images/Logo_PENS.png',
        position: 'FullStack Developer & Mobile Developer',
        period: '3 years',
        jobdesks: [
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)',
          'At least 10 characters (and up to 100 characters)'
        ]
      },
      ],
      Education: [
        {
          place: 'Electronic Engineering Polytechnic Institute of Surabaya',
          year: 'Nov 2021 - March 2023',
          logo: '../assets/images/Logo_PENS.png',
          major: 'Informatics Engineering',
          degree: 'Bachelor\'s Degree',
          grade: '3.65',
          jobdesks: [
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)'
          ]
        },
        {
          place: 'Electronic Engineering Polytechnic Institute of Surabaya',
          year: 'Aug 2018 - Sept 2021',
          logo: '../assets/images/Logo_PENS.png',
          major: 'Informatics Engineering',
          degree: 'Associate\'s Degree',
          grade: '3.83',
          jobdesks: [
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)'
          ]
        },
        {
          place: 'SMKN 1 Tuban',
          year: 'May 2015 - May 2018',
          logo: '../assets/images/smkn1tuban.png',
          major: 'Computer and Networking Engineering',
          degree: '-',
          grade: '3.45',
          jobdesks: [
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)'
          ]
        },
      ],
      Organizations: [
        {
          name: 'PENS International Cooperation Office',
          year: '2020-2021',
          logo: '../assets/images/cropped-pico1.png',
          position: 'Hospitality Division',
          jobdesks: [
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)'
          ]
        },
        {
          name: 'Himpunan Mahasiswa Informatika PENS',
          year: '2018-2020',
          logo: '../assets/images/himit.png',
          position: 'Media and Information Division',
          jobdesks: [
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)',
            'At least 10 characters (and up to 100 characters)'
          ]
        }
      ],

    })

    // expose to template and other options API hooks
    return {
      count,
      getImageUrl,
      skills,
      projects,
      project_icons,
      experiences,
      currProject,
      isProjectModalOpen,
      setIsOpen,
      closeModal,
      selectedExperienceTab,
      changeselectedExperienceTab,
      selectedProjectIndex,
      changeSelectedProject,
      showNavbar,
      lastScrollPosition,
      onScroll,
      portoParent,
      scrollToTop,
      navbar,
      showMobileMenu
    }
  },

  mounted() {
    console.log(this.count) // 0
  }
}
</script>

<template>
  <div class="h-full" ref="portoParent">
    <header>
      <Navbar ref="navbar" :showNavbar="showNavbar"></Navbar>
      <div class="px-10 sm:pb-14 pb-10 sm:pt-[120px] sm:px-8" :class="{'pt-[280px]' : showMobileMenu, 'pt-[80px]' : !showMobileMenu}">
        <div class="flex sm:flex-row flex-col sm:justify-between justify-start">
          <div class="flex flex-col sm:items-start items-center w-full justify-end sm:w-1/2 pb-10 mr-10">
            <div class="sm:mt-0 mt-5 sm:order-first order-last w-full transition ease-in-out delay-150 hover:-translate-x-2 duration-500">
              <h6 class="font-satisfy text-2xl mb-3">🎼🎵 Play my favorite songs 🎤🎧</h6>
              <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/0kf3iuCnrzAeQand0fMVvG?utm_source=generator" width="100%"
                height="152" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
            </div>
            <div class="sm:mt-10 mt-5">
              <h1 class="font-satisfy text-primary text-3xl">What can I do for you?</h1>
              <div class="flex flex-col my-5 sm:max-w-2xl sm:mr-2">
                <div class="flex my-3 flex-row items-center">
                  <img class="mr-4" style="width : 80px"
                    :src="getImageUrl('../assets/images/oc-project-development.png')">
                  <span class="font-comic sm:text-xl text-lg text-justify">I’m good with Back-end Development. Handling APIs, Databases and 3rd
                    parties.</span>
                </div>
                <div class="flex my-3 flex-row items-center">
                  <img class="mr-4" style="width : 80px" :src="getImageUrl('../assets/images/oc-target.png')">
                  <span class="font-comic sm:text-xl text-lg text-justify">Experienced with Front-end Development. Handling layout, components,
                    styling and client side logics.</span>
                </div>
                <div class="flex my-3 flex-row items-center">
                  <img class="mr-4" style="width : 80px" :src="getImageUrl('../assets/images/ec-notification.png')">
                  <span class="font-comic sm:text-xl text-lg text-justify">Developed some mobile apps with Flutter. Good at working with
                    Notifications, Deep link, Providers and Interfaces</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:w-4/6 w-full sm:order-last order-first">
            <div class="flex flex-row">
              <img class="hidden sm:block w-4/12" :src="getImageUrl('../assets/images/me.png')">
              <div class="sm:text-3xl text-xl sm:my-20 my-10">
                <div
                  class="w-full mb-10 py-6 px-6 border-sketched shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                  <div class="flex sm:flex-row flex-col items-center">
                    <img class="w-24 h-24 mr-3 rounded-full shadow-lg" :src="getImageUrl('../assets/images/anna.jpg')"
                      alt="Bonnie image" />
                    <div class="flex flex-col items-center sm:items-start justify-center sm:mt-0 mt-5">
                      <h5 class="mb-1 text-2xl text-primary font-comic">Diana Fitri 🎸🍔</h5>
                      <span class="text-lg text-dark font-comic">Fullstack Developer + Software Development Enthusiast.
                        I love coding, music and foods.</span>
                    </div>
                  </div>
                </div>

                <!-- <div class="mb-10"><span class="font-imfell">I'm </span><span
                  class="font-satisfy font-bold text-4xl ml-2">Diana Fitri</span></div> -->
                <div><span class="font-comic">I’m a versatile developer;<br>I code with many languages;</span></div>
                <div>
                  <div class="grid sm:grid-cols-5 grid-cols-2 gap-2 my-5">
                    <div class="badge-primary text-sm text-center" v-for="(skill, index) in skills">{{ skill }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="sm:w-3/4 sm:ml-10 h-1 bg-primary border-0 dark:bg-primary">
      </div>
    </header>
    <!-- projects section -->
    <div id="projects">
      <div class="sm:mx-20 mx-10 sm:my-14 my-6">
        <div class="flex flex-col sm:items-end items-center">
          <h1 class="font-comic text-primary sm:text-5xl text-3xl text-center mb-10">Projects</h1>
          <!-- <img class="w-1/4" :src="getImageUrl('../assets/images/ec-buy-domain.png')"> -->
        </div>
        <TabGroup :selectedIndex="selectedProjectIndex" @change="changeSelectedProject">
          <div class="border-b border-secondary">
            <TabList class="flex flex-wrap -mb-px text-lg font-medium text-center text-primary">
              <Tab v-for="category in Object.keys(projects)" as="template" :key="category" v-slot="{ selected }">
                <div class="me-2">
                  <div
                    :class="{ 'cursor-pointer inline-flex items-center justify-center p-2 border-b-2 rounded-t-lg text-primary border-primary group': selected, 'cursor-pointer inline-flex items-center justify-center p-2 rounded-t-lg hover:text-primary hover:rounded-md hover:bg-secondary hover:border-primary group': !selected }">
                    <div class="flex flex-row items-center"><img style="height : 50px" class="mr-3"
                        :src="getImageUrl('../assets/images/' + project_icons[category])"><span
                        class="text-xl font-comic">{{ category }}</span></div>
                  </div>
                </div>
              </Tab>
            </TabList>
          </div>
          <TabPanels class="mt-2">
            <TabPanel as="template" v-slot="{ selected }" :unmount="false"
              v-for="(project_list, idx) in Object.values(projects)" :key="idx">
              <TransitionRoot appear :show="selected" enter="duration-500 ease-out" enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100" leave="duration-300 ease-in" leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95">
                <div class="mt-10 mb-2 grid sm:grid-cols-2 gap-3">
                  <div v-for="(project, index) in project_list"
                    class="font-comic flex sm:flex-row flex-col justify-start mb-4">
                    <div class="sm:w-1/3 w-full">
                      <img class="border-4 border-primary w-full" :src="project.img"
                        alt="Sunset in the mountains">
                    </div>

                    <div class="sm:px-4 py-2 flex flex-col sm:justify-center">
                      <div class="font-boldest text-xl text-primary">{{ project.title }}</div>
                      <p class="text-black my-2 text-sm">
                        {{ project.desc }}
                      </p>
                      <div class="mt-2">
                        <button class="btn-sketched-dark mr-2" @click="setIsOpen(project)">▶️ Demo</button>
                        <button class="btn-sketched" @click="setIsOpen(project)">More 🔍</button>
                      </div>
                    </div>

                  </div>
                </div>
              </TransitionRoot>

            </TabPanel>
          </TabPanels>
        </TabGroup>
        <!-- <a href="#"
          class="float-right inline-flex items-center justify-center py-2 px-4 text-base font-medium text-white rounded-lg bg-primary hover:text-gray-900 hover:bg-secondary">
          <span class="w-full">Explore more projects</span>
          <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a> -->
      </div>
    </div>
    <!-- experiences section -->
    <div class="sm:px-40 px-10 sm:py-14 py-6" id="experiences">
      <h1 class="font-comic text-primary sm:text-5xl text-3xl text-center mb-10">Experiences</h1>
      <TabGroup :selectedIndex="selectedExperienceTab" @change="changeselectedExperienceTab">
        <div class="md:flex">
          <!-- <ul
            class="flex-column space-y space-y-4 text-md font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0"> -->
          <TabList
            class="flex-column space-y space-y-4 text-md font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
            <Tab v-for="(category, idx) in Object.keys(experiences)" as="template" :key="category"
              v-slot="{ selected }">
              <div>
                <div
                  :class="{ 'bg-secondary cursor-pointer shadow-md inline-flex items-center px-4 py-3 text-black w-full border-sketched hover:bg-secondary font-comic': idx == selectedExperienceTab, 'cursor-pointer shadow-md inline-flex items-center px-4 py-3 text-primary w-full border-sketched hover:bg-secondary': idx !== selectedExperienceTab }"
                  aria-current="page">
                  {{ category }}
                </div>
              </div>
            </Tab>
          </TabList>

          <!-- </ul> -->
          <div class="p-6 w-full border-sketched">
            <TabPanels class="mb-2 flex flex-col">
              <TabPanel v-slot="{ selected }" v-for="(experience_list, idx) in Object.values(experiences)" :key="idx">
                <TransitionRoot appear :show="selected" enter="duration-500 ease-out" enter-from="opacity-0 scale-95"
                  enter-to="opacity-100 scale-100" leave="duration-300 ease-in" leave-from="opacity-100 scale-100"
                  leave-to="opacity-0 scale-95">
                  <experience :experience_list="experience_list"
                    :jenis="Object.keys(experiences)[selectedExperienceTab]">
                  </experience>
                </TransitionRoot>

              </TabPanel>
            </TabPanels>
            <!-- <a href="#"
              class="float-right inline-flex items-center justify-center py-2 px-4 text-base font-medium text-white rounded-lg bg-primary hover:text-gray-900 hover:bg-secondary">
              <span class="w-full">Explore more experiences</span>
              <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a> -->
          </div>
        </div>
      </TabGroup>



    </div>
    <div class="px-40 pt-20" id="about">
      <div class="w-full flex flex-between">
        <div class="mr-20">
          <div class="text-5xl text-primary mb-6 font-satisfy">Nice to meet you!</div>
          <div class="font-comic mb-4 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
            Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley
            of type and scrambled it to make a type specimen book. </div>
          <div class="font-comic text-lg">It has survived not only five centuries, but also the leap into electronic
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
          <div class="font-comic mb-4 text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
            typesetting
            industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley
            of type and scrambled it to make a type specimen book. </div>
          <div class="font-comic text-lg text-white">It has survived not only five centuries, but also the leap into
            electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</div>
        </div>

      </div>
      <div class="w-full flex flex-between items-center px-40 pt-3">
        <div class="mr-20">
          <div class="text-5xl text-secondary mb-6 font-satisfy">My hobbies?</div>
          <div class="font-comic mb-4 text-lg text-white">Lorem Ipsum is simply dummy text of the printing and
            typesetting
            industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley
            of type and scrambled it to make a type specimen book. </div>
          <div class="font-comic text-lg text-white">It has survived not only five centuries, but also the leap into
            electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.</div>
        </div>
        <img class="w-1/3" :src="getImageUrl('../assets/images/taylor-guitar.png')" />

      </div>
    </div>
    <Footer></Footer>
    <TransitionRoot appear :show="isProjectModalOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
          leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto font-comic">
          <div class="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild as="template" enter="duration-500 ease-out" enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100" leave="duration-300 ease-in" leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95">
              <DialogPanel
                class="w-full max-w-3xl transform overflow-hidden bg-white p-3 border-sketched text-left align-middle shadow-xl transition-all">

                <div class="my-2">
                  <!-- <div class="w-full mb-2">
                    <Carousel>
                      <Slide v-for="slide in 3" :key="slide">
                        <div class="carousel__item"
                          :style="{ backgroundImage: `url('${getImageUrl(currProject.img)}')` }">
                        </div>
                      </Slide>
                      <template #addons>
                        <Navigation />
                        <Pagination />
                      </template>
                    </Carousel>
                  </div> -->

                  <div class="px-4">
                   
                    <h3 as="h3" class="text-lg font-medium leading-6 mb-3 text-gray-900">
                      {{ currProject.title }}
                    </h3>
                    <div class="py-2">
                      <span class="label-secondary mr-2 mb-2" v-for="(tag, index) in currProject.tags">{{ tag.title}}</span>
                    </div>
                    <div class="w-3/4">
                      <p class="text-md text-gray-500 ">
                        Your payment has been successfully submitted. We’ve sent you an email with all of the details of
                        your order.
                      </p>
                      <h5 class="mt-2">Fitur : </h5>
                      <ul class="ml-6 text-gray-500 list-disc font-comic">
                        <li v-for="(feature, index) in currProject.features">
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>


              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <button @click="scrollToTop" id="scroll-to-top" class="fixed bottom-4 right-4 
                       border-sketched
                       bg-white text-black px-3 py-2
                       shadow-lg
                       transition duration-300 hover:bg-secondary
                       hover:text-primary">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<style scoped lang="scss">
.carousel__item {
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 350px;
  width: 100%;
  font-size: 20px;
  border-radius: 8px;

}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
