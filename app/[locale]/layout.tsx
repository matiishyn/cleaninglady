import { locales, type Locale } from '@/lib/i18n';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { getDictionary } from '../dictionaries';
import '../globals.css';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const isUkrainian = locale === 'uk';
  const baseUrl = 'https://cleaninglady.if';
  const currentUrl = isUkrainian ? baseUrl : `${baseUrl}/${locale}`;

  return {
    title: isUkrainian ?
      'Cleaning Lady - Сімейна клінінгова компанія Івано-Франківськ' :
      'Cleaning Lady - Family Cleaning Company Ivano-Frankivsk',
    description: isUkrainian ?
      'Професійні клінінгові послуги в Івано-Франківську, Богородчанах, Надвірній. Сімейна команда з досвідом 5+ років. Генеральне та підтримуюче прибирання від 45 грн/м².' :
      'Professional cleaning services in Ivano-Frankivsk, Bohorodchany, Nadvirna. Family team with 5+ years of experience. General and maintenance cleaning from 45 UAH/m².',
    keywords: isUkrainian ?
      'клінінг Івано-Франківськ, прибирання квартир, клінінгова компанія, прибирання після ремонту, клінінг Богородчани, клінінг Надвірна' :
      'cleaning Ivano-Frankivsk, apartment cleaning, cleaning company, post-renovation cleaning, cleaning Bohorodchany, cleaning Nadvirna',
    authors: [{ name: 'Cleaning Lady' }],
    openGraph: {
      type: 'website',
      locale: isUkrainian ? 'uk_UA' : 'en_US',
      url: currentUrl,
      siteName: 'Cleaning Lady',
      title: isUkrainian ?
        'Cleaning Lady - Сімейна клінінгова компанія' :
        'Cleaning Lady - Family Cleaning Company',
      description: isUkrainian ?
        'Професійні клінінгові послуги в Івано-Франківську. Прибираємо з любов\'ю і турботою для вашого комфорту.' :
        'Professional cleaning services in Ivano-Frankivsk. We clean with love and care for your comfort.',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: isUkrainian ?
            'Cleaning Lady - Сімейна клінінгова компанія' :
            'Cleaning Lady - Family Cleaning Company',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isUkrainian ?
        'Cleaning Lady - Сімейна клінінгова компанія' :
        'Cleaning Lady - Family Cleaning Company',
      description: isUkrainian ?
        'Професійні клінінгові послуги в Івано-Франківську' :
        'Professional cleaning services in Ivano-Frankivsk',
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        'x-default': baseUrl,
        'uk': baseUrl,
        'en': `${baseUrl}/en`,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="CleaningLady" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Local SEO Meta Tags */}
        <meta name="geo.region" content="UA-26" />
        <meta name="geo.placename" content="Івано-Франківськ" />
        <meta name="geo.position" content="48.9226;24.7111" />
        <meta name="ICBM" content="48.9226, 24.7111" />

        {/* Business Meta Tags */}
        <meta name="business.phone" content="+380XXXXXXXXX" />
        <meta name="business.email" content="cleaninglady.if@gmail.com" />
        <meta name="business.hours" content="Mo-Sa 09:00-19:00" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cleaning Lady",
              "description": "Сімейна клінінгова компанія з Івано-Франківська",
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
                      "description": "Повне прибирання квартири з ретельною обробкою всіх поверхонь"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "45-65",
                      "priceCurrency": "UAH",
                      "unitCode": "MTK"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Підтримуюче прибирання",
                      "description": "Регулярне прибирання для підтримання чистоти"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "45-55",
                      "priceCurrency": "UAH",
                      "unitCode": "MTK"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Прибирання після ремонту",
                      "description": "Професійне очищення від будівельного пилу"
                    },
                    "priceSpecification": {
                      "@type": "PriceSpecification",
                      "price": "65-85",
                      "priceCurrency": "UAH",
                      "unitCode": "MTK"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "47",
                "bestRating": "5"
              }
            })
          }}
        />
      </head>
      <body className={nunito.className}>
        {children}
      </body>
    </html>
  );
}