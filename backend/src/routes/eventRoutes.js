import { Router } from 'express'
import { EventController } from '../controllers/eventController.js'

const router = Router()

router.get('/', EventController.getAll)
router.get('/public', EventController.getPublic)
router.get('/search', EventController.search)
router.get('/:id', EventController.getById)
router.post('/', EventController.create)
router.patch('/:id', EventController.update)
router.delete('/:id', EventController.remove)

export default router
