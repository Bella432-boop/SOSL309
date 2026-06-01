<script setup>
import { currentLang, translations, setLanguage } from '../langStore'
</script>

<template> 
<nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg w-full">
     <img src="../assets/images/logo.png" alt="Logo" class="w-14 h-14 object-cover rounded-full"> 
     <span class="text-sm font-bold"> TEMBERA U RWANDA </span> 
     <ul class="flex gap-8 text-sm font-medium w-full justify-end items-center">
          
         <li> <a href="/" class="hover:text-yellow-300">{{ translations[currentLang].home }}</a> </li>

          <li> <a href="/about" class="hover:text-yellow-300">{{ translations[currentLang].about }}</a> </li>

           <li> <a href="/services" class="hover:text-yellow-300">{{ translations[currentLang].services }}</a> </li>

            <li class="relative group">

                 <a href="/gallery" class="hover:text-yellow-300">{{ translations[currentLang].gallery }}<span>▾</span></a>

            <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                 <li><a href="/gallery#photos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].photos }}</a></li> 
                 <li><a href="/gallery#videos" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].videos }}</a></li> 
                 </ul> </li> 
               
                   <li class="relative group">
                     <a href="/destinations" class="hover:text-yellow-300">{{ translations[currentLang].destinations }}<span>▾</span></a>

                      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-full left-0 z-50">
                         <li><a href="/kigali" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].kigali }}</a></li> 
                         <li><a href="/northern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].northern }}</a></li> 
                          <li> <a href="/southern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].southern }}</a></li>
                           <li> <a href="/western" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].western }}</a></li>
                            <li><a href="/eastern" class="block px-4 py-2 hover:bg-green-200 text-green-900">{{ translations[currentLang].eastern }}</a></li> 
                         </ul> 
                    </li>
                       <li> <a href="/contacts" class="hover:text-yellow-300">{{ translations[currentLang].contacts }}</a></li> 

                       <!-- Language Selector -->
                       <li class="relative group ml-4">
                         <button class="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full border border-white/20 transition-all duration-300 text-xs font-semibold">
                           <span>🌐</span>
                           <span>{{ currentLang.toUpperCase() }}</span>
                           <span>▾</span>
                         </button>
                         <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-32 top-full right-0 z-50">
                           <li><button @click="setLanguage('en')" class="block w-full text-left px-4 py-2 hover:bg-green-200 text-green-900 font-medium">English</button></li>
                           <li><button @click="setLanguage('fr')" class="block w-full text-left px-4 py-2 hover:bg-green-200 text-green-900 font-medium">Français</button></li>
                           <li><button @click="setLanguage('rw')" class="block w-full text-left px-4 py-2 hover:bg-green-200 text-green-900 font-medium">Kinyarwanda</button></li>
                           <li><button @click="setLanguage('sw')" class="block w-full text-left px-4 py-2 hover:bg-green-200 text-green-900 font-medium">Swahili</button></li>
                         </ul>
                       </li>
                             </ul> 
                             </nav>
                              </template>