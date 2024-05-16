import "./App.css";
import Banner from "./components/Banner/Banner";
// import EverythingSection from "./components/Everything-Section/EverythingSection";
import Navbar from "./components/Header/Navbar";
import OrganizeSection from "./components/Organize-Section/OrganizeSection";
import PersonalizeSection from "./components/Personalize-Section/Personalize-Section";

function App() {
  return (
    <div className="flex  min-h-screen flex-col">
      <Navbar />
      <Banner />
      <PersonalizeSection />
      {/* <EverythingSection /> */}
      <OrganizeSection />
    </div>
  );
}

export default App;
