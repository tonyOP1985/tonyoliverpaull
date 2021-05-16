<template>
  <div class="project-wrapper">
    <h1>{{ project.title }}</h1>
    <div class="project-details">
      <TheProjectImage :image="project.image" :alt="project.alt" />
      <TheProjectInfo :project="project" />
    </div>
  </div>
</template>

<script>
import TheProjectImage from '@/components/content/TheProjectImage.vue'
import TheProjectInfo from '@/components/content/TheProjectInfo.vue'

export default {
  components: {
    TheProjectImage,
    TheProjectInfo
  },

  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.project-wrapper {
  width: 1170px;
  margin: 0 auto;
}

h1 {
  width: 1000px;
  margin: 0 auto;
  border-bottom: 2px solid #30c9e8;
}

.project-details {
  width: 1000px;
  margin: 40px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media (max-width: 1190px) {
  .project-wrapper {
    width: 80%;
    margin: 0 auto;
  }

  h1 {
    width: 100%;
  }

  .project-details {
    width: 100%;
  }
}

@media (max-width: 700px) {
  .project-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.2rem;
  }
}
</style>
