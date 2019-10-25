<template>
  <div id="home">
    <div class="user-info">
      <img class="profile-picture" :src="this.user.picture" alt="Profile Picture">
      <h2>Olá, {{ user.name }}</h2>
      <p>Bem vindo ao Vue-Login-Auth</p>
    </div>

    <div class="home-links">
      <router-link
        :key="i"
        class="home-link"
        :to="{ name: route.name }"
        v-for="(route, i) in routes"
      >
        <i class="material-icons md-48">
          {{ route.meta.icon }}
        </i>
        <span>{{ route.meta.label }}</span>
      </router-link>
    </div>

    <button class="btn btn-exit" v-on:click="logout">
      <span class="d-block">sair <i class="material-icons md-18">exit_to_app</i></span>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user']),
    routes () {
      return this.$router.options.routes.filter(route => (
        route.meta && route.meta.showNavbar
      ))
    }
  },
  methods: {
    ...mapActions('auth', ['ActionSignOut']),
    logout () {
      this.ActionSignOut()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-center($columns: false) {
  display: flex;
  align-items: center;
  justify-content: center;

  @if $columns {
    flex-direction: column;
  }
}

#home {
  width: 100%;
  height: 100vh;
  @include flex-center(true);
  justify-content: space-around;

  .user-info {
    text-align: center;

    .profile-picture {
      width: 30%;
      max-width: 120px;
      border-radius: 100%;
    }
  }

  .home-links {
    width: 100%;
    @include flex-center();
    .home-link {
      flex: 0 0 25%;
      margin: 0 15px;
      padding: 50px 0;
      transition: .4s;
      border-radius: 50px;
      color: var(--white);
      @include flex-center(true);
      &:hover {
        transform: scale(1.1);
        text-decoration: none;
        box-shadow: 0 10px 20px rgba(0,0,0,0.5);
      }
      &:first-child { background-color: var(--blue) }
      &:nth-child(2) { background-color: var(--orange) }
      &:last-child { background-color: var(--red) }
    }
  }

  .btn-exit {
    top: 0;
    right: 0;
    margin: 8px;
    position: absolute;
    border: 1px solid var(--white);
    color: var(--white);

    .material-icons{
      vertical-align: text-bottom;
    }
  }
}
</style>
