import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale }); // Dili değişimi
  };

  return (
    <div className="">
      <div className="flex divide-x divide-slate-200 font-semibold [&>button]:sm:text-black [&>button:hover]:sm:text-blue [&>button]:text-white">
        <button className="text-black pr-2" onClick={() => changeLanguage('tr')}>TR</button>
        <button className="text-black px-2" onClick={() => changeLanguage('en')}>EN</button>
        <button className="text-black pl-2" onClick={() => changeLanguage('de')}>DE</button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;