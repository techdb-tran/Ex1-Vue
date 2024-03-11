<script setup>
</script>

<template>
  <body>
    <div class="web">
      <div class="web__container">
    <header class="agency">
      <agency></agency>
  </header>
  <main>
    <advantage></advantage>
    <core-feature></core-feature>
    <our-project></our-project>
    <client-say></client-say>
    <blog></blog>
  </main>
  <footer>
    <new-letter></new-letter>
  </footer>
 </div>
  </div>
  </body>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  window.addEventListener('scrollToSection', handleScrollToSection);
});

onUnmounted(() => {
  window.removeEventListener('scrollToSection', handleScrollToSection);
});

const handleScrollToSection = (event) => {
  const sectionId = event.detail.sectionId;
  const targetElement = document.querySelector(`.${sectionId}`);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
};
</script>

<style scoped>
</style>
