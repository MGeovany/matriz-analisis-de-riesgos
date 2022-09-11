/* eslint-disable space-before-function-paren */
import axios from 'axios'

const server = 'https://seguridad-api.herokuapp.com/'

const api = axios.create({
  baseURL: server
})

export const Opciones = () => ({
  Impacto: async () => {
    const response = await api.get('/opciones/impacto')
    return response.data
  },
  Posibilidad: async () => {
    const response = await api.get('/opciones/posibilidad')
    return response.data
  },
  NivelRiesgo: async () => {
    const response = await api.get('/nivelRiesgo')
    return response.data
  }
})

export const Riesgo = () => ({
  get: async () => {
    const response = await api.get('/riesgo')
    return response.data
  },
  save: async (riesgo) => {
    const response = await api.post('/riesgo', riesgo)
    return response.data
  },
  edit: async (riesgo) => {
    const response = await api.put(`/riesgo/${riesgo.Id}`, riesgo)
    return response.data
  },
  delete: async (id) => {
    const response = await api.delete(`/riesgo/${id}`)
    return response.data
  }
})

export const Resumen = () => ({
  getResume: async (PlanSeguridadID) => {
    let planSeguridad = {}
    const response = await api.get(`/plan-seguridad/${PlanSeguridadID}/resume`)
    planSeguridad = response.data
    return response.data
  }
})

const API = () => ({
  Riesgo,
  Resumen,
  Opciones
})
export default API
