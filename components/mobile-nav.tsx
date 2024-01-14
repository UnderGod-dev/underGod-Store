"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { ChevronRight, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import IconButton from "./ui/icon-button";

interface MobileNavProps {
  data: Category[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  data
}) => {
  const pathname = usePathname();

const mountedStyle = { animation: "inAnimation 250ms ease-in"  };
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
  transform: 'translate X'
};



  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [open, setOpen] = useState(false)
  const openNav = () => setOpen(() => open ? false : true)


  return (
    <nav
      className="flex items-center"
    >
        <div className="cursor-pointer z-[41]" onClick={() => openNav()}>
            {!open ? <IconButton icon={<MenuIcon />}/>: <IconButton icon={<X />}/>}
        </div>
        <div 
        className="z-30" 
        style={{
          background: open? 'red' : undefined
        }}
        >
            
            <div className="bg-white fixed w-[100vw] h-[100vh] left-[0] top-[0] flex flex-col items-center pt-[6em] shadow-xl px-2" 
            style={{
              transform: open ? 'translateY(0%)' : 'translateY(100%)',
              transition: "transform .5s"
              
            }}
            >
                {/* <div className="absolute top-2 right-2">
                    <IconButton icon={<X onClick={() => setOpen(false)}/>}/>
                </div> */}
                {routes.map((route) => (
                <Link
                key={route.href}
                href={route.href}
                className={cn(
                    'font-medium transition-colors hover:text-neutral-500 flex justify-between border-b w-full text-xl mb-[2em]',
                    route.active ? 'text-black' : 'text-black'
                )}
                onClick={() => setOpen(false)}
                >
                    {route.label}
                    <ChevronRight />
                </Link>
                ))}
            </div>
        </div>
    </nav>
  )
};

export default MobileNav;
