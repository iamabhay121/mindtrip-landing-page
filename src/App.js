import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Header/Navbar";
import PersonalizeSection from "./components/Personalize-Section/Personalize-Section";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Banner />
      <PersonalizeSection />
    </div>
  );
}

export default App;
