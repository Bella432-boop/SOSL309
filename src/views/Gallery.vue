<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight animate-fade-in-up">
      These are the places you would want to visit!
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
      Experience world-renowned conservation up close. Venture into the misty forests of Volcanoes National Park to spot rare mountain gorillas, hike through the ancient canopy of Nyungwe Forest, or head east to see the Big Five roaming freely across the savannah plains of Akagera. Immerse yourself in a rich, vibrant history. Explore the busy art galleries, clean streets, and dynamic food scene of Kigali City, or take a journey south to the historical King's Palace in Nyanza to learn about the fascinating traditions and ancestral heritage of the nation.
    </p>

    <!-- Majestic Places to Visit Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24 animate-fade-in-up delay-200">
      
      <!-- Card 1: Volcanoes National Park -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://volcanoesnationalpark.com" alt="Volcanoes National Park" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Volcanoes National Park</h3>
          <p class="text-sm text-green-800 font-medium">Venture deep into the misty, high-altitude forests to stand face-to-face with rare and majestic mountain gorillas.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Track Gorillas
          </button>
        </div>
      </div>

      <!-- Card 2: Nyungwe Forest -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://visitrwanda.com" alt="Nyungwe Canopy Walk" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Nyungwe Forest</h3>
          <p class="text-sm text-green-800 font-medium">Hike high above an ancient rainforest canopy and explore rich biodiverse trails packed with rare primates.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Walk Canopy
          </button>
        </div>
      </div>

      <!-- Card 3: Akagera National Park -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://explorerwandatours.com" alt="Akagera Wildlife" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Akagera National Park</h3>
          <p class="text-sm text-green-800 font-medium">Head east to witness the Big Five roaming freely across expansive wetlands and wild savannah plains.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Start Safari
          </button>
        </div>
      </div>

      <!-- Card 4: Kigali City -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://unsplash.com" alt="Kigali Street" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Kigali City</h3>
          <p class="text-sm text-green-800 font-medium">Discover exceptionally clean streets, vibrant local art galleries, and a rapidly booming culinary food scene.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Explore City
          </button>
        </div>
      </div>

      <!-- Card 5: King's Palace (Nyanza) -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://unsplash.com" alt="Heritage Center" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">King's Palace</h3>
          <p class="text-sm text-green-800 font-medium">Journey south to Nyanza to connect directly with ancestral heritage, historical architecture, and rich traditions.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-bold py-2 px-4 rounded-xl transition-colors text-sm">
            Learn History
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
