import React, { Suspense, lazy } from 'react';
import Navbar from "@/components/navbar";
import Address from "@/components/addres";
import Footer from "@/components/footer";

const Learningdatahero = lazy(() => import("@/components/como-data/learningdatahero"));
const Time_line = lazy(() => import('@/components/como-data/time-line'));
const Video = lazy(() => import('@/components/como-data/video'));
const Sponsors = lazy(() => import('@/components/como-data/sponsors'));
const Application = lazy(() => import('@/components/como-data/application'));

export default function ComoData() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Learningdatahero />
        <Time_line />
        <Video />
        <Sponsors />
        <Application />
      </Suspense>
      <Address />
      <Footer />
    </>
  );
}