"use client";

import { useState } from "react";
import Image from "next/image";
import bakchich from "../../../public/bakchich.png";
import googleIcon from "../../../public/google.png"; // ⚠️ ajoute une icône Google dans /public

export default function Register() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phone || !password || !agree) {
      alert("⚠️ Please fill all fields and agree to the terms before registering.");
      return;
    }

    const formData = { email, phone, password };
    console.log("🟢 Registering user:", formData);
    alert("✅ Account created successfully!");
  };

  // Exemple pour Google Sign-up (tu pourras remplacer par ton appel API ou Firebase)
  const handleGoogleSignup = () => {
    console.log("🔵 Redirecting to Google OAuth...");
    alert("🔵 Google signup in progress...");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* 🖼️ Partie gauche - image */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-[#5494EC] flex items-center justify-center">
        <Image
          src={bakchich}
          alt="Bakchich illustration"
          layout="fill"
        />
      </div>

      {/* 🧾 Partie droite - formulaire */}
      <div className="flex-1 flex items-center justify-center p-5 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-[#040308] mb-2">
            Register
          </h1>

          <p className="text-sm md:text-base font-normal text-[#040308] mb-8">
            Already have an account?{" "}
            <a href="/login" className="text-[#312ECB] hover:underline">
              Login
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm text-[#09090B] mb-1 block">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-[#09090B] mb-1 block">Phone Number</label>
              <div className="flex items-center border rounded-md p-2 focus-within:ring-2 focus-within:ring-[#4670CF]">
                <span className="text-gray-500 mr-2">+216</span>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-[#09090B] mb-1 block">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                required
              />
            </div>

            {/* Terms */}
            <div className="flex items-start mt-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={() => setAgree(!agree)}
                className="mt-1"
                required
              />
              <label className="ml-3 text-sm text-[#040308]">
                I agree to Bakchich’s{" "}
                <a href="#" className="text-[#4167BF] hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#4167BF] hover:underline">
                  Privacy Policy
                </a>.
              </label>
            </div>

            {/* Bouton Register */}
            <button
              type="submit"
              className="w-full bg-[#4670CF] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all mt-6"
            >
              Register
            </button>
          </form>

          {/* Ligne de séparation */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Bouton Google */}
          <button
            onClick={handleGoogleSignup}
            className="w-full border border-gray-300 bg-white text-gray-800 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-50 transition-all"
          >
            <Image
              src={googleIcon}
              alt="Google logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="font-medium">Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
