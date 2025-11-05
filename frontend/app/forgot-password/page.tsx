"use client";

import Image from "next/image";
import bakchich from "../../public/bakchich.png";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* 🖼️ Partie gauche - image Bakchich */}
      <div className="relative w-full md:w-1/2 h-full">
        <Image
          src={bakchich}
          alt="Bakchich illustration"
          layout="fill"
        />
      </div>

      {/* 🧾 Partie droite - formulaire */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          {/* 🔹 Titre */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#040308] mb-2">
            Forgot Password
          </h1>

          {/* 🔹 Description */}
          <p className="text-sm md:text-base font-normal text-[#040308] mb-10">
            Enter the email or phone number you used to create your account so
            we can send you instructions to reset your password.
          </p>

          {/* 🔹 Formulaire */}
          <form className="space-y-6">
            {/* Champ Email / Téléphone */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-normal text-[#09090B] mb-2 block"
              >
                Email / Phone number
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email or phone number"
                required
                className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
              />
            </div>

            {/* Bouton d’envoi */}
            <button
              type="submit"
              className="w-full bg-[#4167BF] text-white font-semibold text-sm md:text-lg py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Code
            </button>

            {/* Bouton retour login */}
            <a
              href="/login"
              className="block text-center w-full border border-gray-300 text-[#000000] font-semibold text-sm md:text-lg py-3 rounded-lg hover:bg-gray-100 transition-all"
            >
              Back to Login
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
