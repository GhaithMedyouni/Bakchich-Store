import Image from "next/image";
import droitLP1 from "../../public/droitLP1.png";
import droitLP2 from "../../public/droitLP2.png";
import droitLP3 from "../../public/droitLP3.png";
import droitLP4 from "../../public/droitLP4.png";
import gaucheLP1 from "../../public/gaucheLP1.png";
import gaucheLP2 from "../../public/gaucheLP2.png";
import gaucheLP3 from "../../public/gaucheLP3.png";
import gaucheLP4 from "../../public/gaucheLP4.png";
import france from "../../public/france.png";
import microsoft from "../../public/microsoft.png";
import inco from "../../public/inco.png";
import minassa from "../../public/minassa.png";
import eklektic from "../../public/eklektic.png";
import orange from "../../public/orange.png";
import brand6 from "../../public/brand6.png";

export default function LandingPage4() {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-white mt-10">
     <section className="flex flex-col items-center justify-center py-10">
      <div className="relative flex flex-col items-center">
        {/* Avatars à gauche */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 -ml-72">
          <Image src={gaucheLP1} alt="User" width={90} height={90} className="rounded-full ml-[-1px]" />
          <Image src={gaucheLP2} alt="User" width={65} height={65} className="rounded-full shadow-md ml-[-75px]" />
          <Image src={gaucheLP3} alt="User" width={150} height={150} className="rounded-full mt-4 ml-6" />
          <Image src={gaucheLP4} alt="User" width={55} height={55} className="rounded-full shadow-md ml-[-80px]" />
        </div>

        {/* Titre */}
        <h2 className="text-[30px] font-semibold text-[#000000] mb-4 text-center">
          What our customers say about us
        </h2>

        {/* Carte de témoignage */}
        <div className="bg-gray-100 rounded-2xl shadow-md w-[550px] px-6 py-6 text-center">
          <p className="text-[#000000] text-[18px] font-light leading-[1.1]">
            <span className="text-[40px] text-gray-400">❝</span> The Bakchich Store app is fantastic!  
            The<br/> UI is clean and easy to use, and I love<br/> supporting African creators.  
            Checkout is<br/> smooth, and there's a great variety of<br/> products.  
            Highly recommend!<br/>
            <span className="text-[40px] text-gray-400 align-bottom ml-64">❞</span>
          </p>
        </div>

        {/* Avatars à droite */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 -mr-72">
          <Image src={droitLP1} alt="User" width={90} height={90} className="rounded-full ml-[750px]" />
          <Image src={droitLP2} alt="User" width={55} height={55} className="rounded-full shadow-md ml-[600px]" />
          <Image src={droitLP3} alt="User" width={65} height={65} className="rounded-full mt-4 ml-[650px]" />
          <Image src={droitLP4} alt="User" width={150} height={150} className="rounded-full shadow-md ml-[780px]" />
        </div>

        {/* Boutons navigation */}
        <div className="flex gap-3 mt-5">
          <button className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            ←
          </button>
          <button className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
            →
          </button>
        </div>
      </div>
      </section>

       <section className="bg-white py-10 px-6 flex flex-col md:flex-row  justify-between  mx-auto mt-6">
        {/* Texte gauche */}
        <div className="ml-[-10px] text-left ">
          <h2 className="text-[60px] font-semibold text-[#171A1F] mb-2">Trusted by</h2>
          <p className="text-[#323842] text-[22px] leading-snug mb-6">
            Experience the commitment of <br/> <span className="font-semibold">Bakchich Store</span>, trusted by top<br/> brands, to showcasing authentic<br/> African creativity.
          </p>
          <button className="bg-[#F8D938] w-[180px] h-[50px] rounded-[25px] text-[18px] text-[#000000] font-bold shadow-md transition-all duration-300 ease-in-out hover:bg-[#FFF700] hover:shadow-lg hover:scale-105">
            Contact us
          </button>
        </div>

        {/* Logos droite */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-8 md:mt-0 ml-52">
          {[france, microsoft, inco, minassa, eklektic, orange, brand6].map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`Brand ${i + 1}`}
              width={90}
              height={55}
              
            />
          ))}
        </div>
      </section>
    </div>
  );
}
