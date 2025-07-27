import { useLanguage } from '@/contexts/LanguageContext';
import Head from 'next/head';

export function SEOHead() {
  const { language, t } = useLanguage();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Cleaning Lady",
    "description": t.hero.subtitle,
    "url": "https://cleaninglady.if",
    "telephone": "+380XXXXXXXXX",
    "email": "cleaninglady.if@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Івано-Франківськ",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.9226,
      "longitude": 24.7111
    },
    "openingHours": "Mo-Sa 09:00-19:00",
    "serviceArea": {
      "@type": "Place",
      "name": "Івано-Франківськ, Богородчани, Надвірна"
    },
    "priceRange": "45-450 UAH",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Клінінгові послуги",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Генеральне прибирання",
            "description": "Повне прибирання квартири"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Підтримуюче прибирання",
            "description": "Регулярне прибирання"
          }
        }
      ]
    }
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>Cleaning Lady - Сімейна клінінгова компанія Івано-Франківськ</title>
      <meta name="description" content="Професійні клінінгові послуги в Івано-Франківську, Богородчанах, Надвірній. Сімейна команда з досвідом 5+ років. Генеральне та підтримуюче прибирання від 45 грн/м²." />
      <meta name="keywords" content="клінінг Івано-Франківськ, прибирання квартир, клінінгова компанія, прибирання після ремонту, клінінг Богородчани, клінінг Надвірна" />
      <meta name="author" content="Cleaning Lady" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://cleaninglady.if" />

      {/* Language Meta Tags */}
      <meta httpEquiv="content-language" content={language} />
      <link rel="alternate" hrefLang="uk" href="https://cleaninglady.if" />
      <link rel="alternate" hrefLang="en" href="https://cleaninglady.if/en" />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cleaning Lady - Сімейна клінінгова компанія" />
      <meta property="og:description" content="Професійні клінінгові послуги в Івано-Франківську. Прибираємо з любов'ю і турботою для вашого комфорту." />
      <meta property="og:url" content="https://cleaninglady.if" />
      <meta property="og:image" content="https://cleaninglady.if/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Cleaning Lady" />
      <meta property="og:locale" content={language === 'uk' ? 'uk_UA' : 'en_US'} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Cleaning Lady - Сімейна клінінгова компанія" />
      <meta name="twitter:description" content="Професійні клінінгові послуги в Івано-Франківську" />
      <meta name="twitter:image" content="https://cleaninglady.if/og-image.jpg" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Head>
  );
}