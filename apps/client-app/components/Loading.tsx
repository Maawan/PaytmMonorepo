"use client"

import { loadingAtom } from "@/store/atoms/LoadingAtom"
import { useAtomValue } from "jotai"
import { useEffect } from "react"

export const Loading = () => {
    const isLoading = useAtomValue(loadingAtom)
    // useEffect(() => {
    //     if (isLoading) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "";
    //     }

    //     // cleanup in case component unmounts while loading is still true
    //     return () => {
    //         document.body.style.overflow = "";
    //     };
    // },[isLoading])
    return (
        <div className={`bg-red-500 border-2 border-red-500 fixed  top-0 left-0 w-full min-h-screen text-black text-4xl p-10 z-[9999] ${!isLoading && "hidden"}`}>
            frefff
            fre
            rfre
        </div>
    )
}