"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import Map from "@/components/contact/map";
import Addres from "@/components/addres";
import Footer from "@/components/footer";

export default function further_action() {
  return (
    <>
      <Navbar/>
      <Map/>
      <Addres/>
      <Footer/>
    </>
  );
}