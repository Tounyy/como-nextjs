import Hero from "@/components/o-nas/hero";
import Banner from "@/components/o-nas/banner";
import Galery from "@/components/o-nas/galery";
import Contact from "@/components/o-nas/contact";
import Footer from "@/components/footer";

export default function About() {
  return (
    <>
      <Hero/>
      <Banner/>
      <Galery/>
      <Contact/>
      <div className="mt-20"/><div/>
      <Footer/>
    </>
  );
}