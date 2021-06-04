<template>
  <div>
    <Jumbotron marginBottom>
      <template #content>
        <div class="title-main">
          <h1>Projects</h1>
        </div>
      </template>
    </Jumbotron>
    <Project
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
    />
  </div>
</template>

<script>
import projects from '@/lib/projects.js'

import Jumbotron from '@/components/content/Jumbotron'
import Project from '@/components/content/Project'

export default {
  components: {
    Jumbotron,
    Project
  },

  data () {
    return {
      // TODO: prodects will come from server in future
      projects
    }
  }
}
</script>

<style lang="scss" scoped>
.title-main {
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;
  text-align: center;

  h1 {
    color: #fff;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 3.5rem;
  }
}

@media (max-width: 500px) {
  .title-main h1 {
    font-size: 2.5rem;
  }
}
</style>
