

import LandingPage1 from "./LP1";
import LandingPage2 from "./LP2";
import LandingPage3 from "./LP3";
import LandingPage4 from "./LP4";
import Nav from "../Components/NavBar"
import Footer from "../Components/Footer"


export default function LandingPage() {
  return (
    <div >
      

      {/* Sections */}
      <Nav />
      <LandingPage1  />
      <LandingPage2  />
      <LandingPage3  />
      <LandingPage4  />
      <Footer  />
      
      
    </div>
  );
}