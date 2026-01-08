import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '简体中文', flag: '🇨🇳' },
    
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className="bg-green-700 text-white shadow-md sticky top-0 z-50">
      <div className="w-full px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Left side - Language Selector and Title */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-white text-green-700 px-3 py-1.5 rounded-lg font-semibold hover:bg-green-50 transition flex items-center gap-2 text-sm"
              >
                <span>{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-green-50 transition flex items-center gap-2 whitespace-nowrap text-sm ${
                        language === lang.code ? 'bg-green-100 text-green-700 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title */}
            <div>
              <h1 className="text-xl font-bold">Haidong Zhang</h1>
              <p className="text-xs text-green-100">R.TCMP & R. Ac</p>
            </div>
          </div>

          {/* Right side - Navigation & Phone */}
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex gap-6">
              <a href="#about" className="hover:text-green-200 transition">{t('about')}</a>
              <a href="#services" className="hover:text-green-200 transition">{t('services')}</a>
              <a href="#contact" className="hover:text-green-200 transition">{t('contact')}</a>
            </nav>
            <div className="bg-white text-green-700 px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap text-sm">
              📞 416-918-8879
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
