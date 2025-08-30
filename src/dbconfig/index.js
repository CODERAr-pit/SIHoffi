import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  console.log("⚠️ Please define the MONGO_URI environment variable in .env")
}

let isConnected = false

export default async function connect() {
  if (isConnected) {
    console.log("✅ Using existing MongoDB connection")
    return
  }

  try {
    const db = await mongoose.connect(MONGODB_URI)

    isConnected = db.connections[0].readyState === 1
    console.log("✅ MongoDB connected successfully")
  } catch (error) {
    console.error("❌ MongoDB connection error:", error)
  }
}
