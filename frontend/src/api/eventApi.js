import axios from 'axios'

const API = axios.create({
  baseURL: '/api/events'
})

export const getPublicEvents = () => API.get('?public=true')
export const getAllEvents = () => API.get('/')
export const getEventById = (id) => API.get(`/${id}`)
export const searchEvents = (params) => API.get('/search', { params })
export const createEvent = (data) => API.post('/', data)
export const updateEvent = (id, data) => API.patch(`/${id}`, data)
export const deleteEvent = (id) => API.delete(`/${id}`)