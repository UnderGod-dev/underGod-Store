import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover border">
        <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="absolute w-full h-full opacity-70 bg-cover bg-top"></div>
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-5xl lg:text-6xl sm:max-w-xl max-w-xs z-[5]">
            {data.label}
          </div>
        </div>
      </div>
    </div>
   );
};

export default Billboard;
