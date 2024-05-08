'use client';

import React from 'react';

const video1 = '/video/An.mov';
const video2 = '/video/Woznica.mov';
const video3 = '/video/Elen.mov';

const VideoComponent: React.FC = () => {
  return (
    <div className="bg-white py-10 min-h-[50vh] flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-10">Co o nás praví účastníci jiných kurzů</h2>
        <div className="flex flex-wrap justify-center items-center gap-1">
          <div className="w-full md:w-1/4 px-2">
            <video src={video1} controls className="w-full h-auto mx-auto" style={{ maxWidth: '100%' }}>
            </video>
          </div>
          <div className="w-full md:w-1/4 px-2">
            <video src={video2} controls className="w-full h-auto mx-auto" style={{ maxWidth: '100%' }}>
            </video>
          </div>
          <div className="w-full md:w-1/4 px-2">
            <video src={video3} controls className="w-full h-auto mx-auto" style={{ maxWidth: '100%' }}>
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;