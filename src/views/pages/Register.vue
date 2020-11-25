<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="register">
                <h1>Registre-se</h1>
                <p class="text-muted">Crie sua conta para acessar o sistema</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="user.name" class="form-control" placeholder="Nome do usuário" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-phone"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="user.phone" class="form-control" placeholder="Telefone" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" v-model="user.email" class="form-control" placeholder="Email de login" autocomplete="email" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model="user.password" class="form-control" placeholder="Password" autocomplete="new-password" />
                </b-input-group>

                <b-button variant="success" type="submit" block>Criar conta</b-button>
                <b-button variant="primary" to="/login" block>Voltar ao login</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { registerUser, login } from '@/services/auth'

export default {
  name: 'Register',
  data () {
    return {
      user: {}
    }
  },
  methods: {
    async register () {
      try {
        await registerUser(this.user)
        await login(this.user.email, this.user.password)
        this.$router.replace('/')
      } catch ({ response }) {
        const { data } = response
        this.$noty.error(data.message)
      }
    }
  }
}
</script>
