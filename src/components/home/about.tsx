"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const About = () => {
  const images = [
    '/img/home/about/NAD04625-jpg.webp',
    '/img/home/about/DSC08058-jpg.webp'
  ];

  return (
    <section className="relative flex flex-col sm:flex-row-reverse items-center text-left w-full">
      <div className="relative flex-col md:flex-row max-w-[1500px] 4k:max-w-[3000px] mx-auto my-8 p-6">        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 text-left">
            
          <div className="flex flex-col items-start justify-start text-left w-full">
            <h1 className="text-4xl font-bold mb-4">Podpora podnikání</h1>
            <p className="text-black text-lg font-normal mt-4">Statutární město Most zařadilo podporu Podnikání jako jednu ze svých strategických oblastí rozvoje.</p>
            <p className="text-gray-600 mt-4">Mezi vybrané deklarované cíle patří rozvoj podnikání v kreativních odvětvích, odvětvích s vyšší přidanou hodnotou založenou především na inovacích. Hlavní podpora bude věnována kreativnímu průmyslu, energetice a informačním technologiím.</p>
            <p className="text-gray-600 mt-4">Proto jsme se rozhodli vybudovat sdílený kancelářský prostor COMO – Coworking Most, který jistě usnadní mnohým začínajícím podnikatelům start podnikání a vytvoří tolik potřebné technické zázemí.</p>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-full mb-8 md:mb-0 rounded-lg"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
              <img className="w-full h-auto rounded-lg object-cover" src={image} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default About;