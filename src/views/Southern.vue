<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 flex flex-col items-center px-6 md:px-12 transition-all duration-700 ease-in-out opacity-100 animate-fade-in">
    <!-- Main Header with distinct premium weight -->
    <h1 class="text-5xl font-extrabold pt-24 pb-12 text-center tracking-tight uppercase border-b-4 border-green-600 mb-6 drop-shadow-sm">
      This is the southern province!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed text-emerald-800">
      Explore the rich cultural heritage, breathtaking hills, and historic landmarks of this beautiful region.
    </p>

    <!-- Animated Southern Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto pb-24">
      
      <!-- Card 1: Cultural Heritage -->
      <div class="group border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between bg-emerald-50/30 backdrop-blur-sm">
        <div class="relative overflow-hidden">
          <img src="/INYAMBO.jpg" alt="Rwandan Cultural Intore Dance" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-bold uppercase tracking-widest animate-pulse">Experience Culture</span>
          </div>
        </div>
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-extrabold mb-3 group-hover:text-emerald-500 transition-colors duration-300">Cultural Heritage</h3>
          <p class="text-sm text-green-800 font-semibold leading-relaxed">Immerse yourself in traditional music, dance, and ancestral customs that define the vibrant spirit and history of the nation.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-3 px-4 rounded-2xl transition-all duration-300 text-sm tracking-wider uppercase shadow-md group-hover:shadow-green-200">
            Explore Traditions
          </button>
        </div>
      </div>

      <!-- Card 2: Breathtaking Hills -->
      <div class="group border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between bg-emerald-50/30 backdrop-blur-sm">
        <div class="relative overflow-hidden">
          <img src="/Rda.png" alt="Sweeping green terraced hills" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-bold uppercase tracking-widest animate-pulse">View Landscapes</span>
          </div>
        </div>
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-extrabold mb-3 group-hover:text-emerald-500 transition-colors duration-300">Breathtaking Hills</h3>
          <p class="text-sm text-green-800 font-semibold leading-relaxed">Journey through sweeping, endless green ridges and agricultural landscapes that offer magnificent high-altitude views.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-3 px-4 rounded-2xl transition-all duration-300 text-sm tracking-wider uppercase shadow-md group-hover:shadow-green-200">
            View Landscapes
          </button>
        </div>
      </div>

      <!-- Card 3: Historic Landmarks -->
      <div class="group border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 flex flex-col justify-between bg-emerald-50/30 backdrop-blur-sm">
        <div class="relative overflow-hidden">
          <img src="/cvt.png" alt="Ancient pathways and structures" class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span class="text-white text-xs font-bold uppercase tracking-widest animate-pulse">Uncover History</span>
          </div>
        </div>
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-extrabold mb-3 group-hover:text-emerald-500 transition-colors duration-300">Historic Landmarks</h3>
          <p class="text-sm text-green-800 font-semibold leading-relaxed">Visit iconic historical locations, ancient royal palaces, and heritage sites nested deeply in the southern interior.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-black py-3 px-4 rounded-2xl transition-all duration-300 text-sm tracking-wider uppercase shadow-md group-hover:shadow-green-200">
            Discover History
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
