<template>
  <div class="app">
    <TheNavigation class="nav" @open-nav="addMarginTop" />
    <Nuxt :class="['main', { addTopMargin: active }]" />
    <TheFooter class="footer" />
  </div>
</template>

<script>
import TheNavigation from '@/components/navigation/TheNavigation'
import TheFooter from '@/components/footer/TheFooter'

export default {
  components: {
    TheNavigation,
    TheFooter
  },

  data () {
    return {
      active: false
    }
  },
  methods: {
    addMarginTop (animate) {
      this.active = animate
    }
  }
}
</script>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
}

body {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.7;
  text-rendering: optimizeLegibility;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.addTopMargin {
  transition: margin-top 0.3s;
  overflow: hidden;
  height: 100%;
}

.app {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
}

.main {
  flex-grow: 1;
}

.nav,
.main,
.footer {
  flex-shrink: 0;
}
</style>
