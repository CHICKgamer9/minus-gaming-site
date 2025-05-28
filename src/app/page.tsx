import Image from "next/image";

//chadcn 
import { Button } from "@/components/ui/button"


//img's
import hero_img from "../../public/img/home-page-hero-img.png"


export default function Home() {
  return (
    <div className="flex-col mb-3 ">
      <section className="flex w-full justify-between  p-4 bg-gray-700">
        <div>
          <div className="flex justify-center items-center">
            <h1 className="text-7xl pt-[20%]">Minus Gaming</h1>
          </div>
          <br /><br /><br /><br />
          <p className="text-purple-300 text-4xl">Plug & Play Custom Gaming Setups Delivered to Your Door.</p>
          <br /><br /><br />
          <Button variant="outline" className="text-8xl py-28 rounded-4xl mt-2 mb-3 w-[80%] ml-20">Get Yours Now</Button>
        </div>
        <div className=" w-200 h-200">
          <Image src={hero_img} 
            className="rounded-xl"
            style={{
              clipPath: "polygon(70% 0, 700% 170%, 0% 80%)",
            }}
            alt="Gaming setup"
          />
        </div>
      </section>
      <div className="absolute bg-[#171717] w-full h-[50vh] border-t-double border-t-blue-950 border-t-8">
          
      </div>
    </div>
  );
}
