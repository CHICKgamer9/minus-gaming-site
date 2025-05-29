"use client"

import { useState } from "react"

import Image from "next/image"
import Link from "next/link"

//icons
import menu from "@/../public/icons/menu.png"
import cart from "@/../public/icons/cart.png"

const Menu = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className="hidden max-md:flex">
            <div className="flex gap-2">
                <Link href="/cart">
                    <Image src={cart} alt="cart icon" width={28} height={28} className="brightness-0 invert cursor-pointer"/>
                </Link>
                <Image src={menu} alt="Menu icon" width={28} height={28} className="brightness-0 invert cursor-pointer" onClick={() => setOpen((prev) => !prev)}/>
            </div>
                {
                    open && (
                        <div className="absolute bg-black left-0 top-20 w-full h-[calc(100vh-80px)] z-40 flex flex-col justify-center gap-8 text-center text-5xl">
                            <Link href="/">Home</Link>
                            <Link href="/pre-build">Pre Builds</Link>
                            <Link href="/parts">Parts</Link>
                            <Link href="/contact">Contact</Link>
                        </div>
                    )
                }
        </div>
    )
}

export default Menu