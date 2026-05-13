import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedModels from "./components/FeaturedModels";
import QuoteSection from "./components/QuoteSection";
import Collections from "./components/Collections";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <>
    {/* <div className="text-6xl font-bold text-blue-500">
      Tailwind is working!
    </div> */}


      <Navbar />
      <Hero />
      <About />
      <FeaturedModels />
      <QuoteSection />
      <Collections />
      <Footer />
    </>
  );
}

export default App;