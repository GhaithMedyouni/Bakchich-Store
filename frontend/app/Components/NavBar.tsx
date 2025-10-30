"use client"

import Image from "next/image";
import Link from "next/link";
import { RiSearchLine } from "react-icons/ri";
import { MdShoppingCart } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import logoNav from "../../public/logoNav.png";


const Nav = () => {
  return (
    <header className="bg-[#5494EC] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="">
          <Link href="/">
            <Image
              src={logoNav}
              alt="Logo"
              className="w-[137px] h-[23px]"
            />
          </Link>
        </div>

        {/* Middle: Search Bar */}
        <div className="flex-1 flex items-center ml-5">
          <div className="relative w-[255px] h-[40px]">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-2 py-2 rounded-[12px] w-[255px] h-[40px] bg-[#F5F6F7] text-[14px] text-[#B3B3B3] font-normal  border border-[#F5F6F7]"
            />
            < RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3] w-[20px] h-[20px]" />
          </div>
        </div>



        {/* Right: Navigation Links */}
        <nav className="flex items-center justify-between w-full text-white">
          {/* Left: Grouped Links */}
          <div className="flex items-center space-x-8 ml-48">
            <Link href="/" className="text-[#FFFFFF] text-[16px] font-inter font-semibold leading-[20px] tracking-[0]">
              Home
            </Link>
            <Link href="/store" className="text-[#FFFFFF] text-[16px] font-inter font-semibold leading-[20px] tracking-[0]">
              Shop
            </Link>
            <Link href="/creators" className="text-[#FFFFFF] text-[16px] font-inter font-semibold leading-[20px] tracking-[0]">
              Creators
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-[#FFFFFF] text-[16px] font-inter font-semibold leading-[20px] tracking-[0]">
                <span>Useful links</span>
                <FaChevronDown className="text-sm" />
              </button>
              {/* Dropdown can be added here */}
            </div>
          </div>

          {/* Right: Cart, Login, and Join Now Button */}
          <div className="flex items-center space-x-6">
            {/* Cart Icon */}
            <Link href="/cart" className="text-[#E0EAFF]">
              < MdShoppingCart className="w-[24px] h-[22px]" />
            </Link>
            {/* Login Button */}
            <Link href="/login" className="text-[#FFFFFF] text-[16px] font-roboto font-medium leading-[24px] tracking-[0.5px]" >
              Login
            </Link>
            {/* Join Now Button */}
            <Link
              href={{ pathname: "/account", query: { view: "register1" } }}
              className="bg-[#496CCB] text-[#FFFFFF] w-[153px] h-[40px] px-8 py-4 rounded-[46px] flex items-center"
            >
               <div className="   text-[16px] leading-[24px] tracking-[0.5px] font-medium text-[#FFFFFF]">&gt;  Join now</div>
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Nav;
 

