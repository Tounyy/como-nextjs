"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  format,
  isWithinInterval,
  parseISO,
  startOfDay,
  addDays,
  endOfDay,
} from "date-fns";
import { cs } from "date-fns/locale";
import { CalendarIcon } from "@radix-ui/react-icons"
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import eventData from "@/data/eventsData";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore, { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useRouter } from 'next/navigation';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
}

export default function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [dateRange, setDate] = useState<DateRange | undefined>({
    from: startOfDay(new Date()),
    to: endOfDay(addDays(new Date(), 12)),
  });

  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const swiperRef = useRef<SwiperClass | null>(null);

  const buttonStyle: React.CSSProperties = {
    letterSpacing: '0.05em',
    fontWeight: 600,
    transition: 'background-color 0.5s'
  };

  const router = useRouter();

  const navigate = (): void => {
    router.push('/series/further-action');
  };

  useEffect(() => {
    if (dateRange?.from && dateRange?.to) {
      const filtered = eventData.filter((event) =>
        isWithinInterval(parseISO(event.date), {
          start: dateRange.from as Date,
          end: dateRange.to as Date,
        })
      );
      setFilteredEvents(filtered);
    }
  }, [dateRange]);

  return (
    <div className={cn("grid gap-2 flex flex-col justify-end items-center p-4", className)}>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              disabled={true}
              className={cn(
                "w-[300px] my-2 justify-start text-left font-normal shadow-md rounded-lg border border-gray-300 4xl:h-[100px] 4xl:text-[1.8rem] 4xl:w-[600px]",
                !dateRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-6 w-6 4xl:h-12 4xl:w-12" />
              {dateRange?.from ? (
                dateRange.to ? (
                  `${format(dateRange.from, "PPP", { locale: cs })} - ${format(dateRange.to, "PPP", { locale: cs })}`
                ) : (
                  format(dateRange.from, "PPP", { locale: cs })
                )
              ) : (
                "Vyberte datum"
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto h-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from}
              selected={dateRange}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <button 
          className="bg-[#008DD2] text-white rounded-lg py-3 px-10 transition-colors duration-500 hover:bg-[#2d547d] focus:bg-[#2d547d] text-xs"
            style={buttonStyle}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
            onFocus={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
            onBlur={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
            onClick={navigate}
          >
            Další Akce
          </button>
      </div>

      <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">

        <div className={`container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4 relative hidden xl:block ${className}`}>
          
          <div className={`w-full mx-auto ${className} flex items-center relative`}>
            <div className="flex w-full overflow-hidden relative pl-16 pr-16">
              
              <Swiper
                onSwiper={(swiper) => swiperRef.current = swiper}
                modules={[Navigation, Pagination]}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                spaceBetween={-30}
                slidesPerView={2}
                className="w-full relative px-16 flex justify-center items-center"
              >
                {filteredEvents.map((event) => (
                  <SwiperSlide key={event.id} className="flex flex-col items-center justify-center w-full h-full">
                    <a href={`/event/${event.name.replace(/\s+/g, "-").toLowerCase()}`} className="p-2 pb-6 sm:p-8 w-full flex flex-col items-center justify-center">
                      <div className="flex flex-col min-h-full w-full text-black overflow-hidden rounded-lg border border-gray-300 shadow-md">
                        <img src={event.image} alt={event.name} className="w-full h-100 object-cover" />
                        <div className="p-4">
                          <h1 className="text-xl font-bold">{event.name}</h1>
                          <p className="mb-2">{format(parseISO(event.date), "PPP", { locale: cs })}</p>
                          <p>{event.time}</p>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button onClick={() => swiperRef.current?.slidePrev()} className="absolute left-0 z-10 ml-4 text-gray-500 top-1/2 transform -translate-y-1/2">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button onClick={() => swiperRef.current?.slideNext()} className="absolute right-0 z-10 mr-4 text-gray-500 top-1/2 transform -translate-y-1/2">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>
        </div>

        <div className={`w-full mx-auto ${className} flex justify-center items-center relative xl:hidden`}>
          <Swiper
            modules={[Pagination]}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            spaceBetween={100}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className="w-full relative px-16 flex justify-center items-center"
          >
            {filteredEvents.map((event) => (
              <SwiperSlide key={event.id} className="flex flex-col items-center justify-center w-full h-full">
                <a href={`/event/${event.name.replace(/\s+/g, "-").toLowerCase()}`} className="p-2 pb-6 sm:p-8 w-full flex flex-col items-center justify-center">
                  <div className="flex flex-col min-h-full w-full text-black overflow-hidden rounded-lg border border-gray-300 shadow-md">
                    <img src={event.image} alt={event.name} className="w-full h-auto object-cover" />
                    <div className="p-4">
                      <h1 className="text-2xl font-bold">{event.name}</h1>
                      <p className="text-sm">{format(parseISO(event.date), "PPP", { locale: cs })}</p>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </section>
    </div>
  );
}