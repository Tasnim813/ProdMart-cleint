import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className='relative w-full h-[90vh] sm:h-[80vh] lg:h-[70vh]'>
      <Image
        src='/hero.avif'
        fill
        alt='Hero'
        className='object-cover w-full h-full'
      />

      <div className='absolute inset-0 bg-black/40 flex justify-center items-center px-4 sm:px-6 md:px-8'>
        <div className='text-center max-w-3xl space-y-4'>
          <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
            Discover the Best Deals Online
          </h1>
          <p className='text-white/80 text-base sm:text-lg lg:text-xl'>
            Shop top-quality products at unbeatable prices.
          </p>

          <Link
            href='/shop'
            className='hidden sm:inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition'
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Optional Overlay Accent for ProdMart Theme */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50'></div>
    </div>
  );
};

export default Hero;