import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function TopHeader() {
  return (
   

    <div className="bg-white w-full h-[132px]">

      <div className="flex justify-between mt-4">
        <h1>
          <Search strokeWidth={1} className="w-8 h-8 mt-[1px] ml-1"/>
        </h1>
        <Link href={"/"}><h1 className="text-[24px] font-normal">Avion</h1></Link>

        <h1 className="flex">
        <Link href={"/cart"}>  <ShoppingCart strokeWidth={1.25}  className="w-8 h-8 mt-[1px] ml-1"/></Link>

          <CircleUserRound strokeWidth={1.25}  className="w-8 h-8 mt-[1px] ml-1"/>
        </h1>

      </div>

    </div>
  )
}