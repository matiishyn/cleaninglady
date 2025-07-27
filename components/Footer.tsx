'use client';

import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  dict: any;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo.svg"
                alt="Cleaning Lady IF"
                className="h-10 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {dict.footer.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-teal-400" />
                <span>Івано-Франківськ, Богородчани, Надвірна</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-teal-400" />
                <span>+38 (XXX) XXX-XX-XX</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-teal-400" />
                <span>cleaninglady.if@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="h-4 w-4 mr-3 text-teal-400" />
                <a
                  href="https://instagram.com/cleaninglady.if"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @cleaninglady.if
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {dict.footer.services}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>{dict.footer.general}</li>
              <li>{dict.footer.maintenance}</li>
              <li>{dict.footer.afterRepair}</li>
              <li>{dict.footer.maid}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              {dict.footer.contacts}
            </h3>
            <p className="text-gray-400 mb-2">Пн–Сб: 09:00–19:00</p>
            <p className="text-gray-400">Неділя: вихідний</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>{dict.footer.copyright}</p>
          <p className="flex items-center mt-4 md:mt-0">
            {dict.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}