import { FC } from "react";
import { Button } from "./ui/button";
import { Tenor_Sans } from "next/font/google";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  BadmintonIcon,
  CctvIcon,
  CommunityIcon,
  DrainageIcon,
  GamesIcon,
  GardenIcon,
  GymIcon,
  PlayAreaIcon,
  RainwaterIcon,
  SecurityIcon,
} from "./icons";
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });

interface AmenitiesProps {}

const Amenities: FC<AmenitiesProps> = () => {
  return (
    <div className="bg-[#F7F4EB] relative w-full min-h-[80vh]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <Image
        src="features_element.svg"
        alt="Element Bg"
        fill
        className="mx-auto h-[80vh] bg-cover"
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 items-center">
        <div className="grid grid-cols-4 w-full max-w-screen-xl mx-auto p-2 ">
          <div className="col-span-4 lg:col-span-1 flex flex-col gap-6 pl-2 justify-center">
            <h3
              className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
            >
              Specification
            </h3>
            <p>
              We assure you that you&apos;ll get our best, as that&apos;s what
              we expect of ourselves.
            </p>
            <div className="space-x-4">
              <Button
                variant={"default"}
                size={"icon"}
                className="rounded-none"
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                variant={"default"}
                size={"icon"}
                className="rounded-none"
              >
                <ChevronRightIcon />
              </Button>
            </div>
            <p>
              1<span className="text-brandSecodary">/4</span>
            </p>
          </div>
          <div className="col-span-3 py-12 px-6">
            <div className="h-full flex gap-6">
              <div className="w-1/2 flex flex-col gap-12">
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <PlayAreaIcon />
                  </span>
                  <p className="font-bold text-lg">Children Play Area</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GamesIcon />
                  </span>
                  <p className="font-bold text-lg">Indoor & Outdoor Games</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GymIcon />
                  </span>
                  <p className="font-bold text-lg">Gymnasium</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <BadmintonIcon />
                  </span>
                  <p className="font-bold text-lg">Badminton Court</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CommunityIcon />
                  </span>
                  <p className="font-bold text-lg">Community Space</p>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-12">
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <GardenIcon />
                  </span>
                  <p className="font-bold text-lg">Landscaped Garden</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <CctvIcon />
                  </span>
                  <p className="font-bold text-lg">24x7 Security</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <SecurityIcon />
                  </span>
                  <p className="font-bold text-lg">Security Guard</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <RainwaterIcon />
                  </span>
                  <p className="font-bold text-lg">Rainwater Haversting</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="p-2 bg-brand w-20 h-20 flex justify-center items-center">
                    <DrainageIcon />
                  </span>
                  <p className="font-bold text-lg">Underground Drainage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
