<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About me', to: '/about' },
  { label: 'Journey', to: '/journey' },
  { label: 'Goals', to: '/goals' },
  { label: 'Reflection', to: '/reflection' },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/">OG<span>.</span></RouterLink>
      <nav aria-label="Main navigation">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          :class="{ active: route.path === item.to }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <footer>
      <p>2026 Owam Gobinca. My Personal Portfolio.</p>
      <span>Built with Vue</span>
    </footer>
  </div>
</template>
