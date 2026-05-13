import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import QuoteSection from "../components/QuoteSection";
import Collections from "../components/Collections";
import Footer from "../components/Footer";
import FeaturedModels from "../components/FeaturedModels";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedModels />
      <QuoteSection />
      <Collections />
      <Footer />
    </>
  );
};

export default Home;