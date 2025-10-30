"use client";

import { useState } from "react";
import Image from "next/image";
import bakchich from "../../../public/bakchich.png";

export default function Register() {
  const [step, setStep] = useState(1);

  // Étape 1 : infos personnelles
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [creatorName, setCreatorName] = useState("");

  // Étape 2 : infos de compte
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !creatorName) {
      alert("Please fill all fields before continuing");
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !phone || !password || !agree) {
      alert("Please complete all fields and agree to the terms");
      return;
    }

    const formData = {
      firstName,
      lastName,
      creatorName,
      email,
      phone,
      password,
    };

    console.log("🟢 Registering user:", formData);
    alert("✅ Account created successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* 🖼️ Partie gauche - image fixe */}
      <div className="relative w-full md:w-1/2 h-full bg-[#5494EC] flex items-center justify-center">
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

          {/* ============ Étape 1 ============ */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div>
                <label className="text-sm text-[#09090B] mb-1 block">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <div>
                <label className="text-sm text-[#09090B] mb-1 block">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <div>
                <label className="text-sm text-[#09090B] mb-1 block">
                  Creator Name (AKA)
                </label>
                <input
                  type="text"
                  placeholder="Enter your creator name"
                  value={creatorName}
                  onChange={(e) => setCreatorName(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4670CF] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all mt-4"
              >
                Next
              </button>
            </form>
          )}

          {/* ============ Étape 2 ============ */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm text-[#09090B] mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <div>
                <label className="text-sm text-[#09090B] mb-1 block">
                  Phone Number
                </label>
                <div className="flex items-center border rounded-md p-2 focus-within:ring-2 focus-within:ring-[#4670CF]">
                  <span className="text-gray-500 mr-2">+216</span>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#09090B] mb-1 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <div className="flex items-start mt-2">
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={() => setAgree(!agree)}
                  className="mt-1"
                />
                <label className="ml-3 text-sm text-[#040308]">
                  I agree to Bakchich’s{" "}
                  <a href="#" className="text-[#4167BF] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#4167BF] hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="px-8 py-2 bg-[#4670CF] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                >
                  Create Store
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
