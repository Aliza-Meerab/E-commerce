import { CircleCheck, CreditCard, Sprout, Truck } from "lucide-react";

export default function Main(){
  return(
    <div className="w-full h-[390px] ">
     
     <div className="ml-[415px]">
     
     <div className="w-[366px] h-[34px] ml-[20%] text-black ">
      <h1 className="mt-[60px] text-[24px] font-normal leading-[33.6px] text-center ">What makes our brand different</h1>
     </div>
</div>

<div className=" grid grid-cols-4 mx-[95px] mt-16">

  <div className="w-[270px] h-[124px] text-[20px] font-normal leading-[28px] text-left ">
    <Truck strokeWidth={1} className="mb-2"/>
   <h1 className="pb-2">Next day as standard</h1> 
   <p className="text-[16px] font-normal leading-[24px] ">Order before 3pm and get your order the next day as standard</p>
    </div>

    <div className="w-[270px] h-[124px] text-[20px] font-normal leading-[28px] text-left ">
    <CircleCheck strokeWidth={1} className="h-6 w-6 mb-2"/>
   <h1 className="pb-2">Made by true artisans</h1> 
   <p className="text-[16px] font-normal leading-[24px] ">Handmade crafted goods made with
   real passion and craftmanship</p>
    </div>

    <div className="w-[270px] h-[124px] text-[20px] font-normal leading-[28px] text-left ">
    <CreditCard strokeWidth={1}  className="mb-2"/>
   <h1 className="pb-2">Unbeatable prices</h1> 
   <p className="text-[16px] font-normal leading-[24px] ">For our materials and quality you won’t find better prices anywhere</p>
    </div>

    <div className="w-[270px] h-[124px] text-[20px] font-normal leading-[28px] text-left ">
    <Sprout strokeWidth={0.75} className="mb-2 h-8 w-8"/>
   <h1 className="pb-2">Recycled packaging</h1> 
   <p className="text-[16px] font-normal leading-[24px] ">We use 100% recycled packaging to ensure our footprint is manageable</p>
    </div>
  
  

 
   
  
</div>
    </div>
  )
}