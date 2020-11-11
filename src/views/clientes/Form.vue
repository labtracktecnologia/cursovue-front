<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col class="mx-auto" md="8">
        <b-form>
          <b-card show-footer>
            <b-card-body>
              <b-form-group label="Nome:">
                <b-form-input
                  v-model="form.name"
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
            </b-card-body>
            <div class="text-right" slot="footer">
              <b-button @click="save" variant="primary">
                <i class="fa fa-save"></i>
                Salvar
              </b-button>
              <b-button class="ml-2" @click="$router.go(-1)" variant="danger">
                <i class="fa fa-times-circle"></i>
                Cancelar
              </b-button>
            </div>
          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import data from './clientes.json'

export default {
  data () {
    return {
      form: {}
    }
  },
  mounted () {
    if (this.$route.params.id) {
      this.form = data.find(item => item.id == this.$route.params.id)
    }
  },
  methods: {
    save () {
      console.log(this.form)
    }
  }
}
</script>
