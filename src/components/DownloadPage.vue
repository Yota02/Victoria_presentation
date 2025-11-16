<template>
  <main class="container mx-auto px-6 py-16 md:py-24">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold mt-4 mb-10 text-gradient animate-fade-in px-6">
        Télécharger VictorIA
      </h1>
      <p class="text-xl text-gray-600 mb-8 animate-fade-in-delay-1">
        Obtenez le code source complet de VictorIA pour l'installer et la personnaliser sur votre machine. Tout est open-source et prêt à l'emploi.
      </p>
      <div class="flex justify-center space-x-4 animate-fade-in-delay-2">
        <a :href="downloadUrl" target="_blank" class="bg-victori-cyan text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition duration-300 text-lg">
          Télécharger sur GitHub
        </a>
        <a href="#" class="bg-white text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 text-lg border border-gray-300">
          Documentation
        </a>
      </div>
      <p class="text-gray-500 mt-8 animate-fade-in-delay-3">
        Version actuelle : {{ currentVersion }} | Compatible avec Windows, macOS et Linux.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentVersion: 'Chargement...',
      downloadUrl: 'https://github.com/Yota02/Victoria/releases/latest'
    };
  },
  async mounted() {
    try {
      const response = await fetch('https://api.github.com/repos/Yota02/Victoria/releases/latest');
      const data = await response.json();
      this.currentVersion = data.tag_name || '1.0.0';
      this.downloadUrl = data.html_url || 'https://github.com/Yota02/Victoria/releases/latest';
    } catch (error) {
      console.error('Erreur lors de la récupération de la version:', error);
      this.currentVersion = '1.0.0';
    }
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}

.animate-fade-in-delay-1 {
  animation: fade-in 0.8s ease-out 0.2s both;
}

.animate-fade-in-delay-2 {
  animation: fade-in 0.8s ease-out 0.4s both;
}

.animate-fade-in-delay-3 {
  animation: fade-in 0.8s ease-out 0.6s both;
}
</style>
