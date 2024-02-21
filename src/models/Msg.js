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
    }
})

export default mongoose.model('Projects', msgSchema)