<template>
  <nav class="menu__wrap">
    <div class="menu">
      <h3 class="logo">AGENCY</h3>
      <div class="menu__items">
        <ul>
          <li><a href="#core-features" @click="scrollToSection('core-features')">About</a></li>
          <li><a href="#our-projects-item2" @click="scrollToSection('our-projects-item2')">Portfolio</a></li>
          <li><a href="#newsletter-container" @click="scrollToSection('newsletter-container')">Contact</a></li>
        </ul>
        <div class="check-menu">
          <input type="checkbox" id="check"/>
          <label for="check" class="check-btn">
            <MenuLogo />
          </label>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import MenuLogo from '../components/icons/MenuLogo.vue';

const scrollToSection = (sectionId) => {
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
/* Bổ sung các quy tắc CSS scoped tại đây nếu cần */
</style>
