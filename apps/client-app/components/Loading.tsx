"use client"

import { loadingAtom } from "@/store/atoms/LoadingAtom"
import { useAtomValue } from "jotai"
import { useEffect } from "react"
import toast from "react-hot-toast"

export const Loading = () => {
    const isLoading = useAtomValue(loadingAtom)

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isLoading])

    

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300">
            <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-gray-300 bg-white/10 px-10 py-9 shadow-2xl backdrop-blur-xl">
                {/* Spinner */}
                <div className="relative h-14 w-14">
                    <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 border-r-emerald-400 animate-spin"></div>
                </div>

                {/* Label */}
                <div className="flex flex-col items-center gap-1">
                    <p className="text-sm font-medium tracking-wide text-white/90">
                        Please wait
                    </p>
                    <p className="text-xs text-white/50">
                        Processing your request…
                    </p>
                </div>
            </div>
        </div>
    )
}