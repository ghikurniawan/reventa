"use client"

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { ArrowDownIcon, GlobeIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useScroll from "@/lib/hooks/use-scroll";
import useWindowSize from "@/lib/hooks/use-window-size";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const scrolled = useScroll(20);
  const {isMobile} = useWindowSize()

  return (
    <div className={`fixed top-0 w-full z-50 ${scrolled ? "bg-white bg-opacity-30 backdrop-blur-lg" : ""}`}>
      {isMobile ? (
        <div className="w-full flex justify-center pt-2">
            <Image src="/logo.png" alt="Reventa Logo" height={50} width={50} />
        </div>
      ) : ""}
      <nav className="flex justify-between items-center my w-full max-w-screen-xl mx-auto h-20 lg:h-[110px] p-2">
        <div className="flex gap-2 lg:gap-28 items-center">
          <Image src="/logo.png" alt="Reventa Logo" height={100} width={100} className="hidden lg:block" />
          <ul className="flex gap-2 lg:gap-10 text-brand">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}> About </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button variant={"brand"} size={'sm'} className=" rounded-none">
            <ArrowDownIcon className="mr-4" /> Download Brochure
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {isMobile ? (
                <Button variant="outline" size={'icon'} className="border-none"> <GlobeIcon className="mr-4" /> </Button>
              ):(
                <Button variant="outline" className="border-none"> <GlobeIcon className="mr-4" /> English</Button>
              )}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="lg:w-56">
              <DropdownMenuLabel>Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  English
                  <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Indonesia
                  <DropdownMenuShortcut>⌘I</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>Lang 2</DropdownMenuItem>
                <DropdownMenuItem>
                  Lang 2
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
