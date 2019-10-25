<template>
  <div id="app">
    <layout-navbar v-if="showNavbar"/>

    <router-view/>
  </div>
</template>

<script>
import LayoutNavbar from './components/layout/LayoutNavbar'

export default {
  components: {
    LayoutNavbar
  },
  computed: {
    showNavbar () {
      return this.$route.name !== 'login'
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #8ac8d5;
  background-image:
  radial-gradient(rgba(76,139,152,1), rgba(138,201,214,.05) 200px, transparent 400px),
  radial-gradient(rgba(76,139,152,1), rgba(255,255,255,.1) 300px, transparent 400px),
  radial-gradient(rgba(76,139,152,1), rgba(138,201,214,.1) 400px, transparent 400px);
  background-size: 1000px 500px, 700px 500px, 550px 500px;
  background-position: 0 -200px, 300px -100px, 700px -200px;
}
</style>
