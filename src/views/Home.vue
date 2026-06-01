<script setup>
import { currentLang, translations } from '../langStore'
</script>

<template>
  <section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white animate-fade-in" style="background-image: url('/src/assets/images/Stadium.png');">
    <div class="bg-black/40 bg-opacity-50 absolute inset-0"></div>
    <div class="relative z-10 text-center px-4 w-full flex flex-col justify-center items-center h-full max-w-7xl mx-auto">
      
      <div class="absolute top-8 right-8 z-20 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-full shadow-sm animate-slide-down">
        <span class="text-sm tracking-widest text-gray-300 uppercase font-medium">Language:</span>
        <select v-model="currentLang" class="bg-transparent text-base font-semibold text-white focus:outline-none cursor-pointer pr-2 border-none">
          <option value="en" class="text-black">EN</option>
          <option value="fr" class="text-black">FR</option>
          <option value="rw" class="text-black">RW</option>
          <option value="sw" class="text-black">SW</option>
        </select>
      </div>

      <h1 class="text-6xl md:text-7xl lg:text-8xl font-serif tracking-wide mb-6 max-w-5xl leading-tight md:leading-none animate-slide-up">
        {{ translations[currentLang].title }}
      </h1>
      <p class="text-xl md:text-2xl lg:text-3xl mb-8 text-green-200 tracking-wide font-light max-w-3xl leading-relaxed animate-slide-up delay-200">
        {{ translations[currentLang].subtitle }}
      </p>

      <!-- New Call To Action Buttons with translation and animations linked -->
      <div class="flex flex-row items-center justify-center gap-4 mb-16 animate-slide-up delay-300">
        <button class="bg-green-700 hover:bg-green-800 text-white font-medium tracking-wide text-base md:text-lg px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 transform active:scale-95">
          {{ translations[currentLang].btnExplore }}
        </button>
        <button class="bg-white/10 hover:bg-white/20 text-white font-medium tracking-wide text-base md:text-lg px-8 py-3.5 rounded-full shadow-lg border border-white/20 backdrop-blur-md transition-all duration-300 transform active:scale-95">
          {{ translations[currentLang].btnLearn }}
        </button>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 animate-slide-up delay-400">
        
        <div class="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
          <div class="h-48 overflow-hidden relative">
            <img src="/src/assets/images/Destinations.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-8 text-left">
            <h3 class="text-2xl font-medium tracking-wide mb-3">
              {{ translations[currentLang].destTitle }}
            </h3>
            <p class="text-base md:text-lg text-gray-200 font-light leading-relaxed">
              {{ translations[currentLang].destDesc }}
            </p>
          </div>
        </div>

        <div class="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
          <div class="h-48 overflow-hidden relative">
            <img src="/src/assets/images/Wildlife.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-8 text-left">
            <h3 class="text-2xl font-medium tracking-wide mb-3">
              {{ translations[currentLang].wildTitle }}
            </h3>
            <p class="text-base md:text-lg text-gray-200 font-light leading-relaxed">
              {{ translations[currentLang].wildDesc }}
            </p>
          </div>
        </div>

        <div class="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
          <div class="h-48 overflow-hidden relative">
            <img src="/src/assets/images/Culture.png" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div class="p-8 text-left">
            <h3 class="text-2xl font-medium tracking-wide mb-3">
              {{ translations[currentLang].cultTitle }}
            </h3>
            <p class="text-base md:text-lg text-gray-200 font-light leading-relaxed">
              {{ translations[currentLang].cultDesc }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-slide-up {
  opacity: 0;
  animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-slide-down {
  opacity: 0;
  animation: slideDown 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
</style>
