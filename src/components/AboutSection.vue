<template>
  <main class="container mx-auto px-6 py-16 md:py-24">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 text-gradient animate-fadeInUp">En savoir plus sur VictorIA</h1>
      
    </div>

    <section class="mb-16 reveal-on-scroll">
      <h2 class="text-3xl font-bold mb-6 text-center">Notre Histoire</h2>
      <p class="text-lg text-gray-600 max-w-4xl mx-auto text-center">
        VictorIA est née de la volonté de rendre l'IA accessible, privée et personnalisable. Inspiré par les besoins des utilisateurs soucieux de leur confidentialité, ce projet open-source a été développé pour fonctionner exclusivement en local, sans dépendre de services cloud externes.
      </p>
    </section>

    <section class="mb-16 reveal-on-scroll" style="transition-delay: 100ms;">
      <h2 class="text-3xl font-bold mb-6 text-center">Pourquoi VictorIA ?</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-3 text-victori-cyan">Confidentialité Maximale</h3>
          <p class="text-gray-500">Aucune donnée ne quitte votre machine. VictorIA respecte votre vie privée en traitant tout localement.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-3 text-victori-cyan">Modularité Avancée</h3>
          <p class="text-gray-500">Choisissez et installez uniquement les modules nécessaires, pour une expérience sur mesure.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-3 text-victori-cyan">Performance Optimisée</h3>
          <p class="text-gray-500">Réponses rapides grâce à l'exécution locale, adaptée à votre matériel.</p>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <h3 class="text-xl font-bold mb-3 text-victori-cyan">Open-Source</h3>
          <p class="text-gray-500">Contribuez au projet sur GitHub et personnalisez <strong>votre</strong> VictorIA selon vos besoins.</p>
        </div>
      </div>
    </section>

    <section class="reveal-on-scroll" style="transition-delay: 200ms;">
      <h2 class="text-3xl font-bold mb-6 text-center">Questions Fréquentes</h2>
      <div class="max-w-4xl mx-auto space-y-6">
        <details class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <summary class="text-lg font-semibold cursor-pointer text-victori-cyan">Comment installer VictorIA ?</summary>
          <p class="mt-4 text-gray-600">Téléchargez le fichier executable et lancez-le et l'installation ce fera automatiquement. Consultez la documentation pour les détails.</p>
        </details>
        <details class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <summary class="text-lg font-semibold cursor-pointer text-victori-cyan">Est-ce compatible avec mon système ?</summary>
          <p class="mt-4 text-gray-600">Oui, VictorIA fonctionne sur Windows, macOS et Linux, tant que votre machine dispose de ressources suffisantes (RAM, CPU).</p>
        </details>
        <details class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <summary class="text-lg font-semibold cursor-pointer text-victori-cyan">Puis-je contribuer au projet ?</summary>
          <p class="mt-4 text-gray-600">Absolument ! VictorIA est open-source. Forkez le repo sur GitHub et proposez vos améliorations.</p>
        </details>
        <details class="bg-gray-50 p-6 rounded-xl shadow-lg">
          <summary class="text-lg font-semibold cursor-pointer text-victori-cyan">Où est le dépôt GitHub de VictorIA ?</summary>
          <p class="mt-4 text-gray-600">Le projet VictorIA est open-source et son code source est disponible sur GitHub. Visitez <a href="https://github.com/Yota02/victoria" class="text-victori-cyan underline" target="_blank">notre dépôt GitHub</a> pour explorer le code, signaler des problèmes ou contribuer.</p>
        </details>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1
  })

  const revealElements = document.querySelectorAll('.reveal-on-scroll')
  revealElements.forEach(el => observer.observe(el))
})
</script>

<style scoped>
/* ...existing code... */
</style>