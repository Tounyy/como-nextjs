import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Menu from "@/components/home/menu";
import Reviews from "@/components/home/reviews";
import Event from "@/components/home/event";
import Contact from "@/components/home/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Banner/>
      <About/>
      <Menu/>
      <Reviews/>
      <Event/>
      <Contact/>
      <div className="mt-20"/><div/>
      <Footer/>
    </>
  );
}