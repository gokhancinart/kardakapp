import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import Layout from '../components/Layout';
import PromoVideo from '../components/PromoVideo';
import Head from 'next/head';
import HomeAbout from '@/components/HomeAbout.js';
import TrustedCompanies from '@/components/TrustedCompanies.js';

const videoUrl = "/assets/videos/papercup.mp4";


const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>Kardak - Yüksek Kaliteli Karton Bardak Üreticisi</title>
        <meta
          name="description"
          content="Özel Baskılı Karton Bardak ve Double wall karton bardak üretimi yapan firmamız ile kaliteli bardak çeşitlerimize ulaşabilirsiniz."
        />
      </Head>
      <Layout headerPosition="fixed">
        <PromoVideo 
          videoUrl={ `/assets/videos/papercup.mp4` } 
          title={ t('homepage.promo_title') }
          title2={ t('homepage.promo_title_span') }
          description={ t('homepage.promo_description') }
        />
        <div className="container mx-auto">
        <TrustedCompanies 
            title={ t('homepage.trusted_companies_title') }
            images={[
              { src: "/assets/images/trustedcompanies/transistor.svg", alt: "Transistor" },
              { src: "/assets/images/trustedcompanies/tuple.svg", alt: "Tuple" },
              { src: "/assets/images/trustedcompanies/statickit.svg", alt: "StaticKit" },
              { src: "/assets/images/trustedcompanies/mirage.svg", alt: "Mirage" },
              { src: "/assets/images/trustedcompanies/laravel.svg", alt: "Laravel" },
              { src: "/assets/images/trustedcompanies/statamic.svg", alt: "Statamic" },
            ]}
          />
          <HomeAbout />
        </div>
      </Layout>
    </>
  );
};

// Statik olarak sayfa oluşturma
export const getStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale, ['common'], nextI18NextConfig);
  
  return {
    props: {
      ...translations,
    },
  };
};

export default HomePage;