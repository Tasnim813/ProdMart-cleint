// app/page.js
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero.avif" // নিজের hero image
          alt="ProdMart Hero"
          fill
          className="object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70"></div>

        {/* Hero Content */}
        <div className="absolute text-center text-white px-6 md:px-12 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeInDown">
            Discover the <span className="text-yellow-400">Best Deals</span> <br /> at ProdMart
          </h1>
         <p className="hidden md:block text-lg md:text-2xl mb-8 animate-fadeInUp">
  Shop top-quality products with unbeatable prices, delivered to your door.
</p>

          <div className="flex justify-center gap-6 animate-fadeInUp delay-300">
            <Link
              href="/shop"
              className="bg-yellow-400 text-black font-semibold px-3 md:px-6 py-3 rounded-md hover:bg-yellow-500 transition transform hover:scale-105"
            >
              Shop Now
            </Link>
            <Link
              href="/about"
              className="border border-white text-white font-semibold  px-3 md:px-6 py-3 rounded-md hover:bg-white hover:text-black transition transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Floating Decorative Circles */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/30 rounded-full animate-pulseSlow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-yellow-400/20 rounded-full animate-pulseSlow delay-500"></div>
      </section>

      {/* Short Intro Section */}
      <section className="py-20 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Shop at ProdMart?</h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          We provide the best products at unbeatable prices. Fast delivery, easy returns, and top-notch customer service make us your go-to online store.
        </p>
        <Link
          href="/shop"
          className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Explore Products
        </Link>
      </section>
    </main>
  );
}


// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Hero = () => {
//   return (
//     <div className='relative w-full h-[90vh] sm:h-[80vh] lg:h-[70vh]'>
//       <Image
//         src='/hero.avif'
//         fill
//         alt='Hero'
//         className='object-cover w-full h-full'
//       />

//       <div className='absolute inset-0 bg-black/40 flex justify-center items-center px-4 sm:px-6 md:px-8'>
//         <div className='text-center max-w-3xl space-y-4'>
//           <h1 className='text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
//             Discover the Best Deals Online
//           </h1>
//           <p className='text-white/80 text-base sm:text-lg lg:text-xl'>
//             Shop top-quality products at unbeatable prices.
//           </p>

//           <Link
//             href='/shop'
//             className='hidden sm:inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition'
//           >
//             Shop Now
//           </Link>
//         </div>
//       </div>

//       {/* Optional Overlay Accent for ProdMart Theme */}
//       <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50'></div>
//     </div>
//   );
// };

// export default Hero;