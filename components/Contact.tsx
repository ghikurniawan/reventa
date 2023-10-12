import { Tenor_Sans } from "next/font/google";
import { FC } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
const tenor = Tenor_Sans({ subsets: ["latin"], weight: "400" });

interface SpesificationProps {}

const Contact: FC<SpesificationProps> = ({}) => {
  return (
    <div className="py-14 relative w-full bg-[url('/spesification/element_bg.png')] bg-right bg-contain bg-no-repeat flex items-center overflow-hidden">
      <div className="w-full p-2 max-w-screen-xl mx-auto h-full flex flex-col justify-center gap-6">
        <h1
          className={`text-2xl lg:text-4xl text-center lg:text-left ${tenor.className}`}
        >
          Get in touch
        </h1>
        <p>
          Please kindly fill out the form below, we will get back to you soon.
        </p>
        <div className=" flex gap-6 max-w-xl">
          <Input type="text" name="name" placeholder="Name" className=" rounded-none"/>
          <Input type="email" name="email" placeholder="Email" className=" rounded-none"/>
        </div>
        <div className="max-w-xl">
          <Input type="number" name="phone" placeholder="Phone Number" className=" rounded-none"/>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree that my submitted data is being collected and stored.
          </label>
        </div>
        <Button
          variant="default"
          size={"lg"}
          className="lg:max-w-sm rounded-none bg-gray-500 "
        >
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default Contact;
