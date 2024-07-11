<template>
  <div v-editable="blok" class="faq-block">
    <div v-for="faq in blok.faqs" :key="faq._uid" class="faq-item">
      <details class="faq-details">
        <summary class="faq-question">{{ faq.question }}</summary>
        <div class="faq-answer">
          <div v-html="faq.answer"></div> <!-- This will render the HTML content, allowing line breaks -->
        </div>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.faq-details {
  background-color: #f6f6ff;
  margin-bottom: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.faq-question {
  padding: 1rem;
  cursor: pointer;
  color: #333;
  font-weight: bold;
}

.faq-question::after {
  content: '+';
  float: right;
}

details[open] .faq-question::after {
  content: '-';
}

.faq-answer {
  padding: 0.5rem 1rem 1rem;
  border-top: 1px solid #ddd;
}
</style>
