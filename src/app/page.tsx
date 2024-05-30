import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import Banner from "@/components/home/application-form";
import KineticText from "@/components/home/kinetic-text";
import CardMenu from "@/components/home/menu";
import Query from "@/components/home/query";
import WorkspaceFeatures from "@/components/home/workspace-features";
import NewComer from "@/components/home/new-comer";
import DatePicker from "@/components/home/date-picker"
import Contact from "@/components/home/contact";
import Address from "@/components/addres";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Banner/>
      <KineticText/>
      <CardMenu/>
      <Query/>
      <WorkspaceFeatures/>
      <NewComer/>
      <DatePicker/>
      <Contact/>
      <Address/>
      <Footer/>
    </>
  );
}