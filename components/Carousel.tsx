"use client"

import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useTransform, MotionValue, useScroll } from 'framer-motion'
import { Tenor_Sans } from 'next/font/google'
const tenor = Tenor_Sans({ subsets: ['latin'], weight: "400" })
type Image = {
  id: number;
  thumbnail: string;
  full: string;
  title: string;
};

type CarouselProps = {
  images: Image[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [selectedTab, setSelectedTab] = useState(images[0]);
  const [index, setIndex] = useState(0)
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0,1], ['0%', '80%'])

  useEffect(()=>{
    console.log(scrollYProgress)
  }, [scrollYProgress])

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTab(images[index]);
      setIndex((index + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [index, images]);

  return (
    <div className="w-full relative bg-[url('/paralax-bg.jpg')] h-fit bg-no-repeat bg-cover max-h-screen">
        <div className=" hidden md:block">
          <motion.img style={{y}} src='cloud.png' alt='cloud' className='absolute top-20 left-0' width={600} />
          <motion.img style={{y}} src='cloud.png' alt='cloud' className='absolute top-20 left-0' width={600} />
          <motion.img style={{y}} src='cloud.png' alt='cloud' className='absolute top-20 left-0' width={600} />
          <motion.img style={{y}} src='cloud2.png' alt='cloud' className='absolute top-40 right-0' width={1000} />
          <motion.img style={{y}} src='cloud2.png' alt='cloud' className='absolute top-40 right-0' width={1000} />
          <motion.img style={{y}} src='cloud2.png' alt='cloud' className='absolute top-40 right-0' width={1000} />
        </div>
        <div className="md:hidden">
          <motion.img style={{y}} src='cloud.png' alt='cloud' className='absolute top-10 left-0' width={200} />
          <motion.img style={{y}} src='cloud.png' alt='cloud' className='absolute top-10 left-0' width={200} />
          <motion.img style={{y}} src='cloud.png' alt='cloud' className='absolute top-10 left-0' width={200} />
          <motion.img style={{y}} src='cloud2.png' alt='cloud' className='absolute top-10 right-20' width={400} />
          <motion.img style={{y}} src='cloud2.png' alt='cloud' className='absolute top-10 right-20' width={400} />
          <motion.img style={{y}} src='cloud2.png' alt='cloud' className='absolute top-10 right-20' width={400} />
        </div>
        <div className='mt-52 lg:mt-80 absolute left-0 top-0 right-0 bottom-0 '>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.id : "empty"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='relative w-full h-full shadow-lg'
            >
              <motion.img 
              src={selectedTab ? selectedTab.full : ""} 
              draggable={false}
              alt={'image'} 
              width={'100%'}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"/>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-32 lg:mt-60 z-10 lg:min-h-screen max-w-screen-xl mx-auto relative flex flex-col lg:flex-row justify-between">
          <div className='max-w-lg space-y-4 lg:space-y-8 p-2'>
            <h1 className={`text-3xl lg:text-5xl text-center lg:text-left ${tenor.className}`}>Our Home Defines Us</h1>
            <p className='text-md lg:text-xl'>Revanta Homes is a project by Rishabhdeo Builders & Developers. They build homes with timeless designs. Thet build homes which are beyond your dreams.</p>
          </div>
            <nav className='w-2/4 min-w-[380px] mt-32 md:mt-0 p-2' >
              <motion.ul drag='x' dragConstraints={{left: 0 , right: 0}} className='w-full grid grid-cols-3 gap-2'>
                {images.map((item, index) => (
                    <li
                      key={index}
                      className={`${item === selectedTab ? "relative" : ""} w-full h-full`}
                      onClick={() => (setSelectedTab(item), setIndex(index))}
                    >
                      <AspectRatio ratio={4/3} className='relative col-span-2 bg-white shadow-lg'>
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
                        <>
                          <motion.div className="absolute bottom-6 top-0 left-0 right-0 border-2 border-brandSecodary " layoutId="underline" />
                          <p className='text-center'>{item.title}</p>
                        </>
                      ) : null}
                    </li>
                ))}
              </motion.ul>
            </nav>
        </div>
    </div>
  )
}

export default Carousel;
