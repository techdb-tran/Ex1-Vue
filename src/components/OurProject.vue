<template>
  <section class="our-projects__container">
    <div class="our-projects__wrap">
      <div class="our-projects__content">
        <h2>check our projects</h2>
        <p>Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being. Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being.</p>
      </div>
      <nav class="our-projects__portfolio">
        <h4>PORTFOLIO</h4>
        <ul>
      <li class="all-projects"><a @click="selectItem('all-projects')" href="#all-projects" :class="{ selected: selectedItem === 'all-projects' }">All</a></li>
      <li class="design"><a @click="selectItem('design')" href="#design" :class="{ selected: selectedItem === 'design' }">Design</a></li>
      <li class="development"><a @click="selectItem('development')" href="#development" :class="{ selected: selectedItem === 'development' }">Development</a></li>
      <li class="branding"><a @click="selectItem('branding')" href="#branding" :class="{ selected: selectedItem === 'branding' }">Branding</a></li>
      <li class="products"><a @click="selectItem('products')" href="#products" :class="{ selected: selectedItem === 'products' }">Products</a></li>
    </ul>
        <select class="portfolio__select" @change="loadProjectsByField($event.target.value)">
          <option value="">All</option>
          <option value="all-projects">All</option>
          <option value="design">Design</option>
          <option value="development">Development</option>
          <option value="branding">Branding</option>
          <option value="products">Products</option>
        </select>
      </nav>
      <div class="our-projects__show">
        <div v-for="(project, index) in displayedProjects" :key="index" class="our-projects-banner" :style="{ backgroundColor: project.backgroundColor, color: project.color }">
          <div>
            <h5>{{ project.field }}</h5>
            <h3>{{ project['project-name'] }}</h3>
          </div>
          <div>
            <img :src="project.img" :alt="project['project-name']">
          </div>
        </div>
      </div>
      <div class="our-projects__loadMore">
        <img id="load-more-btn" src="../assets/Loadmore.svg" alt="" @click="loadMoreProjectsByField(fieldCurrent)">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const displayedProjects = ref([]);
const fieldCurrent = ref('');
const selectedItem = ref('');

const selectItem = (item) => {
  selectedItem.value = item;
  loadProjectsByField(item);
};

const loadProjectsByField = (field) => {
  fetch('https://65e99901c9bf92ae3d399644.mockapi.io/api/project/api')
    .then(response => response.json())
    .then(data => {
      displayedProjects.value = data.filter(project => field === 'all-projects' || project.field === field).slice(0, 2);
      fieldCurrent.value = field;
    })
    .catch(error => console.log(`Error fetching ${field} projects:`, error));
};

const loadMoreProjectsByField = (field) => {
  fetch('https://65e99901c9bf92ae3d399644.mockapi.io/api/project/api')
    .then(response => response.json())
    .then(data => {
      const allProjectsCount = data.length;
      const filteredProjects = data.filter(project => field === 'all-projects' || project.field === field);
      const newProjects = filteredProjects.slice(displayedProjects.value.length, displayedProjects.value.length + 2);
      displayedProjects.value = [...displayedProjects.value, ...newProjects];
      fieldCurrent.value = field;
      if (displayedProjects.value.length >= allProjectsCount) {
        document.getElementById("load-more-btn").style.display = "none";
      } else {
        document.getElementById("load-more-btn").style.display = "block";
      }
    })
    .catch(error => console.log(`Error fetching ${field} projects:`, error));
};

onMounted(() => {
  loadProjectsByField('all-projects');
});
</script>

<style>
</style>
