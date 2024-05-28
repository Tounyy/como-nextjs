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
    router.push('/further-action');
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
    <div className={cn("grid gap-2 flex flex-col justify-end items-center p-4 mt-[150px] 2xl:mt-[200px] s:mt-[130px]", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
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

      <section className="relative flex flex-col items-center text-left w-full">
        <div className={`container hero-container flex flex-col justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4 relative ${className}`}>
          <div className={`w-full mx-auto ${className}`}>
            <div className="w-full overflow-hidden relative">
              {filteredEvents.map((event) => (
                <div key={event.id} className="flex flex-col items-center justify-center w-full h-full">
                  <a href={`/event/${event.name.replace(/\s+/g, "-").toLowerCase()}`} className="p-2 pb-6 sm:p-4 w-full flex flex-col items-center justify-center">
                    <div className="flex flex-col min-h-full w-full text-black overflow-hidden rounded-lg border border-gray-300 shadow-md max-w-[1000px]">
                      <img src={event.image} alt={event.name} className="w-full h-100 object-cover" />
                      <div className="p-4">
                        <h1 className="text-xl font-bold">{event.name}</h1>
                        <p className="mb-2">{format(parseISO(event.date), "PPP", { locale: cs })}</p>
                        <p>{event.time}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}