<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12" md="4">
        <b-card class="text-center">
          <b-img class="mb-3" center width="220" :src="profileImage" />
          <FileUpload @uploaded="onFileUpload" accept="image/*" uploadUrl="/@me/upload"></FileUpload>
          <b-button class="ml-2" variant="danger">Remover</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="8">
        <b-card>
          <b-form @submit="save">
            <b-form-group label="Nome:">
              <b-form-input
                v-model="profile.name"
                required
                placeholder="Nome completo">
              </b-form-input>
            </b-form-group>
            <b-form-group label="Email:">
              <b-form-input
                v-model="profile.email"
                required readonly
                placeholder="Email de comunicação">
              </b-form-input>
            </b-form-group>
            <b-form-group
              label="Telefone:"
              description="O número de telefone é utilizado para algumas funcionalidades. Se não adicionar o número essas funcionalidades estarão desabilitadas.">
              <b-form-input
                v-model="profile.telefone"
                placeholder="Número de telefone">
              </b-form-input>
            </b-form-group>
            <div class="text-right">
              <b-button type="submit" variant="primary">Salvar</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card>
          <b-form>
            <b-form-row>
              <b-form-group class="col-md-4" label="Senha atual:">
                <b-form-input
                  type="password"
                  v-model="profile.telefone">
                </b-form-input>
              </b-form-group>
              <b-form-group class="col-md-4" label="Nova senha:">
                <b-form-input
                  type="password"
                  v-model="profile.telefone">
                </b-form-input>
              </b-form-group>
              <b-form-group class="col-md-4" label="Repita a senha:">
                <b-form-input
                  type="password"
                  v-model="profile.telefone">
                </b-form-input>
              </b-form-group>
            </b-form-row>
            <div class="text-right">
              <b-button variant="success">Atualizar senha</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import FileUpload from '@/components/FileUpload.vue'

export default {
  components: {
    FileUpload
  },
  data() {
    return {
      profile: {},
    };
  },
  methods: {
    save () {

    },
    onFileUpload () {
      this.$noty.success('Foto modificada com sucesso!')
    }
  },
  computed: {
    profileImage() {
      return this.profile.image ? this.profile.image : "img/profile.png";
    },
  },
};
</script>
