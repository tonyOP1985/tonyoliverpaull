<template>
  <div class="project-info">
    <p>{{ project.text }}</p>
    <Link v-if="project.code" :link="project.code" btnText="View Code" />
    <Link v-if="project.projectLink" :link="project.projectLink" btnText="View Project" />
    <TheTechnologiesList :technologies="project.technology" />
  </div>
</template>

<script>
import Link from '@/components/content/Link.vue'
import TheTechnologiesList from '@/components/content/TheTechnologiesList.vue'

export default {
  components: {
    Link,
    TheTechnologiesList
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
.project-info {
  width: 40%;
}

@media (max-width: 700px) {
  .project-info {
    width: 100%;
  }
}
</style>
