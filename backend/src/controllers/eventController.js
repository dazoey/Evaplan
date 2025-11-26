import { EventService } from '../services/eventService.js'
import { validateEvent } from '../utils/validateEvent.js'

export const EventController = {
  async getAll(req, res) {
    const { data, error } = await EventService.getAll()
    if (error) return res.status(500).json({ error })
    res.json(data)
  },

  async getPublic(req, res) {
    const { data, error } = await EventService.getPublic()
    if (error) return res.status(500).json({ error })
    res.json(data)
  },

  async getById(req, res) {
    const { data, error } = await EventService.getById(req.params.id)
    if (error) return res.status(404).json({ error })
    res.json(data)
  },

  async create(req, res) {
    const { error: vError } = validateEvent(req.body)
    if (vError) return res.status(400).json({ error: vError })

    const { data, error } = await EventService.create(req.body)
    if (error) return res.status(500).json({ error })
    res.status(201).json(data)
  },

  async update(req, res) {
    const { data, error } = await EventService.update(
      req.params.id,
      req.body
    )
    if (error) return res.status(500).json({ error })
    res.json(data)
  },

  async remove(req, res) {
    const { data, error } = await EventService.remove(req.params.id)
    if (error) return res.status(500).json({ error })
    res.json({ message: 'deleted', data })
  },

  async search(req, res) {
    const { data, error } = await EventService.search(req.query)
    if (error) return res.status(500).json({ error })
    res.json(data)
  }
}
