import { LanguageProvider } from '@/contexts/LanguageContext';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Cleaning Lady IF - Сімейна клінінгова компанія Івано-Франківськ',
  description: 'Професійні клінінгові послуги в Івано-Франківську, Богородчанах, Надвірній. Сімейна команда з досвідом 5+ років. Генеральне та підтримуюче прибирання від 45 грн/м².',
  keywords: 'клінінг Івано-Франківськ, прибирання квартир, клінінгова компанія, прибирання після ремонту, клінінг Богородчани, клінінг Надвірна',
  authors: [{ name: 'Cleaning Lady IF' }],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://cleaninglady.if',
    siteName: 'Cleaning Lady IF',
    title: 'Cleaning Lady IF - Сімейна клінінгова компанія',
    description: 'Професійні клінінгові послуги в Івано-Франківську. Прибираємо з любов\'ю і турботою для вашого комфорту.',
    images: [
      {
        url: 'https://cleaninglady.if/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cleaning Lady IF - Сімейна клінінгова компанія',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cleaning Lady IF - Сімейна клінінгова компанія',
    description: 'Професійні клінінгові послуги в Івано-Франківську',
    images: ['https://cleaninglady.if/og-image.jpg'],
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
    canonical: 'https://cleaninglady.if',
    languages: {
      'uk': 'https://cleaninglady.if',
      'en': 'https://cleaninglady.if/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="CleaningLady" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Cleaning Lady IF",
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
              "priceRange": "45-450 UAH"
            })
          }}
        />
      </head>
      <body className={nunito.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}