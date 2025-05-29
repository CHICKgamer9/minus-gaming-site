import Image from "next/image"

//imgs
import basicSetUp from "@/../public/img/setups/Basic setup.jpg"
import monitor from "@/../public/img/setups/starter/starter-monitor.png"
import mouse from "@/../public/img/setups/starter/starter-mouse.png"
import mousePad from "@/../public/img/setups/starter/starter-mouse-pad.png"
import keyboard from "@/../public/img/setups/starter/starter-keyboard.png"
import desk from "@/../public/img/setups/starter/starter-desk.png"
import chair from "@/../public/img/setups/starter/starter-chair.png"

//chad cn
import { Button } from "@/components/ui/button"

const ProductList = () => {
    return (
            <div>
                <div className="flex">
                    <Image src={basicSetUp} alt="parts of the set up on white background" className="w-1/2 rounded-br-[350px]"/>
                    <div className="w-full text-center">
                        <p className="text-5xl pl-4">Stater Set up - The Basics</p>
                        <div className="bg-gray-700 m-2 p-3 rounded-2xl">
                            <div className="flex items-center">
                                <p className="text-4xl">
                                    AOC 24G2SP, 24 Inches, 1080p, 165Hz and IPS -
                                </p>
                                <Image src={monitor} alt="Monitor" className="w-35" />
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl">
                                    Logitech G203 Lightsync  -
                                </p>
                                <Image src={mouse} alt="Monitor" className="w-35" />
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl">
                                    SteelSeries QcK Medium  - 
                                </p>
                                <Image src={mousePad} alt="Monitor" className="w-35" />
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl">
                                    Redragon K552 Kumara  - 
                                </p>
                                <Image src={keyboard} alt="Monitor" className="w-35" />
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl">
                                    Ikea Utespelare &nbsp;&nbsp;&nbsp;- &nbsp;
                                </p>
                                <Image src={desk} alt="Monitor" className="w-35" />
                            </div>
                            <div className="flex items-center">
                                <p className="text-4xl">
                                    Gaming Chair &nbsp;&nbsp;&nbsp;- &nbsp;
                                </p>
                                <Image src={chair} alt="Monitor" className="w-35" />
                            </div>
                        </div>
                    </div>
                </div>
                <Button variant="outline" className="m-3 w-full text-7xl p-10 bg-black cursor-pointer">
                    Get Now!
                </Button>
            </div>
            
    )
}

export default ProductList