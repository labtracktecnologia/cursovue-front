<template>
   <div>
    <b-button @click="orderChange">Toggle Busy State</b-button>
    <div>{{ items }}</div>
    <div>{{ order }}</div>
    <b-table striped hover :items="orderedItens"></b-table>
  </div>
</template>

<script>
export default {
    data: () => {
     return {
        items: [
          { id: 1, name: 'Dickerson', phone: 'Macdonald' , email: "john@doe.com" },
          { id: 2, name: 'Larsen', phone: 'Shaw' , email: "john@doe.com" },
          { id: 3, name: 'Geneva', phone: 'Wilson' , email: "john@doe.com" },
          { id: 4, name: 'Jami', phone: 'Carney' , email: "john@doe.com" }
        ],
        order: 'id'
      }
    },
    methods: {
        orderChange(){
            this.order = this.order === 'id' ? 'name' : 'id';
        }
    },
    computed: {
        orderedItens () {
           
          if (this.order == 'id') {

            return this.items
          
          } else {
            const compare = (a, b) => (a.name > b.name) - (a.name < b.name)
            const ordered =  [...this.items].sort(compare)
            console.table(ordered)
           
            return ordered
            
          }

        }
    }

}
</script>

<style>

</style>