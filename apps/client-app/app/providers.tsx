"use client"

import { Loading } from "@/components/Loading"
import { RecoilRoot } from "recoil"

export default function Providers({children} : { children : React.ReactNode}){
    return (
        <>
        <Loading />
        {children}
            </>
    )
}