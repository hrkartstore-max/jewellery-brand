'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useStore } from '@/components/store-provider';
import { money } from '@/lib/format';

export default function Checkout() {
  const { cart, cartTotal } = useStore();
  const [placed, setPlaced] = useState(false);

  if (placed) {
    return (
      <main className="max-w-2xl mx-auto px-5 py-24 text-center">
        <CheckCircle2 className="mx-auto text-gold" size={42} />
        <div className="text-[10px] tracking-[.22em] text-gold mt-6">ORDER RECEIVED</div>
        <h1 className="font-display text-5xl mt-3">Thank you.</h1>
        <p className="text-black/50 mt-5">The checkout flow is ready for payment integration. This demo order has not charged a payment method.</p>
        <Link href="/shop" className="inline-block mt-8 bg-luxury text-white px-8 py-4 text-[10px] tracking-[.18em]">CONTINUE SHOPPING</Link>
      </main>
    );
  }

  if (!cart.length) {
    return (
      <main className="max-w-2xl mx-auto px-5 py-24 text-center">
        <h1 className="font-display text-5xl">Your cart is empty.</h1>
        <Link href="/shop" className="inline-block mt-8 bg-luxury text-white px-8 py-4 text-[10px] tracking-[.18em]">SHOP JEWELLERY</Link>
      </main>
    );
  }

  return (
    <main className="max-w-[1100px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="text-[10px] tracking-[.22em] text-gold">SECURE CHECKOUT</div>
      <h1 className="font-display text-6xl mt-3">Complete your order</h1>
      <div className="grid lg:grid-cols-[1fr_360px] gap-12 mt-12">
        <form onSubmit={(event) => { event.preventDefault(); setPlaced(true); }} className="space-y-5">
          {['Full name', 'Email address', 'Phone number', 'Address', 'City', 'PIN code'].map((label) => (
            <label key={label} className="block text-[10px] uppercase tracking-[.16em]">
              {label}
              <input required className="mt-2 w-full border border-line bg-transparent px-4 py-4 outline-none focus:border-black" />
            </label>
          ))}
          <button className="w-full h-14 bg-luxury text-white text-[10px] tracking-[.2em]">PLACE DEMO ORDER</button>
        </form>
        <aside className="bg-sand p-7 h-fit">
          <div className="text-[10px] tracking-[.2em] uppercase text-gold">Order Summary</div>
          <div className="mt-6 space-y-4">
            {cart.map((item) => <div key={item.id} className="flex justify-between gap-4 text-sm"><span>{item.name} × {item.quantity}</span><span>{money(item.price * item.quantity)}</span></div>)}
          </div>
          <div className="border-t border-black/10 mt-6 pt-6 flex justify-between font-medium"><span>Total</span><span>{money(cartTotal)}</span></div>
        </aside>
      </div>
    </main>
  );
}
