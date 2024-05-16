import "./App.css";
import Banner from "./components/Banner/Banner";
// import EverythingSection from "./components/Everything-Section/EverythingSection";
import Navbar from "./components/Header/Navbar";
import OrganizeSection from "./components/Organize-Section/OrganizeSection";
import PersonalizeSection from "./components/Personalize-Section/Personalize-Section";
import Exploring from "./components/exploring/Exploring";
import KindOf from "./components/kind-of-traveler/KindOf";
import Social from "./components/social/Social";

function App() {
  return (
    <div className="flex  min-h-screen flex-col">
      <Navbar />
      <Banner />
      <PersonalizeSection />
      {/* <EverythingSection /> */}
      <OrganizeSection />
      <Exploring />
      <KindOf />
      <Social />
    </div>
  );
}

export default App;
