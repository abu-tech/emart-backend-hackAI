import express from 'express'
const router = express.Router()
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import { getSubscriptions } from '../controllers/subscriptionController.js'


router.route('/').get(getSubscriptions)


export default router