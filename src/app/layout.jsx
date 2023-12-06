
import React from 'react';

import Contents from './componets/content'
import NavBar from './componets/nav'
import './globals.css'
import Providers from './provider';

import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: 'Originally.Black',
  description: 'Connect you with the vibrant tapestry of Black Entrepreneurs that enrich your communities.',
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: 'Originally.Black'
    // startUpImage: [],
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Providers>
        <body>
          <main className="">
            <NavBar />
            <Contents>
              {children}
            </Contents>
          </main>
          <Analytics />
        </body>
      </Providers>
    </html>
  )
}
