<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight">
      This is the northern province!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed">
      Welcome to the highest and coolest region of Rwanda, defined by its dramatic mountain landscapes, mist-covered valleys, and lush agricultural hillsides. The northern landscape is dominated by the majestic peaks of the Virunga volcanic mountain range. These impressive natural structures shape the region's unique geography, creating striking horizons, rich volcanic soil conditions, and some of the most scenic high-altitude viewpoints in East Africa.
    </p>

    <!-- Majestic Northern Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24">
      
      <!-- Card 1: Virunga Peaks -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <img src="https://placehold.co" alt="Virunga Peaks" class="w-full h-48 object-cover border-b-2 border-green-600" />
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-bold mb-3">Virunga Peaks</h3>
          <p class="text-sm text-green-800 font-medium">Marvel at the majestic volcanic mountain range shaping the region's unique geography and rich volcanic soil conditions.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Explore Peaks
          </button>
        </div>
      </div>

      <!-- Card 2: Mist-Covered Valleys -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <img src="https://placehold.co" alt="Mist Valleys" class="w-full h-48 object-cover border-b-2 border-green-600" />
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-bold mb-3">Mist-Covered Valleys</h3>
          <p class="text-sm text-green-800 font-medium">Immerse yourself in the coolest region of Rwanda, filled with lush agricultural hillsides and dramatic mountain landscapes.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Discover Valleys
          </button>
        </div>
      </div>

      <!-- Card 3: High-Altitude Viewpoints -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <img src="https://placehold.co" alt="Scenic Viewpoints" class="w-full h-48 object-cover border-b-2 border-green-600" />
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-bold mb-3">Scenic Viewpoints</h3>
          <p class="text-sm text-green-800 font-medium">Stand on striking horizons and take in some of the most spectacular, high-altitude panoramic vistas in East Africa.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            View Horizons
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
