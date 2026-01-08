import React from 'react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">{t('heroTitle')}</h2>
        <h3 className="text-3xl text-green-700 mb-6">{t('heroSubtitle')}</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          {t('heroDescription')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition">
            {t('bookAppointment')}
          </a>
          <a href="#services" className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-50 transition">
            {t('viewServices')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
