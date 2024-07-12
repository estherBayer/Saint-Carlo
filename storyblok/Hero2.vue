<template>
  <div v-editable="blok" class="relative w-full h-screen overflow-hidden">
    <!-- Background Video or Image -->
    <div
      v-if="blok.video_url && isVimeo(blok.video_url.url)"
      class="absolute inset-0 h-full w-full bg-cover bg-center"
    >
      <iframe
        ref="vimeoPlayer"
        :src="getVimeoEmbedUrl(blok.video_url.url)"
        class="absolute inset-0 w-full h-full object-cover"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div
      v-else-if="blok.background_image && blok.background_image.filename"
      class="absolute inset-0 h-full w-full bg-cover bg-center"
      :class="backgroundClass"
      :style="{ backgroundImage: `url(${blok.background_image.filename})` }"
    ></div>
    <!-- Black Overlay -->
    <div class="absolute inset-0 h-full w-full bg-black bg-opacity-40"></div>
    <!-- Content Grid -->
    <div class="relative h-full flex items-center justify-center px-8 lg:px-0">
      <div class="w-full lg:w-3/4 xl:w-2/3">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center lg:text-left"
        >
          <div class="lg:col-span-2">
            <!-- Subheadline -->
            <h2
              v-if="blok.subheadline"
              class="text-headline4 lg:text-headline3 font-arimo text-white text-left pb-2"
            >
              {{ blok.subheadline }}
            </h2>
            <!-- Headline -->
            <h1
              v-if="blok.headline"
              class="text-headline2 lg:text-display font-arimo font-bold text-white text-left pb-4"
            >
              {{ blok.headline }}
            </h1>
            <!-- Columns (Features) Grid -->
            <div class="w-full lg:w-3/4 xl:w-2/3">
              <div
                v-if="blok.columns && blok.columns.length"
                class="grid grid-cols-3 gap-4 mb-4"
              >
                <div
                  v-for="column in blok.columns"
                  :key="column._uid"
                  class="flex flex-col items-center justify-center text-center"
                >
                  <div class="image-container">
                    <img
                      v-if="column.image && column.image.filename"
                      :src="column.image.filename"
                      :alt="column.name"
                      class="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <p class="paragraphIcon font-arimo text-white">
                    {{ column.name }}
                  </p>
                </div>
              </div>
            </div>
            <!-- Bulleted List -->
            <div
              v-if="blok.bulleted_list && blok.bulleted_list.length"
              class="mb-6"
            >
              <ul class="space-y-2">
                <li
                  v-for="item in blok.bulleted_list"
                  :key="item._uid"
                  class="text-paragraph2 font-arimo text-white text-left"
                >
                  {{ item.text }}
                </li>
              </ul>
            </div>
            <!-- Button -->
            <div class="flex flex-col items-start text-left">
              <Button
                v-if="blok.buttonText && blok.buttonLink"
                :href="blok.buttonLink"
              >
                {{ blok.buttonText }}
              </Button>
            </div>
            <div class="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, computed } from 'vue'
import Button from '~/components/Button.vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

const vimeoPlayer = ref(null)

const isVimeo = (url) => {
  return typeof url === 'string' && url.includes('vimeo.com')
}

const getVimeoEmbedUrl = (url) => {
  if (typeof url !== 'string') return ''
  const videoId = url.split('/').pop().split('?')[0]
  return `https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&background=1`
}

const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

const backgroundClass = computed(() => {
  return 'background-fixed-focal-point'
})

onMounted(async () => {
  try {
    await loadScript('https://player.vimeo.com/api/player.js')

    if (vimeoPlayer.value) {
      const player = new Vimeo.Player(vimeoPlayer.value)

      // Set the playback speed
      player.setPlaybackRate(0.75).catch((error) => {
        console.error('Error setting playback rate:', error)
      })

      // Loop the video after 10 seconds
      player.on(
        'timeupdate',
        debounce((data) => {
          if (data.seconds >= 10) {
            player.setCurrentTime(0).catch((error) => {
              console.error('Error setting current time:', error)
            })
          }
        }, 100),
      )
    }
  } catch (error) {
    console.error('Failed to load Vimeo Player API script:', error)
  }
})
</script>

<style scoped>
.image-container {
  @apply w-10 h-10 overflow-hidden flex items-center justify-center;
}

iframe {
  box-sizing: border-box;
  height: 56.25vw;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  width: 177.77777778vh;
}

@media (max-width: 480px) {
  .text-headline4 {
    font-size: 1.25rem;
  }
  .text-headline3 {
    font-size: 1.875rem;
  }
  .text-headline2 {
    font-size: 2.5rem;
  }
  .text-display {
    font-size: 5rem;
  }
  .text-paragraph2 {
    font-size: 0.875rem;
  }
  .paragraphIcon {
    font-size: 0.75rem;
  }
}

@media (max-width: 1024px) {
  .background-fixed-focal-point {
    background-position: 60% 30%; /* Adjust these values to position the focal point more to the right */
  }
}

@media (min-width: 1025px) {
  .background-fixed-focal-point {
    background-position: center; /* Default background position for larger screens */
  }
}
</style>
