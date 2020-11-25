<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12" md="4">
        <b-card class="text-center">
          <b-img class="mb-3" center width="220" :src="profileImage" />
          <FileUpload @uploaded="onFileUpload" accept="image/*" fieldName="image" uploadUrl="/@me/image"></FileUpload>
          <b-button class="ml-2" @click="removeImage" variant="danger">Remover</b-button>
        </b-card>
      </b-col>
      <b-col cols="12" md="8">
        <b-card>
          <b-form @submit.prevent="saveProfile">
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
                v-model="profile.phone"
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
          <b-form @submit.prevent="updatePassword">
            <b-form-row>
              <b-form-group class="col-md-4" label="Senha atual:">
                <b-form-input
                  type="password"
                  v-model="passwords.password">
                </b-form-input>
              </b-form-group>
              <b-form-group class="col-md-4" label="Nova senha:">
                <b-form-input
                  type="password"
                  v-model="passwords.newPassword">
                </b-form-input>
              </b-form-group>
              <b-form-group class="col-md-4" label="Repita a senha:">
                <b-form-input
                  type="password"
                  v-model="passwords.repeatPassword">
                </b-form-input>
              </b-form-group>
            </b-form-row>
            <div class="text-right">
              <b-button type="submit" variant="success">Atualizar senha</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import FileUpload from '@/components/FileUpload.vue'
import { getProfile, removeImage, updatePassword, saveProfile } from '@/services/auth'

export default {
  components: {
    FileUpload
  },
  data() {
    return {
      profile: {},
      passwords: {}
    };
  },
  async mounted () {
    this.profile = await getProfile()
  },
  methods: {
    async saveProfile () {
      await saveProfile(this.profile)
      this.$noty.success('Perfil atualizado com sucesso!')
    },
    async updatePassword () {
      try {
        await updatePassword(this.passwords)
        this.$noty.success('Senha atualizado com sucesso!')
      } catch ({ response }) {
        const { data } = response
        this.$noty.error(data.message)
      }
    },
    async removeImage () {
      await removeImage()
      this.$noty.success('Imagem removida com sucesso!')
      this.profile = await getProfile()
    },
    onFileUpload (newProfile) {
      this.$noty.success('Foto modificada com sucesso!')
      this.profile = newProfile.data
    }
  },
  computed: {
    profileImage() {
      return this.profile.url ? this.profile.url : "img/profile.png";
    },
  },
};
</script>
