<script setup>
import { ref } from 'vue'
const sent = ref(false)
function submitForm() { sent.value = true }
</script>
<template><section class="page-section narrow-page contact-page"><div class="section-heading"><p class="eyebrow">05 / Start a conversation</p><h1>Contact me</h1><p>Have a question, some feedback, or just want to say hello? Send a message below.</p></div><form class="contact-form" action="https://formspree.io/f/xvzyedoz" method="POST" @submit="submitForm"><label>Full name<input type="text" name="name" placeholder="Your name" required /></label><label>Email address<input type="email" name="email" placeholder="you@example.com" required /></label><label>Message<textarea name="message" rows="6" placeholder="Your message" required></textarea></label><button class="button button-dark" type="submit">{{ sent ? 'Message ready to send' : 'Send message' }} <span>-></span></button></form></section></template>
