import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sentIn: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('Projects', msgSchema)