<template>
  <section id="modules" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-4 reveal-on-scroll">Construisez votre assistante idéale</h2>
      <p class="text-lg text-gray-500 text-center mb-12 reveal-on-scroll" style="transition-delay: 100ms;">Commencez avec le cœur de VictorIA et ajoutez les modules dont vous avez besoin.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 200ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Écrivain</h4>
          <p class="text-gray-500 text-sm">Correction grammaticale, reformulation, génération de texte créatif et résumés.</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 300ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Développeur</h4>
          <p class="text-gray-500 text-sm">Génération de code, explication d'extraits, débogage et intégration Git.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 400ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6-4a1 1 0 001-1v-1a1 1 0 10-2 0v1a1 1 0 001 1zm5 0a1 1 0 001-1v-1a1 1 0 10-2 0v1a1 1 0 001 1z" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Domotique</h4>
          <p class="text-gray-500 text-sm">Contrôlez vos lumières, thermostats et appareils connectés par la voix ou le texte (Home Assistant, etc.).</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 500ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Organisateur</h4>
          <p class="text-gray-500 text-sm">Gestion de calendrier, rappels intelligents, prise de notes et listes de tâches.</p>
        </div>
      </div>
      <div class="text-center mt-12 reveal-on-scroll">
        <a href="#" class="text-victori-cyan text-lg hover:underline">Et bien d'autres modules à venir...</a>
      </div>
    </div>
  </section>
</template>
