"use client"

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";
import { ArrowDownIcon, DownloadIcon, GlobeIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import useScroll from "@/lib/hooks/use-scroll";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const scrolled = useScroll(20);
  return (
    <div className={`fixed top-0 w-full z-50 ${scrolled ? "bg-white bg-opacity-30 backdrop-blur-lg" : ""}`}>
      <nav className="flex justify-between items-center my w-full max-w-screen-xl mx-auto h-[110px]">
        <div className="flex gap-28 items-center">
          <Image src="/logo.png" alt="Reventa Logo" height={100} width={100} />
          <ul className="flex gap-10 text-brand">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}> About </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Button variant={"brand"}>
            <ArrowDownIcon className="mr-4" /> Download Brochure
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-none"> <GlobeIcon className="mr-4" /> English </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
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
