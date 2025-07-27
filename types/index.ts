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

export interface PriceCalculatorData {
  cleaningType: string;
  propertyType: 'apartment' | 'house';
  area: number;
  windows: number;
  bathrooms: number;
  additionalServices: {
    fridgeCleaning: boolean;
    ovenCleaning: boolean;
    washingMachineCleaning: boolean;
    dishwashing: boolean;
  };
}

export interface PriceResult {
  basePrice: number;
  additionalServicesPrice: number;
  totalPrice: number;
  breakdown: {
    area: number;
    windows: number;
    bathrooms: number;
    propertyType: number;
    additionalServices: number;
  };
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