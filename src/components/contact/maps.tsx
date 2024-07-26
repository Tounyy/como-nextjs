"use client";

import React from 'react';

const Contact: React.FC = () => {

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="flex flex-wrap max-w-[1500px] 4k:max-w-[3000px] mx-auto font-thin w-full grid grid-cols-1 md:grid-cols-2 overflow-x-hidden px-6">

        <div className="bg-[#353c73] text-white w-full overflow-x-hidden flex flex-col items-center gap-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-6">
              <a href="tel:+420734393753" className="hover:underline">
                +420 734 393 753
              </a>
            </h1>
            <p className="text-base">
              Napište nám{' '}
              <a href="mailto:info@coworking-most.cz" className="underline">
                info@coworking-most.cz
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center bg-[#008dd2] py-12 w-full h-full self-center">
            <div className='text-left py-12 p-4'>
              <div className="font-semibold">Adresa</div>
              <div>Pasáž U Lva, Radniční 1/2, Most, 434 01</div>
            </div>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1268.8331809643482!2d13.640568!3d50.503167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a211c6fa73d61%3A0x973f5a8fb7dfe3c1!2sCoworking%20Most!5e0!3m2!1sen!2sus!4v1717062884643!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            className='overflow-x-hidden'
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;