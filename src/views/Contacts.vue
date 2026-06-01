<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  rating: 5,
  problemType: 'feedback',
  message: '',
})

const isSubmitted = ref(false)

const submitForm = () => {
  if (formData.value.name && formData.value.email && formData.value.message) {
    console.log('Form submitted:', formData.value)
    isSubmitted.value = true
    setTimeout(() => {
      formData.value = { name: '', email: '', phone: '', rating: 5, problemType: 'feedback', message: '' }
      isSubmitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <section class="relative h-[32rem] md:h-[36rem] bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/images/Rwanda.png');">
    <div class="absolute inset-0 bg-black/60"></div>
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
      <p class="text-base md:text-lg text-slate-200 max-w-2xl mx-auto">Reach out to our local team for booking help, safari planning, or support on your trip.</p>
    </div>
  </section>

  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header with dynamic delay animation -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight animate-fade-in-up">
      For any service, contact us for more info.
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
      Whether you are planning an unforgettable safari, looking for custom travel packages, or need assistance exploring Rwanda, our team is available to assist you every step of the way. Response time: Within 24 hours
    </p>

    <!-- Majestic Service Cards Section with hover lift & shadow effects -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24 animate-fade-in-up delay-200">
      
      <!-- Card 1: Safaris -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="/src/assets/images/Wildlife.png" alt="Unforgettable Safaris" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Unforgettable Safaris</h3>
          <p class="text-sm text-green-800 font-medium">Experience majestic wildlife encounters, gorilla trekking adventures, and breathtaking landscapes across Rwanda's finest national parks.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-green-600 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-700 transition-colors text-sm">
            Book Safari
          </button>
        </div>
      </div>

      <!-- Card 2: Custom Packages -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="/INYAMBO.jpg" alt="Custom Packages" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Custom Packages</h3>
          <p class="text-sm text-green-800 font-medium">Tailor-made itineraries designed specifically for your schedule, budget, and travel desires to create your perfect dream vacation.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-green-600 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-700 transition-colors text-sm">
            Customize Trip
          </button>
        </div>
      </div>

      <!-- Card 3: Local Assistance -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="/src/assets/images/Rwanda.png" alt="Local Assistance" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Local Assistance</h3>
          <p class="text-sm text-green-800 font-medium">Navigate Rwanda with ease. Our dedicated on-the-ground team provides real-time support, expert guides, and logistical coordination.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-green-600 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-700 transition-colors text-sm">
            Get Support
          </button>
        </div>
      </div>

    </div>

    <!-- Feedback & Problem Report Form Section -->
    <div class="max-w-4xl mx-auto mt-24 mb-24 bg-emerald-50 rounded-3xl p-12 shadow-xl animate-fade-in-up">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-green-700 mb-4">Share Your Feedback</h2>
        <p class="text-green-600 text-lg">Help us improve by rating your experience and reporting any issues</p>
      </div>

      <div v-if="isSubmitted" class="mb-8 p-6 bg-green-100 border-2 border-green-600 rounded-2xl text-center">
        <p class="text-green-800 font-bold text-lg">✓ Thank you! Your feedback has been submitted successfully.</p>
      </div>

      <form @submit.prevent="submitForm" class="space-y-8">
        
        <!-- Name Field -->
        <div>
          <label class="block text-green-700 font-semibold mb-3">Full Name *</label>
          <input 
            v-model="formData.name" 
            type="text" 
            placeholder="Enter your full name" 
            class="w-full px-6 py-4 border-2 border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-slate-800"
            required
          />
        </div>

        <!-- Email Field -->
        <div>
          <label class="block text-green-700 font-semibold mb-3">Email Address *</label>
          <input 
            v-model="formData.email" 
            type="email" 
            placeholder="your.email@example.com" 
            class="w-full px-6 py-4 border-2 border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-slate-800"
            required
          />
        </div>

        <!-- Phone Field -->
        <div>
          <label class="block text-green-700 font-semibold mb-3">Phone Number</label>
          <input 
            v-model="formData.phone" 
            type="tel" 
            placeholder="+250 XXX XXX XXX" 
            class="w-full px-6 py-4 border-2 border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-slate-800"
          />
        </div>

        <!-- Rating Section -->
        <div>
          <label class="block text-green-700 font-semibold mb-4">Rate Your Experience</label>
          <div class="flex gap-4 text-4xl">
            <button 
              v-for="star in 5" 
              :key="star"
              type="button"
              @click="formData.rating = star"
              class="transition-transform duration-200 transform hover:scale-125"
            >
              <span :class="star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'">★</span>
            </button>
          </div>
        </div>

        <!-- Problem Type -->
        <div>
          <label class="block text-green-700 font-semibold mb-3">Feedback Type *</label>
          <select 
            v-model="formData.problemType" 
            class="w-full px-6 py-4 border-2 border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-slate-800"
            required
          >
            <option value="feedback">General Feedback</option>
            <option value="problem">Report a Problem</option>
            <option value="bug">Technical Issue</option>
            <option value="suggestion">Suggestion</option>
            <option value="complaint">Complaint</option>
          </select>
        </div>

        <!-- Message Field -->
        <div>
          <label class="block text-green-700 font-semibold mb-3">Your Message *</label>
          <textarea 
            v-model="formData.message" 
            placeholder="Please describe your experience, problem, or suggestion in detail..." 
            rows="6"
            class="w-full px-6 py-4 border-2 border-green-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent text-slate-800 resize-none"
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex gap-4 justify-center pt-6">
          <button 
            type="submit"
            class="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 text-lg"
          >
            Submit Feedback
          </button>
          <button 
            type="reset"
            class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 text-lg"
          >
            Clear
          </button>
        </div>

      </form>
    </div>
  </section>
</template>
