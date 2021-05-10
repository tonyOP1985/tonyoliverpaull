<template>
  <form method="POST" @submit.prevent="onSubmit">
    <TextInput
      label="Name"
      name="name"
      @update-value="updateValue"
    />
    <TextInput
      type="email"
      label="Email"
      name="email"
      @update-value="updateValue"
    />
    <TextInput
      type="tel"
      label="Phone"
      name="phone"
      :requiredField="false"
      @update-value="updateValue"
    />
    <TextArea
      label="Message"
      name="message"
      @update-value="updateValue"
    />
    <button type="submit">SEND</button>
  </form>
</template>

<script>
import TextInput from '@/components/form/inputs/TextInput'
import TextArea from '@/components/form/inputs/TextArea.vue'

export default {
  components: {
    TextInput,
    TextArea
  },

  data () {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        gotcha: '',
        messageBody: ''
      }
    }
  },

  methods: {
    updateValue ({ name, value }) {
      this.form[name] = value
    },

    onSubmit () {
      this.$emit('submit-form', this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 40%;
  margin: 30px auto 0;
  background: #fff;
  padding: 50px 10px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  flex-direction: column;
}

button {
  font-family: "Montserrat", sans-serif;
  padding: 10px 30px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #30c9e8;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.2s ease;
}

button:hover {
  background-color: #02abd6;
}

@media (max-width: 750px) {
  form {
    width: 95%;
  }
}
</style>
