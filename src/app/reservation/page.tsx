"use client";

import React from 'react';
import Navbar from "@/components/navbar";
import { Calendar } from "@/components/ui/calendar";
import Reservation from "@/components/reservation/choose-reservation";
import Footer from "@/components/footer";

export default function Reservation_form() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const [startTime, setStartTime] = React.useState('7');
  const [endTime, setEndTime] = React.useState('19');

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 7; hour <= 19; hour++) {
      options.push(<option key={`${hour}:00`} value={`${hour}:00`}>{`${hour}:00`}</option>);
      if (hour !== 19) {
        options.push(<option key={`${hour}:30`} value={`${hour}:30`}>{`${hour}:30`}</option>);
      }
    }
    return options;
  };

  const timeOptions = generateTimeOptions();

  return (
    <>
      <Navbar/>
      <section id="hero" className="flex justify-center items-center min-h-[40vh] w-full mt-20">
        <div className="container hero-container flex flex-col sm:flex-row justify-around items-center mx-auto max-w-[600px] p-4 py-2 text-center">
          <div className="flex-1 mb-4"> 
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="py-20"
            />
          </div>
          <div style={{ flex: '1 0 50%' }}>
            <div className="flex flex-col items-center space-y-2">
              <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                ZAČÁTEK REZERVACE
              </label>
              <select
                id="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-48 h-10 text-base border-gray-300 mt-4 p-2 border rounded-sm	 focus:border-blue-500 focus:ring-blue-500"
              >
                {timeOptions}
              </select>
              
              <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
                KONEC REZERVACE
              </label>
              <select
                id="end-time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-48 h-10 text-base border-gray-300 mt-4 p-2 border rounded-sm	 focus:border-blue-500 focus:ring-blue-500"
              >
                {timeOptions}
              </select>
            </div>
          </div>
        </div>
      </section>
      <Reservation/>
      <Footer/>
    </>
  );
}