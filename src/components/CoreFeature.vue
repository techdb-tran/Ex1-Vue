<template>
    <section class="core-features__container">
      <div class="core-features__wrap">
        <div class="core-features__content">
          <h2>Our Core Features</h2>
          <p>Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being. Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being.</p>
        </div>
        <div class="carousel__container">
          <div class="carousel__wrap" ref="carousel">
            <div class="carousel-item" v-for="(item, index) in carouselItems" :key="index">
              <div :class="'carousel-item__content__' + (index % 2 === 0 ? 'even' : 'odd')">
                <img :src="item.image" alt="">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="dots">
            <span class="dot" v-for="(dot, index) in totalDots" :key="index" :class="{ active: index === currentIndex }" @click="goToSlide(index * visibleSlides * 2)"></span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentIndex: 0,
        visibleSlides: 0,
        totalDots: 4,
        carouselItems: [
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
          { image: "/src/assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        ]
      };
    },
    mounted() {
      this.updateVisibleSlides();
      this.createDots();
      this.autoSlide();
      window.addEventListener('resize', this.updateVisibleSlides);
    },
    unmounted() {
      window.removeEventListener('resize', this.updateVisibleSlides);
    },
    methods: {
      updateVisibleSlides() {
        this.visibleSlides = window.innerWidth <= 460 ? 1 : 2;
      },
      createDots() {
        const dotsContainer = this.$refs.carousel.querySelector('.dots');
        dotsContainer.innerHTML = '';
        for (let i = 0; i < this.totalDots; i++) {
          const dot = document.createElement('span');
          dot.className = 'dot';
          dot.addEventListener('click', () => this.goToSlide(i * this.visibleSlides * 2));
          dotsContainer.appendChild(dot);
        }
        this.updateDots();
      },
      goToSlide(index) {
        const slideWidth = this.$refs.carousel.querySelector('.carousel-item').offsetWidth / this.visibleSlides;
        const offset = -(slideWidth * index);
        this.$refs.carousel.querySelector('.carousel__wrap').style.transform = `translateX(${offset}px)`;
        this.currentIndex = index;
        this.updateDots();
      },
      updateDots() {
        const dots = this.$refs.carousel.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index * this.visibleSlides * 2 === this.currentIndex);
        });
      },
      autoSlide() {
        setInterval(() => {
          const maxIndex = this.carouselItems.length - 1;
          this.goToSlide(this.currentIndex < maxIndex ? this.currentIndex + this.visibleSlides * 2 : 0);
        }, 3000);
      }
    }
  };
  </script>
  