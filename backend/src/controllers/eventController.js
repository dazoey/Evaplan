import { EventService } from '../services/eventService.js'
import { validateEvent } from '../utils/validateEvent.js'
// logika bauat ngurusin request dan response terkait event
export const EventController = {
  async getAll(req, res) {
    const { isPublic, sortBy, order } = req.query
    const { data, error } = await EventService.getAll({ isPublic, sortBy, order })

    if (error) 
      return res.status(500).json({ error })
    res.json(data)
  },
// ini fungsi buat nampilin event yang bersifat public
  async getPublic(req, res) {
    const { data, error } = await EventService.getPublic()

    if (error) 
      return res.status(500).json({ error })
    res.json(data)
  },

// ini fungsi buat nampilin detail event berdasarkan id kayanya
  async getById(req, res) {
    const { data, error } = await EventService.getById(req.params.id)

    if (error) 
      return res.status(404).json({ error })
    res.json(data)
  },

// ini fungsi buat nambahin event baru
  async create(req, res) {
    const { error: vError } = validateEvent(req.body)

    if (vError) 
      return res.status(400).json({ error: vError })

// panggil service buat create event
    const { data, error } = await EventService.create(req.body)
    if (error) 
      return res.status(500).json({ error })
    res.status(201).json(data)
  },

// ini fungsi buat ngupdate data event
  async update(req, res) {
    const { data, error } = await EventService.update(
      req.params.id,
      req.body
    )

    // kalo error balikin status 500
    if (error) 
      return res.status(500).json({ error })
    res.json(data)
  },

// ini fungsi buat ngapus event
  async remove(req, res) {
    const { data, error } = await EventService.remove(req.params.id)

    if (error) 
      return res.status(500).json({ error })
    res.json({ message: 'deleted', data })
  },

// ini fungsi buat nyari event berdasarkan query
  async search(req, res) {
    const { data, error } = await EventService.search(req.query)
    
    if (error) 
      return res.status(500).json({ error })
    res.json(data)
  }
}
