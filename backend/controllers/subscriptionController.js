import asyncHandler from 'express-async-handler'
import Subscription from '../models/subscriptionModel.js'

const getSubscriptions = asyncHandler(async (req, res) => {
    const subs = await Subscription.find({});

    res.json({ subs })
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