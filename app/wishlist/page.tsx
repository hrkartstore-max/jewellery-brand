'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
import { money } from '@/lib/format';
import { useStore } from '@/components/store-provider';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useStore();
  const items = products.filter((product) => wishlist.includes(product.id));

  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="text-[10px] tracking-[.22em] text-gold">SAVED PIECES</div>
      <h1 className="font-display text-6xl mt-3">Your Wishlist</h1>
      {!items.length ? (
        <div className="mt-12 border-y border-line py-20 text-center">
          <Heart className="mx-auto text-gold" size={28} />
          <p className="font-display text-3xl mt-5">Your wishlist is waiting.</p>
          <p className="text-black/50 mt-3">Save the pieces that speak to you.</p>
          <Link href="/shop" className="inline-block mt-7 bg-luxury text-white px-8 py-4 text-[10px] tracking-[.18em]">EXPLORE JEWELLERY</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-12">
          {items.map((item) => (
            <article key={item.id}>
              <Link href={`/products/${item.slug}`} className="relative block aspect-[4/5] bg-sand overflow-hidden">
                <Image src={item.image} alt={item.name} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
              </Link>
              <div className="pt-4">
                <div className="font-display text-xl">{item.name}</div>
                <div className="text-sm mt-2">{money(item.price)}</div>
                <div className="flex gap-2 mt-4">
                  <button onClick={() => addToCart(item)} className="flex-1 h-10 bg-luxury text-white text-[9px] tracking-[.16em] flex items-center justify-center gap-2"><ShoppingBag size={14}/> ADD</button>
                  <button onClick={() => toggleWishlist(item.id)} className="w-10 h-10 border border-line" aria-label="Remove from wishlist"><Heart size={15} className="mx-auto" fill="currentColor"/></button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
