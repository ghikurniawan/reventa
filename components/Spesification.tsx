import { Tenor_Sans } from "next/font/google";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { AspectRatio } from "./ui/aspect-ratio";
const tenor = Tenor_Sans({ subsets: ['latin'], weight: "400" })

type Card = {
    id : string | number,
    image: string,
    title : string,
    description: string
}

interface SpesificationProps {
    cards: Card[]
}
 
const Spesification: FC<SpesificationProps> = ({cards}) => {
    return (
        <div className="py-14 relative w-full bg-[url('/spesification/element_bg.png')] bg-right bg-contain bg-no-repeat flex items-center overflow-hidden">
            <div className="grid grid-cols-4 w-full max-w-screen-xl mx-auto p-2">
                <div className="col-span-4 lg:col-span-1 flex flex-col gap-6 pl-2 justify-center">
                    <h3 className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}>Specification</h3>
                    <p>We assure you that you&apos;ll get our best, as that&apos;s what we expect of ourselves.</p>
                    <div className=" space-x-4">
                        <Button variant={'default'} size={'icon'} className="rounded-none"><ChevronLeftIcon/></Button>
                        <Button variant={'default'} size={'icon'} className="rounded-none"><ChevronRightIcon/></Button>
                    </div>
                    <p>1<span className=" text-brandSecodary">/4</span></p>
                </div>
                <div className="col-span-3 overflow-visible p-4">
                    <div className="h-full w-[150%] flex gap-6">
                        {cards.map(({id, image, title, description}) =>(
                            <div key={id} className="w-1/4 shadow-lg bg-background">
                                <AspectRatio ratio={1}>
                                    <Image src={image}alt="structure" fill className="bg-cover" />
                                </AspectRatio>
                                <div className="p-2 space-y-4">
                                    <h3 className="font-bold">{title}</h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Spesification;