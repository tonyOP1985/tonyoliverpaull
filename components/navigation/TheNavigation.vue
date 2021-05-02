<template>
  <header class="header">
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">
          <router-link to="/">Tony Oliver-Paull</router-link>
        </div>
        <div
          id="hamburger"
          :class="{ isActive: animate }"
          class="hamburger hamburger--collapse hb-button"
          @click.prevent="openNav"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </div>
        <ul class="navbar-nav">
          <li>
            <router-link to="/" class="about">About</router-link>
          </li>
          <li>
            <router-link to="/projects" class="projects">Projects</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div
      id="collapse-menu"
      :class="{ open: animate }"
      class="collapse-nav"
      @click.prevent="openNav"
    >
      <router-link to="/">About</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      animate: false
    }
  },
  methods: {
    openNav (e) {
      this.animate = !this.animate
      this.$emit('open-nav', this.animate)
    }
  }
}
</script>

<style lang="scss" scoped>
// hamburger menu
.hamburger {
  float: right;
  padding: 9.5px 9.5px;
  display: none;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: rgba(0, 0, 0, 0.8);
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0 10px 0 0;
  overflow: visible;
}

.hamburger:hover {
  opacity: 0.7;
}

.hamburger-box {
  width: 30px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

/* shape of hamburger icons */
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 30px;
  height: 3px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

/*
   * Collapse
   */

.hamburger--collapse .hamburger-inner {
  top: auto;
  bottom: 0;
  transition-duration: 0.13s;
  transition-delay: 0.13s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse .hamburger-inner::after {
  top: -20px;
  transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0.1s linear;
}

.hamburger--collapse .hamburger-inner::before {
  transition: top 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--collapse.isActive .hamburger-inner {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
  transition-delay: 0.22s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

.hamburger--collapse.isActive .hamburger-inner::after {
  top: 0;
  opacity: 0;
  transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0.1s 0.22s linear;
}

.hamburger--collapse.isActive .hamburger-inner::before {
  top: 0;
  transform: rotate(-90deg);
  transition: top 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
}

@media screen and (max-width: 700px) {
  .hamburger {
    display: inline-block;
  }
}

// navbar
.navbar {
  letter-spacing: 2px;
  background-color: #fff;
  display: block;
  overflow: hidden;
  height: 64px;
  width: 100%;
  margin: 0 auto;
  top: 0;
  z-index: 1000;
  text-transform: uppercase;
}

.nav-container {
  width: 1170px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 250px;
  display: inline-block;
}

.navbar a {
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 0 14px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
}

.navbar-nav {
  display: inline-block;
  list-style: none;
  width: 400px;
}

.navbar-nav li {
  display: inline;
}

.collapse-nav {
  max-height: 0;
  width: 100%;
  z-index: 1;
  top: 10;
  left: 0;
  background-color: #fff;
  overflow-y: hidden;
  transition: max-height 0.3s;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.collapse-nav a {
  padding: 10px 10px 10px 30px;
  text-decoration: none;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.8);
  transition: 0.3s;
  letter-spacing: 1px;
}

.collapse-nav a:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.collapse-nav .btn-close {
  position: absolute;
  top: 0;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
}

@media (max-width: 700px) {
  .navbar-nav {
    display: none;
  }
}

.open {
  max-height: 140px;
}

li > a::before {
  content: "";
  position: absolute;
  width: 72%;
  height: 2px;
  bottom: 0;
  left: 13%;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.logo > a::before {
  content: "";
  position: absolute;
  width: 86%;
  height: 2px;
  bottom: 0;
  left: 7%;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

li > a:hover::before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.about::before {
  width: 67%;
  left: 15%;
}

.projects::before {
  width: 73%;
}

.logo > a:hover::before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

/*
*media queries
*/

@media (max-width: 1100px) {
  .nav-container {
    width: 100%;
  }
}

@media (max-width: 360px) {
  .logo a {
    font-size: 14px;
  }
}
</style>
