"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/app/api";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await API.post("/adminSignin", {
        username,
        password,
      });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setSuccess("✅ Login successful!");
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 1200);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600 relative">
      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-blue-600 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-500 rounded-full opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-30"></div>
        </div>
      </div>

      {/* Card */}
      <div className="relative w-full max-w-sm p-8 bg-blue-500/80 rounded-xl shadow-lg backdrop-blur-sm">
        <div className="flex justify-center mb-6">
          {/* Icon similar to image */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
            />
          </svg>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-blue-400/30 placeholder-white text-white outline-none border border-white/40 focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-blue-400/30 placeholder-white text-white outline-none border border-white/40 focus:ring-2 focus:ring-white"
          />

          {error && (
            <p className="bg-red-500/80 text-white text-sm text-center py-2 rounded-lg">
              {error}
            </p>
          )}

          {success && (
            <p className="bg-green-500/80 text-white text-sm text-center py-2 rounded-lg">
              {success}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-white text-blue-600 font-semibold shadow hover:scale-101 transition-transform disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
}
