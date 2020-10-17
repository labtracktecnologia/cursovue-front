<template>
   <div>
    <b-form @submit.prevent="onSubmit">
      
      <b-form-group label="Your Name:">
        <b-form-input
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Email address:">
        <b-form-input
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Phone:">
        <b-form-input
          v-model="form.phone"
          required
          placeholder="Enter phone"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button class="ml-2" @click="$router.go(-1)" variant="danger">Cancelar</b-button>

    </b-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          phone: '',
        }
      }
    },
    methods: {
      onSubmit(event) {
        //event.preventDefault()
        console.log(JSON.stringify(this.form))
      },
    }
  }
</script>

<style>

</style>