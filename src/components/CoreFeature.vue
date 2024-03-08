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
            <div class='carousel-item__content'>
              <img :src="item.image" alt="img">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dots-container" ref="dotsContainer">
    </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      carouselItems: [
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/code-export.svg", title: "Code Export", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
        { image: "../assets/white-label.svg", title: "White Label", description: "Minuteness of the parts formed a great hindrance to my speed, resolved, contrary to my first intention, to make the being." },
      ],
      arr: ['blue','#9013FE','#417505','purple', 'pink','orange','aqua','green'],
      translateXValues: {
        'blue': '-100%',
        '#9013FE': '-200%',
        '#417505': '-300%',
        'purple': '-400%',
        'pink': '-500%',
        'orange': '-600%',
      },
      isProcessing: false,

    };
  },
  mounted() {
  this.initializeCarousel();
  const dotsContainer = this.$refs.dotsContainer;
  for (let index = 0; index < 6; index++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    this.goToSlide(index);
  });
  dotsContainer.appendChild(dot);
  }
  dotsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    const index = Array.from(dotsContainer.children).indexOf(event.target);
    this.goToSlide(index);
  }
   });
  },
  methods: {
    initializeCarousel() {
      const carouselEle = this.$refs.carousel.querySelectorAll(".carousel-item");
      carouselEle.forEach((item, index) => {
      item.style.transform = 'translateX(-100%)';
      });
      const carouselItemEle = this.$refs.carousel.querySelectorAll(".carousel-item__content");
      carouselItemEle.forEach((item, index) => {
      item.style.backgroundColor = this.arr[index];
      item.style.marginLeft = '0';
      });
    },
    goToSlide(index) {
      const carouselEle = this.$refs.carousel.querySelectorAll(".carousel-item");
      carouselEle.forEach((item, i) => {
        const translateValue = this.translateXValues[this.arr[index]];
        if (translateValue !== undefined) {
          item.style.transform = `translateX(${translateValue})`;
          item.style.transition = 'transform 1s'; // Corrected transition property
        }
      });

      const dotsContainer = this.$refs.dotsContainer;
      dotsContainer.querySelector('.dot.active').classList.remove('active');
      dotsContainer.querySelectorAll('.dot')[index].classList.add('active');

      this.currentIndex = index;
    }
  }
};
</script>
<style>
.carousel__container{
  max-width: 1170px;
  position: relative;
  overflow-x: hidden;
}
.carousel__wrap {
    display: flex;
    justify-content: space-between;
}
.carousel-item {
    flex: 0 0 50%;
    margin-top: 100px;
}
.carousel-item__content {
  max-width: 570px;
  min-height: 288px;
  margin-left: auto;
}
.dots-container {
    text-align: center;
    margin-top: 64px;
}

.dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #bbb;
    margin: 0 5px;
    cursor: pointer;
    opacity: 0.7;
}
.dot:hover{
  opacity: 1;
}
.dot.active {
    background-color: #9013FE;
}
</style>
