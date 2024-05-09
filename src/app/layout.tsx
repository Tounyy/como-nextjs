"use client";

import React, { useEffect } from 'react';
import '@/styles/globals.css';
import '@/styles/style.css';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import Banner from '@/components/cookies/banner';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consentGiven = localStorage.getItem('cookie_consent');
      if (consentGiven === 'yes') {
        posthog.init('phc_Ie9XWl5IuIRGvcr7ZkFdPHTjSZ8B4gz43R4K7OoPmL6', {
          api_host: 'https://eu.i.posthog.com',
          persistence: 'localStorage+cookie',
          loaded: (posthog) => {
            console.log('PostHog loaded successfully!');
            if (process.env.NODE_ENV === 'development') {
              posthog.debug();
            }
          },
        });
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Home - COMO</title>
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      
      <body>
        <PostHogProvider client={posthog}>
          <Banner />
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}