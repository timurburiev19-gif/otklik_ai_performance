import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTASection = () => {
  const [urgencyTimer, setUrgencyTimer] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const finalBenefits = [
    {
      icon: "TrendingUp",
      title: "Рост продаж на 67%",
      description: "В среднем за первый месяц работы"
    },
    {
      icon: "Clock",
      title: "Экономия 15 часов в неделю",
      description: "Время, которое тратили на обработку заявок"
    },
    {
      icon: "DollarSign",
      title: "ROI 400%+",
      description: "Окупаемость инвестиций за первый месяц"
    },
    {
      icon: "Users",
      title: "0 потерянных лидов",
      description: "AI работает 24/7 без выходных"
    }
  ];

  const riskReversals = [
    "Гарантия результата в первую неделю",
    "Возврат денег при отсутствии эффекта",
    "Бесплатная техподдержка 30 дней",
    "Персональный менеджер проекта"
  ];

  return (
    <section id="final-cta" className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">
            Не упустите возможность автоматизировать продажи
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Каждый день промедления = потерянные клиенты и упущенная прибыль. 
            Начните получать результат уже через 24 часа.
          </p>
        </div>

        {/* Urgency Timer */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-12 max-w-md mx-auto">
          <div className="text-center text-white mb-4">
            <h3 className="text-lg font-semibold mb-2">
              Специальная цена действует:
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold">{urgencyTimer?.hours}</div>
                <div className="text-xs opacity-80">часов</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold">{urgencyTimer?.minutes}</div>
                <div className="text-xs opacity-80">минут</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3">
                <div className="text-2xl font-bold">{urgencyTimer?.seconds}</div>
                <div className="text-xs opacity-80">секунд</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            {/* Left side - Benefits */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Что вы получите уже завтра:
              </h3>
              
              <div className="space-y-6 mb-8">
                {finalBenefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={benefit?.icon} size={24} className="text-primary" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit?.title}
                      </h4>
                      <p className="text-gray-600">{benefit?.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5]?.map((i) => (
                      <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-semibold text-gray-900">100+ довольных клиентов</div>
                    <div className="text-xs text-gray-600">Средняя оценка 4.9/5</div>
                  </div>
                </div>
                <blockquote className="text-sm text-gray-700 italic">
                  "Лучшие $800, которые я потратил на бизнес. Система окупилась за 8 дней."
                </blockquote>
                <div className="text-xs text-gray-500 mt-2">— Михаил С., владелец турагентства</div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <div className="mb-6">
                  <div className="text-lg text-gray-500 line-through mb-2">Обычная цена: $1,200</div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">$800</div>
                  <div className="inline-flex items-center px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">
                    <Icon name="TrendingDown" size={14} className="mr-1" />
                    Экономия $400
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Ваши гарантии:
                  </h4>
                  <div className="space-y-2">
                    {riskReversals?.map((guarantee, index) => (
                      <div key={index} className="flex items-center justify-center">
                        <Icon name="Shield" size={16} className="text-success mr-2" />
                        <span className="text-sm text-gray-700">{guarantee}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main CTA */}
              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Rocket"
                iconPosition="left"
                onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mb-4 text-lg py-4"
              >
                Начать 7-дневный тест за $800
              </Button>

              {/* Alternative CTA */}
              <Button
                variant="outline"
                size="lg"
                fullWidth
                iconName="Phone"
                iconPosition="left"
                className="mb-6"
              >
                Получить консультацию
              </Button>

              {/* Trust indicators */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Icon name="Lock" size={12} className="mr-1" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Shield" size={12} className="mr-1" />
                    <span>SSL защита</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="RefreshCw" size={12} className="mr-1" />
                    <span>Возврат 100%</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500">
                  Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom urgency message */}
        <div className="mt-12 text-center text-white">
          <div className="bg-warning/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Icon name="AlertTriangle" size={24} className="text-warning mr-3" />
              <h4 className="text-lg font-bold">Внимание!</h4>
            </div>
            <p className="text-sm opacity-90">
              Мы принимаем только 15 новых клиентов в месяц для обеспечения качественной настройки. 
              На данный момент осталось <span className="font-bold text-warning">7 мест</span>.
            </p>
          </div>
        </div>

        {/* Final stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          <div>
            <div className="text-2xl font-bold mb-1">24ч</div>
            <div className="text-sm opacity-80">До запуска</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">7 дней</div>
            <div className="text-sm opacity-80">Гарантия результата</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-sm opacity-80">Возврат денег</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-sm opacity-80">Работа AI</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;