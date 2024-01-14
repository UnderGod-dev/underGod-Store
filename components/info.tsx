"use client";

import { ShoppingCart } from "lucide-react";

import Currency  from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import Accordion from "./accordions";

interface InfoProps {
  data: Product
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  }

  return ( 
    <div>
      <h1 className="text-xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-xl text-gray-900 font-semibold">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
          <h3 className="font-semibold text-black text-xl">Size:</h3>
          <div className="space-x-2 flex text-lg font-semibold">
            <label>
              <input className="sr-only peer" name="size" type="radio" value="xs" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border-2 border-slate-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white cursor-pointer">
                XS
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="s" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border-2 border-slate-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white cursor-pointer">
                S
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="m" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border-2 border-slate-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white cursor-pointer">
                M
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="l" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border-2 border-slate-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white cursor-pointer">
                L
              </div>
            </label>
            <label>
              <input className="sr-only peer" name="size" type="radio" value="xl" />
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 border-2 border-slate-900 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white cursor-pointer">
                XL
              </div>
            </label>
          </div>
        </div>
        
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
        <div className="description">
          <h2 className="font-bold text-xl">PRODUCT DETAILS:</h2>
          <p>{data.description}</p>
        </div>
      </div>
      <Accordion />
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
}
 
export default Info;
