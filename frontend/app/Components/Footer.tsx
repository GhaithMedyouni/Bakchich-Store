// Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logoFooter from "../../public/logoFooter.png"


export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image
            src={logoFooter}
            alt=""
            className=""
          />
          <p className="mb-4">Set your shop and earn your first Bakchich!</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Creators</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Creators</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">Create Shop</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Bakchich 101 Guide</a></li>
            <li><a href="#" className="hover:underline">Price Calculator</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/40 pt-4 text-center text-sm">
        Bakchich Store by Bakchich | 2024
      </div>
    </footer>
  );
}
