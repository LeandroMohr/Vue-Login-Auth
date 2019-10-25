<template>
  <div class="card user-box">
    <div class="card-header">
      <h3 class="text-center mb-0">
        {{ user.name }}
      </h3>
    </div>
    <img
      :src="user.picture"
      class="card-image-top box-picture"
      title="User Picture"
      alt="User Picture"
    >

    <div class="card-body">
      <div class="row text-center mt-3">
        <div class="col-12">
          <p>
            {{ user.email }}
          </p>
        </div>
        <div class="col-12">
          <p>
            {{ user.password }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .user-box {
    margin: 30px;
    cursor: pointer;
    transition: .4s;
    color: var(--dark);
    &:hover {
      text-decoration: none;
      box-shadow: 1px 1px 20px rgba(0,0,0,0.5)
    }

    .box-picture {
      display: block;
      border: 1px solid var(--dark);
      border-radius: 100%;
      margin: 15px auto 0;
      max-width: 150px;
      height: auto;
    }
  }
</style>
