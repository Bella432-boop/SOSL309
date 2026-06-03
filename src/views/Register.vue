<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const name = ref('')
const email = ref('')
const age = ref('')
const phone = ref('')
const gender = ref('')
const location = ref('')
const password = ref('')
const confirmPassword = ref('')
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-green-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center text-green-800">Create Your Account</h2>
      <form @submit.prevent class="flex flex-col gap-4">
        <input v-model="name" type="text" placeholder="Full Name" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <input v-model="email" type="email" placeholder="Email Address" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <input v-model="age" type="number" min="0" placeholder="Age" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <input v-model="phone" type="tel" placeholder="Phone Number" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <div>
          <label class="text-sm font-medium text-gray-700">Gender</label>
          <select v-model="gender" required class="mt-1 block w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:border-green-600">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input v-model="location" type="text" placeholder="Location (City, Country)" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <input v-model="password" type="password" placeholder="Password" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-600" />
        <button type="submit" class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold">Register</button>
      </form>
      <p class="text-center text-sm mt-4 text-gray-600">
        Already have an account? <RouterLink to="/login" class="text-green-700 font-semibold hover:underline">Login</RouterLink>
      </p>
    </div>
  </div>
</template>
