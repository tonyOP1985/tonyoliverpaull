<template>
  <div>
    <Jumbotron>
      <template #content>
        <div class="title-main">
          <h1>Contact</h1>
        </div>
      </template>
    </Jumbotron>
    <Contact />
  </div>
</template>

<script>
import Jumbotron from '@/components/content/Jumbotron'
import Contact from '@/components/content/contact/Contact.vue'

export default {
  components: {
    Jumbotron,
    Contact
  }
}
</script>

<style lang="scss" scoped>
.title-main {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 40px 0;

  h1 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 3.5rem;
    font-weight: 700;
  }
}

.msg {
  width: 100%;
  // height: calc(100vh - 210px - 100px - 64px);
  height: 75vh;
  text-align: center;
}

@media (max-width: 740px) {
  .title-main {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .title-main h1 {
    font-size: 2.5rem;
  }
}

// @media (max-width: 450px) {
//   .msg {
//     height: calc(100vh - 210px - 128px - 64px);
//   }
// }
</style>
