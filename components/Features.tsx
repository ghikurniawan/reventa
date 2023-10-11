"use client"

import { FC } from "react";
import { Tenor_Sans } from 'next/font/google'
import { Button } from "./ui/button";
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const tenor = Tenor_Sans({ subsets: ['latin'], weight: "400" })

type Image = {
    id: number;
    thumbnail: string;
    full: string;
    title: string;
  };

interface FeaturesProps {
    featuresImage : Image[]
}
 
const Features: FC<FeaturesProps> = ({featuresImage}) => {
    const [selectedTab, setSelectedTab] = useState(featuresImage[0]);
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
        setSelectedTab(featuresImage[index]);
        setIndex((index + 1) % featuresImage.length);
        }, 3000);

        return () => {
        clearInterval(interval);
        };
    }, [index, featuresImage]);
    return ( 
        <div className="min-h-screen relative w-full max-w-screen-xl mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="features_element.svg" alt="Element Bg" className="mx-auto"/>
            <div className="absolute top-0 left-0 right-0 bottom-0">
                <div className="w-full h-full flex flex-col lg:flex-row gap-4 justify-center items-center ">
                    <div className="flex flex-col space-y-4 lg:space-y-8 p-2 w-full">
                        <h1 className={`text-3xl lg:text-5xl text-center lg:text-left ${tenor.className}`}>Complete Facilities</h1>
                        <p className="text-md lg:text-xl max-w-xl">These homes contain all basic amenities and are of latest technology. Our home plans are original and are designed as per a resident&apos;s view. We build all our homes like our own. We aim to create homes that give a living experience that you deserve.</p>
                        <div className="mx-auto lg:m-0">
                            <Button variant={'outline'} size={'lg'} className="">See More</Button>
                        </div>
                    </div>
                    <div className="w-full">
                    <div className="max-w-screen-md mx-auto w-full flex flex-col">
                        <AspectRatio ratio={4/3}>
                        <AnimatePresence mode='wait'>
                            <motion.div
                            key={selectedTab ? selectedTab.id : "empty"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className='relative w-full h-full'
                            >
                            <Image 
                            src={selectedTab ? selectedTab.full : ""} 
                            draggable={false}
                            alt={'image'} 
                            fill 
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover" />
                            </motion.div>
                        </AnimatePresence>
                        </AspectRatio>
                        <nav className='py-2'>
                        <motion.ul drag='x' dragConstraints={{left: 0 , right: 0}} className='w-full grid grid-cols-4 gap-2'>
                            {featuresImage.map((item, index) => (
                                <li
                                key={index}
                                className={`${item === selectedTab ? "relative" : ""} w-full h-full`}
                                onClick={() => (setSelectedTab(item), setIndex(index))}
                                >
                                <AspectRatio ratio={4/3} className='relative col-span-2'>
                                    <Image 
                                    src={item?.thumbnail} 
                                    draggable={false}
                                    alt={'image'} 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill 
                                    className="object-cover"
                                    />
                                </AspectRatio>
                                {item === selectedTab ? (
                                    <motion.div className="absolute bottom-0 top-0 left-0 right-0 border-2 border-brandSecodary bg-black/50 text-white items-center flex justify-center" layoutId="underline">
                                        <span>{item.title}</span>
                                    </motion.div>
                                ) : null}
                                </li>
                            ))}
                        </motion.ul>
                        </nav>
                    </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default Features;