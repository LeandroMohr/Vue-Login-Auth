<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link
      class="navbar-brand"
      :to="{ name: 'home' }"
    >
      Home
    </router-link>

    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <router-link
          exact
          :key="i"
          tag="li"
          class="nav-item"
          exact-active-class="active"
          :to="{ name: route.name }"
          v-for="(route, i) in routes"
        >
          <a href="#" class="nav-link">
            {{ route.meta.title }}
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  }
}
</script>
