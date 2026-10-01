<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About me', to: '/about' },
  { label: 'Journey', to: '/journey' },
  { label: 'Goals', to: '/goals' },
  { label: 'Projects', to: '/projects' },
  { label: 'Reflection', to: '/reflection' },
  { label: 'Contact', to: '/contact' }
]

const route = useRoute()
</script>

<template>
  <div class="site-shell">
    <header class="site-header">
      <RouterLink class="brand" to="/">O.Gobinca</RouterLink>
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
    </footer>
  </div>
</template>

<style scoped>
.site-header {
  background-color: #19a247d2;
  border-bottom-color: var(--line);
  color: var(--ink);
}

.site-header .brand,
.site-header nav a {
  color: var(--ink);
}

.site-header nav a {
  font-weight: 700;
}

.site-header .brand span {
  color: #ec7559;
}

.site-header nav a:hover,
.site-header nav a.active {
  color: var(--ink);
  border-color: var(--ink);
}

footer {
  background-color: #19a247d2;
  border-top-color: var(--line);
  color: var(--ink);
}
</style>
