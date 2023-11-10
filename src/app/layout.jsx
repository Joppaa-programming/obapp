
import React from 'react';
// import { Provider } from "react-redux";
import Contents from './componets/content'
import NavBar from './componets/nav'
import './globals.css'
import Providers from './provider';
import Modal from './componets/modal';
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: 'OriginallyBlac',
  description: 'OriginallyBlac',
}
export const revalidate = 60
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
