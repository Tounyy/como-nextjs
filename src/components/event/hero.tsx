"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
  description: string;
}

const eventsData: Event[] = require("@/data/eventsData").default;

const EventDetail: React.FC = () => {
  const [eventId, setEventId] = useState<number | null>(null);
  const [firstEvent, setFirstEvent] = useState<Event | null>(null);
  const [isPastEvent, setIsPastEvent] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const path = window.location.pathname;
    const parts = path.split('-');
    const idPart = parts.find(part => /^\d+$/.test(part)); // Najde část, která obsahuje pouze čísla

    if (idPart) {
      setEventId(Number(idPart));
    }
  }, []);

  useEffect(() => {
    if (eventId !== null) {
      const event = eventsData.find((event: Event) => event.id === eventId);
      setFirstEvent(event || null);

      if (event) {
        const eventDateTime = new Date(`${event.date}T${event.time.split(' - ')[0]}:00`);
        const now = new Date();
        setIsPastEvent(eventDateTime < now);
      }
    }
  }, [eventId]);

  if (!firstEvent) {
    return (
      <div role="status" className="flex justify-center items-center h-full">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left min-h-[30vh] w-full mt-[150px] 2xl:mt-[100px] s:mt-[130px]">
      <div className="container hero-container flex flex-col sm:flex-row-reverse justify-between items-center mx-auto w-full max-w-[1500px] 6xl:max-w-[2000px] p-4">
        <div className="bg-white text-gray-800 p-4 sm:p-6 md:p-8">

          <div className="mt-4">
            <button 
              onClick={() => router.back()} 
              className="flex items-center justify-center text-black py-2 rounded text-base font-semibold tracking-wide my-6"
            >

            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>

              Všechny Akce

            </button>
          </div>

          {isPastEvent && (
            <div className="bg-blue-100 text-blue-800 p-4 rounded">
              Akce již proběhla.
            </div>
          )}

          <div className='py-10'>
            <h2 className="text-xl md:text-2xl font-bold mb-2">{firstEvent.name}</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm md:text-md text-gray-600">{firstEvent.date} @ {firstEvent.time}</span>
            </div>
            <img src={firstEvent.image} alt="Event" className="w-full h-auto mb-4 rounded" />
            <p className="text-md md:text-lg">{firstEvent.description}</p>
            <div className="mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 visited:text-purple-600">Learn more</a>
            </div>
          </div>

          <div className="relative shadow-md rounded-lg border border-gray-300 overflow-hidden">
            <div className="w-full h-450">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1268.8331809643482!2d13.640568!3d50.503167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a211c6fa73d61%3A0x973f5a8fb7dfe3c1!2sCoworking%20Most!5e0!3m2!1sen!2sus!4v1717062884643!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default EventDetail;