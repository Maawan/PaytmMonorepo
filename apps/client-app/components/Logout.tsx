"use client"

import { signOut } from "next-auth/react"
import { useEffect } from "react"

export const Logout = () => { 
    
    return (
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl  text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors cursor-pointer" onClick={(e) => {
            signOut({
                callbackUrl: "/"
            });
        }}>
                Logout
        </div>
    )
}