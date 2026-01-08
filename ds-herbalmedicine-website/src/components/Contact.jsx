import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{t('contactTitle')}</h2>
        <p className="text-center text-gray-600 mb-12">{t('contactSubtitle')}</p>
        
        <div className="max-w-2xl mx-auto bg-green-50 rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-block bg-green-700 text-white rounded-full p-4 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-2">416-918-8879 <br /> zhanghaidong5227@gmail.com</h3>
            <p className="text-gray-600">{t('callToBook')}</p>
            <p className="text-sm text-gray-600 mt-2">{t('location')}</p>
          </div>
          
          <div className="border-t border-green-200 pt-6">
            <h4 className="font-semibold text-gray-800 mb-3 text-center">{t('whatToExpect')}</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-700 mr-2">✓</span>
                <span>{t('expectConsultation')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2">✓</span>
                <span>{t('expectTreatment')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2">✓</span>
                <span>{t('expectExperience')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-700 mr-2">✓</span>
                <span>{t('expectTechniques')}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
