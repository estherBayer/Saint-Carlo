<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const menuItems = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Programs', url: '/programs' },
  { name: 'Admissions', url: '/admissions' },
  { name: 'News & Events', url: '/news-events' },
  { name: 'Campus', url: '/campus' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
  handleScroll()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="container h-full mx-auto flex items-center justify-between px-4">
      <NuxtLink to="/">
        <img src="assets/css/images/SC_logo.png" alt="Logo" class="logo" />
      </NuxtLink>
      <nav>
        <ul class="hidden lg:flex space-x-6 font-bold text-lg text-white">
          <li v-for="item in menuItems" :key="item.name">
            <NuxtLink :to="item.url" class="nav-link">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <button
          class="lg:hidden text-white focus:outline-none relative z-50"
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!menuOpen"
            class="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
          <svg
            v-else
            class="w-8 h-8"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </nav>
    </div>
    <div v-if="menuOpen" class="dropdown-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <NuxtLink @click="closeMenu" :to="item.url" class="nav-link">
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.header {
  width: 100%;
  height: 6rem;
  background-color: transparent;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: background-color 0.1s;
}

.header-scrolled {
  background-color: #313131;
}

.logo {
  height: 4rem;
}

.nav-link {
  transition: color 0.3s;
}

.nav-link:hover {
  color: #FF0033;
}

.active-link {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 4px;
  text-decoration-color: #FF0033;
}

nav a.router-link-active {
  color: #ffffff;
}

button:focus {
  outline: none;
}

button svg {
  stroke: white;
  transition: stroke 0.3s;
}

button:hover svg {
  stroke: #81f499;
}

button svg:nth-child(1),
button svg:nth-child(2) {
  stroke-width: 3;
}

button:hover svg:nth-child(2) {
  stroke: white;
}

/* Dropdown Menu Styles */
.dropdown-menu {
  position: absolute;
  top: 6rem;
  right: 0;
  background-color: #313131;
  color: white;
  z-index: 40;
  width: 100%;
  padding: 1rem 2rem;
  box-sizing: border-box;
}

.dropdown-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  margin-bottom: 1rem;
}

.dropdown-menu li:last-child {
  margin-bottom: 0;
}

.dropdown-menu a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.dropdown-menu a:hover {
  color: #FF0033;
}

@media (max-width: 1024px) {
  .header {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .container {
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
