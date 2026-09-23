'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, Minus, Plus, ShoppingBag, Truck, ShieldCheck } from 'lucide-react';
import type { Product } from '@/types';
import { money } from '@/lib/format';
import { useStore } from '@/components/store-provider';

export function ProductActions({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? '');
  const [added, setAdded] = useState(false);
  const wishlisted = isWishlisted(product.id);

  const add = () => {
    addToCart(product, quantity, selectedSize || undefined);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  const buyNow = () => {
    addToCart(product, quantity, selectedSize || undefined);
    router.push('/checkout');
  };

  return (
    <>
      <div className="mt-8 border-y border-line py-6">
        <div className="flex justify-between text-sm">
          <span>Material</span><span>{product.material}</span>
        </div>
        {product.sizes && (
          <div className="mt-6">
            <div className="text-[10px] tracking-[.18em] uppercase mb-3">Ring Size</div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)} className={`w-11 h-11 border transition ${selectedSize === size ? 'border-black bg-black text-white' : 'border-line hover:border-black'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-8">
        <div className="flex border border-line h-14 items-center">
          <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-4" aria-label="Decrease quantity"><Minus size={15} /></button>
          <span className="px-2 min-w-8 text-center">{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)} className="px-4" aria-label="Increase quantity"><Plus size={15} /></button>
        </div>
        <button onClick={add} className="flex-1 bg-luxury text-white tracking-[.18em] text-[10px] flex items-center justify-center gap-2">
          <ShoppingBag size={16} /> {added ? 'ADDED TO BAG' : 'ADD TO BAG'}
        </button>
        <button onClick={() => toggleWishlist(product.id)} className="w-14 border border-line" aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>
          <Heart size={19} className="mx-auto" fill={wishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      <button onClick={buyNow} className="w-full mt-3 h-14 border border-black text-[10px] tracking-[.18em] hover:bg-black hover:text-white transition">BUY NOW</button>

      <div className="grid grid-cols-2 gap-3 mt-8 text-xs text-black/60">
        <div className="border border-line p-4 flex gap-3"><Truck size={17} /> Free shipping over ₹2,999</div>
        <div className="border border-line p-4 flex gap-3"><ShieldCheck size={17} /> Authentic jewellery</div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-cream/95 backdrop-blur-xl border-t border-line px-4 py-3 flex items-center gap-3">
        <div className="min-w-0">
          <div className="text-[9px] tracking-[.12em] uppercase text-black/40">Total</div>
          <div className="font-medium">{money(product.price * quantity)}</div>
        </div>
        <button onClick={add} className="flex-1 h-12 bg-luxury text-white text-[10px] tracking-[.16em] flex items-center justify-center gap-2">
          <ShoppingBag size={15} /> {added ? 'ADDED' : 'ADD TO BAG'}
        </button>
      </div>
    </>
  );
}
