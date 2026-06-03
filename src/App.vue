<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { RouterView,useRoute } from 'vue-router'
import logo from './assets/images/logo.png'
import {computed} from 'vue'

const route=useRoute()
const hideLayout=computed(()=>['Dashboard'].includes(route.name))
</script>

<template>
  <Navbar v-if="!hideLayout" />
  <RouterView />
  <Footer v-if="!hideLayout" />
</template>