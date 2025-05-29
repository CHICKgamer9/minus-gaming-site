//chadcn 
import { Button } from "@/components/ui/button"

//components
import Menu from "./menu"
import Account from "./account-menu"

//next
import Image from "next/image"
import Link from "next/link"

//icons
import logo from "@/../public/assets/logo.jpg"
import cart from "@/../public/icons/cart.png"

const Header = () => {
    return (
        <div className="flex items-center  justify-between relative gap-10 p-3 border-b-double border-b-blue-950 border-b-8 h-20">
            <div className="flex items-center gap-4 md:pr-4">
                <Link href="/" className="w-18" >
                    <Image src={logo} className="rounded-3xl" alt="Minus gaming logo"  loading="eager"/>
                </Link>
                <hr className="bg-blue-950 w-2 h-16 m-0 p-0 border-0 hidden md:flex" />
            </div>
            <Menu />
            <div className="gap-5 lg:gap-20 flex max-md:hidden">
                <Button className="bg-white text-black font-extrabold hover:scale-150 text-3xl">
                    <Link href="/pcs">Pc&apos;s</Link>
                </Button>
                <Button className="bg-white text-black font-extrabold hover:scale-150  text-3xl">
                    <Link href="/parts">Parts</Link>
                </Button>
                <Button className="bg-white text-black font-extrabold hover:scale-150  text-3xl">
                    <Link href="/contact">Contact</Link>
                </Button>
                <Button className="bg-white text-black font-extrabold hover:scale-150  text-3xl">
                    <Link href="/set-ups">Set Ups</Link>
                </Button>
                <div className="hidden md:flex justify-center items-center md:gap-1 lg:gap-4">
                    <Link href="/cart">
                        <Image src={cart} alt="cart icon" width={35} height={35} className="brightness-0 invert cursor-pointer"/>
                    </Link>
                    <Account  />
                </div>
            </div>
        </div>
    )
}

export default Header