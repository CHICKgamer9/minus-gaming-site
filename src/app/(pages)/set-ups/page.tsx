import Image from "next/image"
import Link from "next/link"

//imgs
import basicSetUp from "@/../public/img/setups/Basic setup.jpg"
import ProSetUp from "@/../public/img/setups/pro/pro-main.jpg"

const ProductList = () => {
    return (
        <div className="p-4 px-7 flex-col flex gap-5">
            <h1 className="text-6xl">Take your pick:</h1>
            <br />
            <div className="flex gap-10 ">
                <Link href="/set-ups/Starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/Pro" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={ProSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Pro Setup</p>
                    <p className="text-[var(--text)]">For Sirus Gamers</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
            </div>
            <div className="flex gap-10">
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
                <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-[var(--background)] rounded-b-3xl cursor-pointer">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className=" shadow-2xl h-68 w-80" loading="lazy"/>
                    <p className="text-[var(--text)]">Starter Setup</p>
                    <p className="text-[var(--text)]">The Basics</p>
                </Link>
            </div>
        </div>
    )
}

export default ProductList