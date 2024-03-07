<script setup>
import Agency from './components/Agency.vue';
import Advantage from './components/Advantage.vue';
import CoreFeature from './components/CoreFeature.vue';
import OurProject from './components/OurProject.vue';
import ClientSay from './components/ClientSay.vue';
import Blog from './components/Blog.vue';
import NewLetter from './components/NewLetter.vue'
</script>

<template>
  <body>
    <div class="web">
      <div class="web__container">
    <header class="agency">
      <Agency/>
  </header>
  <main>
    <Advantage/>
    <CoreFeature/>
    <OurProject/>
    <ClientSay/>
    <Blog/>
  </main>
  <footer>
    <NewLetter/>
  </footer>
 </div>
  </div>
  </body>
</template>

<style scoped>
</style>
