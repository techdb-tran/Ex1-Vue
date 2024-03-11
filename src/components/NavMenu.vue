<template>
  <nav class="menu__wrap">
    <div class="menu">
      <h3 class="logo"><a href="#">AGENCY</a></h3>
      <div class="menu__items">
        <ul>
          <li><a href="#core-features__container" @click="scrollToSection('core-features__container')">About</a></li>
          <li><a href="#our-projects__container" @click="scrollToSection('our-projects__container')">Portfolio</a></li>
          <li><a href="#newsletter-container" @click="scrollToSection('newsletter-container')">Contact</a></li>
        </ul>
        <div class="check-menu">
          <input type="checkbox" id="check"/>
          <label for="check" class="check-btn">
            <img src="../assets/menu.svg" alt="">
          </label>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const scrollEvent = new CustomEvent('scrollToSection', {
    detail: { sectionId },
  });
  window.dispatchEvent(scrollEvent);
};
</script>

<style scoped>
</style>
