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
      <div class="border-2 border-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <div>
          <div class="text-4xl mb-4">🏖️</div>
          <h3 class="text-2xl font-bold mb-3">Lake Kivu Shores</h3>
          <p class="text-sm text-green-800 font-medium">Relax along breathtaking, pristine resort coastlines where dramatic rolling hills gracefully meet peaceful, sprawling waters.</p>
        </div>
        <button class="mt-6 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm self-start">
          Explore Shores
        </button>
      </div>

      <!-- Card 2: Scenic Tea Plantations -->
      <div class="border-2 border-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <div>
          <div class="text-4xl mb-4">🌱</div>
          <h3 class="text-2xl font-bold mb-3">Tea Plantations</h3>
          <p class="text-sm text-green-800 font-medium">Wander through massive, beautifully terraced fields of vibrant green tea sweeping down spectacular high-altitude slopes.</p>
        </div>
        <button class="mt-6 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm self-start">
          Visit Plantations
        </button>
      </div>

      <!-- Card 3: Lakeside Communities -->
      <div class="border-2 border-green-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30">
        <div>
          <div class="text-4xl mb-4">⛵</div>
          <h3 class="text-2xl font-bold mb-3">Lakeside Culture</h3>
          <p class="text-sm text-green-800 font-medium">Immerse yourself in active, welcoming towns filled with traditional fishing cultures, markets, and water adventures.</p>
        </div>
        <button class="mt-6 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm self-start">
          Meet Communities
        </button>
      </div>

    </div>
  </section>
</template>
