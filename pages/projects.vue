<template>
  <div>
    <Jumbotron>
      <template #content>
        <div class="title-main">
          <h1>Projects</h1>
        </div>
      </template>
    </Jumbotron>
  </div>
</template>

<script>
import Jumbotron from '@/components/content/Jumbotron'

export default {
  components: {
    Jumbotron
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
