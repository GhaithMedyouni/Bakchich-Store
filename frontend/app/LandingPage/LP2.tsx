"use client";

import React from "react";
import Image from "next/image";
import TshirtLP from "../../public/TshirtLP.png";
import walletLP from "../../public/walletLP.png";
import inboxLP from "../../public/inboxLP.png";
import PhoneLP from "../../public/phoneLP.png";
import giftLP from "../../public/giftLP.png";

import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import QuickreplyOutlinedIcon from "@mui/icons-material/QuickreplyOutlined";

export default function LandingPage2() {
  return (
    <div className="bg-white w-full overflow-x-hidden min-h-screen flex flex-col justify-center mt-8">
      {/* ================= LP2 ================= */}
      <section className="px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Texte gauche */}
        <div className="flex-1 ml-4">
          <h1 className="text-[60px] font-semibold text-[#171A1F] leading-tight">
            Creators Shops <br /> is the next step!
          </h1>
          <p className="text-[#323842] text-[24px] mt-4 leading-snug">
            Expanding into merchandising adds a<br /> new revenue stream,
             transforming fans<br /> into brand ambassadors.
          </p>

          <a href="/account">
            <button className="bg-[#F8D938] w-[200px] h-[50px] mt-6 rounded-[25px] text-[18px] text-[#000000] font-bold shadow-md transition-all hover:bg-[#FFF700] hover:scale-105">
              Create Shop
            </button>
          </a>
        </div>

        {/* Grille droite */}
        <div className="grid grid-cols-[300px_450px] gap-4 ">
                    {/* Customization (garde à gauche) */}
                    <div className="bg-[#82B3F4] h-[343px] p-4 rounded-[30px] w-[220px] ml-8 row-span-2">
                        <h3 className="text-[#52225E] text-[20px] font-bold ml-0">Customization</h3>
                        <Image
                            src={TshirtLP}
                            alt=""
                            className=" w-[220px] h-[210px]  mt-2 "
                        />
                        <p className="text-[13px] text-[#52225E] font-medium mt-2">Use templates or <br /> personalize with photos, <br /> stickers, and more.</p>
                    </div>

                    {/* Scheduling (au-dessus de Inbox et Wallet) */}
                    <div className="bg-[#F6B41F] p-4 rounded-[30px] h-[150px] w-[400px] ml-[-50px] mb-[-150px] relative">
                        <h3 className="text-[#132D3E] text-[20px] font-bold mt-10">Scheduling</h3>
                        <p className="text-[14px] text-[#132D3E] font-medium mt-2">Schedule all your products <br /> now and we'll send them later</p>
                    </div>

                    {/* Inbox & Wallet (alignés sur la même ligne) */}
                    <div className="grid grid-cols-2 gap-5 col-span-1  ml-[-50px]">
                        {/* Wallet */}
                        <div className="bg-[#FBE888] p-4 rounded-[30px] h-[183px] w-[192px] relative mt-36">
                            <Image
                                src={walletLP}
                                alt=""
                                className=" w-[160px] h-[90px] absolute top-[-30px] left-1/2 transform -translate-x-1/2 mt-8   "
                            />
                            <h3 className=" text-[#1C471F] text-[20px] font-bold mt-22">Wallet</h3>
                            <p className="text-[12px] ">Access your points and exchange them for money.</p>
                        </div>

                        {/* Inbox */}
                        <div className="bg-[#ACCCF8] p-4 rounded-[30px] h-[183px] w-[192px] ml-[-50px] mt-36 relative overflow-hidden">
                            <h3 className="text-[20px] text-[#4A411E] font-bold">Inbox</h3>
                            <p className="text-[12px] text-[#4A411E] font-medium mt-0">Track your Purchases, <br /> gifts and your Favorite <br /> creators updates</p>
                            <Image
                                src={inboxLP}
                                alt=""
                                className=" w-[160px] h-[90px] mt-2 absolute left-1/2 transform -translate-x-1/2  "
                            />
                        </div>
                    </div>
                    {/* SendGifts */}
                    <div className="bg-[#F9E160] p-4 rounded-[30px] h-[183px] ml-8 w-[425px] relative overflow-hidden">
                        <Image
                            src={giftLP}
                            alt=""
                            className="w-[300px] h-[165px] absolute ml-28 mt-0"
                        />
                        <h3 className="text-[#582614] text-[20px] font-bold mt-20">Send Gifts</h3>
                        <p className="text-[12px] text-[#582614] font-meduim mt-2">Send as a group with <br /> friends or individually</p>
                    </div>
                    {/* Reminders */}
                    <div className="bg-[#A1ABB2] p-4 rounded-[30px] h-[183px] w-[192px] ml-40 relative overflow-hidden">
                        <h3 className="text-[20px] text-[#132D3E] font-bold">Reminders</h3>
                        <p className="text-[12px] text-[#132D3E] font-medium mt-2">
                            Never miss your favorite <br /> creator's drop again
                        </p>
                        <Image
                            src={PhoneLP}
                            alt=""
                            className="w-[180px] h-[90px] absolute ml-2 mt-4"
                        />
                    </div>




                </div>
      </section>

      {/* ================= LP3 ================= */}
      <section className="bg-white py-6">
        <h1 className="text-[#171A1F] text-[60px] font-semibold ml-10 mb-6">
          Our Services
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-36 ml-[-100px]">
          <div className="bg-[#132D3E] p-4 rounded-[20px] flex items-center justify-center w-[290px] h-[70px] hover:scale-105 transition">
            <AutoFixHighOutlinedIcon className="text-[#2563EB]" style={{ fontSize: 40 }} />
            <p className="text-[#FFFFFF] text-[18px] font-medium ml-2">Curated Selections</p>
          </div>

          <div className="bg-[#132D3E] p-4 rounded-[20px] flex items-center justify-center w-[290px] h-[70px] hover:scale-105 transition">
            <LocalFireDepartmentOutlinedIcon className="text-[#F6B41F]" style={{ fontSize: 40 }} />
            <p className="text-[#FFFFFF] text-[18px] font-medium ml-2">Hot Deals</p>
          </div>

          <div className="bg-[#132D3E] p-4 rounded-[20px] flex items-center justify-center w-[290px] h-[70px] hover:scale-105 transition">
            <QuickreplyOutlinedIcon className="text-[#3B82F6]" style={{ fontSize: 40 }} />
            <p className="text-[#FFFFFF] text-[18px] font-medium ml-2">Fast Shipping</p>
          </div>

          <div className="bg-[#132D3E] p-4 rounded-[20px] flex items-center justify-center w-[290px] h-[70px] hover:scale-105 transition">
            <PaymentOutlinedIcon className="text-[#FFC200]" style={{ fontSize: 40 }} />
            <p className="text-[#FFFFFF] text-[18px] font-medium ml-2">Secure Pay</p>
          </div>
        </div>
      </section>
    </div>
  );
}
