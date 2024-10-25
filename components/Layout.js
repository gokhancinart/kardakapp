import React from 'react';
import Header from './Header'; // Header bileşenini içe aktarın
import Footer from './Footer'; // Footer bileşenini içe aktarın

import {Inter, Nunito, Montserrat} from 'next/font/google';

const inter = Inter ({
  subsets: ['latin'],
  display: 'swap',
})

const nunito = Nunito ({
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat ({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children, headerPosition }) => {
  return (
    <div className={nunito.className}>
      <Header position={headerPosition ? headerPosition : "relative"} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;