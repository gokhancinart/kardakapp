/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Statik export için eklendi
  i18n: {
    locales: ['en', 'tr', 'de'],  // Desteklenen diller
    defaultLocale: 'tr',          // Varsayılan dil (path olmamasını istediğimiz dil)
    localeDetection: true,        // Kullanıcı dilini algıla
  },
};

export default nextConfig;