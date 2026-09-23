'use client';

import { useEffect } from 'react';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('AURELIA page error', error);
  }, [error]);

  return (
    <main className="min-h-[60vh] grid place-items-center px-5 text-center">
      <div>
        <div className="text-[10px] tracking-[.2em] text-gold">
          SOMETHING WENT WRONG
        </div>
        <h1 className="font-display text-5xl mt-3">Please try again.</h1>
        <button
          onClick={() => reset()}
          className="mt-7 bg-luxury text-white px-8 py-4 text-[10px] tracking-[.18em]"
        >
          TRY AGAIN
        </button>
      </div>
    </main>
  );
}
