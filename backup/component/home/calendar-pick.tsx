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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);

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

  const scrollLeft = () => {
    setVisibleIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const scrollRight = () => {
    setVisibleIndex((prevIndex) =>
      Math.min(prevIndex + 3, Math.max(filteredEvents.length - 3, 0))
    );
  };

  const getVisibleEvents = () => {
    return filteredEvents.slice(visibleIndex, visibleIndex + 3);
  };

  // SVG Icons
  const leftArrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#5f78f1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-8 h-8"
    >
      <path d="M15 18L9 12l6-6" />
    </svg>
  );

  const rightArrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#5f78f1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      className="w-8 h-8"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  return (
    <div className={cn("flex flex-col items-center p-5", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              "w-[300px] my-4 justify-start text-left font-normal",
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

      <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center">
        <button onClick={scrollLeft} className="p-2">
          {leftArrowSVG}
        </button>
        <div
          ref={carouselRef}
          className="flex flex-nowrap gap-6 justify-center overflow-x-auto scrollbar-hide w-full"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {getVisibleEvents().map((event) => (
            <a
              key={event.id}
              className="flex-none flex flex-col min-h-[280px] w-80 md:w-[calc(33.33%-1rem)] lg:w-80 text-black overflow-hidden border rounded-lg shadow-md"
              href={`/event/${event.name.replace(/\s+/g, "-").toLowerCase()}`}
              style={{ scrollSnapAlign: "center" }}
            >
              <div className="flex-1">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4 flex flex-col justify-center bg-white">
                <h1 className="text-xl font-bold mb-2">{event.name}</h1>
                <p className="mb-2">
                  {format(parseISO(event.date), "PPP", { locale: cs })}
                </p>
                <p>{event.time}</p>
              </div>
            </a>
          ))}
        </div>
        <button onClick={scrollRight} className="p-2">
          {rightArrowSVG}
        </button>
      </div>
      <div className="flex justify-between items-center mt-4 w-full max-w-screen-lg mx-auto">
        <a href="#" className="text-gray-500 hover:text-black">
          Předchozí Akce
        </a>
        <a href="#" className="text-gray-500 hover:text-black">
          Následující Akce
        </a>
      </div>
    </div>
  );
}