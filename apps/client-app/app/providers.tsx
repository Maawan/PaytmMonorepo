"use client"
import { Loading } from "@/components/Loading"
import { Toaster } from "react-hot-toast"

export default function Providers({children} : { children : React.ReactNode}){
    return (
        <>
            <Loading />
                {children}
            <Toaster />
        </>
    )
}