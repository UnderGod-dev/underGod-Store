import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { FaCcVisa, FaCcPaypal, FaCcAmazonPay, FaCcMastercard, FaCcApplePay, FaGooglePay } from "react-icons/fa";
  


const Accordions = () => {
   
    return (
      <div className="mt-8">
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline font-semibold">PRODUCT SUSTAINABILITY</AccordionTrigger>
            <AccordionContent className="text-[1.2em]">
            Carbon footprint: we work to continually reduce the environmental footprint of our products. The remaining carbon emissions associated with all activities in this product’s life cycle are carefully calculated, and we commit to invest funds into carbon removal projects that protect and restore natural ecosystems to tackle climate change.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline font-semibold">FREE SHIPPING, FREE RETURNS</AccordionTrigger>
            <AccordionContent className="text-[1.2em]">
            We offer complimentary express shipping. <br /> Free returns are available worldwide. If your item is eligible for return, you have 30 days from the date you receive your order to follow this <small className="cursor-pointer">procedure</small>
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline font-semibold">SECURED PAYMENT</AccordionTrigger>
            <AccordionContent className="text-[1.2em]">
            For credit card payments, please note that your billing address must match the address on your credit card statement, to prevent CC fraud <br /> Please note that once your order is placed your credit card will be authorized for 0 GBP (CHF, AED, SAR or EUR for all other countries); this is for verification purposes only and will protect you from any risk of fraud. The authorized amount will be released by your credit card’s issuing bank according to its policy. 
            <div className="flex justify-center gap-x-3 text-[2em] mt-[1em]">
            <FaCcVisa /> <FaCcAmazonPay /> <FaCcApplePay /> <FaCcPaypal /> <FaGooglePay /> <FaCcMastercard />
            </div>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        
      </div>
    )
  };
  
  export default Accordions;