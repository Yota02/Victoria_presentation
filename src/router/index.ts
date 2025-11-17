import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import DownloadPage from '../components/DownloadPage.vue'
import AboutSection from '../components/AboutSection.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/download',
    name: 'Download',
    component: DownloadPage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutSection
  }
]

const router = createRouter({
  history: createWebHistory('/Victoria_presentation/'),
  routes
})

export default router
