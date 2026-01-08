import React from 'react';
import { useLanguage } from '../LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          {t('aboutTitle')}
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {/* Introduction */}
          <p>
            {t('aboutIntro')}
          </p>

          {/* Professional Experience */}
          <p>
            {t('aboutExperience')}
          </p>

          {/* Family Heritage */}
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{t('familyHeritage')}</h3>
            <p>
              {t('familyHeritageText')}
            </p>
          </div>

          {/* Continuing Professional Development */}
          <p className="font-semibold text-gray-800">
            {t('continuingDevelopment')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
