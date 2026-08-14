import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import WhyOB from "../components/WhyOB";
import AboutOB from "../components/AboutOB";
import PaintStory from "../components/PaintStory";
import Process from "../components/Process";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { useDocumentTitle } from "../lib/useDocumentTitle";

export default function Home() {
  useDocumentTitle("OB Designs & Interiors | Painting, POP, Interiors & Paint");

  return (
    <>
      <Hero />
      <FeaturedWork />
      <Services />
      <WhyOB />
      <AboutOB />
      <PaintStory />
      <Process />
      <Footer />
      <StickyCTA />
    </>
  );
}
