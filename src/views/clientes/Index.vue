<template>
  <b-card class="p-2 h-100" no-body>
    <div class="text-right">
      <button class="btn btn-success" @click="mudarOrdenacao">Mudar</button>
      <label class="mx-4">{{ ordenacao }}</label>
      <router-link class="ml-auto btn btn-warning" to="new">Novo</router-link>
    </div>
    <div>
      <b-form-select v-model="ordenacao" :options="options"></b-form-select>
    </div>
    <b-table class="table-dark" striped hover :items="itemsOrdenados"></b-table>
  </b-card>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { id: 1, nome: 'João', telefone: '874289492', email: 'joao@gmail.com' },
        { id: 2, nome: 'Antonio', telefone: '23453534564', email: 'antonio@gmail.com' },
        { id: 3, nome: 'Maria', telefone: '57456754', email: 'maria@gmail.com' },
        { id: 4, nome: 'Jessica', telefone: '68456325', email: 'jessica@gmail.com' },
        { id: 5, nome: 'Joana', telefone: '678457634', email: 'joana@gmail.com' },
        { id: 6, nome: 'Antonia', telefone: '456854745', email: 'antonia@gmail.com' },
      ],
      ordenacao: 'id',
    }
  },
  computed: {
    options () {
      return [
        { value: 'nome', text: 'Nome' },
        { value: 'id', text: 'Identificador' },
        { value: 'telefone', text: 'Número de telefone' },
      ]
    },
    itemsOrdenados () {
      return [...this.items].sort(this.ordenar)
    }
  },
  methods: {
    ordenar (item1, item2) {
      if (item1[this.ordenacao] < item2[this.ordenacao]) {
        return -1
      } else if (item1[this.ordenacao] > item2[this.ordenacao]) {
        return 1
      } else {
        return 0
      }
    },
    mudarOrdenacao () {
      if (this.ordenacao === 'id') {
        this.ordenacao = 'nome'
      } else {
        this.ordenacao = 'id'
      }
    }
  }
}
</script>
