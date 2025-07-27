'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PriceCalculatorData, PriceResult } from '@/types';
import { Building2, Calculator, Home, Instagram, MessageSquare, Minus, Phone, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';

interface OrderSectionProps {
  dict: any;
}

export function OrderSection({ dict }: OrderSectionProps) {
  const [calculatorData, setCalculatorData] = useState<PriceCalculatorData>({
    cleaningType: '',
    propertyType: 'apartment',
    area: 50,
    windows: 4,
    bathrooms: 1,
    additionalServices: {
      fridgeCleaning: false,
      ovenCleaning: false,
      washingMachineCleaning: false,
      dishwashing: false,
    },
  });

  // Set default cleaning type after dict is loaded
  useEffect(() => {
    if (dict?.services?.general?.title && !calculatorData.cleaningType) {
      setCalculatorData(prev => ({
        ...prev,
        cleaningType: dict.services.general.title
      }));
    }
  }, [dict, calculatorData.cleaningType]);

  const [priceResult, setPriceResult] = useState<PriceResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof PriceCalculatorData, value: string | number | boolean) => {
    setCalculatorData(prev => ({ ...prev, [field]: value }));
  };

  const handleAdditionalServiceChange = (service: keyof PriceCalculatorData['additionalServices'], checked: boolean) => {
    setCalculatorData(prev => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [service]: checked,
      },
    }));
  };

  const calculatePrice = () => {
    setIsCalculating(true);

    // Base prices per m² for different cleaning types
    const basePrices = {
      'Генеральне прибирання': 65,
      'Підтримуюче прибирання': 50,
      'Прибирання після ремонту': 85,
      'General Cleaning': 65,
      'Maintenance Cleaning': 50,
      'Post-Renovation Cleaning': 85,
    };

    const basePrice = basePrices[calculatorData.cleaningType as keyof typeof basePrices] || 50;

    // Calculate breakdown
    const breakdown = {
      area: calculatorData.area * basePrice,
      windows: calculatorData.windows * 30, // 30 грн за вікно
      bathrooms: calculatorData.bathrooms * 100, // 100 грн за санвузол
      propertyType: calculatorData.propertyType === 'house' ? calculatorData.area * 10 : 0, // +10 грн/м² для будинків
      additionalServices: 0,
    };

    // Additional services pricing
    const servicesPricing = {
      fridgeCleaning: 200,
      ovenCleaning: 150,
      washingMachineCleaning: 100,
      dishwashing: 50,
    };

    Object.entries(calculatorData.additionalServices).forEach(([service, enabled]) => {
      if (enabled) {
        breakdown.additionalServices += servicesPricing[service as keyof typeof servicesPricing];
      }
    });

    const totalPrice = Object.values(breakdown).reduce((sum, price) => sum + price, 0);

    const result: PriceResult = {
      basePrice: breakdown.area,
      additionalServicesPrice: breakdown.windows + breakdown.bathrooms + breakdown.propertyType + breakdown.additionalServices,
      totalPrice,
      breakdown,
    };

    setPriceResult(result);
    setIsCalculating(false);
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.order.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {dict.order.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Price Calculator */}
          <Card className="border-none shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                <Calculator className="h-6 w-6 mr-3 inline" />
                {dict.order.calculator.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Cleaning Type */}
                <div>
                  <Label className="text-base font-medium">
                    {dict.order.calculator.cleaningType} *
                  </Label>
                  <Select
                    value={calculatorData.cleaningType}
                    onValueChange={(value: string) => handleInputChange('cleaningType', value)}
                  >
                    <SelectTrigger className="mt-2 h-12">
                      <SelectValue placeholder={dict.order.calculator.selectCleaningType} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={dict.services.general.title}>{dict.services.general.title}</SelectItem>
                      <SelectItem value={dict.services.maintenance.title}>{dict.services.maintenance.title}</SelectItem>
                      <SelectItem value={dict.services.afterRepair.title}>{dict.services.afterRepair.title}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Property Type */}
                <div>
                  <Label className="text-base font-medium">
                    {dict.order.calculator.propertyType} *
                  </Label>
                  <div className="mt-2 grid grid-cols-2 gap-3">
                    <div
                      onClick={() => handleInputChange('propertyType', 'apartment')}
                      className={`cursor-pointer rounded-lg border-2 p-3 text-center transition-all hover:border-teal-300 hover:bg-teal-50 ${calculatorData.propertyType === 'apartment'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 bg-white'
                        }`}
                    >
                      <Building2
                        className={`mx-auto h-6 w-6 mb-2 ${calculatorData.propertyType === 'apartment' ? 'text-teal-600' : 'text-gray-500'
                          }`}
                      />
                      <div className={`font-medium text-sm ${calculatorData.propertyType === 'apartment' ? 'text-teal-700' : 'text-gray-700'
                        }`}>
                        {dict.order.calculator.apartment}
                      </div>
                    </div>
                    <div
                      onClick={() => handleInputChange('propertyType', 'house')}
                      className={`cursor-pointer rounded-lg border-2 p-3 text-center transition-all hover:border-teal-300 hover:bg-teal-50 ${calculatorData.propertyType === 'house'
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 bg-white'
                        }`}
                    >
                      <Home
                        className={`mx-auto h-6 w-6 mb-2 ${calculatorData.propertyType === 'house' ? 'text-teal-600' : 'text-gray-500'
                          }`}
                      />
                      <div className={`font-medium text-sm ${calculatorData.propertyType === 'house' ? 'text-teal-700' : 'text-gray-700'
                        }`}>
                        {dict.order.calculator.house}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Area */}
                <div>
                  <Label className="text-lg font-semibold text-gray-800">
                    {dict.order.calculator.area} * ({calculatorData.area} м²)
                  </Label>
                  <div className="mt-3">
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('area', Math.max(10, calculatorData.area - 1))}
                        className="h-12 w-12 p-0"
                        title={dict.order.calculator.decreaseArea}
                      >
                        <Minus className="h-5 w-5" />
                      </Button>
                      <Input
                        type="number"
                        min="10"
                        max="200"
                        value={calculatorData.area}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 10;
                          handleInputChange('area', Math.min(200, Math.max(10, value)));
                        }}
                        className="h-12 flex-1 text-center text-lg font-medium"
                        placeholder={dict.order.calculator.areaPlaceholder}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('area', Math.min(200, calculatorData.area + 1))}
                        className="h-12 w-12 p-0"
                        title={dict.order.calculator.increaseArea}
                      >
                        <Plus className="h-5 w-5" />
                      </Button>
                      <span className="text-base text-gray-600 ml-2 font-medium">м²</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>10 м²</span>
                      <span>200 м²</span>
                    </div>
                  </div>
                </div>

                {/* Windows and Bathrooms in one row */}
                <div className="grid grid-cols-2 gap-12">
                  {/* Windows */}
                  <div>
                    <Label className="text-base font-medium">
                      {dict.order.calculator.windows}
                    </Label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('windows', Math.max(0, calculatorData.windows - 1))}
                        className="h-10 w-8 p-0"
                        title={dict.order.calculator.decreaseWindows}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        min="0"
                        max="50"
                        value={calculatorData.windows}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0;
                          handleInputChange('windows', Math.min(50, Math.max(0, value)));
                        }}
                        className="h-10 flex-1 text-center"
                        placeholder={dict.order.calculator.windowsPlaceholder}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('windows', Math.min(50, calculatorData.windows + 1))}
                        className="h-10 w-8 p-0"
                        title={dict.order.calculator.increaseWindows}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-gray-500">шт</span>
                    </div>
                  </div>

                  {/* Bathrooms */}
                  <div>
                    <Label className="text-base font-medium">
                      {dict.order.calculator.bathrooms}
                    </Label>
                    <div className="mt-2 flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('bathrooms', Math.max(1, calculatorData.bathrooms - 1))}
                        className="h-10 w-8 p-0"
                        title={dict.order.calculator.decreaseBathrooms}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        min="1"
                        max="10"
                        value={calculatorData.bathrooms}
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 1;
                          handleInputChange('bathrooms', Math.min(10, Math.max(1, value)));
                        }}
                        className="h-10 flex-1 text-center"
                        placeholder={dict.order.calculator.selectBathrooms}
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleInputChange('bathrooms', Math.min(10, calculatorData.bathrooms + 1))}
                        className="h-10 w-8 p-0"
                        title={dict.order.calculator.increaseBathrooms}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <span className="text-sm text-gray-500">шт</span>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <Label className="text-base font-medium">
                    {dict.order.calculator.additionalServices}
                  </Label>
                  <div className="mt-2 space-y-3">
                    {[
                      { key: 'fridgeCleaning', label: dict.order.calculator.fridgeCleaning, price: '200 грн' },
                      { key: 'ovenCleaning', label: dict.order.calculator.ovenCleaning, price: '150 грн' },
                      { key: 'washingMachineCleaning', label: dict.order.calculator.washingMachineCleaning, price: '100 грн' },
                      { key: 'dishwashing', label: dict.order.calculator.dishwashing, price: '50 грн' },
                    ].map((service) => (
                      <div key={service.key} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={service.key}
                            checked={calculatorData.additionalServices[service.key as keyof typeof calculatorData.additionalServices]}
                            onCheckedChange={(checked) =>
                              handleAdditionalServiceChange(service.key as keyof typeof calculatorData.additionalServices, checked as boolean)
                            }
                          />
                          <Label htmlFor={service.key} className="text-sm">
                            {service.label}
                          </Label>
                        </div>
                        <span className="text-sm text-gray-500">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={calculatePrice}
                  disabled={isCalculating || !calculatorData.cleaningType || !calculatorData.area}
                  className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-lg font-medium"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  {isCalculating ? 'Розраховуємо...' : dict.order.calculator.calculate}
                </Button>

                {/* Price Result */}
                {priceResult && (
                  <div className="mt-6 p-4 bg-teal-50 rounded-lg border">
                    <h3 className="text-lg font-bold text-teal-800 mb-3">
                      {dict.order.calculator.estimatedPrice}
                    </h3>
                    <div className="text-3xl font-bold text-teal-600 mb-4">
                      {priceResult.totalPrice} грн
                    </div>
                    <div className="text-sm text-gray-600 mb-3">
                      <div>Базова вартість (площа): {priceResult.breakdown.area} грн</div>
                      <div>Вікна: {priceResult.breakdown.windows} грн</div>
                      <div>Санвузли: {priceResult.breakdown.bathrooms} грн</div>
                      {priceResult.breakdown.propertyType > 0 && (
                        <div>Доплата за будинок: {priceResult.breakdown.propertyType} грн</div>
                      )}
                      {priceResult.breakdown.additionalServices > 0 && (
                        <div>Додаткові послуги: {priceResult.breakdown.additionalServices} грн</div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">
                      {dict.order.calculator.finalNote}
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Contact & Why Choose Us */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-none shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {dict.order.quickContact}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-14 border-2 border-purple-500 text-purple-600 hover:bg-purple-50"
                  onClick={() => window.open('viber://chat?number=+380XXXXXXXXX', '_blank')}
                >
                  <MessageSquare className="h-5 w-5 mr-3" />
                  {dict.order.viber}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-14 border-2 border-pink-500 text-pink-600 hover:bg-pink-50"
                  onClick={() => window.open('https://instagram.com/cleaninglady.if', '_blank')}
                >
                  <Instagram className="h-5 w-5 mr-3" />
                  {dict.order.instagram}
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-14 border-2 border-green-500 text-green-600 hover:bg-green-50"
                  onClick={() => window.open('tel:+380XXXXXXXXX', '_blank')}
                >
                  <Phone className="h-5 w-5 mr-3" />
                  {dict.order.call}
                </Button>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="border-none shadow-xl bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  {dict.order.whyUs.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.family}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.eco}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.guarantee}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{dict.order.whyUs.prices}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}