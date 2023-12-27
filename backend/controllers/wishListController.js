import asyncHandler from 'express-async-handler'
import Wishlist from '../models/wishListModel.js'

const getWishLists = asyncHandler(async (req, res) => {
    return { "meesage": "under development" }
});

export {
    getWishLists
}