"use client";

import { useState } from "react";
import Image from "next/image";
import { FaUpload } from "react-icons/fa";
import bakchich from "../../../public/bakchich.png";
import logo from "../../../public/logo.png"

export default function Register() {
  const [step, setStep] = useState(1);

  // === Étape 1 : infos personnelles ===
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [creatorName, setCreatorName] = useState("");

  // === Étape 2 : infos de compte ===
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  // === Étape 3 : photo de profil ===
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // === Étape 4 : catégories ===
  const categories = [
    "Gaming", "Podcast", "Education", "Video editing",
    "Art & Design", "Fashion & Style", "Writing",
    "Health & Wellness", "Lifestyle & Travel", "Tech & Coding"
  ];
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const toggleCategory = (cat: string) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // === Gestion des étapes ===
  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      firstName, lastName, creatorName,
      email, phone, password,
      profilePic, selectedCats
    });
    alert("✅ Account created successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* 🖼️ Partie gauche - image fixe */}
      <div className="relative w-full md:w-1/2 h-full bg-[#5494EC] flex items-center justify-center">
        <Image src={bakchich} alt="Bakchich illustration" layout="fill" />
      </div>

      {/* 🧾 Partie droite - formulaire */}
      <div className="flex-1 flex items-center justify-center p-5 md:p-10 bg-white">
        <div className="w-full max-w-md">
          {(step === 3 || step === 4) && (
            <div className="flex justify-center mb-6 animate-fadeIn">
              <Image
                src={logo}
                alt="Bakchich Logo"
                width={120}
                height={120}
                className="object-contain drop-shadow-lg"
              />
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-[#040308] mb-2">
            {step === 1 && "Register"}
            {step === 2 && "Create Your Account"}
            {step === 3 && (

              <p className="text-[30px] text-center">
                Make Your Profile Shine!
              </p>
            )}
            {step === 4 && (
              <p className="text-center text-[30px]">
                Let's Personaliza Your Journey!
              </p>
            )}
          </h1>

          <p className="text-sm md:text-base font-normal text-[#040308] mb-8">
            {step === 1 && <>Already have an account? <a href="/login" className="text-[#312ECB] hover:underline">Login</a></>}
            {step === 2 && <>Already have an account? <a href="/login" className="text-[#312ECB] hover:underline">Login</a></>}
            {step === 3 && (
              <p className="text-center text-[20px]">
                Add a profile picture to help fans recognize you.
              </p>
            )}
            {step === 4 && (
              <p className="text-center">
                What describes your content? Pick one or more categories.
              </p>
            )}
          </p>

          {/* ============ Étape 1 ============ */}
          {step === 1 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!firstName || !lastName || !creatorName) {
                  alert("Please fill all fields before continuing");
                  return;
                }
                handleNext();
              }}
              className="space-y-4"
            >
              <div>
                <label className="text-sm text-[#09090B] mb-1 block">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <div>
                <label className="text-sm text-[#09090B] mb-1 block">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                />
              </div>

              <div>
                <label className="text-sm text-[#09090B] mb-1 block">Creator Name (AKA)</label>
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email || !phone || !password || !agree) {
                  alert("Please complete all fields and agree to the terms");
                  return;
                }
                handleNext();
              }}
              className="space-y-4"
            >
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
                <label className="text-sm text-[#09090B] mb-1 block">Phone Number</label>
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
                <label className="text-sm text-[#09090B] mb-1 block">Password</label>
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
                  <a href="#" className="text-[#4167BF] hover:underline">Terms of Service</a> and{" "}
                  <a href="#" className="text-[#4167BF] hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <div className="flex justify-between mt-6 gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/2 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#4670CF] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                >
                  Next
                </button>
              </div>

            </form>
          )}

          {/* ============ Étape 3 ============ */}

          {step === 3 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (!profilePic) {
                  alert("⚠️ Please upload a profile picture before continuing!");
                  return;
                }

                handleNext();
              }}
              className="space-y-4"
            >
              <div className="flex flex-col items-center">
                {/* 🖼️ Aperçu photo */}

                <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mb-6 overflow-hidden border">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.79.676 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>

                {/* 📤 Upload bouton */}
                <label className="cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-all">
                  <FaUpload />
                  <span>Upload profile picture</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {/* 🟦 Boutons de navigation */}
                <div className="flex justify-between mt-6 gap-4 w-full">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="w-1/2 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    className="w-1/2 py-3 bg-[#4670CF] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}


          {/* ============ Étape 4 ============ */}
          {step === 4 && (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (selectedCats.length === 0) {
                  alert("⚠️ Please select at least one category before finishing!");
                  return;
                }

                handleSubmit(e);
              }}
              className="space-y-6"
            >
              {/* 🏷️ Liste des catégories */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => toggleCategory(cat)}
                    className={`px-4 py-2 rounded-full border transition-all ${selectedCats.includes(cat)
                      ? "text-[#4670CF] border-[#4670CF]"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* 🟦 Boutons de navigation */}
              <div className="flex justify-between mt-6 gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="w-1/2 py-3 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 font-medium"
                >
                  ← Back
                </button>

                <button
                  type="submit"
                  className="w-1/2 py-3 bg-[#4670CF] text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                >
                  Finish Registration
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
