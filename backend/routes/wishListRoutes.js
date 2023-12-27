import express from 'express'
const router = express.Router()
import { protect, isAdmin } from '../middleware/authMiddleware.js'
import { getWishLists } from '../controllers/wishListController.js'


router.route('/').get(getWishLists)


export default router