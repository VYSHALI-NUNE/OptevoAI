"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
  const imageElement = imageRef.current;

  const handleScroll = () => {
    if (!imageElement) return;
    const scrollPosition = window.scrollY;
    const maxScroll = 200; // The scroll distance over which the effect happens
    const minDeg = 0;
    const maxDeg = 15;

    // Clamp scroll position
    const clampedScroll = Math.min(scrollPosition, maxScroll);

    // Calculate rotation: from maxDeg (at top) to minDeg (at maxScroll)
    const rotation = maxDeg - ((maxDeg - minDeg) * (clampedScroll / maxScroll));

    imageElement.style.transform = `rotateX(${rotation}deg) scale(1)`;
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Set initial state

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
  <section className='w-full pt-36 md:pt-48 pb-10'>
    <div className='space-y-6 text-center' >
        <div className='space-y-6 mx-auto'>
            <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'> 
                Your AI Career Coach for
                <br/>
                Professional Success
            </h1>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Empowering your career with AI-driven guidance and job-ready skills.
            </p>
        </div>

        <div className='flex justify-center space-x-4  '>
            <Link href='/dashboard'>
                <Button size="lg" className="px-8 ">Get Started</Button>
            </Link>
            
        </div>

        <div className='hero-image-wrapper mt-5 md:mt-0'>
            <div ref={imageRef} className='hero-image'>
                <Image 
                src={"/banner.jpg"}
                width={1280}
                height={720}
                alt='Banner OptevoAI'
                className='rounded-lg shadow-2xl border mx-auto'
                
                />
            </div>
        </div>
        
    </div>
  </section> 
  );
};  

export default HeroSection;