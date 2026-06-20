export default function SignUp() {
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

        <div>
          <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-6">Why PayFlow?</p>
          <div className="space-y-5">
            {[
              { icon: "M3 10h14M11 4l6 6-6 6", label: "Instant transfers", desc: "Send money in under 3 seconds" },
              { icon: "M1 9h18M6 13h2M12 13h2", label: "Any Indian bank", desc: "Link your bank via UPI or NEFT" },
              { icon: "M10 1l2.5 5.5H18l-4.5 3.5 1.5 5.5L10 12.5 5 15.5l1.5-5.5L2 6.5h5.5L10 1Z", label: "Zero fees", desc: "We never charge for transfers" },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                    <path d={icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{label}</p>
                  <p className="text-white/60 text-sm">{desc}</p>
                </div>
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

          <h1 className="text-2xl font-medium tracking-tight mb-1">Create your account</h1>
          <p className="text-gray-400 text-sm mb-8">Start sending and receiving money instantly.</p>

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
            <span className="text-xs text-gray-400">or sign up with email</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Full name</label>
              <input
                type="text"
                placeholder="Rahul Kumar"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="rahul@example.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Contact number</label>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 border border-gray-200 rounded-xl px-3 py-3 text-sm text-gray-500 shrink-0">
                  <span>🇮🇳</span>
                  <span>+91</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M2 4l3 3 3-3" />
                  </svg>
                </div>
                <input
                  type="tel"
                  placeholder="98765 43210"
                  className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Min. 8 characters"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-50 transition-all pr-10"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z" />
                    <circle cx="8" cy="8" r="2" />
                  </svg>
                </button>
              </div>
              {/* Password strength */}
              <div className="flex gap-1 mt-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? "bg-emerald-400" : "bg-gray-100"}`}></div>
                ))}
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2.5 pt-1">
              <input type="checkbox" id="terms" className="mt-0.5 accent-emerald-500" />
              <label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed">
                I agree to PayFlow's{" "}
                <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white text-sm font-medium py-3.5 rounded-xl mt-2"
            >
              Create account
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Already have an account?{" "}
            <a href="/login" className="text-emerald-600 font-medium hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </main>
  );
}