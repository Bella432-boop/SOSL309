<template>
  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <!-- Main Header with dynamic delay animation -->
    <h1 class="text-5xl font-bold pt-24 pb-12 text-center tracking-tight animate-fade-in-up">
      For any service, contact us for more info.
    </h1>
    
    <!-- Original Description Paragraph -->
    <p class="text-lg font-bold pb-16 text-center max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-100">
      Whether you are planning an unforgettable safari, looking for custom travel packages, or need assistance exploring Rwanda, our team is available to assist you every step of the way. Response time: Within 24 hours
    </p>

    <!-- Majestic Service Cards Section with hover lift & shadow effects -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24 animate-fade-in-up delay-200">
      
      <!-- Card 1: Safaris -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://ellamckendrick.com" alt="Unforgettable Safaris" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Unforgettable Safaris</h3>
          <p class="text-sm text-green-800 font-medium">Experience majestic wildlife encounters, gorilla trekking adventures, and breathtaking landscapes across Rwanda's finest national parks.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-green-600 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-700 transition-colors text-sm">
            Book Safari
          </button>
        </div>
      </div>

      <!-- Card 2: Custom Packages -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://silverbacktour.com" alt="Custom Packages" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Custom Packages</h3>
          <p class="text-sm text-green-800 font-medium">Tailor-made itineraries designed specifically for your schedule, budget, and travel desires to create your perfect dream vacation.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-green-600 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-700 transition-colors text-sm">
            Customize Trip
          </button>
        </div>
      </div>

      <!-- Card 3: Local Assistance -->
      <div class="border-2 border-green-600 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between bg-emerald-50/30 group">
        <div class="overflow-hidden h-48 border-b-2 border-green-600">
          <img src="https://visitandtourrwanda.com" alt="Local Assistance" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">Local Assistance</h3>
          <p class="text-sm text-green-800 font-medium">Navigate Rwanda with ease. Our dedicated on-the-ground team provides real-time support, expert guides, and logistical coordination.</p>
        </div>
        <div class="px-8 pb-8">
          <button class="w-full bg-green-600 text-white font-bold py-2.5 px-5 rounded-xl hover:bg-green-700 transition-colors text-sm">
            Get Support
          </button>
        </div>
      </div>

    </div>
  </section>
</template>
