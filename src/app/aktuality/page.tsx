"use client";

import React from 'react';
import Hero from "@/components/aktuality/hero";
import Contact from "@/components/aktuality/contact";
import ComoWorkshop from "@/components/aktuality/como-workshop";
import ComoKonzultace from "@/components/aktuality/como-konzultace";
import ComoEvent from "@/components/aktuality/como-event";
import Footer from "@/components/footer";
import Line from "@/components/line";

export default function Aktuality() {
  return (
    <>
      <Hero/>
      <Line/>
      <ComoWorkshop/>
      <Line/>
      <ComoKonzultace/>
      <Line/>
      <ComoEvent/>
      <Contact/>
      <div className="mt-20"/><div/>
      <Footer/>
    </>
  );
}