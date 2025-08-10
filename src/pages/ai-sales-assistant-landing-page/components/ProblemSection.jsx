import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProblemSection = () => {
  const [lostLeads, setLostLeads] = useState(0);
  const [missedCalls, setMissedCalls] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLostLeads((prev) => prev + Math.floor(Math.random() * 2));
      setMissedCalls((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const problems = [
  {
    icon: "Phone",
    title: "Пропущенные звонки",
    description: "Каждый пропущенный звонок = потерянный клиент",
    impact: "До 40% лидов теряется"
  },
  {
    icon: "MessageSquare",
    title: "Медленные ответы",
    description: "Клиенты ждут мгновенного ответа в мессенджерах",
    impact: "67% уходят через 5 минут"
  },
  {
    icon: "Clock",
    title: "Работа только днем",
    description: "Бизнес спит, а конкуренты получают ваших клиентов",
    impact: "30% обращений ночью"
  },
  {
    icon: "Users",
    title: "Нехватка персонала",
    description: "Найм и обучение менеджеров стоит дорого",
    impact: "150,000₽+ в месяц"
  }];


  return (
    <section id="problem" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Знакомые проблемы?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Каждый день ваш бизнес теряет клиентов из-за неэффективной обработки заявок
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Left side - Problems visualization */}
          <div className="mb-8 lg:mb-0">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Overwhelmed business owner"
                className="w-full h-80 object-cover rounded-lg shadow-lg" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              
              {/* Animated loss counters */}
              <div className="absolute top-4 left-4 bg-red-500 text-white rounded-lg p-3 shadow-lg animate-pulse">
                <div className="flex items-center">
                  <Icon name="TrendingDown" size={16} className="mr-2" />
                  <span className="text-sm font-semibold">Потеряно лидов: {lostLeads}</span>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-orange-500 text-white rounded-lg p-3 shadow-lg animate-pulse">
                <div className="flex items-center">
                  <Icon name="PhoneOff" size={16} className="mr-2" />
                  <span className="text-sm font-semibold">Пропущено: {missedCalls}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                <p className="text-sm text-gray-900 font-medium text-center">
                  "Не успеваю отвечать всем клиентам..."
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Problem list */}
          <div className="space-y-6">
            {problems?.map((problem, index) =>
            <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-100">
                      <Icon name={problem?.icon} size={24} className="text-red-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{problem?.title}</h3>
                    <p className="mt-2 text-base text-gray-600">{problem?.description}</p>
                    <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      <Icon name="AlertTriangle" size={14} className="mr-1" />
                      {problem?.impact}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Хватит терять клиентов!
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Каждый день промедления стоит вам тысячи рублей упущенной прибыли
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <Icon name="DollarSign" size={16} className="mr-2 text-red-500" />
                <span>Потери в день: 1000$+</span>
              </div>
              <div className="flex items-center">
                <Icon name="Calendar" size={16} className="mr-2 text-red-500" />
                <span>Потери в месяц: 3000$+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ProblemSection;