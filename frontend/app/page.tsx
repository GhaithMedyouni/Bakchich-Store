

import LandingPage1 from "./LandingPage/LP1";
import LandingPage2 from "./LandingPage/LP2";
import LandingPage3 from "./LandingPage/LP3";
import LandingPage4 from "./LandingPage/LP4";
import Nav from "./Components/NavBar"
import Footer from "./Components/Footer"


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