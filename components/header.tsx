'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, UserRound, Heart, ShoppingBag, Menu, X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useStore } from '@/components/store-provider';
import { money } from '@/lib/format';

const nav = [
  ['New Arrivals', '/shop'],
  ['Jewellery', '/shop'],
  ['Rings', '/collections/rings'],
  ['Earrings', '/collections/earrings'],
  ['Necklaces', '/collections/necklaces'],
  ['Bracelets', '/collections/bracelets'],
  ['Collections', '/shop'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, cartCount, cartTotal, wishlist, removeFromCart, updateQuantity } = useStore();

  useEffect(() => {
    document.body.style.overflow = open || cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open, cartOpen]);

  return (
    <>
      <div className="bg-luxury text-white text-[9px] sm:text-[10px] tracking-[.18em] sm:tracking-[.22em] uppercase text-center py-2.5 px-3">
        Complimentary Shipping on Orders Above ₹2,999
      </div>

      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-xl border-b border-line">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-5 md:px-8 h-[68px] md:h-20 flex items-center justify-between gap-4">
          <button className="md:hidden shrink-0 w-9 h-9 grid place-items-center" aria-label="Open menu" onClick={() => setOpen(true)}>
            <Menu size={21} />
          </button>

          <Link href="/" className="group flex flex-col items-center leading-none shrink-0">
            <span className="font-display text-[21px] md:text-3xl tracking-[.2em] group-hover:text-gold transition">HEPRA</span>
            <span className="text-[6px] md:text-[7px] tracking-[.42em] mt-1">JEWELLERY</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[.14em]">
            {nav.map(([name, href]) => (
              <Link key={name} href={href} className="hover:text-gold transition">{name}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/search" aria-label="Search" className="w-9 h-9 grid place-items-center"><Search size={19} /></Link>
            <Link href="/account" className="hidden md:grid w-9 h-9 place-items-center" aria-label="Account"><UserRound size={19} /></Link>
            <Link href="/wishlist" className="relative hidden md:grid w-9 h-9 place-items-center" aria-label="Wishlist">
              <Heart size={19} />
              {wishlist.length > 0 && <span className="absolute right-0 top-0 text-[8px] min-w-4 h-4 px-1 rounded-full bg-gold text-white grid place-items-center">{wishlist.length}</span>}
            </Link>
            <button onClick={() => setCartOpen(true)} className="relative w-9 h-9 grid place-items-center" aria-label="Open shopping bag">
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="absolute right-0 top-0 text-[8px] min-w-4 h-4 px-1 rounded-full bg-luxury text-white grid place-items-center">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-cream lg:hidden overflow-y-auto">
          <div className="p-5 flex justify-between items-center border-b border-line sticky top-0 bg-cream/95 backdrop-blur">
            <Link href="/" onClick={() => setOpen(false)} className="flex flex-col leading-none">
              <span className="font-display text-2xl tracking-[.18em]">HEPRA</span>
              <span className="text-[6px] tracking-[.42em] mt-1">JEWELLERY</span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <nav className="p-7 flex flex-col gap-6 font-display text-3xl">
            {nav.map(([name, href]) => (
              <Link key={name} href={href} onClick={() => setOpen(false)}>{name}</Link>
            ))}
            <div className="h-px bg-line" />
            <Link href="/journal" className="text-xl" onClick={() => setOpen(false)}>Journal</Link>
            <Link href="/size-guide" className="text-xl" onClick={() => setOpen(false)}>Size Guide</Link>
            <Link href="/contact" className="text-xl" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/wishlist" className="text-xl" onClick={() => setOpen(false)}>Wishlist {wishlist.length > 0 && `(${wishlist.length})`}</Link>
          </nav>
        </div>
      )}

      {cartOpen && (
        <div className="fixed inset-0 z-[70]">
          <button aria-label="Close shopping bag" className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" onClick={() => setCartOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-[440px] bg-cream shadow-2xl flex flex-col">
            <div className="px-5 sm:px-7 h-20 border-b border-line flex items-center justify-between">
              <div>
                <div className="text-[9px] tracking-[.2em] text-gold uppercase">Your selection</div>
                <h2 className="font-display text-2xl">Shopping Bag <span className="font-sans text-xs text-black/40">({cartCount})</span></h2>
              </div>
              <button onClick={() => setCartOpen(false)} aria-label="Close shopping bag" className="w-9 h-9 grid place-items-center"><X size={20} /></button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 grid place-items-center px-8 text-center">
                <div>
                  <ShoppingBag size={30} className="mx-auto text-black/30" />
                  <h3 className="font-display text-3xl mt-5">Your bag is empty</h3>
                  <p className="text-sm text-black/50 mt-3">Discover something made to stay with you.</p>
                  <Link href="/shop" onClick={() => setCartOpen(false)} className="inline-flex mt-7 bg-luxury text-white px-7 py-4 text-[10px] tracking-[.18em]">SHOP JEWELLERY</Link>
                </div>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-5">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize ?? 'default'}`} className="flex gap-4">
                      <Link href={`/products/${item.slug}`} onClick={() => setCartOpen(false)} className="relative w-24 h-28 shrink-0 bg-sand overflow-hidden">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between gap-3">
                          <div>
                            <p className="text-[9px] uppercase tracking-[.16em] text-black/40">{item.category}</p>
                            <h3 className="font-display text-lg leading-tight mt-1">{item.name}</h3>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} aria-label={`Remove ${item.name}`} className="text-black/35 hover:text-black"><Trash2 size={15} /></button>
                        </div>
                        <div className="text-sm mt-2">{money(item.price)}</div>
                        {item.selectedSize && <div className="text-[10px] text-black/45 mt-1">Size: {item.selectedSize}</div>}
                        <div className="inline-flex items-center border border-line mt-3">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 grid place-items-center" aria-label="Decrease quantity"><Minus size={13} /></button>
                          <span className="w-8 text-center text-xs">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 grid place-items-center" aria-label="Increase quantity"><Plus size={13} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-line px-5 sm:px-7 py-5 bg-white/50">
                  <div className="flex justify-between text-sm"><span>Subtotal</span><strong>{money(cartTotal)}</strong></div>
                  <p className="text-[10px] text-black/45 mt-2">Complimentary shipping on orders above ₹2,999.</p>
                  <div className="grid grid-cols-2 gap-2 mt-5">
                    <Link href="/cart" onClick={() => setCartOpen(false)} className="border border-luxury py-4 text-center text-[10px] tracking-[.17em]">VIEW BAG</Link>
                    <Link href="/checkout" onClick={() => setCartOpen(false)} className="bg-luxury text-white py-4 text-center text-[10px] tracking-[.17em] flex items-center justify-center gap-2">CHECKOUT <ArrowRight size={14} /></Link>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
