import Image from "next/image";

// shadcn UI
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "@/components/shared/cards/ProductList";


// images
import hero_img from "../../public/img/home-page-hero-img.png";
import case_5090 from "@/../public/img/pc/5090-pc-case.jpg"
import case_esports from "@/../public/img/pc/esorpts-pc-case.jpg"
import razerMic from "@/../public/img/mics/razer-mic.jpg"
import basicSetUp from "@/../public/img/setups/Basic setup.jpg"
import customSetUp from "@/../public/img/setups/custom-setup.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div className="mb-3">
      <section className="flex flex-col-reverse max-md:h-[60vh] md:flex-row w-full justify-between  p-6 max-md:p-0 not-dark: bg-[var(--background)]">
        <div className="flex flex-col justify-center items-start text-left md:w-1/2 sm:items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-md:px-10 text-[var(--text)] pt-10 md:pt-0">
            Minus Gaming
          </h1>

          <p className="text-[var(--purpel-text)] text-lg sm:text-xl md:text-2xl max-md:px-10 mt-6">
            Plug & Play Custom Gaming Setups Delivered to Your Door.
          </p>

          <Button
            variant="outline"
            className="text-base md:h-20 sm:text-lg md:text-4xl py-4 px-8 rounded-2xl mt-6 w-full md:w-[80%]"
          >
            Get Yours Now
          </Button>
        </div>

        <div className="relative w-full md:w-1/2 mb-6 md:mb-0 sm:m-0">
          <Image
            src={hero_img}
            alt="Gaming setup"
            className="clip-path-triangle-1"
            loading="eager"
            priority
          />
        </div>
      </section>

      <div className="bg-[#171717] w-full h-[70vh] border-t-8 border-t-blue-950 border-t-double flex justify-center pt-3 pb-20">
        <Tabs defaultValue="account" className=" pt-10 w-fit px-5 bg-gray-900 rounded-2xl shadow-xl shadow-purple-500 ">
          <TabsList className="border-b-2 pb-10 rounded-[opx]">
            <TabsTrigger value="account" className="text-6xl cursor-pointer p-9 my-1">Full Setups</TabsTrigger>
            <TabsTrigger className="text-6xl cursor-pointer p-9 my-1" value="password">Set Up Parts</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="flex gap-2 justify-center">
              <Link href="/set-ups/starter" className="flex flex-col text-center w-fit bg-black rounded-b-3xl cursor-pointer">
                <Image src={basicSetUp} alt="pc case" className="h-68 w-80" loading="lazy"/>
                <p>Starter Setup</p>
                <p>The Basics</p>
              </Link>
              <div className="flex flex-col text-center w-fit bg-black rounded-b-3xl cursor-pointer">
                <Image src={customSetUp} alt="pc case" className="h-68 w-80" loading="lazy"/>
                <p>Custom</p>
              </div>
            </div>
            </TabsContent>
          <TabsContent value="password">
            <div className="flex gap-2">
              <div className="flex flex-col text-center w-fit bg-black rounded-b-3xl cursor-pointer">
                <Image src={case_5090} alt="pc case" className="h-68 w-60 mb-2" />
                <p>Power House</p>
                <p>5090</p>
              </div>
              <div className="flex flex-col text-center w-fit bg-black rounded-b-3xl cursor-pointer">
                <Image src={case_esports} alt="pc case" className="h-68 w-60" loading="lazy"/>
                <p>Light Speed</p>
                <p>Esports</p>
              </div>
              <div className="flex flex-col text-center w-fit bg-black rounded-b-3xl cursor-pointer">
                <Image src={razerMic} alt="pc case" loading="lazy"className="h-68 w-40 mb-2" />
                <p>Mics</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1>Featured Products</h1>
          <ProductList />
        </div>
      </div>
    </div>
  );
}
