import { getClient } from './http'

class ClienteService {

  findAll({ page=1, limit=10, filter='' }) {
    return getClient().get(`/customers?page=${page}&limit=${limit}&filter=${filter}`)
  }

  findById(id) {
    return getClient().get(`/customers/${id}`)
  }

  save(record) {
    if (record.id) {
      return getClient().put(`/customers/${record.id}`, record)
    }
    return getClient().post('/customers', record)
  }

  remove(id) {
    return getClient().delete(`/customers/${id}`)
  }
}

export default ClienteService
