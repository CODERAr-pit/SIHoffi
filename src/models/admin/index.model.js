import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            unique: true
        },
        password: {
            type: String,
            // select: false,
            required: [true, "password is required"]
        }
    },
    {
        timestamps: true
    }

)

export default mongoose.models.User || mongoose.model("User", userSchema)
