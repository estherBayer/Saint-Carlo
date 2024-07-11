<template>
  <div
    v-editable="blok"
    class="w-full bg-[transparent] rounded-[5px] text-left overflow-hidden"
  >
  <img :src="blok.image?.filename || 'default-image-url.jpg'" alt="" />
    <div class="px-12 py-6">
      <h3 class="text-xl text-white flex flex-col items-start text-left">
        {{ blok.name }}
      </h3>
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>