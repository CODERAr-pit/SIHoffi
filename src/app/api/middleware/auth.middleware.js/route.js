import jwt from "jsonwebtoken";
import User from "@/models/admin/index.model";

export const auth = async (req, res, next) => {
    const header = req.headers.authorization || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : null;
    if (!token) return res.status(400).json({ message: "No token" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.id).lean()
        if (!user) return res.status(400).json({ message: "Invalid token" })
        req.user = user
        next()
    } catch (e) {
        return res.status(500).json({ message: "Token error" })
    }
}