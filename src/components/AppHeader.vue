<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div>
        <a href="#" class="text-2xl font-bold text-gradient">VictorIA</a>
      </div>
      <div class="hidden md:flex space-x-6 items-center">
        <a href="#features" class="text-gray-600 hover:text-victori-cyan transition duration-300">Fonctionnalités</a>
        <a href="#modules" class="text-gray-600 hover:text-victori-cyan transition duration-300">Modules</a>
        <a href="#privacy" class="text-gray-600 hover:text-victori-cyan transition duration-300">Confidentialité</a>
        <a href="#" class="bg-victori-cyan text-white font-semibold px-5 py-2 rounded-lg hover:bg-opacity-80 transition duration-300">Télécharger</a>
      </div>
      <div class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </nav>
  </header>
</template>
