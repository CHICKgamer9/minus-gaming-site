import Image from "next/image"
import Link from "next/link"

//imgs
import basicSetUp from "@/../public/img/setups/Basic setup.jpg"

const ProductList = () => {
    return (
        <div className="p-4 px-7">
            <h1 className="text-6xl">Take your pick:</h1>
            <br />
            <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-black rounded-b-3xl cursor-pointer">
                <Image src={basicSetUp} alt="parts of the set up on white background" className="h-68 w-80" loading="lazy"/>
                <p>Starter Setup</p>
                <p>The Basics</p>
            </Link>
        </div>
    )
}

export default ProductList