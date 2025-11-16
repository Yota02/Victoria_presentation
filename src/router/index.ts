import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import DownloadPage from '../components/DownloadPage.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
