'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    desktop: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&h=700&q=92',
    mobile: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1080&h=1350&q=92',
    eyebrow: 'TIMELESS ELEGANCE',
    title: 'JEWELLERY THAT TELLS YOUR STORY',
    text: 'Modern designs. Lasting craftsmanship. Made for every chapter.',
  },
  {
    desktop: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1920&h=700&q=92',
    mobile: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1080&h=1350&q=92',
    eyebrow: 'EVERYDAY LUXURY',
    title: 'PIECES MADE TO BE REMEMBERED',
    text: 'Elegant essentials designed to move with every moment.',
  },
  {
    desktop: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1920&h=700&q=92',
    mobile: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=1080&h=1350&q=92',
    eyebrow: 'THE NEW COLLECTION',
    title: 'A LITTLE MORE GOLD IN EVERY DAY',
    text: 'Discover refined jewellery for your next chapter.',
  },
];

export function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const previous = () => setActive((active - 1 + slides.length) % slides.length);
  const next = () => setActive((active + 1) % slides.length);
  const slide = slides[active];

  return (
    <section className="relative min-h-[76svh] md:aspect-[1920/700] md:min-h-0 overflow-hidden bg-[#1b1917]">
      <Image src={slide.mobile} alt={slide.title} fill priority sizes="100vw" className="object-cover object-center md:hidden" />
      <Image src={slide.desktop} alt={slide.title} fill priority sizes="100vw" className="hidden object-cover object-center md:block" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
      <div className="relative min-h-[76svh] md:aspect-[1920/700] md:min-h-0 max-w-[1440px] mx-auto px-5 md:px-12 flex items-end pb-10 sm:pb-14 md:pb-20">
        <div className="text-white max-w-3xl">
          <div className="flex items-center gap-3 text-[9px] sm:text-[10px] tracking-[.28em] uppercase mb-5 text-white/80">
            <span>{slide.eyebrow}</span><span className="w-8 h-px bg-white/50" /><span>HEPRA</span>
          </div>
          <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-8xl leading-[.92] tracking-tight max-w-4xl">
            {slide.title}
          </h1>
          <p className="mt-5 md:mt-6 text-sm md:text-base text-white/85 max-w-lg">{slide.text}</p>
          <div className="grid grid-cols-1 sm:flex gap-2.5 mt-7 md:mt-8">
            <Link href="/shop" className="bg-white text-black px-7 py-4 text-[10px] tracking-[.18em] text-center hover:bg-[#B89B5E] hover:text-white transition">
              SHOP COLLECTION
            </Link>
            <Link href="/shop" className="border border-white/60 bg-black/10 backdrop-blur-sm px-7 py-4 text-[10px] tracking-[.18em] text-center hover:bg-white hover:text-black transition">
              EXPLORE NEW ARRIVALS
            </Link>
          </div>
        </div>
      </div>

      <button aria-label="Previous banner" onClick={previous} className="absolute left-4 md:left-7 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/45 bg-black/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black transition">
        <ArrowLeft size={18} />
      </button>
      <button aria-label="Next banner" onClick={next} className="absolute right-4 md:right-7 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/45 bg-black/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-black transition">
        <ArrowRight size={18} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((item, i) => (
          <button key={item.title} aria-label={`Go to banner ${i + 1}`} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all duration-500 ${active === i ? 'w-9 bg-white' : 'w-2.5 bg-white/45'}`} />
        ))}
      </div>
      <div className="absolute right-7 bottom-7 text-white/75 hidden md:flex items-center gap-2 text-[9px] tracking-[.2em]">
        SCROLL <ArrowDown size={14} />
      </div>
    </section>
  );
}
