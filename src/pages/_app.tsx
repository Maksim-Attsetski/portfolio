import { Suspense, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { Nunito } from 'next/font/google';

import { Header, Loading } from '@/shared';
import '@/styles/globals.scss';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

// export default function App({ Component, pageProps, router }: AppProps) {
//   return (
//     <div className={nunito.className}>
//       <Header />
//       <Suspense fallback={<Loading />}>
//         <AnimatePresence mode='wait' initial={false}>
//           <Component {...pageProps} key={router.asPath} />
//         </AnimatePresence>
//       </Suspense>
//     </div>
//   );
// }

import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
