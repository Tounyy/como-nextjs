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
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import eventData from "@/data/eventsData";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  const navigate = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return (newIndex < 0 ? filteredEvents.length - 2 : newIndex) % filteredEvents.length;
    });
  };

  return (
    <div className={cn("grid gap-2 flex flex-col justify-end items-center p-4", className)}>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[300px] my-10 justify-start text-left font-normal",
              !dateRange && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
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
        <PopoverContent className="w-auto p-0" align="start">
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

      <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
        <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4 rounded-lg border border-gray-300 shadow-md">

          <div className={`w-full mx-auto ${className} flex items-center`}>

            <button onClick={() => navigate(-1)} className="absolute left-0 z-10 ml-4 text-gray-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex w-full overflow-hidden">
              {filteredEvents.slice(currentIndex, currentIndex + 2).map((event) => (
                <div key={event.id} className="flex-none w-1/2 p-4">
                  <div className="flex flex-col min-h-full w-full text-black overflow-hidden border rounded-lg shadow-md">
                    <img src={event.image} alt={event.name} className="w-full h-100 object-cover" />
                    <div className="p-4 flex flex-col justify-center bg-white">
                      <h1 className="text-xl font-bold">{event.name}</h1>
                      <p className="mb-2">{format(parseISO(event.date), "PPP", { locale: cs })}</p>
                      <p>{event.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button onClick={() => navigate(1)} className="absolute right-0 z-10 mr-4 text-gray-500">
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}