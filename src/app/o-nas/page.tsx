"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Hero from "@/components/o-nas/hero";
import Banner from "@/components/o-nas/banner";
import Contact from "@/components/o-nas/contact";
import Galery from "@/components/o-nas/galery";
import Addres from "@/components/addres";
import Footer from "@/components/footer";

export default function further_action() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Banner/>
      <Galery/>
      <Contact/>
      <Addres/>
      <Footer/>
    </>
  );
}