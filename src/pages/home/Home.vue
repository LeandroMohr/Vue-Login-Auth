<template>
  <div class="home mt-5">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12">
          <div class="user-info">
            <h2 class="mb-4">Seja Bem vindo, {{ user.name }}</h2>
            <img class="profile-picture mb-4" :src="this.user.picture" alt="Profile Picture">
            <div class="description col-sm-12 col-md-6 col-offset-3">
              <h3>{{ user.jobTitle }}</h3>
              <h5>{{ user.comment }}</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="home-links">
            <router-link
              :key="i"
              class="home-link"
              :to="{ name: route.name }"
              v-for="(route, i) in routes"
            >
              <i class="material-icons md-48 mb-2">
                {{ route.meta.icon }}
              </i>
              <p class="text-center">{{ route.meta.label }}</p>
            </router-link>
          </div>
        </div>
      </div>
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

.home {
  width: 100%;
  height: auto;
  @include flex-center(true);
  justify-content: space-evenly;

  .user-info {
    text-align: center;

    .profile-picture {
      width: 30%;
      border: 1px solid var(--dark);
      border-radius: 10px;
    }

    .description {
      margin: 0 auto;
    }
  }

  .home-links {
    width: 100%;
    @include flex-center();
    justify-content: space-evenly;

    .home-link {
      width: 40%;
      // flex: 0 0 25%;
      margin: 0 15px;
      padding: 10px 0;
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
