import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrialOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 6,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
  {
    icon: "Shield",
    title: "Гарантия результата",
    description: "Результат в первую неделю или возврат денег"
  },
  {
    icon: "Clock",
    title: "Быстрый запуск",
    description: "Настройка за 1 день, работа с первого дня"
  },
  {
    icon: "Headphones",
    title: "Полная поддержка",
    description: "Техподдержка и консультации 30 дней"
  },
  {
    icon: "Settings",
    title: "Бесплатные доработки",
    description: "Корректировки и улучшения без доплат"
  }];


  const urgencyReasons = [
  "Только 15 мест в этом месяце",
  "Персональная настройка под ваш бизнес",
  "Ограниченное количество экспертов",
  "Эксклюзивные условия для первых клиентов"];


  return (
    <section id="trial-offer" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-warning/20 text-warning rounded-full text-sm font-medium mb-4">
            <Icon name="Zap" size={16} className="mr-2" />
            Ограниченное предложение
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            7-дневный тест за $800
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Убедитесь в эффективности AI Sales Assistant на практике
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            {/* Left side - Offer details */}
            <div className="p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Что вы получите:
                </h3>
                <div className="space-y-4">
                  {benefits?.map((benefit, index) =>
                  <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={benefit?.icon} size={20} className="text-primary" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg font-semibold text-gray-900">{benefit?.title}</h4>
                        <p className="text-gray-600">{benefit?.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Risk Reversal */}
              <div className="bg-success/10 rounded-lg p-6 mb-8">
                <div className="flex items-center mb-3">
                  <Icon name="Shield" size={24} className="text-success mr-3" />
                  <h4 className="text-lg font-bold text-gray-900">100% гарантия</h4>
                </div>
                <p className="text-gray-700">
                  Если в течение 7 дней вы не увидите увеличение количества лидов или записей, 
                  мы вернем вам деньги полностью. Никаких вопросов.
                </p>
              </div>

              {/* Urgency reasons */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Почему ограниченное количество мест:
                </h4>
                <div className="space-y-2">
                  {urgencyReasons?.map((reason, index) =>
                  <div key={index} className="flex items-center">
                      <Icon name="AlertCircle" size={16} className="text-warning mr-3" />
                      <span className="text-sm text-gray-700">{reason}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right side - Countdown and CTA */}
            <div className="bg-gray-50 p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  До окончания предложения:
                </h3>
                
                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary">{timeLeft?.days}</div>
                    <div className="text-xs text-gray-600">дней</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary">{timeLeft?.hours}</div>
                    <div className="text-xs text-gray-600">часов</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary">{timeLeft?.minutes}</div>
                    <div className="text-xs text-gray-600">минут</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary">{timeLeft?.seconds}</div>
                    <div className="text-xs text-gray-600">секунд</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-lg text-gray-500 line-through">$1,200</span>
                  <span className="text-4xl font-bold text-gray-900 ml-2">$800</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Экономия $400</div>
                <div className="inline-flex items-center px-3 py-1 bg-success/20 text-success rounded-full text-sm font-medium">
                  <Icon name="TrendingDown" size={14} className="mr-1" />
                  Скидка 33%
                </div>
              </div>

              {/* CTA Button */}
              <Button
                variant="default"
                size="lg"
                fullWidth
                iconName="Rocket"
                iconPosition="left"
                onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="mb-4">

                Начать 7-дневный тест
              </Button>

              {/* Trust indicators */}
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Icon name="Lock" size={14} className="mr-1" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="RefreshCw" size={14} className="mr-1" />
                    <span>Возврат 100%</span>
                  </div>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-6 text-center">
                <div className="text-sm text-gray-600 mb-2">Уже протестировали:</div>
                <div className="flex items-center justify-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5]?.map((i) =>
                    <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-900">+95 бизнесов</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <blockquote className="text-lg text-gray-700 italic mb-4">
              "Лучшие $800, которые я потратил на бизнес. Окупилось за 10 дней, 
              теперь AI приносит мне дополнительно 300,000₽ в месяц."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-3"></div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Елена Козлова</div>
                <div className="text-sm text-gray-600">Фитнес-центр "Энергия"</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TrialOfferSection;