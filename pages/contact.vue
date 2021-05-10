<template>
  <div>
    <Jumbotron>
      <template #content>
        <div class="title-main">
          <h1>Contact</h1>
        </div>
      </template>
    </Jumbotron>
    <div v-if="submitted" class="msg">
      {{ msg }}
    </div>
    <Form e-else @submit-form="onSubmit" />
  </div>
</template>

<script>
import Jumbotron from '@/components/content/Jumbotron'
import Form from '@/components/form/Form'

export default {
  components: {
    Jumbotron,
    Form
  },

  data () {
    return {
      submitted: false,
      msg: ''
    }
  },

  methods: {
    onSubmit (event) {
      console.log(event)
    }
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
</style>
