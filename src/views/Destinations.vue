<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight animate-fade-in-up">
      These are the exact locations of ur desired places!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
      From the central urban hub to the farthest borders, navigating Rwanda is simple. Discover where each unique experience is situated across our beautiful regions. Situated right at the geographic heart of the country, the City of Kigali acts as the main entry point for international travelers. It serves as the primary connection point linking all major highways to the northern, southern, eastern, and western provinces. The historical and cultural landmarks are positioned in the rolling hills of the southern interior. Further east, the terrain flattens significantly into the expansive wetlands, lowlying lakes, and protected savannah environments along the eastern border.
    </p>

    <!-- Majestic Location Cards Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24 animate-fade-in-up delay-200">
      
      <!-- Card 1: City of Kigali -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://unsplash.com" alt="Kigali Skyline" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">City of Kigali</h3>
          <p class="text-sm text-green-800 font-medium">The geographic heart and central urban hub. The primary gateway connecting travelers to all four major provinces.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Explore Hub
          </button>
        </div>
      </div>

      <!-- Card 2: Southern Interior -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://unsplash.com" alt="Southern Hills" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Southern Interior</h3>
          <p class="text-sm text-green-800 font-medium">Nestled within beautiful rolling hills. Home to historical landmarks, heritage sites, and cultural experiences.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Discover Culture
          </button>
        </div>
      </div>

      <!-- Card 3: Eastern Border -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://unsplash.com" alt="Savannah Overview" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Eastern Border</h3>
          <p class="text-sm text-green-800 font-medium">Flat terrains with expansive wetlands, low-lying lakes, and protected majestic savannah environments.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            View Savannah
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
