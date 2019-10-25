<template>
  <div class="container-fluid">
    <h1 class="mt-3">Todos os usuários</h1>
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
