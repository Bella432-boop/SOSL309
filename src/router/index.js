
import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Services  from '../views/Services.vue';
import Gallery from '../views/Gallery.vue';
import Contacts from '../views/Contacts.vue';
import Destinations from '../views/Destinations.vue';
import Kigali from '../views/Kigali.vue';
import Northern from '../views/Northern.vue';
import Southern from '../views/Southern.vue';
import Eastern from '../views/Eastern.vue';
import Western from '../views/Western.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
    {
    path: '/destinations',
    name: 'destinations',
    component: Destinations
  },
  {
    path: '/kigali',
    name: 'kigali',
    component: Kigali
  },
  { path: '/northern',
    name: 'northern',
    component: Northern     
  },
  { path: '/southern',        
    name: 'southern',
    component: Southern     
  },
  { path: '/eastern',        
    name: 'eastern',
    component: Eastern     
  },
  { path: '/western',        
    name: 'western',
    component: Western     

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router