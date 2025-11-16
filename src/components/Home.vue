<script setup lang="ts">
import { onMounted } from 'vue'
import HeroSection from './HeroSection.vue'
import PrivacySection from './PrivacySection.vue'
import FeaturesSection from './FeaturesSection.vue'
import ModulesSection from './ModulesSection.vue'

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

<template>
  <HeroSection />
  <PrivacySection />
  <FeaturesSection />
  <ModulesSection />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
