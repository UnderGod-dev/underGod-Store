import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  

  return (
    <Container>
      <div className="">
        <div className="h-[100svh] bg-cover bg-center bg-[url('https://balenciaga.dam.kering.com/m/3c8e4ee42e881323/Large-HP_DK_S24_11_LOOKS_2600x1300_2x1.jpg')]">
          <div className="text-black flex flex-col items-center justify-end h-full pb-[6em]">
            <h3 className="text-white font-bold text-2xl tracking-[.2em] mb-[12px] text-center">NEW YEAR GIFT</h3>
            <div className="flex">
              <Link href='/category/0928fd19-e995-4f5d-b9d9-95b652b3dc1e'>
                <Button className="bg-white border border-zinc-900 rounded-lg text-black mr-2">For Women</Button>
              </Link>
              <Link href='/category/41923a89-6770-4343-a9a4-95744c502503'>
                <Button className="bg-white border border-zinc-900 rounded-lg text-black px-9">For Men</Button>
              </Link>
            </div>
          </div>
        </div>
   </div>
    </Container>
  )
};

export default HomePage;
