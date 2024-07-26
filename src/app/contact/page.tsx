"use client";

import React from 'react';
import Contact from "@/components/contact/contact";
import Maps from "@/components/contact/maps";
import Footer from "@/components/footer";

export default function further_action() {
  return (
    <>
      <Contact/>
      <Maps/>
      <div className="mt-20"/><div/>
      <Footer/>
    </>
  );
}