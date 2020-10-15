<template>
  <div>
    <b-form>
      <b-form-group label="Nome:">
        <b-form-input
          v-model="form.nome"
          placeholder="Digite o nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Telefone:">
        <b-form-input
          v-model="form.telefone"
          placeholder="Digite o telefone"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          v-model="form.email"
          placeholder="Digite o email"
        ></b-form-input>
      </b-form-group>

      <b-button @click="save" variant="primary">Salvar</b-button>
      <b-button class="ml-2" @click="$router.go(-1)" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {}
    }
  },
  methods: {
    save () {
      console.log(this.form)
    }
  }
}
</script>
