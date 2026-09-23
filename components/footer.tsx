import Link from 'next/link';
import { Instagram, Facebook, Mail } from 'lucide-react';

type FooterColumn = {
  title: string;
  items: string[];
};

const cols: FooterColumn[] = [
  { title: 'SHOP', items: ['New Arrivals', 'Rings', 'Earrings', 'Necklaces', 'Bracelets', 'Bestsellers'] },
  { title: 'ABOUT', items: ['Our Story', 'Craftsmanship', 'Journal', 'Contact'] },
  { title: 'HELP', items: ['Shipping', 'Returns', 'Size Guide', 'Jewellery Care', 'FAQs'] },
  { title: 'LEGAL', items: ['Privacy Policy', 'Terms', 'Refund Policy'] },
];

export function Footer() {
  return (
    <footer className="bg-luxury text-white mt-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.5fr_2fr] gap-14">
        <div>
          <div className="font-display text-4xl tracking-[.18em]">AURELIA</div>
          <p className="text-white/55 max-w-sm mt-5 leading-7">
            Modern heirlooms, thoughtfully designed for every chapter of your story.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {cols.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-[10px] tracking-[.2em] text-gold mb-5">{title}</h3>
              <div className="space-y-3 text-sm text-white/70">
                {items.map((item) => (
                  <Link className="block hover:text-white" href="/shop" key={item}>
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row gap-5 justify-between text-[10px] tracking-[.15em] text-white/45 uppercase">
          <span>© 2026 AURELIA</span>
          <div className="flex gap-5">
            <Instagram size={16} />
            <Facebook size={16} />
            <Mail size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
}
