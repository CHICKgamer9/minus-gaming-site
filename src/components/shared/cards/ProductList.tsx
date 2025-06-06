import Image from "next/image"
import Link from "next/link"
import DOMPurify from "isomorphic-dompurify"

//img's
import controler from "@/../public/img/controler.jpg"

import { Button } from "@/components/ui/button"
import { wixClientServer } from "@/lib/wixClientServer"
import { products } from "@wix/stores"

const PRODUCTS_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCTS_PER_PAGE)
    .find();

  return (
    <div className="flex gap-x-8 gap-y-8 justify-between max-lg:flex-col pb-20 mb-5 border-b-8 border-b-[var(--text)]">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex gap-4 my-3 flex-col mx-2 items-center"
          key={product._id}
        >
          <div className="relative w-full h-150 max-sm:h-150 max-lg:h-200 min-xl:h-220 border-4 p-4 border-[var(--second)] rounded-lg hover:shadow-[0_0_25px_#9333ea] transition-all duration-500">
            <Image
              src={product.media?.mainMedia?.image?.url || controler}
              alt={product.name || "Product Image"}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            {(product.media?.items?.length ?? 0) > 1 && (
              <Image
                src={product.media?.items?.[1]?.image?.url || controler}
                alt={product.name || "Product Image"}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex-col flex gap-2 items-center border-b-2 border-b-[var(--text)] pb-2 border-dotted">
            <span className="text-3xl font-semibold">{product.name}</span>
            <span className="text-xl">{"$" + product.price?.price}</span>
          </div>
          <div
            className="text-md flex flex-col items-center gap-y-2 text-center border-b-2 border-b-[var(--text)] pb-2"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description || "") }}
          ></div>
          <Button className="bg-[var(--header)] hover:bg-[var(--header-scrolled)] w-[80%]">
            Add To Cart
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList