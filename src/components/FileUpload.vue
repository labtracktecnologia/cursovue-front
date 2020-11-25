<template>
  <div class="d-inline">
    <input @change="onFileChange" :accept="accept" class="d-none" ref="inputFileUpload" type="file">
    <b-button :disabled="isUploading" @click="$refs.inputFileUpload.click()" variant="success">Mudar</b-button>
  </div>
</template>
<script>
import { getClient } from '@/services/http'

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
    async onFileChange () {
      this.isUploading = true
      try {
        const [ file ] = this.$refs.inputFileUpload.files
        if (file) {
          let formData = new FormData()
          formData.append(this.fieldName, file)
          const header = {'Content-Type' : 'multipart/form-data'}
          const { data } = await getClient(header).post(this.uploadUrl, formData)
          this.$emit('uploaded', data)
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
