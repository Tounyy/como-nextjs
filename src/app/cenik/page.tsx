import Hero from "@/components/cenik/hero";
import OneDayTariff from "@/components/cenik/free-tariff";
import DayTariff from "@/components/cenik/day-tariff";
import MonthTariff from "@/components/cenik/month-tariff";
import BoardroomTariff from "@/components/cenik/boardroom-tariff";
import PressCenter from "@/components/cenik/printing-center";
import RenderPriceItems from "@/components/cenik/render-price-items";
import Contact from "@/components/cenik/contact";
import Footer from "@/components/footer";

import Line from "@/components/line";

export default function Cenik() {
  return (
    <>
      <Hero/>
      <Line/>
      <OneDayTariff/>
      <Line/>
      <DayTariff/>
      <Line/>
      <MonthTariff/>
      <Line/>
      <BoardroomTariff/>
      <Line/>
      <PressCenter/>
      <RenderPriceItems/>
      <Contact/>
      <div className="mt-20"/><div/>
      <Footer/>
    </>
  );
}