<template>
  <div class="d-inline">
    <input @change="onFileChange" :accept="accept" class="d-none" ref="inputFileUpload" type="file">
    <b-button :disabled="isUploading" @click="$refs.inputFileUpload.click()" variant="success">Mudar</b-button>
  </div>
</template>
<script>
export default {
  props: {
    accept: {
      type: String,
      default () {
        return '*/*'
      }
    },
    fieldName: {
      type: String,
      default () {
        return 'file'
      }
    },
    uploadUrl: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isUploading: false
    }
  },
  methods: {
    onFileChange () {
      this.isUploading = true
      try {
        const [ file ] = this.$refs.inputFileUpload.files
        if (file) {
          let formData = new FormData()
          formData.append(this.fieldName, file)
          // chamada da API
          // post(this.uploadUrl, formData, { headers: {'Content-Type':'multipart/form-data'}})
          this.$emit('uploaded')
        }
      } catch (error) {
        this.$noty.error('Problemas no upload do arquivo')
        console.log(error)
      }
      this.isUploading = false
    }
  }
}
</script>
