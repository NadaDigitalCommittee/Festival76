<template>
  <div :class="$style.main">
    <header :class="$style.header">
      <div :class="$style.hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
    <div :class="$style.headimg" id="headimg"></div>
    <img :class="$style.logo" id="logo" src="@/assets/logo.svg" />
    <img :class="$style.logotitle" id="logotitle" src="@/assets/logotitle.svg" />
    <div :class="$style.title" id="title">
      <small>第76回灘校文化祭</small>
      <br />Turn it Over
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

    const width = window.innerWidth;
    const height = window.innerHeight;

    gsap.to('#logo', {
      x: -0.075 * width,
      y: -0.25 * height,
      scale: 1 / 4,
      scrollTrigger: {
        trigger: '#headimg',
        start: 'top top',
        end: 'bottom 10%',
        scrub: true,
      },
    });

    gsap.to('#title', {
      opacity: 0,
      scrollTrigger: {
        trigger: '#title',
        start: `top ${0.3 * height + 0.3 * width}px`,
        end: `bottom ${0.3 * height + 0.3 * width}px`,
        scrub: true,
      },
    });

    gsap.to('#logotitle', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#logo',
        start: 'top 10%',
        end: 'bottom 10%',
        scrub: true,
      },
    });
  },
});
</script>

<style module lang="scss">
.header {
  position: fixed;
  background-color: black;
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
  background-color: black;
  top: 0;
  left: 0;
  height: calc(40vh + 30vw + 3rem);
  width: 100%;
  z-index: 0;
}

.logo {
  position: fixed;
  width: 60vw;
  left: 20%;
  top: calc(30% - 30vw);
  margin-left: auto;
  margin-right: auto;
  z-index: 95;
}

.logotitle {
  opacity: 0;
  position: fixed;
  height: 15vw;
  top: calc(5vh - 7.5vw);
  left: 50vw;
  z-index: 95;
}

.title {
  position: fixed;
  top: calc(30% + 30vw);
  left: 0px;
  width: 100%;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  z-index: 95;
}

.title small {
  font-size: 1rem;
}
</style>
