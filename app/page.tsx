import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ProductSection, EditorialCategories } from '@/components/section';

const categories = ['Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Pendants', 'Chains', 'Jewellery Sets'];
const socialImages = [
  'photo-1515562141207-7a88fb7ce338',
  'photo-1599643477877-530eb83abc8e',
  'photo-1535632787350-4e68ef0ac584',
  'photo-1605100804763-247f67b3557e',
  'photo-1611652022419-a9419f74343d',
  'photo-1599643478518-a784e5dc4c8f',
];

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[76svh] md:aspect-[1920/700] md:min-h-0 overflow-hidden bg-[#1b1917]">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1080&h=1350&q=92"
          alt="HEPRA Jewellery gold collection"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:hidden"
        />
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2200&h=900&q=92"
          alt="HEPRA Jewellery editorial collection"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        <div className="relative min-h-[76svh] md:aspect-[1920/700] md:min-h-0 max-w-[1440px] mx-auto px-5 md:px-12 flex items-end pb-10 sm:pb-14 md:pb-20">
          <div className="text-white max-w-3xl">
            <div className="flex items-center gap-3 text-[9px] sm:text-[10px] tracking-[.28em] uppercase mb-5 text-white/75">
              <span>HEPRA JEWELLERY</span><span className="w-8 h-px bg-white/40" /><span>2026</span>
            </div>
            <h1 className="font-display text-[2.75rem] sm:text-6xl md:text-8xl leading-[.92] tracking-tight max-w-4xl">
              JEWELLERY THAT TELLS YOUR STORY
            </h1>
            <p className="mt-5 md:mt-6 text-sm md:text-base text-white/80 max-w-lg">
              Timeless pieces designed to celebrate every moment.
            </p>
            <div className="grid grid-cols-1 sm:flex gap-2.5 mt-7 md:mt-8">
              <Link href="/shop" className="bg-white text-black px-7 py-4 text-[10px] tracking-[.18em] text-center hover:bg-gold hover:text-white transition">
                SHOP COLLECTION
              </Link>
              <Link href="/shop" className="border border-white/60 bg-black/10 backdrop-blur-sm px-7 py-4 text-[10px] tracking-[.18em] text-center hover:bg-white hover:text-black transition">
                EXPLORE NEW ARRIVALS
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-7 bottom-7 text-white/75 hidden md:flex items-center gap-2 text-[9px] tracking-[.2em]">
          SCROLL <ArrowDown size={14} />
        </div>
      </section>

      <section className="border-b border-line bg-sand">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-6 md:py-7 flex gap-7 md:gap-8 overflow-x-auto hide-scrollbar">
          {categories.map((x) => (
            <Link
              key={x}
              href={`/collections/${x.toLowerCase().replaceAll(' ', '-')}`}
              className="shrink-0 flex items-center gap-3 text-[11px] uppercase tracking-[.14em] hover:text-gold transition"
            >
              <span className="w-2 h-2 rounded-full bg-gold" />{x}
            </Link>
          ))}
        </div>
      </section>

      <ProductSection title="NEW ARRIVALS" subtitle="Discover the latest expressions of modern jewellery." />
      <EditorialCategories />
      <ProductSection title="THE MOST LOVED" subtitle="Pieces our community returns to, again and again." />

      <section className="relative min-h-[520px] md:min-h-[560px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=2200&h=1000&q=88"
          alt="HEPRA Jewellery everyday luxury"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative max-w-[1440px] w-full mx-auto px-5 md:px-12 text-white">
          <div className="text-[10px] tracking-[.25em] uppercase text-white/70">HEPRA Essentials</div>
          <h2 className="font-display text-5xl md:text-7xl mt-4">EVERYDAY LUXURY</h2>
          <p className="mt-5 max-w-md text-white/75">Designed to become part of your everyday story.</p>
          <Link href="/shop" className="inline-flex items-center gap-2 mt-8 border border-white px-7 py-4 text-[10px] tracking-[.18em] hover:bg-white hover:text-black transition">
            DISCOVER THE COLLECTION <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-4 gap-3 md:gap-4">
          {['How to Choose Your Ring Size', 'Find Your Perfect Necklace', 'Jewellery Care Guide', 'Gold & Materials'].map((x, i) => (
            <Link
              href={i === 0 ? '/size-guide' : '/jewellery-care'}
              key={x}
              className="bg-sand p-7 min-h-52 flex flex-col justify-between hover:bg-[#ebe5da] transition"
            >
              <span className="text-[10px] text-gold tracking-[.2em]">0{i + 1}</span>
              <div>
                <h3 className="font-display text-2xl">{x}</h3>
                <span className="text-[10px] uppercase tracking-[.18em] mt-4 inline-block">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-8">
            <div>
              <div className="text-[10px] tracking-[.2em] text-gold">SOCIAL</div>
              <h2 className="font-display text-4xl md:text-5xl mt-2">FOLLOW THE GLOW</h2>
            </div>
            <span className="text-sm">@heprajewellery</span>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {socialImages.map((id, i) => (
              <div className="relative aspect-square overflow-hidden" key={id}>
                <Image
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`}
                  alt={`HEPRA Jewellery social ${i + 1}`}
                  fill
                  sizes="(max-width:768px) 33vw, 16vw"
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-24 text-center">
        <div className="text-[10px] tracking-[.25em] text-gold">PRIVATE ACCESS</div>
        <h2 className="font-display text-5xl md:text-6xl mt-4">JOIN THE INNER CIRCLE</h2>
        <p className="text-black/50 mt-5">Be the first to discover new collections, private offers and jewellery stories.</p>
        <form className="mt-8 flex border-b border-black/30 pb-3">
          <input aria-label="Email address" placeholder="Your email address" type="email" className="bg-transparent outline-none flex-1 min-w-0" />
          <button className="text-[10px] tracking-[.18em] hover:text-gold transition">SUBSCRIBE</button>
        </form>
      </section>
    </main>
  );
}
