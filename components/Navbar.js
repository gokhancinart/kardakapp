import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation('common');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentPath = usePathname();

  return (
    <nav className="navbar bg-white_transparent py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Sol Logo */}
        <div className="flex items-center">
          <h4 className="text-xl font-bold text-black">KARDAK</h4>
        </div>
        <div className="md:hidden flex">
          <button onClick={toggleMenu} className="text-black">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-8 font-bold [&>a]:py-2 [&>a]:px-2 [&>a:hover]:text-blue [&>a:hover]:border-blue [&>a]:transition-all [&>a]:duration-300">
          <Link 
            href="/" 
            className={
              currentPath === "/" ? "text-blue border-b-2 border-blue pointer-events-none" : "text-black border-b-2 border-transparent"
            }>
            {t('header.nav_home')}
          </Link>
          <Link 
            href="/about" 
            className={
              currentPath === "/about" ? "text-blue border-b-2 border-blue pointer-events-none" : "text-black border-b-2 border-transparent"
            }>
            {t('header.nav_about')}
          </Link>
          <Link 
            href="/products" 
            className={
              currentPath === "/products" ? "text-blue border-b-2 border-blue pointer-events-none" : "text-black border-b-2 border-transparent"
            }>
            {t('header.nav_product')}
          </Link>
          <Link 
            href="/contact" 
            className={
              currentPath === "/contact" ? "text-blue border-b-2 border-blue pointer-events-none" : "text-black border-b-2 border-transparent"
            }>
            {t('header.nav_contact')}
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobil Menü - Push Menü */}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <div className={`fixed top-0 left-0 h-full w-64 bg-black text-white shadow-lg z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 bg-black_transparent rounded-full p-2">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div className="flex flex-col p-6">
          <h4 className="text-xl font-bold text-white">KARDAK</h4>
        </div>
        <div className="flex flex-col space-y-4 p-6">
          <a href="#">{t('header.nav_home')}</a>
          <a href="#">{t('header.nav_about')}</a>
          <a href="#">{t('header.nav_product')}</a>
          <a href="#">{t('header.nav_contact')}</a>
        </div>
        {/* Alt Kısım - İletişim Bilgileri ve Dil Seçimi */}
        <div className="absolute bottom-4 left-4 text-left space-y-2">
          <p className="text-sm">📞 +90 555 555 5555</p>
          <p className="text-sm">✉️ info@kardak.com</p>
          {/* Dil Seçici */}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navbar