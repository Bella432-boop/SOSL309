<script setup>
import { currentLang, translations } from '../langStore'
import HeroImage from '@/assets/images/Wildlife.png'
const VolcanoesPhoto = '/Kong.png'
const NyungwePhoto = '/Peace.png'
const KigaliPhoto = '/cvt.png'
import HeritagePhoto from '@/assets/images/Destinations.png'
import SafariPhoto from '@/assets/images/Wildlife.png'

const photoCards = [
  {
    title: 'Volcanoes National Park',
    description: 'Deep misty forests and mountain gorillas waiting among volcanic peaks.',
    image: VolcanoesPhoto,
    alt: 'Volcanoes National Park',
  },
  {
    title: 'Nyungwe Rainforest',
    description: 'Ancient canopy walks, vibrant greenery and hidden waterfalls.',
    image: NyungwePhoto,
    alt: 'Nyungwe Forest',
  },
  {
    title: 'Akagera Wildlife',
    description: 'Big Five safaris and golden savannah light across East Rwanda.',
    image: SafariPhoto,
    alt: 'Akagera National Park',
  },
  {
    title: 'Kigali Skyline',
    description: 'Modern city views, clean streets, and lively urban culture.',
    image: KigaliPhoto,
    alt: 'Kigali City',
  },
  {
    title: 'King’s Palace Heritage',
    description: 'Historic royal architecture and traditional Rwandan craftsmanship.',
    image: HeritagePhoto,
    alt: 'King’s Palace',
  },
  {
    title: 'Rwandan Cultural Moments',
    description: 'Bright festivals, dancers, and local life captured in color.',
    image: 'https://images.unsplash.com/photo-1518977956811-1a5e6f3346e4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Rwandan Culture',
  },
]

const videoCards = [
  {
    title: 'Safari Highlights',
    description: 'A short video showcase of Rwanda’s wildlife and national parks.',
    source: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: SafariPhoto,
  },
  {
    title: 'Rainforest Canopy Walk',
    description: 'A calm view of the Nyungwe canopy and forest trails.',
    source: 'https://www.w3schools.com/html/movie.mp4',
    poster: NyungwePhoto,
  },
  {
    title: 'Sunrise Above Kigali',
    description: 'Morning city views and Rwanda’s warm sunrise glow.',
    source: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: KigaliPhoto,
  },
]
</script>

<template>
  <section
    class="relative h-[32rem] md:h-[36rem] bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${HeroImage})` }"
  >
    <div class="absolute inset-0 bg-black/65"></div>
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
      <p class="text-base md:text-lg text-slate-200 max-w-2xl mx-auto mb-8">
        Browse Rwanda’s most iconic landscapes, wildlife, and cultural moments.
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#photos" class="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition text-sm font-semibold">Photos</a>
        <a href="#videos" class="px-6 py-3 rounded-full bg-white/10 border border-white/30 hover:bg-white/20 transition text-sm font-semibold">Videos</a>
      </div>
    </div>
  </section>

  <section class="bg-white text-green-600 min-h-screen w-full mt-12 px-6 md:px-12">
    <div id="photos" class="pt-24 pb-6">
      <h2 class="text-4xl font-bold text-center">Photos</h2>
      <p class="text-center text-base md:text-lg text-slate-600 max-w-3xl mx-auto mt-4">
        Explore a curated collection of stunning travel photos from Rwanda’s most memorable destinations.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto pb-24">
      <article
        v-for="photo in photoCards"
        :key="photo.title"
        class="border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-emerald-50/30"
      >
        <div class="overflow-hidden h-64 border-b-2 border-green-600">
          <img :src="photo.image" :alt="photo.alt" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">{{ photo.title }}</h3>
          <p class="text-sm text-green-800 font-medium">{{ photo.description }}</p>
        </div>
      </article>
    </div>

    <div id="videos" class="pt-12 pb-6">
      <h2 class="text-4xl font-bold text-center">Videos</h2>
      <p class="text-center text-base md:text-lg text-slate-600 max-w-3xl mx-auto mt-4">
        Watch short travel clips and highlights from Rwanda’s wildlife, forests, and city life.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto pb-24">
      <article
        v-for="video in videoCards"
        :key="video.title"
        class="border-2 border-green-600 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-emerald-50/30"
      >
        <div class="overflow-hidden bg-black">
          <video controls :poster="video.poster" class="w-full h-72 object-cover bg-slate-900">
            <source :src="video.source" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div class="p-8">
          <h3 class="text-2xl font-bold mb-3">{{ video.title }}</h3>
          <p class="text-sm text-green-800 font-medium">{{ video.description }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
