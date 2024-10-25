const path = require('path');
const NextI18Next = require('next-i18next').default;

const nextI18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['tr', 'de'],
  localePath: path.resolve('./public/locales'),  // JSON dosyalarınızın bulunduğu yol
});

module.exports = nextI18Next;