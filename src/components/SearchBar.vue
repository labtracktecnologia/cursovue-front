<template>
  <b-form inline @submit.prevent="$emit('refresh')">
    <label>Pesquisa:</label>
    <b-input-group class="col">
      <b-input :value="value" @input="onInputHandle"></b-input>
      <b-input-group-addon v-if="!!value" append>
        <b-btn @click="reset" variant="link" class="px-2 text-danger border-top border-bottom">
          <i class="fa fa-times"></i>
        </b-btn>
      </b-input-group-addon>
      <b-input-group-addon append>
        <b-btn type="submit" variant="success">
          <i class="fa fa-search"></i>
          <span class="ml-1">Buscar</span>
        </b-btn>
      </b-input-group-addon>
    </b-input-group>
    <slot></slot>
  </b-form>
</template>

<script>
export default {
  props: [ 'value' ],
  methods: {
    onInputHandle($evt) {
      this.$emit('input', $evt)
    },
    reset () {
      this.value = ''
      this.$emit('input', this.value)
      this.$emit('refresh')
    }
  }
}
</script>
