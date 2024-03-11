<script setup>
</script>
<template>
    <section class="newsletter-container">
          <div class="newsletter">
            <div class="newsletter-sign-up">
              <h2>News letter 
                Sign Up</h2>
              <form id="email-form">
                <label id="label-email" for="email-input">Get in touch</label>
                <div class="email-wrap">
                  <input id="email-input" type="email" placeholder="Your email">
                </div>
                <button>SUBSCRIBE</button>
              </form>
            </div>
            <div class="footer">
                <div class="footer-left">
                  <div class="footer-left-item1">
                     <h4>AGENCY</h4>
                     <p>Agency © 2019.<br/>
                      All Rights Reserved.</p>
                  </div>
                  <div class="footer-left-item2">
                    <h5>ADDRESS</h5>
                    <p>3899 Fusce Rd. Frederick 
                      Nebraska 20620</p>
                    <p><a href="mailto:dongbanbr002@gmail.com">info@agency.com</a></p>
                    <p><a href="tel:+0354927517">+1 (234) 567-89-00</a></p>
                  </div>
                </div>
                <div class="footer-right">
                   <div class="footer-right-item1">
                   <h5>MENU</h5>
                   <ul>
                    <li><a href="#core-features__container"  @click="scrollToSection('core-features__container')">About</a></li>
                    <li><a href="#our-projects__container"  @click="scrollToSection('our-projects__container')">Portfolio</a></li>
                    <li><a href="#blog__container"  @click="scrollToSection('blog__container')">Blog</a></li>
                    <li><a href="#clients-say-contain"  @click="scrollToSection('clients-say-contain')">Testimonials</a></li>
                    <li><a href="#newsletter-container"  @click="scrollToSection('newsletter-container')">Contact</a></li>
                  </ul>
                   </div>
                   <div class="footer-right-item2">
                       <img src="../assets/social.svg" alt="social">
                   </div>
                </div>
            </div>
          </div>
        </section>
</template>
<script setup>
const scrollToSection = (sectionId) => {
  const scrollEvent = new CustomEvent('scrollToSection', {
    detail: { sectionId },
  });
  window.dispatchEvent(scrollEvent);
};
</script>