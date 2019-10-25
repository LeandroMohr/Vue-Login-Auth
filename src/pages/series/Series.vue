<template>
  <section class="series">
    <div class="container-fluid">
      <h1 class="title mt-3">Todas as séries</h1>
      <hr>

      <div class="row">
        <div
          class="col-sm-12 col-md-6 col-lg-4"
          :key="item.id"
          v-for="item in seriesList"
        >
          <serie-box :serie="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import SerieBox from '@/components/SerieBox'

export default {
  name: 'Series',
  components: {
    SerieBox
  },
  mounted () {
    this.ActionFindSerieslist()
  },
  computed: {
    ...mapState('series', ['seriesList'])
  },
  methods: {
    ...mapActions('series', ['ActionFindSerieslist'])
  }
}
</script>

<style lang="scss">
.series{
  .title {
    color: var(--white);
  }
}
</style>
