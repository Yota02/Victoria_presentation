<script setup lang="ts">
import { ref } from 'vue'
import rond from '../assets/rond.ico'

const mobileMenuOpen = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <header class="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div>
        <a @click.prevent="scrollToTop" class="text-2xl font-bold text-gradient cursor-pointer">
          <img :src="rond" alt="Icône" class="inline h-8 w-8 mr-2" />
          VictorIA
        </a>
      </div>
      <div class="hidden md:flex space-x-6 items-center">
        <a @click.prevent="scrollToSection('features')" class="text-gray-600 hover:text-victori-cyan transition duration-300 cursor-pointer">Fonctionnalités</a>
        <a @click.prevent="scrollToSection('modules')" class="text-gray-600 hover:text-victori-cyan transition duration-300 cursor-pointer">Modules</a>
        <a @click.prevent="scrollToSection('privacy')" class="text-gray-600 hover:text-victori-cyan transition duration-300 cursor-pointer">Confidentialité</a>
        <router-link to="/download" class="bg-victori-cyan text-white font-semibold px-5 py-2 rounded-lg hover:bg-opacity-80 transition duration-300">Télécharger</router-link>
      </div>
      <div class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  </header>
</template>
