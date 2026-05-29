<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 flex flex-col items-center px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight">
      This is the southern province!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed">
      Explore the rich cultural heritage, breathtaking hills, and historic landmarks of this beautiful region.
    </p>

    <!-- Majestic Southern Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto pb-24">
      
      <!-- Card 1: Cultural Heritage -->
      <div class="border-2 border-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <div>
          <div class="text-4xl mb-4">🇷🇼</div>
          <h3 class="text-2xl font-bold mb-3">Cultural Heritage</h3>
          <p class="text-sm text-green-800 font-medium">Immerse yourself in traditional music, dance, and ancestral customs that define the vibrant spirit and history of the nation.</p>
        </div>
        <button class="mt-6 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm self-start">
          Explore Traditions
        </button>
      </div>

      <!-- Card 2: Breathtaking Hills -->
      <div class="border-2 border-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <div>
          <div class="text-4xl mb-4">⛰️</div>
          <h3 class="text-2xl font-bold mb-3">Breathtaking Hills</h3>
          <p class="text-sm text-green-800 font-medium">Journey through sweeping, endless green ridges and agricultural landscapes that offer magnificent high-altitude views.</p>
        </div>
        <button class="mt-6 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm self-start">
          View Landscapes
        </button>
      </div>

      <!-- Card 3: Historic Landmarks -->
      <div class="border-2 border-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <div>
          <div class="text-4xl mb-4">👑</div>
          <h3 class="text-2xl font-bold mb-3">Historic Landmarks</h3>
          <p class="text-sm text-green-800 font-medium">Visit iconic historical locations, ancient royal palaces, and heritage sites nested deeply in the southern interior.</p>
        </div>
        <button class="mt-6 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm self-start">
          Discover History
        </button>
      </div>

    </div>
  </section>
</template>
