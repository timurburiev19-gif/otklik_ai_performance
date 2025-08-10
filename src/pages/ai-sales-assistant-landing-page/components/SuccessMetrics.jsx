import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessMetrics = () => {
  const [expandedCase, setExpandedCase] = useState(null);
  const [animatedValues, setAnimatedValues] = useState({
    appointments: 0,
    leads: 0,
    revenue: 0,
    time: 0
  });

  useEffect(() => {
    const targets = {
      appointments: 42,
      leads: 67,
      revenue: 450,
      time: 15
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedValues({
        appointments: Math.floor(targets?.appointments * progress),
        leads: Math.floor(targets?.leads * progress),
        revenue: Math.floor(targets?.revenue * progress),
        time: Math.floor(targets?.time * progress)
      });

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const mainMetrics = [
  {
    value: `+${animatedValues?.appointments}%`,
    label: 'Рост записей',
    icon: 'TrendingUp',
    color: 'text-success'
  },
  {
    value: animatedValues?.leads,
    label: 'Лидов за 5 дней',
    icon: 'Users',
    color: 'text-primary'
  },
  {
    value: `${animatedValues?.revenue}K₽`,
    label: 'Доп. выручка/месяц',
    icon: 'DollarSign',
    color: 'text-warning'
  },
  {
    value: `${animatedValues?.time}ч`,
    label: 'Экономия времени/день',
    icon: 'Clock',
    color: 'text-accent'
  }];


  const caseStudies = [
  {
    id: 'dental',
    business: "Стоматологическая клиника \'Белые зубы'",
    owner: "Доктор Анна Петрова",
    location: "Москва",
    beforeStats: {
      appointments: "15 записей/день",
      conversion: "23%",
      revenue: "180,000₽/месяц"
    },
    afterStats: {
      appointments: "38 записей/день",
      conversion: "67%",
      revenue: "420,000₽/месяц"
    },
    testimonial: `"За 2 недели количество записей выросло на 42%. AI отвечает пациентам мгновенно, даже ночью. Теперь мы не теряем ни одного обращения."`,
    results: [
    "Автоматизация записи на прием",
    "Консультации по услугам 24/7",
    "Напоминания о визитах",
    "Сбор отзывов после лечения"]

  },
  {
    id: 'travel',
    business: "Туристическое агентство \'Мечта'",
    owner: "Михаил Сидоров",
    location: "Санкт-Петербург",
    beforeStats: {
      appointments: "8 заявок/день",
      conversion: "31%",
      revenue: "95,000₽/месяц"
    },
    afterStats: {
      appointments: "67 заявок за 5 дней",
      conversion: "89%",
      revenue: "340,000₽/месяц"
    },
    testimonial: `"67 лидов за 5 дней! AI консультирует клиентов по турам, собирает заявки и сразу передает мне горячих клиентов."`,
    results: [
    "Консультации по турам",
    "Расчет стоимости поездок",
    "Сбор заявок на туры",
    "Квалификация клиентов"]

  },
  {
    id: 'fitness',
    business: "Фитнес-центр \'Энергия'",
    owner: "Елена Козлова",
    location: "Екатеринбург",
    beforeStats: {
      appointments: "12 записей/день",
      conversion: "28%",
      revenue: "220,000₽/месяц"
    },
    afterStats: {
      appointments: "35 записей/день",
      conversion: "73%",
      revenue: "580,000₽/месяц"
    },
    testimonial: `"Конверсия выросла до 73%! AI продает абонементы, записывает на тренировки и консультирует по программам."`,
    results: [
    "Продажа абонементов",
    "Запись на тренировки",
    "Консультации по программам",
    "Напоминания о занятиях"]

  }];


  const toggleCaseStudy = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Реальные результаты наших клиентов
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Цифры, которые говорят сами за себя
          </p>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainMetrics?.map((metric, index) =>
          <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white mb-4`}>
                <Icon name={metric?.icon} size={24} className={metric?.color} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric?.value}</div>
              <div className="text-sm text-gray-600">{metric?.label}</div>
            </div>
          )}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Истории успеха
          </h3>
          
          {caseStudies?.map((caseStudy) =>
          <div key={caseStudy?.id} className="bg-gray-50 rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{caseStudy?.business}</h4>
                    <p className="text-gray-600">{caseStudy?.owner} • {caseStudy?.location}</p>
                  </div>
                  <Button
                  variant="outline"
                  onClick={() => toggleCaseStudy(caseStudy?.id)}
                  iconName={expandedCase === caseStudy?.id ? "ChevronUp" : "ChevronDown"}
                  iconPosition="right">

                    {expandedCase === caseStudy?.id ? "Скрыть" : "Подробнее"}
                  </Button>
                </div>

                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "{caseStudy?.testimonial}"
                </blockquote>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Записи</div>
                    <div className="text-lg font-semibold text-gray-900">{caseStudy?.afterStats?.appointments}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Конверсия</div>
                    <div className="text-lg font-semibold text-success">{caseStudy?.afterStats?.conversion}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Выручка</div>
                    <div className="text-lg font-semibold text-primary">{caseStudy?.afterStats?.revenue}</div>
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedCase === caseStudy?.id &&
            <div className="border-t border-gray-200 p-6 bg-white">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before/After Comparison */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">До / После</h5>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-sm text-gray-600">Записи:</span>
                          <div className="text-right">
                            <div className="text-sm text-red-600 line-through">{caseStudy?.beforeStats?.appointments}</div>
                            <div className="text-sm font-semibold text-success">{caseStudy?.afterStats?.appointments}</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-sm text-gray-600">Конверсия:</span>
                          <div className="text-right">
                            <div className="text-sm text-red-600 line-through">{caseStudy?.beforeStats?.conversion}</div>
                            <div className="text-sm font-semibold text-success">{caseStudy?.afterStats?.conversion}</div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                          <span className="text-sm text-gray-600">Выручка:</span>
                          <div className="text-right">
                            <div className="text-sm text-red-600 line-through">{caseStudy?.beforeStats?.revenue}</div>
                            <div className="text-sm font-semibold text-success">{caseStudy?.afterStats?.revenue}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Implementation Results */}
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-4">Что автоматизировали:</h5>
                      <div className="space-y-2">
                        {caseStudy?.results?.map((result, index) =>
                    <div key={index} className="flex items-center">
                            <Icon name="Check" size={16} className="text-success mr-3" />
                            <span className="text-sm text-gray-700">{result}</span>
                          </div>
                    )}
                      </div>
                    </div>
                  </div>
                </div>
            }
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-success/5 rounded-lg p-8 border border-success/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хотите такие же результаты?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Начните с 7-дневного теста и убедитесь в эффективности сами
            </p>
            <Button
              variant="success"
              size="lg"
              iconName="Rocket"
              iconPosition="left"
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}>

              Получить такие же результаты
            </Button>
          </div>
        </div>
      </div>
    </section>);

};

export default SuccessMetrics;