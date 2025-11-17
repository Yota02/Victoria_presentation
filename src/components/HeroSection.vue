<template>
  <main class="container mx-auto px-6 py-16 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInUp opacity-0" style="animation-delay: 100ms;">
          <span class="text-gradient">VictorIA</span> : Votre IA Personnelle
        </h1>
        <p class="text-xl text-gray-600 mb-8 animate-fadeInUp opacity-0" style="animation-delay: 300ms;">
          Une assistante IA <strong class="text-victori-cyan">modulaire</strong> qui tourne <strong class="text-victori-cyan">100% en local</strong>. Vos données, votre contrôle.
        </p>
        <div class="flex justify-center md:justify-start space-x-4 animate-fadeInUp opacity-0" style="animation-delay: 500ms;">
          <a href="#modules" class="bg-victori-cyan text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg">
            Découvrir les Modules
          </a>
          <a href="#" class="bg-white text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 text-lg border border-gray-300">
            En savoir plus
          </a>
        </div>
      </div>
      
      <div class="flex justify-center animate-fadeInRight opacity-0" style="animation-delay: 200ms;">
        <img :src="rond" 
             alt="VictorIA" 
             class="rounded-full w-3/4 md:w-full max-w-md glow-cyan animate-subtleFloat object-cover"
             onerror="this.src='https://placehold.co/400x400/FFFFFF/06B6D4?text=VictorIA'; this.classList.remove('glow-cyan');">
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import rond from '../assets/rond.png'
</script>
