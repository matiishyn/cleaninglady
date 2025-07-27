export interface Language {
  code: 'uk' | 'en';
  name: string;
  flag: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  comment: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PriceItem {
  service: string;
  price: string;
  unit: string;
}

export interface Location {
  city: string;
  description: string;
  keywords: string[];
}