import asyncHandler from 'express-async-handler'
import Subscription from '../models/subscriptionModel.js'

const getSubscriptions = asyncHandler(async (req, res) => {
    return { "meesage": "under development" }
});

export {
    getSubscriptions
}