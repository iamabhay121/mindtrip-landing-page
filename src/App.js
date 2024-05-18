import "./App.css";
import Banner from "./components/Banner/Banner";
import EverythingSection from "./components/Everything-Section/EverythingSection";
import Navbar from "./components/Header/Navbar";
import OrganizeSection from "./components/Organize-Section/OrganizeSection";
import PersonalizeSection from "./components/Personalize-Section/Personalize-Section";
import Create from "./components/create/Create";
import Exploring from "./components/exploring/Exploring";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import KindOf from "./components/kind-of-traveler/KindOf";
import OurAllies from "./components/our-allies/OurAllies";
import Partner from "./components/partner/Partner";
import Social from "./components/social/Social";
import TnC from "./components/terms-and-conditions/TnC";

function App() {
  return (
    <div className="flex  min-h-screen flex-col">
      <Navbar />
      <Banner />
      <PersonalizeSection />
      <EverythingSection />
      <OrganizeSection />
      <Exploring />
      <KindOf />
      <Create />
      <Social />
      <Partner />
      <Featured />
      <OurAllies />
      <Footer />
      <TnC />
    </div>
  );
}

export default App;
