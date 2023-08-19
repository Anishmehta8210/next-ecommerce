import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <>
   <div className="w-full h-10 bg-amazon_light text-sm text-white px-4 flex items-center">
     <p className="flex items-center gap-1 h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">
        <LuMenu  classname="text-xl"/>All
     </p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Amazon miniTv</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Sell</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Best Sellers</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Todays Deals</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Bills</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Mobiles</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">New Releases</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Customer Service</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Prime</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Electronics</p>
     <p className="hidden md:inline-flex items-center  h-8 px-2 border border-transparent hover:border-white cursor-pointer duration-300">Home & kitchen</p>
     <p className="hidden md:inline-flex items-center h-8 px-2 border border-transparent hover:border-red-600 hover:text-red-400 text-amazon_yellow cursor-pointer duration-300">Sign Out</p>
   </div>
    </>
  )
}

export default BottomHeader