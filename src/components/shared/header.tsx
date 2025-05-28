//chadcn 
import { Button } from "@/components/ui/button"

import Image from "next/image"
import logo from "@/../public/assets/logo.jpg"
import Link from "next/link"
const Header = () => {
    return (
        <div className="flex items-center  justify-centergap-10 p-3 border-b-double border-b-blue-950 border-b-8">
            <div className="flex items-center gap-4">
                <Link href="/" className="w-[10%] h-[10%]" >
                    <Image src={logo} className="rounded-3xl" alt="Minus gaming logo"  loading="eager"/>
                </Link>
                <hr className="bg-blue-950 w-2 h-16 m-0 p-0 border-0" />
            </div>
            <div className="gap-20 flex">
                <Button className="bg-white text-black font-extrabold hover:scale-150 text-3xl">
                    <Link href="/pre-build">
                        Pre Builds
                    </Link>
                </Button>
                <Button className="bg-white text-black font-extrabold hover:scale-150  text-3xl">
                    <Link href="/parts">Parts</Link>
                </Button>
                <Button className="bg-white text-black font-extrabold hover:scale-150  text-3xl">
                    <Link href="/contact">Contact</Link>
                </Button>
            </div>
        </div>
    )
}

export default Header