
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import Layout from '../components/Layout';
import PromoVideo from '../components/PromoVideo';
import Head from 'next/head';
import HomeAbout from '@/components/HomeAbout.js';

//Papercup video
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
          videoUrl={videoUrl} 
          title={t('homepage.promo_title')}
          title2={t('homepage.promo_title_span')}
          description={t('homepage.promo_description')}
        />
        <div className="container mx-auto">
          <HomeAbout />
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default HomePage;