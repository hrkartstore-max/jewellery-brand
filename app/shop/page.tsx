import { products } from '@/data/products';
import { ProductCard } from '@/components/product-card';

export default function Shop() {
  return (
    <main className="max-w-[1440px] mx-auto px-5 md:px-8 py-14">
      <div className="text-[10px] tracking-[.2em] text-black/40">HOME / SHOP</div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mt-5">
        <div>
          <h1 className="font-display text-5xl md:text-7xl">ALL JEWELLERY</h1>
          <p className="max-w-2xl text-black/55 mt-5">A considered edit of modern heirlooms, everyday essentials and pieces made for milestones.</p>
        </div>
        <div className="text-[10px] uppercase tracking-[.18em] border border-line px-4 py-3">Curated Edit · {products.length} Pieces</div>
      </div>
      <div className="mt-12 flex justify-between border-y border-line py-4 text-[10px] uppercase tracking-[.18em]">
        <span>{products.length} pieces</span>
        <span>Curated for everyday luxury</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12 mt-10">
        {products.map((product) => <ProductCard p={product} key={product.id} />)}
      </div>
    </main>
  );
}
