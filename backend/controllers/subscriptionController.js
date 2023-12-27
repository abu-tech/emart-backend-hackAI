import asyncHandler from 'express-async-handler'
import Subscription from '../models/subscriptionModel.js'

const getSubscriptions = asyncHandler(async (req, res) => {
    res.json({ "Meesage": "under development" })
});

const createSubscription = asyncHandler(async (req, res) => {
    const { productId, duration } = req.body
    const subs = await Subscription.create({
        product: productId,
        duration: duration
    })

    res.json({ subs })
});

export {
    getSubscriptions,
    createSubscription
}