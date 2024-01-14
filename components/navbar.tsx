import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import MobileNav from "./mobile-nav";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="border-b mb-[4em]">
      <div className="fixed w-full z-10 bg-white">
        <Container>
          <div className="px-4 sm:px-6 lg:px-8 hidden sm:flex justify-between h-16 items-center">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 ">
              <p className="font-bold text-xl text-center">underGod</p>
            </Link>
            <MainNav data={categories}/>
            <NavbarActions />
          </div>
        </Container>
        <div className="flex px-2 lg:px-8 justify-between h-16 items-center sm:hidden relative">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 ">
              <p className="font-bold text-xl text-center">underGod</p>
            </Link>
            <div className="flex gap-x-4">
              <NavbarActions />
              <MobileNav data={categories}/>
            </div>
        </div>
      </div>
    </div>
  );
};
 
export default Navbar;
