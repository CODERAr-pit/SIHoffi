import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import connect from "@/dbconfig";
import User from "@/models/admin/index.model";

// Connect to database
connect();

export async function POST(req) {
  try {
    const body = await req.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Find user in database
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    // Compare hashed password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username
      },
    });
  } catch (error) {
    console.error("Signin error: ", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
