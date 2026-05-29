<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight animate-fade-in-up">
      This is Kigali City
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
      Welcome to the geographic and economic heart of Rwanda. Kigali is widely celebrated for its clean streets, lush green hills, and welcoming atmosphere. Spanning across multiple scenic ridges and valleys, the city beautifully balances rapid modern development with environmental sustainability. Tree-lined avenues, manicured public spaces, and urban eco-parks create a refreshing and peaceful city landscape.
    </p>

    <!-- Majestic Kigali Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24 animate-fade-in-up delay-200">
      
      <!-- Card 1: Urban Eco-Parks & Clean Streets -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="/Urban parks.png" alt="Urban Parks" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Urban Eco-Parks</h3>
          <p class="text-sm text-green-800 font-medium">Stroll through manicured public spaces, tree-lined avenues, and celebrated green zones that keep the city clean and refreshing.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Visit Green Spaces
          </button>
        </div>
      </div>

      <!-- Card 2: Scenic Ridges & Valleys -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="/Scenic ridges.png" alt="Scenic Ridges" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Scenic Ridges</h3>
          <p class="text-sm text-green-800 font-medium">Take in the iconic panoramic landscapes that sweep beautifully across multiple hills and valleys defining the urban horizon.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            View Horizons
          </button>
        </div>
      </div>

      <!-- Card 3: Sustainable Development -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="/Modern progress.png
          " alt="Modern Progress" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Modern Progress</h3>
          <p class="text-sm text-green-800 font-medium">Experience the economic hub of the country, where rapid architectural growth seamlessly balances with environmental sustainability.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Explore Hub
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
