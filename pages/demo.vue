<template>
  <div :class="$style.main">
    <header :class="$style.header" id="header">
      <div :class="$style.hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <div :class="$style.headimg" id="headimg"></div>
    <img :class="$style.logo" id="logo" src="@/assets/logo.svg" />
    <img
      :class="$style.logotitle"
      v-on:click="scrollTop()"
      id="logotitle"
      src="@/assets/logotitle.svg"
    />
    <img :class="$style.title" id="title" src="@/assets/bigtitle.svg" />
    <div :class="$style.arrow" id="arrow">
      <span></span>
      <span></span>
    </div>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
    <p>content</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default Vue.extend({
  name: 'Index',
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.animate();
    window.addEventListener('resize', this.animate);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.animate);
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    animate() {
      const height = window.innerHeight;

      gsap.timeline({
        scrollTrigger: {
          trigger: '#headimg',
          start: 'top top',
          end: 'bottom 60%',
          scrub: true,
        },
      }).to('#logo', { y: -0.35 * height, scale: 1 / 4 });

      gsap.timeline({
        scrollTrigger: {
          trigger: '#headimg',
          start: 'top top',
          end: 'bottom 80%',
          scrub: true,
        },
      }).to('#title', { autoAlpha: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: '#headimg',
          start: 'bottom 60%',
          end: 'bottom 10%',
          scrub: true,
        },
      })
        .to('#logotitle', { autoAlpha: 1, x: 0.0375 * height })
        .to('#logo', { x: -0.0375 * height })
        .to('#header', { boxShadow: '0px 5px 10px black' });

      gsap.timeline({
        scrollTrigger: {
          toggleActions: 'play none reverse none',
          trigger: '#headimg',
          start: 'top top',
          end: '10% top',
        },
      }).to('#arrow', { autoAlpha: 0 });
    },
  },
});
</script>

<style module lang="scss">
:root {
  background-color: #161616;
  color: white;
}

.header {
  position: fixed;
  background-color: #161616;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  z-index: 90;
}

.hamburger {
  padding: 1vh;
  display: flex;
  margin-left: auto;
  flex-direction: column;
  height: 10vh;
  width: 10vh;
  justify-content: space-evenly;
  align-items: center;

  span {
    display: block;
    height: 2px;
    width: 6vh;
    background-color: white;
  }
}

.headimg {
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 0;
}

.logo {
  position: fixed;
  height: 30%;
  left: calc(50% - 15vh);
  top: 25%;
  z-index: 95;
}

.logotitle {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  padding-left: 10%;
  height: 7.5%;
  top: 1.25%;
  left: calc(40% - 3.75vh);
  z-index: 95;
}

.title {
  position: fixed;
  top: 55%;
  height: 20%;
  left: calc(50% - 15vh);
  z-index: 95;
}

.title small {
  font-size: 1rem;
}

.arrow {
  padding: 1vh;
  position: fixed;
  top: 80%;
  left: calc(50% - 15px);
  height: 30px;
  width: 30px;
  border: 2px solid;
  border-color: white white transparent transparent;
  transform: rotate(135deg);
  animation: bounce 4s infinite;
}

@keyframes bounce {
  20% {
    transform: translateY(15px) rotate(135deg);
  }
  60% {
    transform: translateY(0px) rotate(135deg);
  }
}
</style>
