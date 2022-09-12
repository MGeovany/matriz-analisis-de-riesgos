/* eslint-disable space-before-function-paren */
import axios from 'axios'

const server = 'https://seguridad-api.herokuapp.com/'
// const server = 'http://localhost:3234'

const api = axios.create({
  baseURL: server
})

export const PoliticasAsociadasPlan = () => ({
  save: async (PlanSeguridad, item) => {
    const response = await api.post(
      `/plan-seguridad/${PlanSeguridad}/politicas/asociar`,
      [...item]
    )
    return response.data
  },
  get: async (PlanSeguridad) => {
    const response = await api.get(`/plan-seguridad/${PlanSeguridad}/politicas`)
    return response.data
  }
})

export const RiesgoAsociadosPoliticas = async (PoliticaSeguridad, item) => {
  const response = await api.post(
    `/politica-seguridad/${PoliticaSeguridad}/riesgos/asociar`,
    [...item]
  )
  return response.data
}

export const GetRiesgoAsociadosPoliticas = async (PoliticaSeguridad) => {
  const response = await api.get(
    `/politica-seguridad/${PoliticaSeguridad}/riesgos/`
  )
  return response.data
}
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
  },
  Riesgo: async () => {
    const response = await api.get('/opciones/riesgo')
    return response.data
  },
  PoliticaSeguridad: async () => {
    const response = await api.get('/opciones/politica-seguridad')
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
    const response = await api.get(`/plan-seguridad/${PlanSeguridadID}/resume`)
    return response.data
  }
})

export const Politicas = () => ({
  get: async () => {
    const response = await api.get('/politica-seguridad/')
    return response.data
  },
  save: async (politica) => {
    const response = await api.post('/politica-seguridad/', politica)
    return response.data
  },
  edit: async (politica) => {
    const response = await api.put(
      `/politica-seguridad/${politica.Id}`,
      politica
    )
    return response.data
  },
  delete: async (Id) => {
    const response = await api.delete(`/politica-seguridad/${Id}`)
    return response.data
  }
})

export const Plan = () => ({
  get: async () => {
    const response = await api.get('/plan-seguridad/')
    return response.data
  },
  save: async (plan) => {
    const response = await api.post('/plan-seguridad/', plan)
    return response.data
  },
  edit: async (plan) => {
    const response = await api.put(`/plan-seguridad/${plan.Id}`, plan)
    return response.data
  },
  delete: async (Id) => {
    const response = await api.delete(`/plan-seguridad/${Id}`)
    return response.data
  }
})

export const Accion = () => ({
  get: async (PlanSeguridad) => {
    const response = await api.get(
      `/plan-seguridad/${PlanSeguridad}/plan-accion`
    )
    return response.data
  },
  save: async (accion) => {
    const response = await api.post(
      `/plan-seguridad/${accion.PlanSeguridad}/plan-accion`,
      accion
    )
    return response.data
  },
  edit: async (accion) => {
    const response = await api.put(
      `/plan-seguridad/${accion.PlanSeguridad}/plan-accion/${accion.Id}`,
      accion
    )
    return response.data
  },
  delete: async (PlanSeguridad, Id) => {
    const response = await api.delete(
      `/plan-seguridad/${PlanSeguridad}/plan-accion/${Id}`
    )
    return response.data
  }
})

export const Incidente = () => ({
  get: async (PlanSeguridad) => {
    const response = await api.get(`/plan-seguridad/${PlanSeguridad}/incidente`)
    return response.data
  },
  save: async (incidente) => {
    const response = await api.post(
      `/plan-seguridad/${incidente.PlanSeguridad}/incidente`,
      incidente
    )
    return response.data
  },
  edit: async (incidente) => {
    const response = await api.put(
      `/plan-seguridad/${incidente.PlanSeguridad}/incidente/${incidente.Id}`,
      incidente
    )
    return response.data
  },
  delete: async (PlanSeguridad, Id) => {
    const response = await api.delete(
      `/plan-seguridad/${PlanSeguridad}/incidente/${Id}`
    )
    return response.data
  }
})

export const PlanRespuesta = () => ({
  get: async (PlanSeguridad, Incidente) => {
    const response = await api.get(
      `/plan-seguridad/${PlanSeguridad}/incidente/${Incidente}/plan-respuesta`
    )
    return response.data
  },
  save: async (PlanRespuesta) => {
    const response = await api.post(
      `/plan-seguridad/${PlanRespuesta.PlanSeguridad}/incidente/${PlanRespuesta.Incidente}/plan-respuesta`,
      PlanRespuesta
    )
    return response.data
  },
  edit: async (PlanRespuesta) => {
    const response = await api.put(
      `/plan-seguridad/${PlanRespuesta.PlanSeguridad}/incidente/${PlanRespuesta.Incidente}/plan-respuesta/${PlanRespuesta.Id}`,
      PlanRespuesta
    )
    return response.data
  },
  delete: async (PlanSeguridad, Incidente, Id) => {
    const response = await api.delete(
      `/plan-seguridad/${PlanSeguridad}/incidente/${Incidente}/plan-respuesta/${Id}`
    )
    return response.data
  }
})

const API = () => ({
  Riesgo,
  Politicas,
  Plan,
  Accion,
  Opciones,
  Resumen,
  PlanRespuesta
})

export default API
