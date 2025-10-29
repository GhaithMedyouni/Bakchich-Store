"use client";

import React from "react";
import Image from "next/image";
import AboutLP from "../../public/AboutLP.png";
import CapucheLP from "../../public/CapucheLP.png";
import DisqueLP from "../../public/DisqueLP.png";
import mainLP from "../../public/mainLP.png";

const LandingPage3 = () => {
    return (
        <div className="bg-white w-full overflow-x-hidden">
            {/* ================= LP3 : About Us ================= */}
            <section className="flex justify-center py-12 px-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] w-full items-center gap-10">
                    {/* Image à gauche */}
                    <div className="flex justify-center">
                        <Image
                            src={AboutLP}
                            alt="About Us"
                            className="rounded-2xl w-[400px] h-[400px] object-cover"
                        />
                    </div>

                    {/* Texte à droite */}
                    <div className="text-left md:ml-10">
                        <h2 className="text-[48px] font-semibold text-[#171A1F] leading-tight">
                            About Us
                        </h2>
                        <p className="text-[#323842] text-[20px] mt-4 leading-snug">
                            At <span className="font-bold">Bakchich Store</span>, we empower
                            African creators to showcase their creativity globally.
                            <br />
                            Support local talent and discover culturally rich products with
                            us.
                        </p>
                        <button className="bg-[#F8D938] w-[200px] h-[55px] mt-8 rounded-[25px] text-[18px] text-[#000000] font-bold 
                             shadow-md transition-all duration-300 ease-in-out 
                             hover:bg-[#FFF700] hover:shadow-lg hover:scale-105">
                            Discover More
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= LP4 : Create Shop Now ================= */}
            <section className="bg-[#5494EC] rounded-[25px] px-8 py-10 flex flex-col md:flex-row items-center justify-between max-w-[1600px] mx-auto mt-12">
                {/* Texte à gauche */}
                <div className="flex-1 text-left md:pr-8 ml-4">
                    <h2 className="text-[50px] text-[#FFFFFF] font-semibold leading-[1.1]">
                        Create Your <br /> Shop Now
                    </h2>
                    <p className="mt-3 text-[25px] text-[#FFFFFF] leading-snug">
                        Create your shop now, for{" "}
                        <span className="font-bold">FREE</span>, and let<br /> your fans represent you.
                    </p>
                    <a href="/account">
                        <button className="bg-[#F8D938] w-[180px] h-[50px] mt-6 rounded-[25px] text-[18px] text-[#000000] font-bold 
                       shadow-md transition-all duration-300 ease-in-out 
                       hover:bg-[#FFF700] hover:shadow-lg hover:scale-105">
                            See More
                        </button>
                    </a>
                </div>

                {/* Cartes à droite */}
                <div className="relative flex items-end gap-2 mr-4 mt-10 md:mt-0">
                    {/* Carte 1 : Hoodie */}
                    <div className="bg-white text-black rounded-2xl shadow-lg w-44 h-60 transform rotate-[-4deg] relative z-10 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[75%]">
                            <Image
                                src={CapucheLP}
                                alt="Hoodie"
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[25%] bg-white flex flex-col items-center justify-center px-2">
                            <h3 className="font-bold text-[13px]">Hoodies</h3>
                            <p className="text-[10px] text-center">
                                Design hoodies & express your style.
                            </p>
                        </div>
                        {/* Flèche jaune */}
                        <div className="absolute top-[100px] left-[95px] text-yellow-500 text-[40px] rotate-180">
                            ➜
                        </div>
                    </div>

                    {/* Carte 2 : Knowledge */}
                    <div className="bg-white text-black rounded-2xl shadow-lg w-44 h-60 transform rotate-[4deg] relative -ml-3 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[75%]">
                            <Image
                                src={DisqueLP}
                                alt="Podcast"
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[25%] bg-white flex flex-col items-center justify-center px-2">
                            <h3 className="font-bold text-[13px]">Knowledge</h3>
                            <p className="text-[10px]">Your Content</p>
                        </div>
                    </div>

                    {/* Main cliquable */}
                    <div className="absolute top-[60%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <Image
                            src={mainLP}
                            alt="Click"
                            width={60}
                            height={60}
                            className="cursor-pointer rotate-[-20deg]"
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage3;
