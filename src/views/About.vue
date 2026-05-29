<template>
  <!-- HERO SECTION -->
  <section class="relative h-[85vh] bg-cover bg-center flex items-center justify-center tracking-tight" style="background-image: url('/cvt.png');">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/45"></div>
    
    <!-- Hero Content -->
    <div class="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
      <h1 class="text-6xl md:text-8xl font-serif font-extralight tracking-wide mb-8 leading-tight drop-shadow-md">
        Discover what's all about Rwanda
      </h1>
      <p class="text-xs md:text-sm text-green-200/90 font-medium tracking-[0.25em] uppercase border-t border-b border-white/20 py-4 px-6 inline-block mb-10 bg-black/10 backdrop-blur-sm">
        Discover the Beauty of Rwanda, the heart of Africa! 🌍
      </p>
      
      <!-- New Dual Buttons Section -->
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <button class="bg-green-700 hover:bg-green-800 text-white font-medium tracking-wider uppercase text-xs px-10 py-4 rounded-full shadow-xl transition-all duration-300 transform active:scale-95">
          Explore Rwanda
        </button>
        <button class="bg-white/10 hover:bg-white/20 text-white font-medium tracking-wider uppercase text-xs px-10 py-4 rounded-full shadow-xl border border-white/20 backdrop-blur-md transition-all duration-300 transform active:scale-95">
          Learn More
        </button>
      </div>
    </div>
  </section>

  <!-- ABOUT SECTION -->
  <section class="bg-white py-28 px-8 border-b border-gray-100">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
      <!-- IMAGE -->
      <div class="md:w-1/2 group">
        <div class="overflow-hidden rounded-3xl shadow-2xl bg-slate-100">
          <img src="/Peace.png" alt="Rwanda" class="w-full h-[580px] object-cover rounded-3xl transition-transform duration-1000 ease-out group-hover:scale-105" />
        </div>
      </div>
      <!-- TEXT -->
      <div class="md:w-1/2 flex flex-col items-start">
        <span class="text-xs font-semibold tracking-[0.2em] uppercase text-green-800 mb-4 bg-green-50 px-4 py-1.5 rounded-full">Our Story</span>
        <h2 class="text-4xl md:text-6xl font-serif font-extralight text-slate-900 mb-8 leading-tight tracking-wide">
          Welcome to Rwanda
        </h2>
        <p class="text-slate-600 text-lg md:text-xl leading-relaxed font-light mb-6">
          Tembera Urwanda is a tourism website created to help both international tourists and Rwandans discover the beauty of Rwanda, the Land of a Thousand Hills. By travelling to several distant places!
        </p>
        <p class="text-slate-600 text-lg md:text-xl leading-relaxed font-light">
          From the peaceful beaches of Lake Kivu and the wildlife of Akagera National Park to the vibrant city life of Kigali, Rwanda offers unforgettable experiences filled with adventure, culture, and natural beauty.
        </p>
        <!-- BUTTON -->
        <button class="mt-12 bg-slate-900 hover:bg-green-800 text-white font-medium tracking-wider uppercase text-xs px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95">
          Explore Rwanda
        </button>
      </div>
    </div>
  </section>

  <!-- DESTINATIONS SECTION -->
  <section class="bg-slate-50/60 py-28 px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-xl mx-auto mb-20">
        <span class="text-xs font-semibold tracking-[0.2em] uppercase text-green-700 bg-green-50 px-4 py-1.5 rounded-full">Curated Travel</span>
        <h1 class="text-4xl md:text-6xl font-serif font-extralight text-slate-900 mt-4 tracking-wide">
          Most Visited Places
        </h1>
      </div>
      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- CARD 1 -->
        <div class="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3">
          <div class="overflow-hidden h-72">
            <img src="/Rda.png" class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>
          <div class="p-10">
            <h2 class="text-2xl font-serif font-light text-slate-900 mb-4 transition-colors duration-300 group-hover:text-green-800 tracking-wide">
              Volcanoes National Park
            </h2>
            <p class="text-slate-500 font-light text-base leading-relaxed">
              Experience mountain gorillas and breathtaking volcanic scenery.
            </p>
          </div>
        </div>
        <!-- CARD 2 -->
        <div class="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3">
          <div class="overflow-hidden h-72">
            <img src="/lake kivu.png" class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>
          <div class="p-10">
            <h2 class="text-2xl font-serif font-light text-slate-900 mb-4 transition-colors duration-300 group-hover:text-green-800 tracking-wide">
              Lake Kivu
            </h2>
            <p class="text-slate-500 font-light text-base leading-relaxed">
              Relax on peaceful beaches and enjoy stunning sunset views.
            </p>
          </div>
        </div>
        <!-- CARD 3 -->
        <div class="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 ease-out hover:-translate-y-3">
          <div class="overflow-hidden h-72">
            <img src="/download (2).png" class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          </div>
          <div class="p-10">
            <h2 class="text-2xl font-serif font-light text-slate-900 mb-4 transition-colors duration-300 group-hover:text-green-800 tracking-wide">
              Kigali City
            </h2>
            <p class="text-slate-500 font-light text-base leading-relaxed">
              Explore Rwanda’s vibrant capital filled with culture and modern life.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
