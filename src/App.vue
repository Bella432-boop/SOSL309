<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import logo from './assets/images/logo.png'
</script>

<template>
  <navbar />
  <RouterView />
  <Footer />
</template>