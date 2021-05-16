<template>
  <form method="POST" @submit.prevent="onSubmit">
    <TextInput
      v-model="form.name"
      label="Name"
      name="name"
    />
    <TextInput
      v-model="form.email"
      type="email"
      label="Email"
      name="email"
    />
    <TextInput
      v-model="form.phone"
      type="tel"
      label="Phone"
      name="phone"
      :requiredField="false"
    />
    <TextArea
      v-model="form.messageBody"
      label="Message"
      name="message"
    />
    <input :disabled="enableButton" type="submit" value="SEND">
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

  computed: {
    enableButton () {
      const requiredFields = ['name', 'email', 'messageBody']
      const formValues = requiredFields.map(field => !!this.form[field].length)
      return formValues.some(value => !value)
    }
  },

  methods: {
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

input[type=submit] {
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

input[type=submit]:hover {
  background-color: #02abd6;
}

input[type=submit]:disabled {
  background-color: #ddd;
  cursor: default;
}

@media (max-width: 750px) {
  form {
    width: 95%;
  }
}
</style>
