<template>
  <div class="project-img">
    <img :src="image" :alt="alt">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project-img {
  height: 100%;
  width: 50%;
}

.project-img img {
  width: 400px;
  height: 245px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.16) 0 2px 5px 0, rgba(0, 0, 0, 0.12) 0 2px 10px 0;
}

@media (max-width: 1190px) {
  .project-img img {
    width: 300px;
    height: 184px;
  }

  .project-title {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .project-img {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .project-img img {
    width: 200px;
    height: 122.5px;
  }
}
</style>
