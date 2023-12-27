import asyncHandler from 'express-async-handler'
import Subscription from '../models/subscriptionModel.js'

const getSubscriptions = asyncHandler(async (req, res) => {
    res.json({ "Meesage": "under development" })
});

export {
    getSubscriptions
}