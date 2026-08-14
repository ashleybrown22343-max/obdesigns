import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import WhyOB from "../components/WhyOB";
import AboutOB from "../components/AboutOB";
import PaintStory from "../components/PaintStory";
import Process from "../components/Process";
import Footer from "../components/Footer";
import StickyCTA from "../components/StickyCTA";

export default function Home() {
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
