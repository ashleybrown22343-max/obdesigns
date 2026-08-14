import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import WhyOB from "../components/WhyOB";
import AboutOB from "../components/AboutOB";
import PaintStory from "../components/PaintStory";
import Process from "../components/Process";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";
import { useSEO } from "../lib/useDocumentTitle";

export default function Home() {
  useSEO({
    title: "OB Designs & Interiors | Painting, POP, Interiors & Paint in Nigeria",
    description:
      "OB Designs & Interiors LTD offers painting, screeding, POP work, and interior & exterior design services nationwide in Nigeria. Book a consultation or shop paint & finishes today.",
  });

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
