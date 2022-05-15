import mongoose from "mongoose";

const MONGODB_URI = process.env.DB_LOCAL_URI || 'mongodb+srv://swann:swann@cluster0.ve2px.mongodb.net/next_js?retryWrites=true&w=majority'

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside ..env.local'
    )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function databaseConnection() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        }

        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise
    return cached.conn
}


export default databaseConnection;