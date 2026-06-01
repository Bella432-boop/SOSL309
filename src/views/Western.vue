<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 flex flex-col items-center px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight">
      This is the western province!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed">
      Experience the stunning shores of Lake Kivu, scenic tea plantations, and vibrant lakeside communities.
    </p>

    <!-- Majestic Western Highlights Section -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mx-auto pb-24">
      
      <!-- Card 1: Lake Kivu Shores -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <img src="/lake kivu.png" alt="Lake Kivu Shores" class="w-full h-48 object-cover border-b-2 border-green-600" />
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-bold mb-3">Lake Kivu Shores</h3>
          <p class="text-sm text-green-800 font-medium">Relax along breathtaking, pristine resort coastlines where dramatic rolling hills gracefully meet peaceful, sprawling waters.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm text-center">
            Explore Shores
          </button>
        </div>
      </div>

      <!-- Card 2: Scenic Tea Plantations -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <img src="/Scenic ridges.png" alt="Tea Plantations" class="w-full h-48 object-cover border-b-2 border-green-600" />
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-bold mb-3">Tea Plantations</h3>
          <p class="text-sm text-green-800 font-medium">Wander through massive, beautifully terraced fields of vibrant green tea sweeping down spectacular high-altitude slopes.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm text-center">
            Visit Plantations
          </button>
        </div>
      </div>

      <!-- Card 3: Lakeside Communities -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <img src="/INYAMBO.jpg" alt="Lakeside Culture" class="w-full h-48 object-cover border-b-2 border-green-600" />
        <div class="p-8 flex-grow">
          <h3 class="text-2xl font-bold mb-3">Lakeside Culture</h3>
          <p class="text-sm text-green-800 font-medium">Immerse yourself in active, welcoming towns filled with traditional fishing cultures, markets, and water adventures.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm text-center">
            Meet Communities
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
