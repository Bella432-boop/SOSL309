<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')

function handleLogin() {
  // add login validation here if needed
  router.push('/dashboard')
}
</script>

<template>
    <div class="flex items-center justify-center bg-green-100 min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center text-green-800">Login to Your Account</h2>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
        <input v-model="email" type="email" placeholder="Please enter user Email" required 
        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600 ">
        <input v-model="password" type="password" placeholder="Please enter user Password" required
         class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600 ">
         <button type="submit"
         class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">
            Login
         </button>
    </form>
    <p class="text-center text-sm mt-4 text-gray-600">
         Don't have an account? <RouterLink to="/register" class="text-green-700 font-semibold hover:underline">Sign Up</RouterLink>
    </p>
    </div>
    </div>
</template>