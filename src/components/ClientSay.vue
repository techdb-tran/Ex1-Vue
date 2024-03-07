<template>
    <section class="clients-say-contain">
      <div class="clients-say">
        <div class="clients-say-body">
          <div class="clients-say-body-wrap">
            <div class="clients-say-title">
              <h2>What Our Clients Say</h2>
              <p>Testimonials</p>
            </div>
          </div>
          <div class="clients-say-white">
            <div class="clients-say-slide">
              <div class="clients-say-btn">
                <button @click="prevSlide"><img src="../assets/Left-Btn.svg" alt=""></button>
                <button @click="nextSlide"><img src="../assets/Right-Btn.svg" alt=""></button>
              </div>
              <div class="clients-say-slide-item-1" :style="{ transform: transform1, transition: transition1 }">
                <div class="avatar-client">
                  <img class="avatar-img" src="../assets/avt1.png" alt="avt1-image">
                  <div class="avatar-name">
                    <h3>helena brauer</h3>
                    <p>Apple Inc</p>
                  </div>
                </div>
                <p class="slice-des">
                  What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.
                </p>
              </div>
              <div class="clients-say-slide-item-2" :style="{ transform: transform2, transition: transition2 }">
                <div class="avatar-client">
                  <img class="avatar-img" src="../assets/avt2.png" alt="avt1-image">
                  <div class="avatar-name">
                    <h3>Kay Totleben</h3>
                    <p>Microsoft</p>
                  </div>
                </div>
                <p class="slice-des">What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
              </div>
              <div class="clients-say-slide-item-3" :style="{ transform: transform3, transition: transition3 }">
                <div class="avatar-client">
                  <img class="avatar-img" src="../assets/avt2.png" alt="avt1-image">
                  <div class="avatar-name">
                    <h3>Pen</h3>
                    <p>Microsoft</p>
                  </div>
                </div>
                <p class="slice-des">What looked like a small patch of purple grass, above five feet square, was moving across the sand in their direction. When it came near enough he perceived that it was not grass; there were no blades, but only purple roots. The roots were revolving, for each small plant in the whole patch, like the spokes of a rimless wheel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="clients__container">
        <div class="clients__wrap">
          <a target="_blank" href="https://www.atlassian.com/"><img src="../assets/clientlogo1.svg" alt="client-logo1"></a>
          <a target="_blank" href="https://slack.com/"><img src="../assets/clientlogo2.svg" alt="client-logo2"></a>
          <a target="_blank" href="https://www.dropbox.com/"><img src="../assets/clientlogo3.svg" alt="client-logo3"></a>
          <a target="_blank" href="https://www.shopify.com/"><img src="../assets/clientlogo4.svg" alt="client-logo4"></a>
          <a target="_blank" href="https://www.google.gg/webhp"><img src="../assets/clientlogo5.svg" alt="client-logo5"></a>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        transform1: 'translateX(0px)',
        transform2: 'translateX(0px)',
        transform3: 'translateX(0px)',
        transition1: '2s',
        transition2: '2s',
        transition3: '2s',
        arr: ['a', 'b', 'c'],
        isProcessing: false
      };
    },
    methods: {
      prevSlide() {
        if (this.isProcessing) return;
        this.isProcessing = true;
  
        if (this.arr[0] === 'a') {
          this.transform1 = 'translateX(1000px)';
          this.transform2 = 'translateX(-500px)';
          this.transform3 = 'translateX(-500px)';
        } else if (this.arr[0] === 'b') {
          this.transform1 = 'translateX(500px)';
          this.transform2 = 'translateX(500px)';
          this.transform3 = 'translateX(-1000px)';
        } else if (this.arr[0] === 'c' && this.arr[1] === 'a' && this.arr[2] === 'b') {
          this.transform1 = 'translateX(0px)';
          this.transform2 = 'translateX(0px)';
          this.transform3 = 'translateX(0px)';
        }
  
        this.rotateArray();
        setTimeout(() => {
          this.isProcessing = false;
        }, 2000);
      },
      nextSlide() {
        if (this.isProcessing) return;
        this.isProcessing = true;
  
        if (this.arr[0] === 'a') {
          this.transform1 = 'translateX(1000px)';
          this.transform2 = 'translateX(-500px)';
          this.transform3 = 'translateX(-500px)';
        } else if (this.arr[0] === 'b') {
          this.transform1 = 'translateX(500px)';
          this.transform2 = 'translateX(500px)';
          this.transform3 = 'translateX(-1000px)';
        } else if (this.arr[0] === 'c' && this.arr[1] === 'a' && this.arr[2] === 'b') {
          this.transform1 = 'translateX(0px)';
          this.transform2 = 'translateX(0px)';
          this.transform3 = 'translateX(0px)';
        }
  
        this.rotateArray();
        setTimeout(() => {
          this.isProcessing = false;
        }, 2000);
      },
      rotateArray() {
        const n = this.arr.length;
        const temp = this.arr[0];
        for (let i = 0; i < n; i++) {
          if (i === n - 1) continue;
          else this.arr[i] = this.arr[i + 1];
        }
        this.arr[n - 1] = temp;
      }
    }
  };
  </script>  