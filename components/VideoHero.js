'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function VideoHero() {
  const playerRef = useRef(null);
  const containerRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [showVideo, setShowVideo] = useState(true); // might disable if slow

  const videoUrl = 'https://www.youtube.com/embed/Y2Fbiufr4xQ';
  const fallbackImage = '/images/sec_con.jpg';

  // Detect mobile and slow connection
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth < 768);

      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (connection) {
        const type = connection.effectiveType;
        if (type === 'slow-2g' || type === '2g') {
          setIsSlowConnection(true);
          setShowVideo(false);
        }
      }
    }
  }, []);

  // Scroll pause/resume
  useEffect(() => {
    if (!showVideo || isMobile || !playerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const player = playerRef.current?.getInternalPlayer?.();
        if (player?.playVideo && player?.pauseVideo) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              player.playVideo();
            } else {
              player.pauseVideo();
            }
          });
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [showVideo, isMobile]);

  return (
    <section
      ref={containerRef}
      className={`relative h-screen w-full overflow-hidden ${
        isMobile ? 'bg-white' : 'bg-black'
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {showVideo && !isMobile ? (
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing
            muted
            loop
            controls={false}
            width="100%"
            height="100%"
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                  playsinline: 1,
                },
              },
            }}
            className="!absolute !top-0 !left-0 !h-full !w-full object-cover"
          />
        ) : (
          <Image
            src={fallbackImage}
            alt="All Seasons preview"
            fill
            priority
            className="object-top object-cover bg-white"
          />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Bottom gradient fade for fallback image */}
      {(isMobile || !showVideo) && (
        <div className="absolute bottom-0 left-0 w-full h-1/3 z-10 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />
      )}

      {/* Text Content */}
      <div className="relative z-20 h-full flex items-end md:items-end justify-center md:justify-start px-4 pb-[16vh]">
        <div className="text-white text-center md:text-left max-w-xl md:ml-[5vw] lg:ml-[15vw]">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4">
            Experience Our Services in Action
          </h1>
          <p className="text-base md:text-m lg:text-lg max-w-2xl mb-6">
            See how we deliver results with professionalism, precision, and passion.
          </p>
          <a
            href="#services"
            className="bg-blue-700 border-2 text-black px-6 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
      </div>

          </section>
        );
}
