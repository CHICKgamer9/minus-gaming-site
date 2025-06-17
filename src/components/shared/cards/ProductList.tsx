import Image from "next/image"
import Link from "next/link"
import DOMPurify from "isomorphic-dompurify"

//img's
import controler from "@/../public/img/controler.jpg"

import { Button } from "@/components/ui/button"
import { wixClientServer } from "@/lib/wixClientServer"
import { products } from "@wix/stores"

const PROUDUCTS_PER_PAGE = 20

const ProductList = async ({
        categoryId, limit
    }:{
        categoryId:string; 
        limit?:number
    }) => {

        const wixClient =  await wixClientServer();
        
        const res = await wixClient.products.queryProducts().eq("collectionIds", categoryId).limit(limit || PROUDUCTS_PER_PAGE).find();

    return (
        <div className="flex gap-x-8 gap-y-8 justify-between max-lg:flex-col pb-20 mb-5  border-b-8 border-b-[var(--text) w-full">
            {res.items.map((product:products.Product) =>(
            <Link 
                href={"/" +product.slug}
                className="w-fit flex gap-4 my-3 flex-col mx-2 items-center"
                key={product._id}
            >
                <div className="relative w-full h-150 max-sm:h-150 max-lg:h-140 min-xl:h-150 border-4 p-4 border-[var(--second)] rounded-lg hover:shadow-[0_0_25px_#9333ea] transition-all duration-500">
                    <Image 
                        src={product.media?.mainMedia?.image?.url || controler} 
                        alt="Test" 
                        fill 
                        sizes="25vw"
                        className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                    />
                    {product.media?.items && 
                    (<Image 
                        src={product.media?.items[1]?.image?.url || controler} 
                        alt="Test" 
                        fill
                        sizes="25vw"
                        className="absolute object-cover rounded-md"
                    />
                    )}
                </div>
                <div className="flex-col flex gap-2 items-center border-b-2 border-b-[var(--text)] pb-2 border-dotted">
                    <span className="text-3xl font-semibold">{product.name}</span>
                    <span className="text-xl">{"$"+product.price?.price}</span>
                </div>
                <div className="text-md flex flex-col items-center gap-y-2 text-center border-b-2 border-b-[var(--text)] pb-2" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(product.description || "")}}>
                      
                </div>
                <Button className="bg-[var(--header)] hover:bg-[var(--header-scrolled)] w-[80%] cursor-pointer">
                    Add To Cart
                </Button>
            </Link>
            ))}
        </div>
    )
}

export default ProductList