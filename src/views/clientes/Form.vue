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
                  v-model="form.phone"
                  placeholder="Digite o telefone"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Email:">
                <b-form-input
                  v-model="form.email"
                  placeholder="Digite o email"
                ></b-form-input>
              </b-form-group>
              <b-form-group label="Endereço:">
                <b-form-input
                  v-model="form.address"
                  placeholder="Digite o endereço"
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
import ClienteService from '@/services/clientes'

export default {
  data () {
    return {
      form: {}
    }
  },
  async mounted () {
    this.$service = new ClienteService()
    if (this.$route.params.id) {
      const { data } = await this.$service.findById(this.$route.params.id)
      this.form = data
    }
  },
  methods: {
    async save () {
      try {
        await this.$service.save(this.form)
        this.$noty.success('Cliente gravado com sucesso!')
        this.$router.replace('list')
      } catch (err) {
        this.$noty.danger('Problemas ao armazenar o cliente!')
        console.log(err)
      }
    }
  }
}
</script>
