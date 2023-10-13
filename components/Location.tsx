import { Tenor_Sans } from "next/font/google";
import { FC } from "react";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });

interface LocationProps {
    
}
 
const Location: FC<LocationProps> = () => {
    return ( 
        <div className="w-full min-h-[80vh] flex flex-col lg:flex-row">
            <div className="bg-brand py-12 w-full lg:w-1/2 bg-[url('/explore_images/explore_bg.png')] bg-blend-multiply bg-no-repeat">
                <div className="w-full h-full flex justify-center items-start">
                    <div className=" max-w-sm h-full flex flex-col gap-6 justify-center p-2">
                        <h1 className={`text-2xl lg:text-4xl text-center lg:text-left text-white ${tenor.className}`}>Strategic Location</h1>
                        <p className=" text-white text-lg">Presents an exceptional residential experience, make your experience of life a positive one.</p>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 ">
                <iframe className="w-full h-full min-h-[50vh]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22191.3334529331!2d-2.6160797974997227!3d54.737851402367525!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487cff614fead7cb%3A0x7082a597322461c1!2sTodd%20Hills%20Hall%20Farm!5e0!3m2!1sid!2sid!4v1697121947955!5m2!1sid!2sid" width="600" height="450" style={{border: 0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
     );
}
 
export default Location;