import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

const routes = [
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/about', component: () => import('./views/AboutView.vue') },
  { path: '/journey', component: () => import('./views/JourneyView.vue') },
  { path: '/goals', component: () => import('./views/GoalsView.vue') },
  { path: '/projects', component: () => import('./views/ProjectsView.vue') },
  { path: '/reflection', component: () => import('./views/ReflectionView.vue') },
  { path: '/contact', component: () => import('./views/ContactView.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 })
})

createApp(App).use(router).mount('#app')
