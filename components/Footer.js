import React from 'react';
import { useTranslation } from 'next-i18next';

const Footer = () => {
  const { t } = useTranslation('common');
  return (
    <footer className='px-9 bg-black text-offwhite'>
      <div className="container mx-auto">
        <p>{t('footer.reserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;