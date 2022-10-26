import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Fathom from 'fathom-client';

import '../styles/global.css'
import '../styles/image-gallery.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {

    Fathom.load('XRYUVLYQ', {
      includedDomains: ['macro.roush.io'],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
