"use client";

import { useState } from "react";
import Image from "next/image";
import bakchich from "../../public/bakchich.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    console.log("🔹 Logging in with:", { email, password, remember });
    setError(null);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-screen overflow-hidden">
      {/* 🖼️ Partie gauche - image plein écran */}
      <div className="relative w-full md:w-1/2 h-full">
        <Image
          src={bakchich}
          alt="Description de l'image"
          layout="fill" // Permet à l'image de remplir tout le conteneur
           // Utilise object-cover pour que l'image prenne tout l'espace
        />
      </div>

      {/* 🧾 Partie droite - formulaire */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-10 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-[#040308]">
            Welcome Back
          </h1>
          <p className="text-sm md:text-base font-normal text-[#040308] mb-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#312ECB] hover:underline">
              Create a store
            </a>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-normal text-[#09090B] mb-2 block"
              >
                Email/Username
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email/username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-normal text-[#09090B] mb-2 block"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-[#4670CF]"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <label
                  htmlFor="remember"
                  className="ml-3 text-sm font-normal text-[#040308]"
                >
                  Remember me
                </label>
              </div>

              <a
                href="/forgot-password"
                className="text-[#4167BF] text-sm font-normal hover:underline"
              >
                Forgot password
              </a>
            </div>

            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#4670CF] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
