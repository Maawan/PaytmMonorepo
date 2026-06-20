"use client"
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function logout() {
    const router = useRouter();
    useEffect(() => {
        signOut().then((res) => {
            router.push("/");
        }).catch((err) => {
            alert("Something went wrong")
        })

    },[])   
    return (<>
    </>);
}