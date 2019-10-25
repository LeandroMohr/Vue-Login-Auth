<template>
  <section class="users">
    <div class="container-fluid">
      <h1 class="title mt-3">Todos os usuários</h1>
      <hr>

      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4"
          :key="item.id"
          v-for="item in usersList"
        >
          <user-box :user="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserBox from '@/components/UserBox'

export default {
  name: 'Users',
  components: {
    UserBox
  },
  mounted () {
    this.ActionFindUserslist()
  },
  computed: {
    ...mapState('users', ['usersList'])
  },
  methods: {
    ...mapActions('users', ['ActionFindUserslist'])
  }
}
</script>

<style lang="scss">
.users{
  .title {
    color: var(--white);
  }
}
</style>
