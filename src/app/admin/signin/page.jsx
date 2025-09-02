"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/app/api";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
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
        username: username.trim(),
        password,
      });

      if (res.data.token) {
        if (remember) {
          localStorage.setItem("token", res.data.token);
        }
        setSuccess("Login successful!");
        setTimeout(() => {
          router.push("/admin/dashboard");
        }, 800);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 flex items-center justify-center px-4">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-300/30 rounded-full blur-2xl" />
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-indigo-300/30 rounded-full blur-2xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
            </svg>
          </div>
          <h1 className="mt-3 text-2xl font-bold text-gray-900">Admin Sign In</h1>
          <p className="text-sm text-gray-600">Access your dashboard to manage the portal</p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-blue-200/70 bg-white/80 backdrop-blur-sm shadow-xl">
          <form className="p-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="w-full px-3 py-2 rounded-lg border border-blue-200 bg-white/70 text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Enter admin username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 pr-10 rounded-lg border border-blue-200 bg-white/70 text-gray-900 placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 px-3 text-xs text-blue-600 hover:text-blue-700"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="accent-blue-600" checked={remember} onChange={(e)=> setRemember(e.target.checked)} />
                Remember me
              </label>
              <button type="button" className="text-sm text-blue-700 hover:underline" onClick={()=> alert('Please contact support to reset your password.')}>Forgot password?</button>
            </div>

            {error && (
              <div className="rounded-lg border border-red-200 bg-red-50 text-red-700 text-sm px-3 py-2">{error}</div>
            )}
            {success && (
              <div className="rounded-lg border border-green-200 bg-green-50 text-green-700 text-sm px-3 py-2">{success}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Helper */}
        <p className="mt-4 text-center text-xs text-gray-500">Having trouble signing in? Email support@scholar-portal.gov</p>
      </div>
    </div>
  );
}
