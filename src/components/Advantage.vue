<template>
    <section class="advantage__container">
      <div class="advantage__wrap">
        <div class="advantage-clip">
          <img class="group-img" ref="eleGroupImg" src="../assets/Group1.svg" alt="group-img" @click="toggleVideo"/>
          <div class="video-yt__wrap" ref="eleVideoYoutube">
          </div>
        </div>
        <div class="advantage__content">
          <h2>LETS TAKE ADVANTAGE</h2>
          <h4>sable cloud beneath was dished</h4>
          <h6>Best for active freelancers and designers who need more projects and premium features code and unlock more.</h6>
          <div class="learn-more__wrap">
            <a href="https://www.w3schools.com/css/css3_shadows_box.asp" target="_blank"><img class="learn-more-btn" src="../assets/Text.svg" alt="text-img"></a>
            <a class="explore" href="https://www.w3schools.com/css/css3_shadows_box.asp">Explore services</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
    const eleGroupImg = ref(null);
    const eleVideoYoutube = ref(null);

    const toggleVideo = () => {
      if (eleGroupImg.value && eleVideoYoutube.value) {
        eleGroupImg.value.style.display = 'none';
        eleVideoYoutube.value.innerHTML = `
          <iframe class="video-yt" width="560" height="315" src="https://www.youtube.com/embed/OV8q23AsZUg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>`;
      }
    };
    return {
      toggleVideo,
      eleGroupImg,
      eleVideoYoutube
    };
  }
  };
</script>
  