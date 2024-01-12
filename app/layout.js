import { Inter } from 'next/font/google'
import "./globals.css";
import { nunito_sans } from './utils/fonts';
import React from 'react';


const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
 return (
    <html className='scroll-smooth' lang="en">
    
      <body className={nunito_sans}>
{children}
      </body>
    </html>
  )
}