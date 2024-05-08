import Head from 'next/head';

import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import KineticText from "@/components/home/kinetic-text";
import Card from "@/components/home/card";
import CardMenu from "@/components/home/menu";
import Query from "@/components/home/query";
import WorkspaceFeatures from "@/components/home/workspace-features";
import NewComer from "@/components/home/new-comer";
import Calendar from "@/components/home/calendar-pick";
import InfoAbout from "@/components/home/info-about";
import Contact from "@/components/home/contact";
import Address from "@/components/address";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <KineticText/>
      <Card/>
      <CardMenu/>
      <Query/>
      <WorkspaceFeatures/>
      <NewComer/>
      <Calendar/>
      <InfoAbout/>
      <Contact/>
      <Address/>
      <Footer/>
    </>
  );
}