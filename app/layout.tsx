import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StoreProvider } from '@/components/store-provider';

export const metadata = {
  title: 'AURELIA — Jewellery That Tells Your Story',
  description: 'Timeless jewellery designed to celebrate every moment.',
  metadataBase: new URL('https://jewellery-brand-4ajl-p6uueg39h-hepra1.vercel.app'),
  openGraph: {
    title: 'AURELIA Jewellery',
    description: 'Timeless pieces designed to celebrate every moment.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
