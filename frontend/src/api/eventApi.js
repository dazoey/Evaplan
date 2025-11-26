import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api/events'
})

export const getPublicEvents = () => API.get('/public')
export const getAllEvents = () => API.get('/')
export const getEventById = (id) => API.get(`/${id}`)
export const searchEvents = (params) => API.get('/search', { params })
export const createEvent = (data) => API.post('/', data)
export const updateEvent = (id, data) => API.patch(`/${id}`, data)
export const deleteEvent = (id) => API.delete(`/${id}`)