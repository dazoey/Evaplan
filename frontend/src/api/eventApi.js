import axios from 'axios'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})
// fungsi-fungsi buat manggil API terkait event (endpoint API)
export const getPublicEvents = (sortBy, order) => {
  const params = { public: true, sortBy, order }
  return API.get('/api/events', { params })
}
export const getAllEvents = () => API.get('/api/events')
export const getEventById = (id) => API.get(`/api/events/${id}`)
export const searchEvents = (params) => API.get('/api/events/search', { params })
export const createEvent = (data) => API.post('/api/events', data)
export const updateEvent = (id, data) => API.patch(`/api/events/${id}`, data)
export const deleteEvent = (id) => API.delete(`/api/events/${id}`)
