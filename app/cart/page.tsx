'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '@/components/store-provider';
import { money } from '@/lib/format';

export default function Cart() {
  const { cart, cartTotal, updateQuantity, removeFromCart } = useStore();

  if (!cart.length) {
    return (
      <main className="max-w-[1000px] mx-auto px-5 py-24 text-center">
        <div className="text-[10px] tracking-[.22em] text-gold">YOUR HEPRA EDIT</div>
        <h1 className="font-display text-6xl mt-4">Your Cart</h1>
        <p className="text-black/50 mt-5">Your cart is waiting for something beautiful.</p>
        <Link href="/shop" className="inline-block mt-8 bg-luxury text-white px-8 py-4 text-[10px] tracking-[.18em]">EXPLORE JEWELLERY</Link>
      </main>
    );
  }

  return (
    <main className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="text-[10px] tracking-[.22em] text-gold">YOUR HEPRA EDIT</div>
      <h1 className="font-display text-5xl md:text-6xl mt-3">Your Cart</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-12 mt-12">
        <div className="divide-y border-y border-line">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize ?? ''}`} className="py-6 flex gap-4 md:gap-5">
              <Link href={`/products/${item.slug}`} className="relative w-24 md:w-36 aspect-[4/5] bg-sand shrink-0">
                <Image src={item.image} alt={item.name} fill sizes="(max-width:768px) 96px, 144px" className="object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="text-[9px] uppercase tracking-[.18em] text-black/45">{item.category}</div>
                <Link href={`/products/${item.slug}`} className="font-display text-xl md:text-2xl block mt-1">{item.name}</Link>
                {item.selectedSize && <div className="text-xs text-black/50 mt-2">Size {item.selectedSize}</div>}
                <div className="mt-3">{money(item.price)}</div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="flex border border-line h-10 items-center">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize)} className="px-3" aria-label="Decrease"><Minus size={13}/></button>
                    <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize)} className="px-3" aria-label="Increase"><Plus size={13}/></button>
                  </div>
                  <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-black/45 hover:text-black" aria-label="Remove"><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <aside className="bg-sand p-7 h-fit sticky top-28">
          <div className="text-[10px] tracking-[.2em] uppercase text-gold">Order Summary</div>
          <div className="flex justify-between mt-7 text-sm"><span>Subtotal</span><span>{money(cartTotal)}</span></div>
          <div className="flex justify-between mt-3 text-sm text-black/50"><span>Shipping</span><span>{cartTotal >= 2999 ? 'Complimentary' : 'Calculated at checkout'}</span></div>
          <div className="border-t border-black/10 mt-6 pt-6 flex justify-between font-medium"><span>Total</span><span>{money(cartTotal)}</span></div>
          <Link href="/checkout" className="w-full mt-7 h-14 bg-luxury text-white text-[10px] tracking-[.2em] flex items-center justify-center hover:bg-gold transition">PROCEED TO CHECKOUT</Link>
          <p className="text-[11px] text-black/45 text-center mt-4">Secure checkout · Easy returns · Authentic jewellery</p>
        </aside>
      </div>
    </main>
  );
}
