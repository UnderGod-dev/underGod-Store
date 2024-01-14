import { Mail, PhoneCall} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";

// logo pic import
import zara from "../public/zara.png"
import gucci from "../public/gucci.png"
import Fendi from "../public/Fendi.png"
import offwhite from "../public/offwhite.png"
import Burberry from "../public/Burberry.png"
import balenciaga from "../public/balenciaga.png"
import lacoste from "../public/lacoste.png"
// logo pics import

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="border-y-2 hidden md:flex ">
        <div className="flex flex-col text-left p-3 border-r-2 leading-loose basis-[20%]">
          <h3 className="uppercase mb-5 font-semibold first:p">
            newsletter
          </h3>
          <Link href='/'>
            Subscribe to our newsletter
          </Link>
        </div>
        <div className="flex flex-col text-left p-3 border-r-2 leading-loose basis-[20%]">
          <h3 className="uppercase mb-5 font-semibold">
            client services
          </h3>
          <Link href='/'>
            FAQ
          </Link>
          <Link href='/'>
            Track order
          </Link>
          <Link href='/'>
            Returns
          </Link>
          <Link href='/'>
            Delivery
          </Link>
          <Link href='/'>
            Payment
          </Link>
        </div>
        <div className="flex flex-col text-left p-3 border-r-2 leading-loose basis-[20%]">
          <h3 className="uppercase mb-5 font-semibold">
            The company
          </h3>
          <Link href='/'>
            Careers
          </Link>
          <Link href='/'>
            Legal
          </Link>
          <Link href='/'>
            Privacy Policy and Cookies
          </Link>
        </div>
        <div className="flex flex-col text-left p-3 border-r-2 leading-loose basis-[20%]">
          <h3 className="uppercase mb-5 font-semibold">
            Connect
          </h3>
          <Link href='/'>
            Facebook
          </Link>
          <Link href='/'>
            Instagram
          </Link>
          <Link href='/'>
            X
          </Link>
          <Link href='/'>
            Ticltok
          </Link>
        </div>
        <div className="flex flex-col text-left p-3 leading-loose basis-[20%]">
          <h3 className="uppercase mb-5 font-semibold">
            Contact us
          </h3>
          <p>Our client advisors are available <br /> Mon - Fri 8:30am - 8pm <br /> Weekends 12pm - 6pm</p>
          <Link href='/' className="flex gap-x-5 justify-center mt-10">
            <FaWhatsapp /> <Mail /> <PhoneCall />
          </Link>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full md:hidden leading-loose px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">NEWSLETTER</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <Link href='/'>
              Subscribe to our newsletter
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline">CLIENT SERVICES</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <Link href='/'>
              FAQ
            </Link>
            <Link href='/'>
              Track order
            </Link>
            <Link href='/'>
              Returns
            </Link>
            <Link href='/'>
              Delivery
            </Link>
            <Link href='/'>
              Payment
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="hover:no-underline">THE COMPANY</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <Link href='/'>
              Careers
            </Link>
            <Link href='/'>
              Legal
            </Link>
            <Link href='/'>
              Privacy Policy and Cookies
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="hover:no-underline">CONTACT US</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p>Our client advisors are available <br /> Mon - Fri 8:30am - 8pm <br /> Weekends 12pm - 6pm</p>
            <Link href='/' className="flex gap-x-5 justify-center mt-10">
              <FaWhatsapp /> <Mail /> <PhoneCall />
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="hover:no-underline">CONNECT</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <Link href='/'>
              Facebook
            </Link>
            <Link href='/'>
              Instagram
            </Link>
            <Link href='/'>
              X
            </Link>
            <Link href='/'>
              Ticltok
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-4 mt-[4em] bg-transparent flex-wrap justify-center row-span-2">
        <Image src={zara} width={100} alt='zara' className="grayscale hover:grayscale-0"/>
        <Image src={Fendi} width={100} alt='zara' className="grayscale hover:grayscale-0 sepia"/>
        <Image src={gucci} width={100} alt='zara' className="grayscale hover:grayscale-0"/>
        <Image src={lacoste} width={100} alt='zara' className="grayscale hover:grayscale-0"/>
        <Image src={balenciaga} width={100} alt='zara' className="grayscale hover:grayscale-0"/>
        <Image src={offwhite} width={100} alt='zara' className="grayscale hover:grayscale-0 sepia"/>
      </div>
      <div className="py-10">
        <p className="text-center text-xs">
          &copy; 2024 underGod, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
