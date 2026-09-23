import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ProductSection, EditorialCategories } from '@/components/section';
import { HeroSlider } from '@/components/hero-slider';

const categories = [
  { name: 'Rings', image: 'photo-1605100804763-247f67b3557e' },
  { name: 'Earrings', image: 'photo-1535632787350-4e68ef0ac584' },
  { name: 'Necklaces', image: 'photo-1515562141207-7a88fb7ce338' },
  { name: 'Bracelets', image: 'photo-1611652022419-a9419f74343d' },
  { name: 'Pendants', image: 'photo-1599643477877-530eb83abc8e' },
  { name: 'Chains', image: 'photo-1599643478518-a784e5dc4c8f' },
  { name: 'Jewellery Sets', image: 'photo-1515562141207-7a88fb7ce338' },
];
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
      <section className="relative z-10 bg-[#FBF9F5] border-b border-line overflow-hidden shadow-[0_8px_30px_rgba(23,23,23,.06)]">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-4 md:py-6">
          <div className="text-center mb-3 md:mb-4">
            <span className="text-[8px] md:text-[9px] tracking-[.3em] text-[#B89B5E] uppercase">Shop by Category</span>
          </div>
          <div className="flex gap-5 md:gap-8 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-1">
            {categories.map((x, i) => (
              <Link
                key={x.name}
                href={`/collections/${x.name.toLowerCase().replaceAll(' ', '-')}`}
                className="group shrink-0 snap-start w-[76px] md:w-[104px] flex flex-col items-center gap-2.5"
              >
                <span
                  className="relative block w-[68px] h-[68px] md:w-[92px] md:h-[92px] rounded-full p-[2px] bg-gradient-to-br from-[#B89B5E] via-[#F3EFE8] to-[#8F743F] shadow-[0_6px_22px_rgba(23,23,23,.10)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_10px_30px_rgba(184,155,94,.25)] hepra-category-float"
                  style={{ animationDelay: `${i * 0.18}s` }}
                >
                  <span className="block w-full h-full rounded-full overflow-hidden bg-[#F3EFE8]">
                    <img
                      src={`https://images.unsplash.com/${x.image}?auto=format&fit=crop&w=220&h=220&q=88`}
                      alt={x.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </span>
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[.12em] text-center whitespace-nowrap group-hover:text-gold transition">
                  {x.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HeroSlider />

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
