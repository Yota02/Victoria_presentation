<template>
  <section id="features" class="py-20">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="flex justify-center reveal-on-scroll">
          <img :src="debout" 
               alt="VictorIA" 
               class="rounded-lg w-full max-w-md glow-cyan animate-subtleFloat object-cover aspect-[2/3]"
               onerror="this.src='https://placehold.co/400x400/FFFFFF/06B6D4?text=VictorIA'; this.classList.remove('glow-cyan');">
        </div>
        
        <div class="reveal-on-scroll" style="transition-delay: 100ms;">
          <span class="text-victori-cyan font-semibold">Fonctionnalités Clés</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 mt-2">Une IA qui s'intègre à votre quotidien</h2>
          <p class="text-gray-600 mb-6 text-lg">
            VictorIA n'est pas seulement un chatbot. C'est une plateforme d'assistance conçue pour s'adapter à vos outils et flux de travail.
          </p>
          <ul class="space-y-4">
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-victori-cyan mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600"><strong class="text-gray-900">Rédaction & Résumé :</strong> Générez des emails, corrigez vos textes ou résumez de longs documents en un clin d'œil.</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-victori-cyan mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600"><strong class="text-gray-900">Assistance au Code :</strong> Un module développeur pour générer du code, trouver des bugs et apprendre de nouveaux langages.</span>
            </li>
            <li class="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-victori-cyan mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-600"><strong class="text-gray-900">Gestion de Tâches :</strong> Connectez-la à votre calendrier et votre liste de tâches pour une organisation sans faille.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import debout from '../assets/debout.png'
</script>
