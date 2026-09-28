<script setup>
const goals = [
  ['cgraduation.webp', 'Finish the Life Choices Course', 'Gain the skills needed for a career in technology.'],
  ['project.jpg', 'Build My Own Projects', 'Create work that showcases my creativity and problem-solving.'],
  ['OIP.webp', 'Master JavaScript', 'Become confident building dynamic, interactive websites.'],
  ['software-dev.jpg', 'Become a Software Developer', 'Secure a role and continue growing in the technology industry.']
]
</script>
<template>
  <section class="page-section"><div class="section-heading centered"><p class="eyebrow">03 / Looking ahead</p><h1>Goals with direction</h1><p>Small, consistent steps toward a meaningful career in technology.</p></div><div class="goal-grid"><article v-for="goal in goals" :key="goal[1]" class="goal-card"><img :src="`/pictures/${goal[0]}`" :alt="goal[1]" /><div><p class="eyebrow">Next milestone</p><h2>{{ goal[1] }}</h2><p>{{ goal[2] }}</p></div></article></div></section>
</template>
