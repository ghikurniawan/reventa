"use client";

import { Tenor_Sans } from "next/font/google";
import { FC, useRef, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/grid";

import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });

type Card = {
  id: string | number;
  image: string;
  title: string;
  description: string;
};

interface SpesificationProps {
  cards: Card[];
}

const Spesification: FC<SpesificationProps> = ({ cards }) => {
  const swiperRef = useRef<SwiperCore>();
  const[activeSlide, setActiveSlide] = useState(0);
  const[slideEnd, setSlideEnd] = useState(false);
  

  return (
    <div className="py-14 relative w-full bg-[url('/spesification/element_bg.png')] bg-right bg-contain bg-no-repeat flex items-center overflow-hidden">
      <div className="flex w-full max-w-screen-xl mx-auto p-2">
        <div className="flex-none max-w-sm lg:col-span-1 flex flex-col gap-6 pl-2 justify-center">
          <h3
            className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
          >
            Specification
          </h3>
          <p>
            We assure you that you&apos;ll get our best, as that&apos;s what we
            expect of ourselves.
          </p>
          <div className=" space-x-4">
            <Button onClick={() => swiperRef.current?.slidePrev()} variant={"default"} size={"icon"} className="rounded-none">
              <ChevronLeftIcon />
            </Button>
            <Button onClick={() => swiperRef.current?.slideNext()} variant={"default"} size={"icon"} className="rounded-none">
              <ChevronRightIcon />
            </Button>
          </div>
          <p>
            {activeSlide + 1}<span className=" text-brandSecodary">/4</span>
          </p>
        </div>
        <div className="xl:mx-auto max-w-6xl mx-[1.5rem]">
          <div className="max-w-5xl mx-[1.5rem]">
            <Swiper
              modules={[Grid]}
              slidesPerView={3}
              spaceBetween={10}
              onSlideChange={(e) => {setActiveSlide(e.activeIndex)}}
              onReachEnd={(e) => {console.log(e)}}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                700: {
                  slidesPerView: 2,
                },
                1000: {
                  slidesPerView: 3,
                },
              }}
              navigation
              grid={{
                rows: 1,
              }}
              className="gridCol"
            >
              {cards.map((p, index) => {
                return (
                  <SwiperSlide key={index} className="shadow-lg my-4 min-h-[60vh]">
                    <div className="p-2">
                      <div className="space-y-4">
                        <AspectRatio
                          ratio={4 / 3}
                          className="cursor-pointer overflow-hidden relative"
                        >
                          <Image
                            className="scale-1 hover:scale-[1.1] duration-300 object-cover"
                            src={p.image}
                            alt=""
                            fill
                          />
                        </AspectRatio>
                        <h3 className="font-bold text-lg">{p.title}</h3>
                        <p className="">{p.description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spesification;
