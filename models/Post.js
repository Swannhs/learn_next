import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: String,
    category: String,
    tag: {
        type: Array,
        default: []
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    publicDate: {
        type: Date,
    },
    coverImage: {
        type: String,
    },
    author: {
        type: Object,
        name: String,
        avatar: String
    },
    comments: {
        type: Array,
        default: []
    },
})

export default mongoose.models.Post || mongoose.model("Post", postSchema);