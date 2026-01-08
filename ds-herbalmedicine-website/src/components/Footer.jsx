import React from 'react';
import { useLanguage } from '../LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">{t('footerTitle')}</h3>
            <p className="text-green-100 text-sm">{t('footerCredentials')}</p>
            <p className="text-green-100 text-sm">R.TCMP & R. Ac</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footerContact')}</h4>
            <p className="text-green-100 text-sm mb-1">{t('footerPhone')}</p>
            <p className="text-green-100 text-sm">{t('footerExperience')}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">{t('footerProfessional')}</h4>
            <ul className="text-green-100 text-sm space-y-1">
              <li>{t('footerCollege')}</li>
              <li>{t('footerBeijing')}</li>
              <li>{t('footerHospital')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-700 pt-6 text-center text-green-100 text-sm">
          <p>&copy; {new Date().getFullYear()} {t('footerCopyright')}</p>
          <p className="mt-2">{t('footerServices')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
