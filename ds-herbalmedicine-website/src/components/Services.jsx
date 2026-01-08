import React from 'react';
import { useLanguage } from '../LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { titleKey: 'spleenStomach', conditionsKey: 'spleenStomachConditions' },
    { titleKey: 'circulatory', conditionsKey: 'circulatoryConditions' },
    { titleKey: 'endocrine', conditionsKey: 'endocrineConditions' },
    { titleKey: 'nervous', conditionsKey: 'nervousConditions' },
    { titleKey: 'respiratory', conditionsKey: 'respiratoryConditions' },
    { titleKey: 'kidney', conditionsKey: 'kidneyConditions' },
    { titleKey: 'dermatology', conditionsKey: 'dermatologyConditions' },
    { titleKey: 'ent', conditionsKey: 'entConditions' },
    { titleKey: 'gynecological', conditionsKey: 'gynecologicalConditions' },
    { titleKey: 'mens', conditionsKey: 'mensConditions' },
    { titleKey: 'pain', conditionsKey: 'painConditions' },
    { titleKey: 'tumors', conditionsKey: 'tumorsConditions' },
    { titleKey: 'internalMedicine', conditionsKey: 'internalMedicineConditions' },
    { titleKey: 'pediatrics', conditionsKey: 'pediatricsConditions' },
    { titleKey: 'emotional', conditionsKey: 'emotionalConditions' }
  ];

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">{t('servicesTitle')}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t('servicesDescription')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-700 mb-3">{t(service.titleKey)}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t(service.conditionsKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
