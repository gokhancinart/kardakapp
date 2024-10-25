import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.js';
import Layout from '../components/Layout';
import Head from 'next/head';

function About() {
  const { t } = useTranslation('common');
  
  return (
    <>
      <Head>
        <title>Kardak İletişim - Yüksek Kaliteli Karton Bardak Üreticisi</title>
        <meta
          name="description"
          content="Özel Baskılı Karton Bardak ve Double wall karton bardak üretimi yapan firmamız ile kaliteli bardak çeşitlerimize ulaşabilirsiniz."
        />
      </Head>
      <Layout>
        <div className="container mx-auto">
          <h1>{t('contact_title')}</h1>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});

export default About;