import { Suspense, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';

import { Header, Loading } from '@/shared';
import '@/styles/globals.scss';
import '@/styles/Burger.scss';
import '@/styles/Header.scss';
import '@/UI/Input/Input.scss';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

export default function App({ Component, pageProps, router }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', () => setIsLoading(false)); // If the component is unmounted, unsubscribe

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={nunito.className}>
      <Header />
      <AnimatePresence mode='wait' initial={true}>
        {isLoading ? (
          <Loading />
        ) : (
          <Component {...pageProps} key={router.asPath} />
        )}
      </AnimatePresence>
    </div>
  );
}
