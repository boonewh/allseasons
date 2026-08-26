'use client';

import Image from 'next/image';
import Link from 'next/link'

const fallbackImage = '/images/sec_con.jpg';

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background image — full bleed on all screen sizes */}
      <div className="absolute inset-0 z-0">
        <Image
          src={fallbackImage}
          alt="All Seasons Foam preview"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-end md:items-end justify-center md:justify-start px-4 pb-[16vh]">
        <div className="text-white text-center md:text-left max-w-xl md:ml-[5vw] lg:ml-[15vw]">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
            Experience Our Services in Action
          </h1>
          <p className="text-base md:text-m lg:text-lg max-w-2xl mb-6">
            See how we deliver results with professionalism, precision, and passion.
          </p>
          <Link
            href="/contact"
            className="bg-blue-700 border-2 text-black px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-200 transition"
          >
            Learn More
          </Link>
        </div>
      </div>

    </section>
  );
}
