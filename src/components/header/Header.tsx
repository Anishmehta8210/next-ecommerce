import Image from "next/image"
import logo from "../../images/logo.png"
import cartIcon from "../../images/cartIcon.png"

import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";



const Header = () => {
  return (
    <>
   <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
     <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        <Link href={"/"} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
        <Image  src={logo} className="w-28 object-cover mt-1" alt="Headerlogo"/>

        </Link>
        <div className="px-2 border border-transparent hover:border-white cursor-pointer duration-300  items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin/>
          <div className="text-xs" >
          <p>Deliver to</p>
          <p className="text-white font-bold uppercase">India</p>
          </div>
        </div>
        <div className="flex-1 hidden md:inline-flex items-center justify-between relative h-10">
          <input  className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow" type="text" placeholder="Search Amazon.in" />
          <span className="w-12 h-full bg-amazon_yellow text-block text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch/>
          </span>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Hello,sign in</p>
          <p className="text-white font-bold flex items-center">Account & Lists <span><BiCaretDown/></span></p>
        </div>
        <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]">
          <p>Marked</p>
          <p className="text-white font-bold">& Favourite</p>
        </div>
        <Link href={"/cart"} className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] relative">
          <Image  src={cartIcon} className="w-auto object-cover h-8" alt="Headerlogo"/>
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">0</span>
        </Link>
     </div>
     
   </div>
    </>
  )
}

export default Header