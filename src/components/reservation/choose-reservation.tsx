import React, { useState } from 'react';
import Image from 'next/image';

type Location = {
  id: string;
  name: string;
};

const MapPage: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const locations: Location[] = [
    { id: 'S1', name: 'S1' },
    { id: 'S2', name: 'S2' },
    { id: 'S3', name: 'S3' },
    { id: 'G1', name: 'G1' },
    { id: 'M1', name: 'M1' },
    { id: 'M2', name: 'M2' },
    { id: 'M3', name: 'M3' },
    { id: 'M4', name: 'M4' },
    { id: 'B1', name: 'B1' },
    { id: 'B2', name: 'B2' },
    { id: 'B3', name: 'B3' },
    { id: 'B4', name: 'B4' },
    { id: 'B5', name: 'B5' },
    { id: 'B6', name: 'B6' }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected Location: ", selectedLocation);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full p-5">
      <div className="relative w-full max-w-4xl">
        <Image
          src="/img/reservation/da28bf49-4972-4f0d-b730-8549b707ec81.jpeg"
          layout="responsive"
          width={1287}
          height={768}
          alt="Map"
        />
      </div>
      <select
        className="mt-4 p-2 border rounded"
        value={selectedLocation}
        onChange={handleChange}
        style={{ minWidth: '200px', marginBottom: '1rem' }} 
      >
        {locations.map((location) => (
          <option key={location.id} value={location.id}>
            {location.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleSubmit}
        className="px-3 py-2 text-white font-bold text-[17px] leading-tight uppercase rounded-3xl shadow-md bg-[#008DD2] hover:bg-[#2d547d] transition duration-150 ease-in-out cursor-pointer mb-10"
      >
        Poslat rezervaci
      </button>
    </div>
  );
};

export default MapPage;