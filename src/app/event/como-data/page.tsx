import Navbar from "@/components/navbar";
import Learningdatahero from "@/components/como-data/learningdatahero";
import Time_line from '@/components/como-data/time-line';
import Video from '@/components/como-data/video';
import Sponsors from '@/components/como-data/sponsors';
import Application from '@/components/como-data/application';
import Address from "@/components/address";
import Footer from "@/components/footer";

export default function ComoData() {
  return (
    <>
      <Navbar/>
      <Learningdatahero/>
      <Time_line/>
      <Video/>
      <Sponsors/>
      <Application/>
      <Address/>
      <Footer/>
    </>
  );
}