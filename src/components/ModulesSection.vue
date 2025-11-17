<template>
  <section id="modules" class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-4 reveal-on-scroll">Construisez votre assistante idéale</h2>
      <p class="text-lg text-gray-500 text-center mb-12 reveal-on-scroll" style="transition-delay: 100ms;">Commencez avec le cœur de VictorIA et ajoutez les modules dont vous avez besoin.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 200ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Traduction PDF</h4>
          <p class="text-gray-500 text-sm">Traduction automatique de documents PDF dans plusieurs langues avec précision.</p>
        </div>
        
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 300ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module RAG</h4>
          <p class="text-gray-500 text-sm">Génération augmentée par récupération pour des réponses contextuelles et précises.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 400ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Flux RSS</h4>
          <p class="text-gray-500 text-sm">Agrégation et résumé de flux RSS pour rester informé en temps réel.</p>
        </div>

        <div class="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200 hover:border-victori-blue transition duration-300 transform hover:-translate-y-1 reveal-on-scroll" style="transition-delay: 500ms;">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-victori-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          <h4 class="text-xl font-bold mb-2">Module Tri d'Image</h4>
          <p class="text-gray-500 text-sm">Organisation automatique d'images par catégories, tags et similarité.</p>
        </div>
      </div>
      <div class="text-center mt-12 reveal-on-scroll">
        <a href="#" class="text-victori-cyan text-lg hover:underline">Et bien d'autres modules...</a>
      </div>
    </div>
  </section>
</template>
