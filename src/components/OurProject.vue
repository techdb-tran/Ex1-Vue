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
          <li class="all-projects"><a @click="loadProjectsByField('all-projects')" href="#all-projects">All</a></li>
          <li class="design"><a @click="loadProjectsByField('design')" href="#design">Design</a></li>
          <li class="development"><a @click="loadProjectsByField('development')" href="#development" >Development</a></li>
          <li class="branding"><a @click="loadProjectsByField('branding')" href="#branding" >Branding</a></li>
          <li class="products"><a @click="loadProjectsByField('products')" href="#products" >Products</a></li>
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

<script>
export default {
  data() {
    return {
      displayedProjects: [],
      fieldCurrent: ''
    };
  },
  methods: {
    loadProjectsByField(field) {
      fetch('https://65e99901c9bf92ae3d399644.mockapi.io/api/project/api')
        .then(response => response.json())
        .then(data => {
          this.displayedProjects = data.filter(project => field === 'all-projects' || project.field === field).slice(0, 2);
          this.fieldCurrent = field;
        })
        .catch(error => console.log(`Error fetching ${field} projects:`, error));
    },
    loadMoreProjectsByField(field) {
      fetch('https://65e99901c9bf92ae3d399644.mockapi.io/api/project/api')
        .then(response => response.json())
        .then(data => {
          const allProjectsCount = data.length;
          const filteredProjects = data.filter(project => field === 'all-projects' || project.field === field);
          const newProjects = filteredProjects.slice(this.displayedProjects.length, this.displayedProjects.length + 2);
          this.displayedProjects = [...this.displayedProjects, ...newProjects];
          this.fieldCurrent = field;
          if (this.displayedProjects.length >= allProjectsCount) {
            document.getElementById("load-more-btn").style.display = "none";
          } else {
            document.getElementById("load-more-btn").style.display = "block";
          }
        })
        .catch(error => console.log(`Error fetching ${field} projects:`, error));
    }
  },
  mounted() {
    this.loadProjectsByField('all-projects');
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
