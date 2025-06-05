'use client'

import { Playfair_Display } from "next/font/google";

import { useEffect, useState } from 'react'
//chadcn 
import { Button } from "@/components/ui/button"

//components
import Menu from "./menu"
import Account from "./account-menu"
import ThemeSwitcher from './small/theme-switcher'

//next
import Image from "next/image"
import Link from "next/link"

//icons
import logo from "@/../public/assets/logo.jpg"
import cart from "@/../public/icons/cart.png"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});


const Header = () => {
    const [header, setHeader] = useState(false)

    const scrollHeader = () =>{
        if(window.scrollY >= 20) {
            setHeader(true)
            console.log(header);
        } else {
            setHeader(false)
            console.log(header);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',scrollHeader)

        return ()=>{
            window.addEventListener('scroll',scrollHeader)
        }
    }, [])


    return (
        <div className={ header ? 
            //scrolled
            "sticky top-0 z-100 bg-[var(--header-scrolled)] flex items-center justify-between gap-10 p-3 border-b-double border-b-[var(--second)] border-b-8 h-20 w-full backdrop-blur-lg font-[var(--font-playfair)]" 
                : 
            //normel
            "sticky bg-[var(--header)] flex items-center justify-between gap-10 p-3 border-b-double border-b-[var(--second)] border-b-8 h-20 w-full backdrop-blur-lg font-[var(--font-playfair)]"
        }>

            <div className="flex items-center gap-4 md:pr-4">
                <Link href="/" className="w-18" >
                    <Image src={logo} className="rounded-3xl" alt="Minus gaming logo"  loading="eager"/>
                </Link>
                <hr className="bg-[var(--second)] w-2 h-20 m-0 p-0 border-0 hidden md:flex round" />
            </div>
            <Menu />
            <div className={`gap-5 lg:gap-20 flex max-md:hidden ${playfair.className}`}>
                <div className="font-playfair flex gap-5">
                    <Button className="bg-white text-black font-bold hover:scale-150 text-3xl btn-shadow">
                    <Link href="/pcs">PCs</Link>
                    </Button>
                    <Button className="bg-white text-black font-bold hover:scale-150 text-3xl btn-shadow">
                    <Link href="/parts">Parts</Link>
                    </Button>
                    <Button className="bg-white text-black font-bold hover:scale-150 text-3xl btn-shadow">
                    <Link href="/contact">Contact</Link>
                    </Button>
                    <Button className="bg-white text-black font-bold hover:scale-150 text-3xl btn-shadow">
                    <Link href="/set-ups">Setups</Link>
                    </Button>
                </div>
                <div className=" flex justify-center items-center">
                    <ThemeSwitcher/>
                </div>
                <div className="hidden md:flex justify-center items-center md:gap-1 lg:gap-4">
                    <Link href="/cart">
                        <Image src={cart} alt="cart icon" width={35} height={35} className="dark-img"/>
                    </Link>
                    <Account  />
                </div>
            </div>
        </div>
    )
}

export default Header