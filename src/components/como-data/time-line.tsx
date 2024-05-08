"use client"

import React from 'react';
import Image from 'next/image';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const image1 = '/img/como-data/NAD03299-jpg.webp';
const image2 = '/img/como-data/DSC07963-jpg-e1710341317235.webp';
const image3 = '/img/como-data/image-2.png';
const image4 = '/img/como-data/image-1.png';

interface TimelineElement {
  id: number;
  title: string;
  description: string;
  date: string;
  img: string;
  secondPart?: string;
}

const timelineElements: TimelineElement[] = [
  {
    id: 1,
    title: "Spuštění přihlášek",
    description: "Spouštíme přihlášky na kurz. Kurz je plně hrazen již městem Most a je tedy pro účastníky zdarma. Kurz bude probíhat v prostorách Coworkingu Most v Pasáži u Lva hned v centu města.",
    date: "Čtvrtek 21.03.",
    img: image1,
  },
  {
    id: 2,
    title: "Uzavření přihlášek",
    description: "Uzavíráme přihlášky a kontaktujeme všechny přihlášené, abychom sdělili podrobnosti.",
    date: "Středa 03.04.",
    img: image2,
  },
  {
    id: 3,
    title: "První víkend: Efektivní použití Excelu",
    description: "Začínáme v sobotu 06. dubna od 10h v prostorách Coworkingu Most COMO. Excel je nejčastěji a nejdůležitější program pro kancelářskou práci. Naučíme se jak efektivně používat Excel pro každodenní práci. Naučíme se základy excelu, klávesové zkratky a také funkce SUM, COUNT, IF, VLOOKUP MATCH-INDEX.",
    secondPart: "Po absolvování budete schopní pracovat s Excelem, který je stěžejním softwarem pro firmy všech velikostí.",
    date: "Víkend 06.04. - 07.04.",
    img: image3,
  },
  {
    id: 4,
    title: "Druhý víkend: SQL a Vizualizace",
    description: "Ve druhém týdnu si řekneme co je to Databáze a proč je důležitá. Naučíme se s ní pracovat a pokládat základní dotazy v programovacím jazyce SQL. Také se naučíme jak Data hezky zvizualizovat a předávat.",
    secondPart: "Po absolvování budete schopni pracovat jako pravý datový analytik - zpracovávat informace a předávat je v hezké vizuální podobě.",
    date: "Víkend 13.04. - 14.04.",
    img: image4,
  },
];

const TimeLine: React.FC = () => {
  return (
    <div className='p-4 sm:p-10 md:p-20 bg-gray-200'>
      <h1 className="text-base sm:text-xl md:text-3xl text-center font-bold pt-10 pb-10 md:pt-20 md:pb-20">Jak to bude fungovat?</h1>
      <VerticalTimeline className="before:bg-red-500 before:animate-slide" lineColor='white'>
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            visible={true}
            key={element.id}
            date={element.date}
            iconStyle={{ background: '#fff', color: '#fff' }}
          >
            {element.img && (
              <Image
                src={element.img}
                alt="Description"
                width={500} 
                height={300}
                layout="responsive"
                objectFit="cover"
                className="mt-3"
              />  
            )}
            <h3 className="text-base sm:text-lg md:text-xl font-bold p-2">{element.title}</h3>
            <p className="text-sm mt-6">{element.description}</p>
            {element.secondPart && <p className="text-sm">{element.secondPart}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;