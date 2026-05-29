<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 flex flex-col items-center px-6 md:px-12 transition-all duration-700 ease-in-out opacity-100 animate-fade-in">
    <!-- Main Header with clean cinematic tracking -->
    <h1 class="text-5xl font-extrabold pt-24 pb-12 text-center tracking-tight uppercase border-b-4 border-green-600 mb-6 drop-shadow-sm">
      This is the northern province!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed text-emerald-800">
      Welcome to the highest and coolest region of Rwanda, defined by its dramatic mountain landscapes, mist-covered valleys, and lush agricultural hillsides. The northern landscape is dominated by the majestic peaks of the Virunga volcanic mountain range. These impressive natural structures shape the region's unique geography, creating striking horizons, rich volcanic soil conditions, and some of the most scenic high-altitude viewpoints in East Africa.
    </p>

    <!-- Animated Regional Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto pb-24">
      
      <!-- Card 1: Virunga Peaks -->
      <div class="group border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between bg-emerald-50/30 backdrop-blur-sm">
        <div class="relative overflow-hidden">
          <img src="https://unsplash.com" alt="Virunga Volcanic Peaks" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-bold uppercase tracking-widest animate-pulse">Explore Volcanoes</span>
          </div>
        </div>
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-extrabold mb-3 group-hover:text-emerald-500 transition-colors duration-300">Virunga Peaks</h3>
          <p class="text-sm text-green-800 font-semibold leading-relaxed">Marvel at the majestic volcanic mountain range shaping the region's unique geography and rich volcanic soil conditions.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-3 px-4 rounded-2xl transition-all duration-300 text-sm tracking-wider uppercase shadow-md group-hover:shadow-green-200">
            Explore Peaks
          </button>
        </div>
      </div>

      <!-- Card 2: Mist-Covered Valleys -->
      <div class="group border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between bg-emerald-50/30 backdrop-blur-sm">
        <div class="relative overflow-hidden">
          <img src="https://unsplash.com" alt="Mist covered highlands" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-bold uppercase tracking-widest animate-pulse">Discover Mist</span>
          </div>
        </div>
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-extrabold mb-3 group-hover:text-emerald-500 transition-colors duration-300">Mist-Covered Valleys</h3>
          <p class="text-sm text-green-800 font-semibold leading-relaxed">Immerse yourself in the coolest region of Rwanda, filled with lush agricultural hillsides and dramatic mountain landscapes.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-3 px-4 rounded-2xl transition-all duration-300 text-sm tracking-wider uppercase shadow-md group-hover:shadow-green-200">
            Discover Valleys
          </button>
        </div>
      </div>

      <!-- Card 3: High-Altitude Viewpoints -->
      <div class="group border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between bg-emerald-50/30 backdrop-blur-sm">
        <div class="relative overflow-hidden">
          <img src="https://unsplash.com" alt="Scenic high altitude horizons" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-bold uppercase tracking-widest animate-pulse">View Panoramas</span>
          </div>
        </div>
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-extrabold mb-3 group-hover:text-emerald-500 transition-colors duration-300">Scenic Viewpoints</h3>
          <p class="text-sm text-green-800 font-semibold leading-relaxed">Stand on striking horizons and take in some of the most spectacular, high-altitude panoramic vistas in East Africa.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-3 px-4 rounded-2xl transition-all duration-300 text-sm tracking-wider uppercase shadow-md group-hover:shadow-green-200">
            View Horizons
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
