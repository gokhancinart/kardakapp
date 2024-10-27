import "../styles/globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default appWithTranslation(MyApp);
