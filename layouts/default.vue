<template>
  <v-app>
    <Header />
      <NuxtPage />
    <Footer />
  </v-app>
</template>

<script setup>
import Header from '~/components/headerComponent/header.vue'
import Footer from '~/components/footerComponent/footer.vue'
</script>
