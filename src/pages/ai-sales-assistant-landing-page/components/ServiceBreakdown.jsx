import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ServiceBreakdown = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [calculatorData, setCalculatorData] = useState({
    currentLeads: 50,
    currentConversion: 25,
    currentPrice: 5000
  });

  const tabs = [
  {
    id: 'ai',
    name: 'AI Assistant',
    icon: 'Bot',
    description: 'Умный помощник для автоматизации продаж'
  },
  {
    id: 'ads',
    name: 'Targeted Ads',
    icon: 'Target',
    description: 'Настроенная реклама для привлечения клиентов'
  }];


  const aiFeatures = [
  {
    category: 'Обработка обращений',
    features: [
    { name: 'Мгновенные ответы 24/7', included: true },
    { name: 'Распознавание намерений', included: true },
    { name: 'Квалификация лидов', included: true },
    { name: 'Многоканальность (Instagram, Telegram, сайт)', included: true }]

  },
  {
    category: 'Продажи и запись',
    features: [
    { name: 'Автоматическая запись на прием', included: true },
    { name: 'Расчет стоимости услуг', included: true },
    { name: 'Обработка возражений', included: true },
    { name: 'Напоминания клиентам', included: true }]

  },
  {
    category: 'Интеграции',
    features: [
    { name: 'CRM системы (amoCRM, Битрикс24)', included: true },
    { name: 'Календари (Google, Яндекс)', included: true },
    { name: 'Платежные системы', included: true },
    { name: 'Аналитика и отчеты', included: true }]

  }];


  const adsFeatures = [
  {
    category: 'Настройка рекламы',
    features: [
    { name: 'Анализ целевой аудитории', included: true },
    { name: 'Создание рекламных креативов', included: true },
    { name: 'Настройка таргетинга', included: true },
    { name: 'A/B тестирование объявлений', included: true }]

  },
  {
    category: 'Управление кампаниями',
    features: [
    { name: 'Ежедневная оптимизация', included: true },
    { name: 'Контроль бюджета', included: true },
    { name: 'Масштабирование успешных кампаний', included: true },
    { name: 'Отключение неэффективных объявлений', included: true }]

  },
  {
    category: 'Аналитика и отчеты',
    features: [
    { name: 'Еженедельные отчеты по результатам', included: true },
    { name: 'Анализ конверсий и ROI', included: true },
    { name: 'Рекомендации по улучшению', included: true },
    { name: 'Прогнозирование результатов', included: true }]

  }];


  const calculateROI = () => {
    const currentRevenue = calculatorData?.currentLeads * (calculatorData?.currentConversion / 100) * calculatorData?.currentPrice;
    const projectedLeads = calculatorData?.currentLeads * 2.5; // 150% increase
    const projectedConversion = Math.min(calculatorData?.currentConversion * 2.2, 85); // 120% increase, max 85%
    const projectedRevenue = projectedLeads * (projectedConversion / 100) * calculatorData?.currentPrice;
    const additionalRevenue = projectedRevenue - currentRevenue;
    const roi = (additionalRevenue - 800) / 800 * 100;

    return {
      currentRevenue: Math.round(currentRevenue),
      projectedRevenue: Math.round(projectedRevenue),
      additionalRevenue: Math.round(additionalRevenue),
      roi: Math.round(roi)
    };
  };

  const roiData = calculateROI();

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Что входит в пакет за $800
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Полное решение для автоматизации продаж и привлечения клиентов
          </p>
        </div>

        {/* Service Tabs */}
        <div className="mb-8">
          <div className="sm:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e?.target?.value)}
              className="block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary">

              {tabs?.map((tab) =>
              <option key={tab?.id} value={tab?.id}>
                  {tab?.name}
                </option>
              )}
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8 justify-center">
                {tabs?.map((tab) =>
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`py-4 px-6 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === tab?.id ?
                  'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`
                  }>

                    <div className="flex items-center">
                      <Icon name={tab?.icon} size={20} />
                      <div className="text-left">
                        <div className="font-semibold">{tab?.name}</div>
                        <div className="text-xs text-gray-500">{tab?.description}</div>
                      </div>
                    </div>
                  </button>
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features List */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={tabs?.find((t) => t?.id === activeTab)?.icon} size={24} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {tabs?.find((t) => t?.id === activeTab)?.name}
                  </h3>
                  <p className="text-gray-600">
                    {tabs?.find((t) => t?.id === activeTab)?.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {(activeTab === 'ai' ? aiFeatures : adsFeatures)?.map((category, categoryIndex) =>
              <div key={categoryIndex}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{category?.category}</h4>
                  <div className="space-y-2">
                    {category?.features?.map((feature, featureIndex) =>
                  <div key={featureIndex} className="flex items-center">
                        <Icon
                      name={feature?.included ? "Check" : "X"}
                      size={16}
                      className={feature?.included ? "text-success mr-3" : "text-red-500 mr-3"} />

                        <span className={`text-sm ${feature?.included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature?.name}
                        </span>
                      </div>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Калькулятор ROI
            </h3>
            <p className="text-gray-600 mb-6">Рассчитайте потенциальную прибыль от внедрения AI Sales Assistant

            </p>

            <div className="space-y-4 mb-6">
              <Input
                label="Лидов в месяц"
                type="number"
                value={calculatorData?.currentLeads}
                onChange={(e) => setCalculatorData({
                  ...calculatorData,
                  currentLeads: parseInt(e?.target?.value) || 0
                })}
                className="mb-4" />

              
              <Input
                label="Текущая конверсия (%)"
                type="number"
                value={calculatorData?.currentConversion}
                onChange={(e) => setCalculatorData({
                  ...calculatorData,
                  currentConversion: parseInt(e?.target?.value) || 0
                })}
                className="mb-4" />

              
              <Input
                label="Средний чек (₽)"
                type="number"
                value={calculatorData?.currentPrice}
                onChange={(e) => setCalculatorData({
                  ...calculatorData,
                  currentPrice: parseInt(e?.target?.value) || 0
                })}
                className="mb-4" />

            </div>

            {/* Results */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Прогноз результатов:</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Текущая выручка:</span>
                  <span className="font-semibold text-gray-900">{roiData?.currentRevenue?.toLocaleString()}₽</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Прогноз выручки:</span>
                  <span className="font-semibold text-success">{roiData?.projectedRevenue?.toLocaleString()}₽</span>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Дополнительная прибыль:</span>
                  <span className="font-bold text-primary text-lg">+{roiData?.additionalRevenue?.toLocaleString()}₽</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ROI:</span>
                  <span className="font-bold text-success text-lg">{roiData?.roi}%</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center">
                  <Icon name="TrendingUp" size={20} className="text-primary mr-2" />
                  <span className="text-sm font-medium text-primary">
                    Окупаемость за {Math.ceil(800 / (roiData?.additionalRevenue / 30))} дня
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-primary">
            <div className="mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">$800</div>
              <div className="text-lg text-gray-600">Полный пакет настройки</div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-3">Что включено:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-success mr-2" />
                    <span className="text-sm">Настройка AI Assistant</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-success mr-2" />
                    <span className="text-sm">Запуск рекламных кампаний</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-success mr-2" />
                    <span className="text-sm">Интеграция с CRM</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Check" size={16} className="text-success mr-2" />
                    <span className="text-sm">Обучение команды</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-3">Гарантии:</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="Shield" size={16} className="text-success mr-2" />
                    <span className="text-sm">Результат в первую неделю</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="RefreshCw" size={16} className="text-success mr-2" />
                    <span className="text-sm">Возврат денег при отсутствии результата</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Headphones" size={16} className="text-success mr-2" />
                    <span className="text-sm">Техподдержка 30 дней</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Settings" size={16} className="text-success mr-2" />
                    <span className="text-sm">Бесплатные доработки</span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              iconName="Rocket"
              iconPosition="left"
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto">

              Начать 7-дневный тест
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default ServiceBreakdown;