import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import KineticText from "@/components/home/kinetic-text";
import CardMenu from "@/components/home/menu";
import Query from "@/components/home/query";
import WorkspaceFeatures from "@/components/home/workspace-features";
import NewComer from "@/components/home/new-comer";
import Calendar from "@/components/home/calendar-pick";
import Contact from "@/components/home/contact";
import Address from "@/components/address";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <KineticText/>
      <CardMenu/>
      <Query/>
      <WorkspaceFeatures/>
      <NewComer/>
      <Calendar/>
      <Contact/>
      <Address/>
      <Footer/>
    </>
  );
}