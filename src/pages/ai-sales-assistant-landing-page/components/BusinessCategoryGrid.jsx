import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BusinessCategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const businessCategories = [
  {
    id: 'dental',
    name: 'Стоматология',
    icon: 'Heart',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+42%',
      leads: '89 за месяц',
      conversion: '67%'
    },
    description: 'Автоматическая запись пациентов и консультации по услугам'
  },
  {
    id: 'fitness',
    name: 'Фитнес',
    icon: 'Dumbbell',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+85%',
      leads: '156 за месяц',
      conversion: '73%'
    },
    description: 'Продажа абонементов и запись на тренировки'
  },
  {
    id: 'beauty',
    name: 'Красота',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+58%',
      leads: '124 за месяц',
      conversion: '61%'
    },
    description: 'Запись на процедуры и консультации по уходу'
  },
  {
    id: 'education',
    name: 'Образование',
    icon: 'GraduationCap',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+76%',
      leads: '203 за месяц',
      conversion: '54%'
    },
    description: 'Запись на курсы и консультации по программам'
  },
  {
    id: 'travel',
    name: 'Туризм',
    icon: 'Plane',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+134%',
      leads: '67 за 5 дней',
      conversion: '89%'
    },
    description: 'Продажа туров и консультации по направлениям'
  },
  {
    id: 'restaurants',
    name: 'Рестораны',
    icon: 'UtensilsCrossed',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+92%',
      leads: '178 за месяц',
      conversion: '71%'
    },
    description: 'Бронирование столиков и прием заказов'
  },
  {
    id: 'automotive',
    name: 'Автосервис',
    icon: 'Car',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+63%',
      leads: '95 за месяц',
      conversion: '58%'
    },
    description: 'Запись на ремонт и консультации по услугам'
  },
  {
    id: 'real-estate',
    name: 'Недвижимость',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    metrics: {
      appointments: '+156%',
      leads: '234 за месяц',
      conversion: '43%'
    },
    description: 'Показы объектов и консультации по покупке'
  }];


  return (
    <section id="industries" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Работаем с любой сферой бизнеса
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            AI адаптируется под специфику вашей отрасли
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessCategories?.map((category) =>
          <div
            key={category?.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
            onMouseEnter={() => setHoveredCategory(category?.id)}
            onMouseLeave={() => setHoveredCategory(null)}>

              <div className="relative h-48 overflow-hidden">
                <Image
                src={category?.image}
                alt={category?.name}
                className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={24} className="text-primary" />
                </div>

                {/* Category Name */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{category?.name}</h3>
                  <p className="text-sm text-white/90 mt-1">{category?.description}</p>
                </div>
              </div>

              {/* Hover Metrics */}
              {hoveredCategory === category?.id &&
            <div className="absolute inset-0 bg-primary/95 flex items-center justify-center p-6 transition-all duration-300">
                  <div className="text-center text-white">
                    <h4 className="text-lg font-bold mb-4">Результаты клиентов:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Записи:</span>
                        <span className="font-bold text-lg">{category?.metrics?.appointments}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Лиды:</span>
                        <span className="font-bold text-lg">{category?.metrics?.leads}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Конверсия:</span>
                        <span className="font-bold text-lg">{category?.metrics?.conversion}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/30">
                      <Icon name="TrendingUp" size={20} className="mx-auto" />
                    </div>
                  </div>
                </div>
            }
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Не видите свою сферу?
            </h3>
            <p className="text-lg text-gray-600 mb-6">Ai адаптируется под любой бизнес. Мы настроим систему специально для вас.

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="mr-2 text-success" />
                <span>Индивидуальная настройка</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="mr-2 text-success" />
                <span>Обучение под вашу специфику</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Icon name="Check" size={16} className="mr-2 text-success" />
                <span>Интеграция с вашими системами</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default BusinessCategoryGrid;