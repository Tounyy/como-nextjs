"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Hero from "@/components/o-nas/hero";
import Addres from "@/components/addres";
import Footer from "@/components/footer";

export default function further_action() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Addres/>
      <Footer/>
    </>
  );
}