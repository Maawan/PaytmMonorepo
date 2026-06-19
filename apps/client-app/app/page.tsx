export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">

      {/* Nav */}
      <nav className="max-w-7xl mx-auto px-5 md:px-10 py-4 md:py-5 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10.5 6H14.5L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1.5 6H5.5L8 1Z" fill="white" />
            </svg>
          </div>
          <span className="text-lg font-medium tracking-tight">PayFlow</span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">How it works</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Security</a>
          <a href="#" className="text-sm text-gray-900 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">Sign in</a>
          <a href="#" className="text-sm text-white bg-emerald-500 rounded-lg px-4 py-2 hover:bg-emerald-600 transition-colors font-medium">Get started</a>
        </div>

        {/* Mobile nav — just two buttons */}
        <div className="flex md:hidden items-center gap-2">
          <a href="#" className="text-sm text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5">Sign in</a>
          <a href="#" className="text-sm text-white bg-emerald-500 rounded-lg px-3 py-1.5 font-medium">Get started</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 pt-14 md:pt-24 pb-14 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full mb-5 md:mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
            Zero fees on all transfers
          </div>
          <h1 className="text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight mb-5 md:mb-6">
            Your money,<br />
            <span className="text-emerald-500">always moving.</span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-md">
            Add money from any bank, send to anyone instantly, withdraw whenever you want. One wallet, no friction.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="bg-emerald-500 hover:bg-emerald-600 transition-colors text-white text-sm font-medium px-5 md:px-6 py-3 md:py-3.5 rounded-xl">
              Create free wallet
            </a>
            <a href="#" className="border border-gray-200 hover:border-gray-300 transition-colors text-gray-700 text-sm font-medium px-5 md:px-6 py-3 md:py-3.5 rounded-xl flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6.5" stroke="currentColor" />
                <path d="M5.5 4.5L9.5 7L5.5 9.5V4.5Z" fill="currentColor" />
              </svg>
              Watch demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 md:flex md:items-center md:gap-8 gap-4 mt-10 md:mt-12 pt-8 border-t border-gray-100">
            <div>
              <div className="text-xl md:text-2xl font-medium">2M+</div>
              <div className="text-xs md:text-sm text-gray-400 mt-0.5">Active users</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-100"></div>
            <div>
              <div className="text-xl md:text-2xl font-medium">₹0</div>
              <div className="text-xs md:text-sm text-gray-400 mt-0.5">Transfer fees</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-100"></div>
            <div>
              <div className="text-xl md:text-2xl font-medium">&lt;3s</div>
              <div className="text-xs md:text-sm text-gray-400 mt-0.5">Transfer time</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-100"></div>
            <div>
              <div className="text-xl md:text-2xl font-medium">256‑bit</div>
              <div className="text-xs md:text-sm text-gray-400 mt-0.5">Encryption</div>
            </div>
          </div>
        </div>

        {/* Wallet card mockup */}
        <div className="relative mt-4 md:mt-0">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 md:p-6">
            {/* Balance */}
            <div className="flex items-start justify-between mb-5 md:mb-6">
              <div>
                <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">Wallet balance</p>
                <p className="text-3xl md:text-4xl font-medium tracking-tight">₹12,450<span className="text-gray-300 text-xl md:text-2xl">.00</span></p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="4" width="16" height="11" rx="2" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M1 8h16" stroke="#10b981" strokeWidth="1.5" />
                  <rect x="12" y="10.5" width="3" height="2" rx="0.5" fill="#10b981" />
                </svg>
              </div>
            </div>

            {/* Quick actions */}
            <div className="grid grid-cols-3 gap-2 mb-5 md:mb-6">
              {[
                { label: "Add money", icon: "M9 1v16M1 9h16" },
                { label: "Send", icon: "M2 9h14M10 3l6 6-6 6" },
                { label: "Withdraw", icon: "M9 1v16M15 13l-6 6-6-6" },
              ].map(({ label, icon }) => (
                <button key={label} className="flex flex-col items-center gap-1.5 bg-white rounded-xl py-3 md:py-3.5 border border-gray-100 hover:border-gray-200 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#374151" strokeWidth="1.5" strokeLinecap="round">
                    <path d={icon} />
                  </svg>
                  <span className="text-xs text-gray-600">{label}</span>
                </button>
              ))}
            </div>

            {/* Transactions */}
            <div>
              <p className="text-xs text-gray-400 font-medium mb-3">Recent activity</p>
              <div className="space-y-1">
                {[
                  { initials: "RK", name: "Rahul Kumar", time: "Today, 10:42 AM", amount: "+₹500", positive: true, bg: "bg-emerald-50", text: "text-emerald-700" },
                  { initials: "AP", name: "Asha Patel", time: "Yesterday, 6:15 PM", amount: "−₹250", positive: false, bg: "bg-orange-50", text: "text-orange-700" },
                  { initials: "🏦", name: "Added from HDFC Bank", time: "Mon, 9:00 AM", amount: "+₹5,000", positive: true, bg: "bg-blue-50", text: "text-blue-700" },
                ].map((txn) => (
                  <div key={txn.name} className="flex items-center justify-between py-2.5 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${txn.bg} ${txn.text} flex items-center justify-center text-xs font-medium shrink-0`}>
                        {txn.initials}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-800">{txn.name}</p>
                        <p className="text-xs text-gray-400">{txn.time}</p>
                      </div>
                    </div>
                    <span className={`text-sm font-medium ml-3 shrink-0 ${txn.positive ? "text-emerald-600" : "text-gray-700"}`}>
                      {txn.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating notification — hidden on small screens to avoid overflow */}
          <div className="hidden sm:flex absolute -top-4 -right-4 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-800">Money received!</p>
              <p className="text-xs text-gray-400">₹500 from Rahul</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-14 md:py-20 border-t border-gray-100">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-emerald-600 text-sm font-medium mb-3">Everything you need</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Built for how you use money</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <rect x="1" y="4" width="18" height="13" rx="2" />
                  <path d="M1 9h18M6 13h2M12 13h2" />
                </svg>
              ),
              label: "Add from bank",
              desc: "Link any Indian bank. Top up via UPI or NEFT in seconds.",
              color: "text-emerald-600 bg-emerald-50",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M3 10h14M11 4l6 6-6 6" />
                </svg>
              ),
              label: "Send instantly",
              desc: "Transfer to any PayFlow user. No fees, no delays, ever.",
              color: "text-violet-600 bg-violet-50",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M10 3v14M4 14l6 6 6-6" />
                </svg>
              ),
              label: "Withdraw anytime",
              desc: "Move your balance back to your bank whenever you want.",
              color: "text-orange-600 bg-orange-50",
            },
            {
              icon: (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M10 1l2.5 5.5H18l-4.5 3.5 1.5 5.5L10 12.5 5 15.5l1.5-5.5L2 6.5h5.5L10 1Z" />
                </svg>
              ),
              label: "Bank-grade security",
              desc: "256-bit encryption and 2FA on every transaction.",
              color: "text-blue-600 bg-blue-50",
            },
          ].map(({ icon, label, desc, color }) => (
            <div key={label} className="border border-gray-100 rounded-2xl p-5 md:p-6 hover:border-gray-200 transition-colors">
              <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mb-4`}>
                {icon}
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">{label}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-10 md:py-20">
        <div className="bg-emerald-500 rounded-2xl md:rounded-3xl px-8 md:px-16 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
          <div>
            <h2 className="text-2xl md:text-4xl font-medium text-white tracking-tight mb-2 md:mb-3">Ready to move your money?</h2>
            <p className="text-emerald-100 text-base md:text-lg">Join 2 million users. It takes under a minute.</p>
          </div>
          <a href="#" className="bg-white text-emerald-600 font-medium text-sm px-7 py-3.5 md:px-8 md:py-4 rounded-xl hover:bg-emerald-50 transition-colors whitespace-nowrap">
            Create your wallet →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-5 md:px-10 py-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L10.5 6H14.5L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1.5 6H5.5L8 1Z" fill="white" />
            </svg>
          </div>
          <span className="text-sm font-medium">PayFlow</span>
        </div>
        <p className="text-xs text-gray-400">© 2025 PayFlow. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Support"].map((l) => (
            <a key={l} href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">{l}</a>
          ))}
        </div>
      </footer>

    </main>
  );
}