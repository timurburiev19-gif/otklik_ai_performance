import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SolutionWorkflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      id: 0,
      title: "Захват лидов",
      description: "AI автоматически отвечает на все обращения в Instagram, Telegram, на сайте",
      icon: "MessageCircle",
      details: {
        features: ["Мгновенный ответ 24/7", "Распознавание намерений", "Сбор контактов"],
        example: `Клиент: "Сколько стоит отбеливание зубов?"\nAI: "Здравствуйте! Отбеливание от 8,000₽. Могу записать вас на консультацию?"`
      }
    },
    {
      id: 1,
      title: "Квалификация",
      description: "ИИ задает правильные вопросы и определяет готовность к покупке",
      icon: "Search",
      details: {
        features: ["Оценка бюджета", "Выявление потребностей", "Определение сроков"],
        example: `AI: "Когда планируете процедуру?"\nКлиент: "На следующей неделе"\nAI: "Отлично! Запишу вас к доктору Петровой"`
      }
    },
    {
      id: 2,
      title: "Запись на прием",
      description: "Автоматическое бронирование времени в календаре специалиста",
      icon: "Calendar",
      details: {
        features: ["Синхронизация с календарем", "SMS-напоминания", "Подтверждение записи"],
        example: `AI: "Записал вас на 15:00 завтра. Отправил SMS с адресом и телефоном клиники"`
      }
    },
    {
      id: 3,
      title: "CRM интеграция",
      description: "Все данные автоматически попадают в вашу CRM систему",
      icon: "Database",
      details: {
        features: ["Создание карточки клиента", "История общения", "Аналитика продаж"],
        example: `Создана карточка: Иван Петров, +7(999)123-45-67\nУслуга: Отбеливание зубов\nСтатус: Записан на 15:00`
      }
    }
  ];

  return (
    <section id="solution" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Как работает AI Sales Assistant
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            4 простых шага к автоматизации продаж
          </p>
        </div>

        {/* Interactive Workflow */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Steps Navigation */}
          <div className="mb-8 lg:mb-0">
            <div className="space-y-4">
              {workflowSteps?.map((step, index) => (
                <div
                  key={step?.id}
                  className={`cursor-pointer transition-all duration-200 ${
                    activeStep === index ? 'transform scale-105' : ''
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`p-6 rounded-lg border-2 ${
                    activeStep === index 
                      ? 'border-primary bg-primary/5 shadow-lg' 
                      : 'border-gray-200 bg-white hover:border-primary/50'
                  }`}>
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeStep === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon name={step?.icon} size={24} />
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <span className={`text-sm font-medium ${
                            activeStep === index ? 'text-primary' : 'text-gray-500'
                          }`}>
                            Шаг {index + 1}
                          </span>
                        </div>
                        <h3 className={`text-lg font-semibold ${
                          activeStep === index ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step?.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">{step?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Details */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name={workflowSteps?.[activeStep]?.icon} size={32} className="text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {workflowSteps?.[activeStep]?.title}
                  </h3>
                  <p className="text-gray-600">
                    {workflowSteps?.[activeStep]?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Возможности:</h4>
              <div className="space-y-2">
                {workflowSteps?.[activeStep]?.details?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="Check" size={16} className="text-success mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Example Conversation */}
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Пример диалога:
              </h4>
              <div className="text-sm text-gray-700 whitespace-pre-line font-mono bg-gray-50 p-3 rounded">
                {workflowSteps?.[activeStep]?.details?.example}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                iconName="ChevronLeft"
                iconPosition="left"
              >
                Назад
              </Button>
              <Button
                variant="default"
                onClick={() => setActiveStep(Math.min(workflowSteps?.length - 1, activeStep + 1))}
                disabled={activeStep === workflowSteps?.length - 1}
                iconName="ChevronRight"
                iconPosition="right"
              >
                Далее
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы автоматизировать продажи?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Настройка занимает всего 1 день. Результат увидите в первую неделю.
            </p>
            <Button
              variant="default"
              size="lg"
              iconName="Rocket"
              iconPosition="left"
              onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать автоматизацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionWorkflow;