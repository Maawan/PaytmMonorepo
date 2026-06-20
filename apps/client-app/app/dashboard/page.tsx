import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import Link from "next/link";
export default async function dashboard() {
    const session = await getServerSession(authOptions);
    return (
        <div>
            Dashboard 
            {session ? "User logged in" : "Invalid user "}
            {JSON.stringify(session)}
            <Link href="/logout" className="text-sm text-gray-900 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">Logout</Link>
        </div>
    )
}