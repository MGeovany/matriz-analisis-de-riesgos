import axios from 'axios'

const server = 'http://localhost:3234'

const api = axios.create({
  baseURL: server
})

export const Opciones = () => ({
  Impacto: async() => {
    const response = await api.get('/opciones/impacto')
    return response.data
  },
  Posibilidad: async() => {
    const response = await api.get('/opciones/posibilidad')
    return response.data
  },
  NivelRiesgo: async() => {
    const response = await api.get('/nivelRiesgo')
    return response.data
  }
})

export const Riesgo = () => ({
  get: async() => {
    const response = await api.get('/riesgo')
    return response.data
  },
  save: async(riesgo) => {
    const response = await api.post('/riesgo', riesgo)
    return response.data
  },
  edit: async(riesgo) => {
    const response = await api.put(`/riesgo/${riesgo.id}`, riesgo)
    return response.data
  },
  delete: async(id) => {
    const response = await api.delete(`/riesgo/${id}`)
    return response.data
  }
})
const API = () => ({
  Riesgo
})
export default API
