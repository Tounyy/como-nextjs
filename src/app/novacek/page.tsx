"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Hero from "@/components/novacek/hero";
import Information from "@/components/novacek/information";
import Contact from "@/components/novacek/contact";
import Addres from "@/components/addres";
import Footer from "@/components/footer";

export default function further_action() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full mt-[20px]">
        <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
          <div className="w-full bg-[#028ed2] h-[2px] max-w-[2000px] my-4"></div>
        </div>
      </section>
      <Information/>
      <Contact/>
      <Addres/>
      <Footer/>
    </>
  );
}