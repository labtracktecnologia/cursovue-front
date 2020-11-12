import Swal from 'sweetalert2'

export default {
  methods: {
    $confirm(title, text) {
      return Swal.fire({
        title,
        text,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'
      })
      .then(({ value }) => {
        return value
      })
    }
  }
}
