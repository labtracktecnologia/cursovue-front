<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col>
        <b-card>
          <SearchBar @refresh="load" v-model="filter">
            <b-button class="mt-2 mt-sm-0" to="new" variant="primary">
              <i class="fa fa-plus"></i>
              <span class="ml-1">Novo Cliente</span>
            </b-button>
          </SearchBar>
          <b-table responsive class="mt-2" striped small :items="records" :fields="tableFields">
            <template v-slot:cell(email)="{ item }">
              <a target="_blank" :href="`mailto:${item.email}`">{{ item.email }}</a>
            </template>
            <template v-slot:cell(action)="{ item }">
              <b-button :to="{ name: 'Editar Cliente', params: { id: item.id }}" size="sm" class="text-dark p-0 mx-1" variant="link">
                <i class="fa fa-edit"></i>
              </b-button>
              <b-button @click="remove(item)" size="sm" class="text-danger p-0 mx-1" variant="link">
                <i class="fa fa-trash"></i>
              </b-button>
            </template>
          </b-table>
          <b-pagination v-model="page" :per-page="perPage" :total-rows="total" align="right"></b-pagination>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import data from './clientes.json'
import SearchBar from '@/components/SearchBar.vue'
import ConfirmMixin from '@/mixins/confirm'

export default {
  components: {
    SearchBar
  },
  mixins: [ConfirmMixin],
  data () {
    return {
      records: data,
      filter: '',
      page: 1,
      total: 0,
      perPage: 20
    }
  },
  computed: {
    tableFields () {
      return [
        { key: 'id', isRowHeader: true, label: '#' },
        { key: 'name', label: 'Nome' },
        { key: 'telefone', label: 'Telefone' },
        { key: 'email', label: 'E-mail' },
        { key: 'action', label: ' ', tdClass: 'text-right' },
      ]
    }
  },
  methods: {
    async remove ({ id, name }) {
      const value = await this.$confirm('Tem certeza que deseja excluir?', 'Esta ação não poderá ser desfeita!')
      if (value) {
        this.$noty.success(`Excluído o registro ${name} (${id})`)
      }
    },
    load() {

    }
  }
}
</script>
