"use client";
import Image from "next/image";
import LP1 from "../../public/LP1.png";
import LP2 from "../../public/LP2.png";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export default function LandingPage1() {
    return (
        <div className="bg-[#5494EC] h-[calc(100vh-80px)] text-white font-sans flex flex-col justify-center items-center overflow-hidden relative">
            {/* === HERO SECTION === */}
            <div className="relative flex justify-center items-center w-full px-8 py-8">
                {/* Image à gauche */}
                <div className="absolute left-[3%] top-1/2 transform -translate-y-1/2 hidden md:block">
                    <Image
                        src={LP1}
                        alt="Image gauche"
                        width={260}
                        height={280}
                        className="object-contain"
                    />
                </div>

                {/* Contenu principal */}
                <div className="text-center  ">
                    <h1 className="text-[75px]  font-semibold leading-[1.1]">
                        Let your Fans <br /> represent you.
                    </h1>
                    <p className="mt-5 text-[17px] md:text-[18px] font-medium leading-snug">
                        Design your merch, launch your shop on <span className="font-bold">Bakchich</span>, <br />
                        and let your fans rock your brand!
                    </p>
                    <a href="/account">
                        <button
                            className="bg-[#F8D938] w-[200px] h-[50px] mt-8 rounded-[25px] 
                         text-[18px] text-[#000000] font-bold 
                         shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
                         transition-all duration-300 ease-in-out 
                         hover:bg-[#FFF700] hover:shadow-[0px_6px_6px_rgba(0,0,0,0.3)] hover:scale-105"
                        >
                            Create Shop
                        </button>
                    </a>
                </div>

                {/* Image à droite */}
                <div className="absolute right-[3%] top-1/2 transform -translate-y-1/2 hidden md:block">
                    <Image
                        src={LP2}
                        alt="Image droite"
                        width={260}
                        height={280}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* === FEATURES SECTION === */}
            <div className="w-full mt-4">
                <h2 className="text-center text-[22px] md:text-[26px] font-semibold mb-4">
                    Empowering Your Merch Business
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 md:px-24 text-center justify-items-center">
                    {/* === Card 1 === */}
                    <div className="bg-[#132D3E] w-[220px] p-4 rounded-[18px] flex items-center justify-center hover:scale-105 transition-all duration-200">
                        <AutoAwesomeOutlinedIcon className="text-[#2563EB]" style={{ fontSize: 42 }} />
                        <div className="ml-3 text-left">
                            <p className="font-semibold text-[15px] leading-[1.2]">Merch Creation</p>
                            <p className="text-xs text-gray-300">Design & Produce</p>
                        </div>
                    </div>

                    {/* === Card 2 === */}
                    <div className="bg-[#132D3E] w-[220px] p-4 rounded-[18px] flex items-center justify-center hover:scale-105 transition-all duration-200">
                        <CreditCardOutlinedIcon className="text-[#F6B41F]" style={{ fontSize: 42 }} />
                        <div className="ml-3 text-left">
                            <p className="font-semibold text-[15px] leading-[1.2]">Payment Options</p>
                            <p className="text-xs text-gray-300">Diverse & Secure</p>
                        </div>
                    </div>

                    {/* === Card 3 === */}
                    <div className="bg-[#132D3E] w-[220px] p-4 rounded-[18px] flex items-center justify-center hover:scale-105 transition-all duration-200">
                        <RocketLaunchOutlinedIcon className="text-[#3B82F6]" style={{ fontSize: 42 }} />
                        <div className="ml-3 text-left">
                            <p className="font-semibold text-[15px] leading-[1.2]">Order Fulfillment</p>
                            <p className="text-xs text-gray-300">Reliable & Fast</p>
                        </div>
                    </div>

                    {/* === Card 4 === */}
                    <div className="bg-[#132D3E] w-[220px] p-4 rounded-[18px] flex items-center justify-center hover:scale-105 transition-all duration-200">
                        <MonetizationOnOutlinedIcon className="text-[#FFC200]" style={{ fontSize: 42 }} />
                        <div className="ml-3 text-left">
                            <p className="font-semibold text-[15px] leading-[1.2]">Sales Tracking</p>
                            <p className="text-xs text-gray-300">Detailed Dashboard</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
