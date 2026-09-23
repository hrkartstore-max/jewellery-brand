import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct, products } from '@/data/products';
import { money, discount } from '@/lib/format';
import { ProductActions } from '@/components/product-actions';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  return (
    <main className="max-w-[1440px] mx-auto px-5 md:px-8 py-8 pb-28 md:pb-8">
      <div className="text-[10px] uppercase tracking-[.18em] text-black/40 mb-8">
        HOME / {p.category.toUpperCase()} / {p.name.toUpperCase()}
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-[4/5] col-span-2 bg-sand">
            <Image src={p.image} alt={p.name} fill priority sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-square bg-sand">
            <Image src={p.hoverImage} alt={`${p.name} detail`} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative aspect-square bg-sand">
            <Image src={p.image} alt={`${p.name} alternate`} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:pt-8">
          <div className="text-[10px] uppercase tracking-[.2em] text-gold">{p.category} · HEPRA JEWELLERY</div>
          <h1 className="font-display text-5xl md:text-6xl mt-3">{p.name}</h1>
          <div className="flex gap-3 items-center mt-5 text-sm">
            <span aria-label={`${p.rating} out of 5 stars`}>★★★★★</span>
            <span className="text-black/45">{p.rating} · {p.reviews} reviews</span>
          </div>
          <div className="flex gap-3 items-center mt-6 text-xl">
            <span>{money(p.price)}</span>
            {p.compareAt && (
              <>
                <del className="text-black/35 text-base">{money(p.compareAt)}</del>
                <span className="text-gold text-sm">{discount(p.price, p.compareAt)}% OFF</span>
              </>
            )}
          </div>
          <p className="mt-6 text-black/60 leading-7">{p.description}</p>

          <ProductActions product={p} />

          <div className="mt-10 divide-y border-y border-line">
            {['Product details', 'Materials', 'Shipping & Returns', 'Care instructions', 'Reviews', 'FAQ'].map((x) => (
              <details key={x} className="py-5">
                <summary className="cursor-pointer text-sm">{x}</summary>
                <p className="pt-4 text-sm text-black/55 leading-7">
                  Thoughtfully designed and finished for everyday wear. Complimentary shipping above ₹2,999, easy returns and dedicated support.
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
