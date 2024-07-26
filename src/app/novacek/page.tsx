"use client";

import React from 'react';
import Hero from "@/components/novacek/hero";
import Information from "@/components/novacek/information";
import Contact from "@/components/novacek/contact";
import Footer from "@/components/footer";
import Line from "@/components/line";

export default function further_action() {
  return (
    <>
      <Hero/>
      <Line/>
      <Information/>
      <Contact/>
      <div className="mt-20"/><div/>
      <Footer/>
    </>
  );
}