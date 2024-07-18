<template>
  <div class="container mx-auto dynamic-grid">
    <div v-editable="blok" class="faq-block">
      <div v-for="faq in blok.faqs" :key="faq._uid" class="faq-item">
        <details class="faq-details">
          <summary class="faq-question">
            <span class="arrow"></span>
            <span class="question-text">{{ faq.question }}</span>
            <span class="plus-sign">+</span>
          </summary>
          <div class="faq-answer" v-html="faq.answer"></div>
        </details>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.faq-block {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.faq-details {
  background-color: #fff0f2;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 5px 9px -3px #0003, 0 4px 6px -3px #00000024;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-question {
  padding: 1rem;
  background-color: #ffffff;
  cursor: pointer;
  color: #1a1a1a;
  font-weight: bold;
  font-size: 1.25rem; /* text-xl */

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 0.25rem solid red;
}

.arrow {
  display: inline-block;
  padding: 0.5rem;
  width: 1rem;
  height: 1rem;
  margin-right: 2rem; /* Increased space around the arrow */
  margin-left: 1rem; /* Increased space around the arrow */
  border: solid #005B2B;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
  transition: transform 0.3s;
  border-radius: 3px; /* Slightly rounded */
}

details[open] .arrow {
  transform: rotate(-135deg);
}

.plus-sign {
  color: #81F499;
  font-size: 1.5rem; /* Larger */
  font-weight: bold;
  margin-left: 1rem; /* More space from the text */
}

.question-text {
  flex-grow: 1;
  margin-left: 0.5rem;
}

details[open] .plus-sign {
  content: '-';
}

.faq-answer {
  padding: 2rem;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .faq-block {
    grid-template-columns: 1fr;
  }
}
</style>

