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
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Event[]>([]);

  useEffect(() => {
    const filtered = eventData.filter((event) =>
      (dateRange?.from && dateRange?.to && isWithinInterval(parseISO(event.date), {
        start: dateRange.from,
        end: dateRange.to
      })) && event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  }, [searchQuery, dateRange]);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setFilteredEvents(suggestions);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      const filtered = eventData.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSelectSuggestion = (name: string) => {
    setSearchQuery(name);
    
    const filtered = eventData.filter(event =>
      event.name.toLowerCase() === name.toLowerCase()
    );
    
    setFilteredEvents(filtered);
  };

  return (
    <div className={cn("grid gap-2 flex flex-col justify-end items-center p-4 mt-[150px] 2xl:mt-[200px] s:mt-[130px]", className)}>

      <div className="flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Hledat eventy..."
          className="form-input px-4 py-2 border border-gray-300 rounded-l-md w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <button
          onClick={handleClearSearch}
          className="bg-[#008DD2] duration-500 text-white font-bold py-2 px-4 rounded-r-md"
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
          onFocus={e => (e.currentTarget.style.backgroundColor = '#2d547d')}
          onBlur={e => (e.currentTarget.style.backgroundColor = '#008DD2')}
        >
          Odstranit
        </button>
      </div>

      {searchQuery && (
        <ul className="list-none p-2 w-full max-w-xl bg-white shadow-md rounded-lg">
          {suggestions.map((event) => (
            <li key={event.id} className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectSuggestion(event.name)}>
              {event.name}
            </li>
          ))}
        </ul>
      )}

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
                <a href={`/event/${event.name.replace(/\s+/g, "-").toLowerCase()}-${event.id}`} className="p-2 pb-6 sm:p-8 w-full flex flex-col items-center justify-center">
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