import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth";
import { Logout } from "@/components/Logout";

const stats = [
  { label: "Received", value: "₹48,200", sub: "↑ 8.2% vs last month", positive: true, icon: "↓" },
  { label: "Sent",     value: "₹12,440", sub: "↑ 3.1% vs last month", positive: false, icon: "↑" },
  { label: "Pending",  value: "₹3,200",  sub: "2 transactions",        positive: null,  icon: "⏱" },
  { label: "This week",value: "₹6,750",  sub: "+₹1,200 vs last week",  positive: true,  icon: "📅" },
];

const quickActions = [
  { label: "Send",     bg: "bg-emerald-50", color: "text-emerald-600", svg: <path d="M3 12h18M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
  { label: "Request",  bg: "bg-violet-50",  color: "text-violet-600",  svg: <path d="M21 12H3M9 6l-6 6 6 6"  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/> },
  { label: "Add money",bg: "bg-orange-50",  color: "text-orange-600",  svg: <><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
  { label: "Pay bills",bg: "bg-blue-50",    color: "text-blue-600",    svg: <><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 10h18M8 15h2M14 15h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></> },
];

const weekBars = [
  { day: "Mon", pct: 45 },
  { day: "Tue", pct: 70 },
  { day: "Wed", pct: 30 },
  { day: "Thu", pct: 85 },
  { day: "Fri", pct: 55 },
  { day: "Sat", pct: 65, active: true },
  { day: "Sun", pct: 20 },
];

const categories = [
  { name: "Food & dining", pct: 58, amt: "₹4,200", color: "bg-emerald-500" },
  { name: "Shopping",      pct: 52, amt: "₹3,800", color: "bg-orange-400"  },
  { name: "Transport",     pct: 29, amt: "₹2,100", color: "bg-violet-500"  },
  { name: "Utilities",     pct: 18, amt: "₹1,340", color: "bg-blue-500"    },
  { name: "Entertainment", pct: 14, amt: "₹1,000", color: "bg-pink-400"    },
];

const transactions = [
  { initials: "RK", name: "Rahul Kumar",        time: "Today, 10:42 AM",    amount: "+₹5,000",  positive: true,  status: "Received", iconBg: "bg-emerald-50", iconText: "text-emerald-700" },
  { initials: "SW", name: "Swiggy Order",        time: "Today, 8:15 AM",     amount: "−₹480",    positive: false, status: "Sent",     iconBg: "bg-orange-50",  iconText: "text-orange-700"  },
  { initials: "HD", name: "Added from HDFC Bank",time: "Yesterday, 9:00 AM", amount: "+₹42,000", positive: true,  status: "Received", iconBg: "bg-blue-50",    iconText: "text-blue-700"    },
  { initials: "EB", name: "Electricity bill",    time: "22 Jun",             amount: "₹1,340",   positive: null,  status: "Pending",  iconBg: "bg-red-50",     iconText: "text-red-700"     },
  { initials: "AP", name: "Asha Patel",          time: "21 Jun",             amount: "−₹2,500",  positive: false, status: "Sent",     iconBg: "bg-orange-50",  iconText: "text-orange-700"  },
];

const navItems = [
  { label: "Dashboard",    active: true  },
  { label: "Transactions", active: false },
  { label: "Wallet",       active: false },
  { label: "Send money",   active: false },
  { label: "Pay bills",    active: false },
];

const insightItems = [
  { label: "Analytics",  active: false },
  { label: "Statements", active: false },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Received: "bg-emerald-50 text-emerald-700",
    Sent:     "bg-red-50 text-red-700",
    Pending:  "bg-yellow-50 text-yellow-700",
  };
  return (
    <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${styles[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const userName = session.user?.name ?? "there";
  const firstName = userName.split(" ")[0];

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">

      {/* ── Sidebar ── */}
      <aside className="hidden md:flex w-56 flex-col bg-white border-r border-gray-100 flex-shrink-0">
        <div className="p-5 flex-1">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L10.5 6H14.5L11 9.5L12.5 14.5L8 11.5L3.5 14.5L5 9.5L1.5 6H5.5L8 1Z" fill="white"/>
              </svg>
            </div>
            <span className="text-base font-medium tracking-tight text-gray-900">PayFlow</span>
          </div>

          {/* Nav */}
          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase mb-2 px-1">Menu</p>
          <nav className="flex flex-col gap-0.5 mb-4">
            {navItems.map(({ label, active }) => (
              <a
                key={label}
                href="#"
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm transition-colors ${
                  active
                    ? "bg-emerald-50 text-emerald-700 font-medium"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="h-px bg-gray-100 my-3" />

          <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase mb-2 px-1">Insights</p>
          <nav className="flex flex-col gap-0.5 mb-4">
            {insightItems.map(({ label }) => (
              <a key={label} href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="h-px bg-gray-100 my-3" />

          <nav className="flex flex-col gap-0.5">
            {["Settings", "Support"].map((label) => (
              <a key={label} href="#" className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                {label}
              </a>
            ))}
            <Logout />
          </nav>
        </div>

        {/* User */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
            <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-xs font-medium text-emerald-700 flex-shrink-0">
              {userName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{userName}</p>
              <p className="text-xs text-gray-400">Personal account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Top bar */}
        <header className="flex items-center justify-between px-5 md:px-6 py-3.5 bg-white border-b border-gray-100 flex-shrink-0">
          <div>
            <p className="text-sm font-medium text-gray-900">Good morning, {firstName}</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </button>
            <button className="w-8 h-8 rounded-xl border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-xs font-medium text-emerald-700">
              {userName.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">

          {/* Balance card */}
          <div className="bg-emerald-500 rounded-2xl p-5 md:p-6 mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-xs text-emerald-100 uppercase tracking-widest mb-1">Wallet balance</p>
              <p className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-3">
                ₹1,24,580<span className="text-emerald-300 text-xl md:text-2xl">.00</span>
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/15 text-white text-xs px-3 py-1 rounded-full"><span className="text-emerald-200 mr-1">In</span>₹48,200</span>
                <span className="bg-white/15 text-white text-xs px-3 py-1 rounded-full"><span className="text-emerald-200 mr-1">Out</span>₹12,440</span>
                <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-full">↑ 12% this month</span>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["Add money", "Send", "Withdraw"].map((label) => (
                <button key={label} className="bg-white/15 hover:bg-white/25 transition-colors text-white text-xs font-medium px-4 py-2 rounded-xl border-none">
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {stats.map(({ label, value, sub, positive }) => (
              <div key={label} className="bg-white border border-gray-100 rounded-2xl p-4">
                <p className="text-xs text-gray-400 mb-1.5">{label}</p>
                <p className="text-xl font-medium text-gray-900 tracking-tight mb-1">{value}</p>
                <p className={`text-[11px] ${positive === true ? "text-emerald-600" : positive === false ? "text-red-500" : "text-gray-400"}`}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Quick actions */}
          <div className="grid grid-cols-4 gap-2.5 mb-4">
            {quickActions.map(({ label, bg, color, svg }) => (
              <button key={label} className="bg-white border border-gray-100 hover:border-gray-200 rounded-2xl py-4 flex flex-col items-center gap-2 transition-colors">
                <div className={`w-9 h-9 rounded-full ${bg} ${color} flex items-center justify-center`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">{svg}</svg>
                </div>
                <span className="text-xs text-gray-500">{label}</span>
              </button>
            ))}
          </div>

          {/* Chart + categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">

            {/* Weekly spending bars */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-900">Weekly spending</p>
                <p className="text-xs text-gray-400">Jun 2026</p>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {weekBars.map(({ day, pct, active }) => (
                  <div key={day} className="flex flex-col items-center gap-1 flex-1">
                    <div
                      className={`w-full rounded-t-md ${active ? "bg-emerald-500" : "bg-gray-100"}`}
                      style={{ height: `${pct}%` }}
                    />
                    <span className="text-[10px] text-gray-400">{day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-900">Top categories</p>
                <a href="#" className="text-xs text-emerald-600">Details →</a>
              </div>
              <div className="flex flex-col gap-3">
                {categories.map(({ name, pct, amt, color }) => (
                  <div key={name} className="flex items-center gap-2.5">
                    <span className="text-xs text-gray-500 w-28 flex-shrink-0">{name}</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
                      <div className={`h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-xs font-medium text-gray-900 w-14 text-right flex-shrink-0">{amt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-900">Recent activity</p>
              <a href="#" className="text-xs text-emerald-600">View all →</a>
            </div>
            <div className="flex flex-col">
              {transactions.map(({ initials, name, time, amount, positive, status, iconBg, iconText }, i) => (
                <div key={name} className={`flex items-center gap-3 py-2.5 ${i !== 0 ? "border-t border-gray-50" : ""}`}>
                  <div className={`w-9 h-9 rounded-full ${iconBg} ${iconText} flex items-center justify-center text-xs font-medium flex-shrink-0`}>
                    {initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs text-gray-400">{time}</span>
                      <StatusPill status={status} />
                    </div>
                  </div>
                  <span className={`text-sm font-medium ml-2 flex-shrink-0 ${positive === true ? "text-emerald-600" : positive === false ? "text-gray-700" : "text-gray-400"}`}>
                    {amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </main>

        {/* Mobile bottom nav */}
        <nav className="md:hidden flex border-t border-gray-100 bg-white">
          {["Home", "Transfers", "Wallet", "Analytics", "Profile"].map((label, i) => (
            <a key={label} href="#" className={`flex-1 flex flex-col items-center gap-1 py-3 text-[10px] ${i === 0 ? "text-emerald-600" : "text-gray-400"}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}