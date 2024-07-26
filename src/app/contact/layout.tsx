"use client";

import React from 'react';
import '@/css/globals.css';
import '@/css/style.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Kontakty - COMO</title>
        <link rel="icon" href="/img/svg.jpg" />
      </head>
      
      <body>
        <>
          {children}
        </>
      </body>
    </html>
  );
}