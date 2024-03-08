<template>
          <div class="agency__black">
            <nav class="menu__wrap">
              <div class="menu">
              <h3 class="logo">AGENCY</h3>
              <div class="menu__items">
                <ul>
                  <li><a href="#core-features">About</a></li>
                  <li><a href="#our-projects-item2">Portfolio</a></li>
                  <li><a href="#newsletter-container">Contact</a></li>
                </ul>
                <div class="check-menu">
                  <input type="checkbox" id="check"/>
                  <label for="check" class="check-btn"
                  >
                    <img src="../assets/menu.svg" alt="menu-btn-img"/>
                </label>
                </div>
              </div>
              </div>
            </nav>
            <div class="agency__slide">
              <div class="agency__slide-1__container">
                <div class="agency__slide-1__wrap">
                  <div class="agency__content">
                    <h1>
                      We Create Amazing Site With Ease</h1>
                    <div class="flower-logo">
                    <img src="../assets/Object.svg"  alt="object img"/>
                    <h3>
                    A peep at some distant orb has 
                    power to raise and purify
                  </h3>
                  </div>
                  </div>
                  <div class="agency__img">
                    <img class="bitmap1" src="../assets/Bitmap.png" alt="bitmap img"/>
                    <img class="combine1" src="../assets/CombinedShape.svg" alt="combine img"/>
                  </div>
                </div>
                </div>
                <div class="agency__slide-2__container">
                  <div class="agency__slide-2__wrap">
                    <div class="agency__content">
                      <h1>
                        Black Pink in your area.</h1>
                      <div class="flower-logo">
                      <img src="../assets/Object.svg" alt="img"/>
                      <h3>A peep at some distant orb has 
                    power to raise and purify
                      </h3>
                    </div>
                    </div>
                    <div class="agency__img">
                      <img class="bitmap2" src="../assets/Bitmap.png" alt="img">
                      <img class="combine2" src="../assets/CombinedShape.svg" alt="img"/>
                    </div>
                    </div>
                  </div>
                  </div>
              </div>
            <div class="agency__white">
              <div class="agency__white-wrap">
                <button class="agency__white-btn-prev">
                  <img class="triangle1" src="../assets/Left-Btn.svg" alt="">
                  </button>
                  <button class="agency__white-btn-next">
                    <img class="triangle2" src="../assets/Right-Btn.svg" alt="">
                  </button>
                  <p class="pageCurrent">1/2</p>
              </div>
          </div> 
</template>
<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const slideBtnPrevEl = ref(null);
    const slideBtnNextEl = ref(null);
    const agencyContent1El = ref(null);
    const agencyContent2El = ref(null);
    const pageCurrentEl = ref(null);

    let slide1Show = ref(false);
    let isProcessAgency = ref(false);

    const agencySlide = () => {
      if (isProcessAgency.value) {
        return;
      }
      isProcessAgency.value = true;
      if (slide1Show.value) {
        agencyContent1El.value.style.transform = 'translateX(100vw)';
        agencyContent2El.value.style.transform = 'translateX(-100vw)';
        agencyContent2El.value.style.transition = '1s';
        pageCurrentEl.value.textContent = '2/2';
        slide1Show.value = false;
      } else {
        agencyContent1El.value.style.transform = 'translateX(0px)';
        agencyContent2El.value.style.transform = 'translateX(0px)';
        agencyContent1El.value.style.transition = '1s';
        pageCurrentEl.value.textContent = '1/2';
        slide1Show.value = true;
      }
      setTimeout(() => {
        isProcessAgency.value = false;
      }, 1000);
    };

    onMounted(() => {
      slideBtnPrevEl.value = document.querySelector(".agency__white-btn-prev");
      slideBtnNextEl.value = document.querySelector(".agency__white-btn-next");
      agencyContent1El.value = document.querySelector(".agency__slide-1__container");
      agencyContent2El.value = document.querySelector(".agency__slide-2__container");
      pageCurrentEl.value = document.querySelector(".pageCurrent");
      agencySlide();
    });

    const addEventListeners = () => {
      slideBtnPrevEl.value.addEventListener('click', agencySlide);
      slideBtnNextEl.value.addEventListener('click', agencySlide);
    };

    onMounted(addEventListeners);

    return {
      slide1Show,
      isProcessAgency,
      agencySlide
    };
  }
};
</script>
