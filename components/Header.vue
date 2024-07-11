<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useStoryblokApi } from '@storyblok/vue';

const storyblokApi = useStoryblokApi();
const headerMenu = ref([]);
const isScrolled = ref(false);
const menuOpen = ref(false);

const fetchHeaderMenu = async () => {
  try {
    const { data } = await storyblokApi.get('cdn/stories/config', {
      version: 'draft',
      resolve_links: 'url',
    });
    headerMenu.value = data.story.content.header_menu;
  } catch (error) {
    console.error('Error fetching header menu:', error);
  }
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const handleScrollDebounced = debounce(handleScroll, 100);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  if (!menuOpen.value) {
    handleScroll(); // Ensure the scroll handler runs after closing the menu
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScrollDebounced);
  fetchHeaderMenu();
  handleScroll(); // Ensure the scroll handler runs on mount
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScrollDebounced);
});
</script>

<template>
  <header :class="['header', { 'header-scrolled': isScrolled }]">
    <div class="container h-full mx-auto flex items-center justify-between px-4">
      <NuxtLink to="/">
        <img src="assets/css/images/SC_logo.png" alt="Logo" class="logo" />
      </NuxtLink>
      <nav>
        <ul class="hidden lg:flex space-x-6 font-bold text-lg text-white">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink :to="blok.link.cached_url ? `/${blok.link.cached_url}` : '/'">
              {{ blok.link.story.name }}
            </NuxtLink>
          </li>
        </ul>
        <button @click="toggleMenu" class="lg:hidden text-white focus:outline-none relative z-50">
          <svg v-if="!menuOpen" class="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <svg v-else class="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </nav>
    </div>
    <div v-if="menuOpen" class="dropdown-menu">
      <ul>
        <li v-for="blok in headerMenu" :key="blok._uid">
          <NuxtLink @click="toggleMenu" :to="blok.link.cached_url ? `/${blok.link.cached_url}` : '/'">
            {{ blok.link.story.name }}
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
  transition: background-color 0.3s;
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
  color: #ff0000;
}

.active-link {
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 4px;
  text-decoration-color: #ff0000;
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

button svg:nth-child(1) {
  stroke-width: 3;
}

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
  color: #ff0000;
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
