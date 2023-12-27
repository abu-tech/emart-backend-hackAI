import mongoose from 'mongoose'
const { Schema } = mongoose

const subscriptionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
    },
    duration: {
        type: Number,
        required: true,
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
},
    {
        timestamps: true
    }
)

const Subscription = mongoose.model("Subscription", subscriptionSchema)

export default Subscription