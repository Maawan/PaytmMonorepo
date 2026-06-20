"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans flex">

      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[42%] bg-emerald-500 px-12 py-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10.5 6H14.5L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1.5 6H5.5L8 1Z" fill="white" />
            </svg>
          </div>
          <span className="text-white text-lg font-medium tracking-tight">PayFlow</span>
        </div>

        {/* Wallet preview card */}
        <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Your wallet</p>
          <p className="text-white text-3xl font-medium tracking-tight mb-5">₹12,450<span className="text-white/40 text-xl">.00</span></p>
          <div className="space-y-3">
            {[
              { initials: "RK", name: "Rahul Kumar", time: "Today, 10:42 AM", amount: "+₹500", positive: true },
              { initials: "AP", name: "Asha Patel", time: "Yesterday", amount: "−₹250", positive: false },
              { initials: "🏦", name: "HDFC Bank", time: "Mon, 9:00 AM", amount: "+₹5,000", positive: true },
            ].map((txn) => (
              <div key={txn.name} className="flex items-center justify-between border-t border-white/10 pt-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">
                    {txn.initials}
                  </div>
                  <div>
                    <p className="text-white text-xs font-medium">{txn.name}</p>
                    <p className="text-white/40 text-xs">{txn.time}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium ${txn.positive ? "text-white" : "text-white/60"}`}>{txn.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-xs">© 2025 PayFlow. All rights reserved.</p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10.5 6H14.5L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1.5 6H5.5L8 1Z" fill="white" />
              </svg>
            </div>
            <span className="text-base font-medium">PayFlow</span>
          </div>

          <h1 className="text-2xl font-medium tracking-tight mb-1">Welcome back</h1>
          <p className="text-gray-400 text-sm mb-8">Sign in to access your wallet.</p>

          {/* Google button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors mb-6">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-xs text-gray-400">or sign in with email</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <form
            className="space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              setLoading(true);
              const res = await signIn("credentials", {
                redirect: false,
                email,
                password,
              });

              setLoading(false);

              if (res && (res as any).ok) {
                router.replace("/");
              } else {
                const error = res && (res as any).error ? (res as any).error : "Sign in failed";
                alert(error);
              }
            }}
          >
            {/* Email or phone */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Email or phone number</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@example.com or 98765 43210"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-gray-600">Password</label>
                <a href="/forgot-password" className="text-xs text-emerald-600 hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all pr-10"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
                    <circle cx="8" cy="8" r="2" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2.5 pt-1">
              <input type="checkbox" id="remember" className="accent-emerald-500" />
              <label htmlFor="remember" className="text-xs text-gray-400">Keep me signed in</label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${loading ? "opacity-60" : "bg-emerald-500 hover:bg-emerald-600"} transition-colors text-white text-sm font-medium py-3.5 rounded-xl mt-2`}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* OTP option */}
          <div className="mt-4">
            <button className="w-full border border-gray-200 hover:border-gray-300 transition-colors text-gray-600 text-sm font-medium py-3.5 rounded-xl flex items-center justify-center gap-2">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="1" width="11" height="13" rx="2" />
                <path d="M5 11h5M5 8h2" />
              </svg>
              Sign in with OTP instead
            </button>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="/signup" className="text-emerald-600 font-medium hover:underline">Create one free</a>
          </p>
        </div>
      </div>
    </main>
  );
}