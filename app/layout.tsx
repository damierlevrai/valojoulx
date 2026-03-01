'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}