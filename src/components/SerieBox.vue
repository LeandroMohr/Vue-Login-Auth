<template>
  <div class="card serie-box">
    <img
      :src="serie.image"
      class="box-picture"
      title="Série Thumb"
      alt="Série Thumb"
    >

    <div class="card-body">
      <h3 class="text-center mb-0">
        {{ serie.title }}
      </h3>
      <div class="row text-center mt-3">
        <div class="col-12">
          <p>
            {{ serie.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    serie: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .serie-box {
    &.card {
      margin: 30px;
      cursor: pointer;
      transition: .4s;
      color: var(--dark);

      &:hover {
        text-decoration: none;
        box-shadow: 1px 1px 20px rgba(0,0,0,0.5)
      }

      .card-body {
        max-height: 350px;
        overflow: auto;
      }

      .box-picture {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
</style>
