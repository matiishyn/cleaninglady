'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.svg"
                alt="Cleaning Lady IF"
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Сімейна клінінгова компанія з Івано-Франківська.
              Прибираємо з любов'ю і турботою для вашого комфорту.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакти</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-teal-400" />
                <span>{t.contact.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-teal-400" />
                <span>{t.contact.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-teal-400" />
                <span>Івано-Франківськ, Богородчани, Надвірна</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Наші послуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Генеральне прибирання</li>
              <li>• Підтримуюче прибирання</li>
              <li>• Прибирання після ремонту</li>
              <li>• Послуга прибиральниці</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>{t.footer.copy}</p>
            <p className="flex items-center mt-4 md:mt-0">
              {t.footer.madeby} <Heart className="h-4 w-4 mx-1 text-red-500" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}