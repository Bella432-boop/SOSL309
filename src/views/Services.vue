<template>
  <section class="relative min-h-screen w-full mt-12">
    <div class="absolute inset-0 bg-fixed bg-cover bg-center" style="background-image: url('/src/assets/images/Stadium.png');"></div>
    <div class="absolute inset-0 bg-black/55"></div>

    <div class="relative z-10 text-white px-6 md:px-12 py-24">
      <div class="max-w-5xl mx-auto text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">Services built for your Rwanda journey</h1>
        <p class="text-base md:text-lg text-slate-200/90 mt-6 leading-relaxed">
          From safari planning and custom itineraries to local support and guided tours, our services make every trip to Rwanda unforgettable.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div class="border border-white/20 rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition duration-500">
          <div class="h-72 overflow-hidden relative">
            <img src="/src/assets/images/Wildlife.png" alt="Safari Experience" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-3">Unforgettable Safaris</h3>
            <p class="text-slate-200 text-sm leading-relaxed">Experience nature at its finest with gorilla trekking, wildlife safaris, and expertly guided national park tours.</p>
            <button class="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition">Book Safari</button>
          </div>
        </div>

        <div class="border border-white/20 rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition duration-500">
          <div class="h-72 overflow-hidden relative">
            <img src="/src/assets/images/Rwanda.png" alt="Custom Packages" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-3">Custom Packages</h3>
            <p class="text-slate-200 text-sm leading-relaxed">Tailored travel plans for families, adventure seekers, honeymooners, and culture fans.</p>
            <button class="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition">Customize Trip</button>
          </div>
        </div>

        <div class="border border-white/20 rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition duration-500">
          <div class="h-72 overflow-hidden relative">
            <img src="/src/assets/images/Destinations.png" alt="Local Assistance" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-semibold mb-3">Local Assistance</h3>
            <p class="text-slate-200 text-sm leading-relaxed">Get support during your journey with local guides, transport help, and real-time travel advice.</p>
            <button class="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition">Get Support</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
