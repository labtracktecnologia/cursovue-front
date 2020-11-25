<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <img
        :src="profileImage"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>\
    <template slot="dropdown">
      <b-dropdown-header tag="div" class="text-center"><strong>Usuário</strong></b-dropdown-header>
      <b-dropdown-item to="/profile"><i class="fa fa-user" /> Perfil</b-dropdown-item>
      <b-dropdown-item @click="logout"><i class="fa fa-lock" /> Sair</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
import { logout, getProfile } from '@/services/auth'

export default {
  name: 'DefaultHeaderDropdownAccnt',
  components: {
    AppHeaderDropdown
  },
  data () {
    return {
      profile: {}
    }
  },
  async mounted () {
    this.profile = await getProfile()
  },
  computed: {
    profileImage() {
      return this.profile.url ? this.profile.url : "img/profile.png";
    },
  },
  methods: {
    logout () {
      logout(this.retornarAoLogin)
    },
    retornarAoLogin () {
      this.$router.replace('/login')
    }
  }
}
</script>
<style lang="scss">
ul.dropdown-menu.show {
  width: 12rem;
}
</style>
