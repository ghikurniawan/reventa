import { Tenor_Sans } from "next/font/google";
import { FC } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

const tenor = Tenor_Sans({ subsets: ['latin'], weight: "400" })

interface ExploreProps {
    
}
 
const Explore: FC<ExploreProps> = () => {
    return (
        <div className="min-h-screen relative bg-[url('/explore_images/explore_bg.png')] bg-brand w-full bg-blend-multiply py-12">
                <div className="w-full max-w-screen-xl mx-auto flex  flex-col items-center space-y-12 p-2">
                    <h1 className={`text-2xl lg:text-4xl text-center lg:text-left text-white ${tenor.className}`}>Explore Homes</h1>
                    <div className="flex gap-4">
                        <Button variant={"brand"} size={'lg'} className="bg-[#C1D6C3] rounded-none px-6 lg:px-10 text-primary hover:bg-green-100">ORCHID</Button>
                        <Button variant={"brand"} size={'lg'} className="bg-secondary rounded-none px-6 lg:px-10 text-primary hover:bg-green-100">TULIP</Button>
                        <Button variant={"brand"} size={'lg'} className="bg-secondary rounded-none px-6 lg:px-10 text-primary hover:bg-green-100">IRIS</Button>
                    </div>
                    <div className="grid grid-cols-5 w-full gap-4">
                        <div className="w-full h-full col-span-3 relative">
                            <AspectRatio ratio={3/2}>
                                <Image src={'/explore_images/orchid_main.png'} alt="Orchid" fill className="object-cover"/>
                            </AspectRatio>
                        </div>
                        <div className="w-full h-full relative">
                                <Image src={'/explore_images/orchid_floor_plan.png'} alt="Orchid" fill className="object-cover"/>

                        </div>
                        <div className="w-full h-full relative">
                                <Image src={'/explore_images/orchid_floor_plan2.png'} alt="Orchid" fill className="object-cover"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 w-full gap-4">
                        <div className="w-full h-full col-span-3 relative">
                            <div className="flex flex-col text-white ">
                                <h3 className={`text-2xl lg:text-4xl mb-4 ${tenor.className}`}>
                                    ORCHID
                                </h3>
                                <p className="font-light">25x50 PLOT AREA (WEST)</p>
                                <p>1250 sqft</p>
                                <p>Super Builtup Area</p>
                                <p>2,097 Sqft</p>
                            </div>
                        </div>
                        <div className="w-full h-full relative">
                            <AspectRatio ratio={4/3}>
                                <Image src={'/explore_images/orchid_isometri1.png'} alt="Orchid" fill className="object-cover"/>
                            </AspectRatio>
                        </div>
                        <div className="w-full h-full relative">
                            <Image src={'/explore_images/orchid_isometri2.png'} alt="Orchid" fill className="object-cover"/>
                        </div>
                    </div>
                </div>
        </div>
    );
}
 
export default Explore;