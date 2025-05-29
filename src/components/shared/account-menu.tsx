"use client"

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

//icons
import account from "@/../public/icons/profile.png"
import { useRouter } from "next/navigation"

const Menu = () => {

    const [open, setOpen] = useState(false)

    const router = useRouter();

    const isLoggedIn = false;

    const handleProfile = ()=> {
        if (!isLoggedIn) {
            router.push("/login")
        } else {
            setOpen((prev) => !prev)
        }
    }

    return (
        <div className="">
            <div className="flex gap-2 items-center">
                <Image src={account} alt="Menu icon" width={35} height={35} className="brightness-0 invert cursor-pointer" onClick={handleProfile}/>
            </div>
                {
                    open && (
                        <div className="absolute bg-black rounded-md p-4 top-16 right-2 border-gray-800 border-2">
                            <Link href="/account">Account</Link>
                            <div className="mt-2 cursor-pointer">Logout</div>
                        </div>
                    )
                }
        </div>
    )
}

export default Menu