<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight animate-fade-in-up">
      This is the eastern province!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
      Welcome to the largest province in Rwanda, a beautiful region characterized by flat savannahs, rolling hills, and an abundance of peaceful lakes. Unlike the mountainous terrain found in the rest of the country, the Eastern Province features expansive, low-lying grasslands and acacia woodlands. This unique topography creates a completely different climate and visual experience, defining the distinct open-horizon charm of the region.
    </p>

    <!-- Majestic Regional Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24 animate-fade-in-up delay-200">
      
      <!-- Card 1: Flat Savannahs -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://insideakageranationalpark.com" alt="Flat Savannahs" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Flat Savannahs</h3>
          <p class="text-sm text-green-800 font-medium">Expansive, low-lying grasslands featuring distinct open horizons that contrast beautifully with Rwanda's mountainous west.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Explore Plains
          </button>
        </div>
      </div>

      <!-- Card 2: Peaceful Lakes -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://unsplash.com" alt="Peaceful Lakes" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Peaceful Lakes</h3>
          <p class="text-sm text-green-800 font-medium">An abundance of calm, interconnected waters and expansive wetlands offering peaceful views and thriving ecosystems.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            View Lakes
          </button>
        </div>
      </div>

      <!-- Card 3: Acacia Woodlands -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://akageranationalparkrwanda.org" alt="Acacia Woodlands" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Acacia Woodlands</h3>
          <p class="text-sm text-green-800 font-medium">Unique clusters of iconic acacia trees that define the region's climate, wildlife habitats, and visual experience.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Discover Nature
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
