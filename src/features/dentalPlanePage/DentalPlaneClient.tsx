'use client';


import { useEffect } from 'react';
import { DentalBanner } from './components/DentalBanner/DentalBanner';
import { DentalPlaneContent } from './components/DentalPlaneContent/DentalPlaneContent';
import { useSearchParams } from 'next/navigation';
import { Accordion } from '@/shareComponent';

export default function DentalPlaneClient() {
  const searchParams = useSearchParams();
  const scroll = searchParams.get('scroll');
  useEffect(() => {
    if (scroll === 'faq') {
      const el = document.getElementById('faq-section');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [scroll]);

  return (
    <div className='relative max-w-6xl mx-4 md:mx-auto md:px-0 py-8 md:py-10 text-justify'>
      <div className='' />
      <DentalBanner />
      <DentalPlaneContent />
      <div className='mb-12' id='faq-section'>
        <Accordion />
      </div>
    </div>
  );
}
