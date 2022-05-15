import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    tag: {
        type: Array,
        required: true
    },
    shortDescription: {
        type: String,
        required: true
    },
    fullDescription: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    specifications: {
        type: Object,
        weight: {
            type: Number,
            required: true
        },
        dimensions: {
            type: Object,
            width: {
                type: Number,
            },
            height: {
                type: Number,
            },
            depth: {
                type: Number,
            }
        },
        color: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        reviews: {
            type: Array,
            required: true
        }
    }
})

export default mongoose.models.Product || mongoose.model("Product", productSchema);