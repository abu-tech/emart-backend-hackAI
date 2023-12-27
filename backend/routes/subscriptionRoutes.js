import express from 'express'
const router = express.Router()
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import { getSubscriptions, createSubscription } from '../controllers/subscriptionController.js'


router.route('/').get(getSubscriptions).post(createSubscription)


export default router