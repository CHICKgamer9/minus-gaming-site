import Image from "next/image";

// shadcn UI
import { Button } from "@/components/ui/button";

// images
import hero_img from "../../public/img/home-page-hero-img.png";

//icons
import { LuMousePointerClick } from "react-icons/lu";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { SlGameController } from "react-icons/sl";

export const dynamic = "force-dynamic";


//components
import FadeInOnView from "@/components/shared/small/fade-in";
import ProductList from "../components/shared/cards/ProductList";

const Home = () => {

  return (
    <div className=" overflow-x-hidden">
      <section className="flex flex-col-reverse max-md:h-[60vh] md:flex-row w-full justify-between  p-6 max-md:px-0 max-md:pb-5 max-md:text-center not-dark: bg-[var(--background)]">
        <div className="flex flex-col justify-center items-start text-left md:w-1/2 max-md:px-2 max-md:items-center ">
          
          
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

        <div className="w-full md:w-1/2 mb-6 md:mb-0 sm:m-0 max-md:z-10">
          <Image
            src={hero_img}
            alt="Gaming setup"
            className="clip-path-triangle-1"
            loading="eager"
            priority
          />
        </div>
      </section>

      <div className="bg-[vr(--dark-background)] w-full h-fit border-t-8 border-t-blue-950 flex items-center gap-24 pt-20 pb-18 text-center flex-col border-b-8  border-b-[var(--text)]">
        <FadeInOnView>
          <p className="text-5xl max-sm:text-xl max-md:text-3xl fade-in">
            V 
            &nbsp;
            <span className=" underline underline-offset-4">
              3 Simple Steps
            </span> 
            &nbsp;
            V
          </p>
        </FadeInOnView>
        <div className="flex justify-center items-center text-3xl max-md:text-2xl max-sm:text-lg gap-10 animate-bounce">
          <p>1.</p>
          <LuMousePointerClick />
          <p>Customise your setup style</p>
        </div>
        <div className="flex justify-center items-center text-3xl max-md:text-2xl max-sm:text-lg gap-10 animate-bounce">
          <p>2.</p>
          <BsFillBoxSeamFill />
          <p>We ship it ready to plug in</p>
        </div>
        <div className="flex justify-center items-center text-3xl gap-10 max-md:text-2xl animate-bounce max-sm:text-lg">
          <p>3.</p>
          <SlGameController />
          <p>You game instantly</p>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-center text-4xl font-bold py-5">Fetured Products</h2>
          <ProductList categoryId={process.env.FEATURED_CATEGORY_ID ?? ""} limit={4}/>
      </div>
    </div>
  );
}

export default Home;