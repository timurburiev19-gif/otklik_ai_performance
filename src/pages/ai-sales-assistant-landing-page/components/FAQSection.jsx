import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
  {
    id: 1,
    question: "Как быстро AI начнет работать с моими клиентами?",
    answer: `AI Sales Assistant начинает работать уже через 24 часа после настройки. Процесс включает:\n\n• Анализ вашего бизнеса и клиентской базы\n• Настройка сценариев общения под вашу специфику\n• Интеграция с вашими системами (CRM, календарь, мессенджеры)\n• Тестирование и запуск\n\nПервые лиды начнут поступать в тот же день, когда система будет активирована.`,
    category: "Настройка"
  },
  {
    id: 2,
    question: "Какие платформы поддерживает AI Assistant?",
    answer: `AI работает на всех основных платформах:\n\n• Instagram Direct (автоответы на сообщения)\n• Telegram (чат-бот для консультаций)\n• WhatsApp (обработка заявок)\n• Сайт (виджет для онлайн-консультаций)\n• Яндекс.Диалоги и другие мессенджеры\n\nТакже интегрируется с CRM системами: amoCRM, Битрикс24, Salesforce и другими.`,
    category: "Интеграции"
  },
  {
    id: 3,
    question: "Что если AI не справится с вопросами клиентов?",
    answer: `AI обучен отвечать на 95% типовых вопросов в вашей сфере. Если возникает сложный вопрос:\n\n• AI сразу передает клиента менеджеру\n• Сохраняет всю историю общения\n• Уведомляет вас о необходимости вмешательства\n• Продолжает обучаться на новых ситуациях\n\nВы всегда можете контролировать процесс и вмешиваться при необходимости.`,
    category: "Функциональность"
  },
  {
    id: 4,
    question: "Сколько стоит обслуживание после настройки?",
    answer: `После оплаты $800 за настройку, дополнительные расходы:\n\n• Техподдержка: бесплатно 30 дней\n• Доработки и улучшения: бесплатно первый месяц\n• Реклама: ваш бюджет (рекомендуем от $300/месяц)\n• Расширенная поддержка: $200/месяц (опционально)\n\nНикаких скрытых платежей. Все условия прозрачны с самого начала.`,
    category: "Стоимость"
  },
  {
    id: 5,
    question: "Как AI обучается специфике моего бизнеса?",
    answer: `Процесс обучения AI включает несколько этапов:\n\n• Анализ вашего сайта, соцсетей и материалов\n• Изучение типовых вопросов клиентов\n• Настройка ценовой политики и услуг\n• Обучение на реальных диалогах с клиентами\n• Постоянное улучшение на основе обратной связи\n\nAI адаптируется под ваш стиль общения и особенности бизнеса.`,
    category: "Обучение"
  },
  {
    id: 6,
    question: "Что входит в рекламную кампанию?",
    answer: `Настройка таргетированной рекламы включает:\n\n• Анализ целевой аудитории в вашем регионе\n• Создание рекламных креативов (тексты, изображения)\n• Настройка кампаний в Яндекс.Директ и Google Ads\n• Таргетинг в социальных сетях (ВК, Instagram)\n• A/B тестирование объявлений\n• Еженедельная оптимизация и отчеты\n\nВаш рекламный бюджет тратится эффективно под контролем экспертов.`,
    category: "Реклама"
  },
  {
    id: 7,
    question: "Какие гарантии результата вы даете?",
    answer: `Мы гарантируем конкретные результаты:\n\n• Увеличение количества лидов минимум на 30% за первую неделю\n• Рост конверсии обращений в записи/продажи\n• Экономия времени на обработке заявок минимум 10 часов в неделю\n• Полный возврат денег, если не достигнем результатов\n\nГарантия действует 7 дней с момента запуска системы.`,
    category: "Гарантии"
  },
  {
    id: 8,
    question: "Подойдет ли AI для моей сферы бизнеса?",
    answer: `AI Sales Assistant эффективен для большинства сфер услуг:\n\n✅ Медицина и стоматология\n✅ Красота и косметология\n✅ Фитнес и спорт\n✅ Образование и курсы\n✅ Туризм и путешествия\n✅ Рестораны и кафе\n✅ Автосервис и ремонт\n✅ Недвижимость\n✅ Юридические услуги\n\nЕсли вашей сферы нет в списке, мы проведем бесплатную консультацию.`,
    category: "Применимость"
  }];


  const categories = [...new Set(faqData.map((faq) => faq.category))];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Частые вопросы
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Ответы на основные вопросы о AI Sales Assistant
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories?.map((category) =>
          <span
            key={category}
            className="px-3 py-1 bg-white text-gray-600 rounded-full text-sm border border-gray-200">

              {category}
            </span>
          )}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData?.map((faq) =>
          <div
            key={faq?.id}
            className="bg-white rounded-lg shadow-md overflow-hidden">

              <button
              onClick={() => toggleFAQ(faq?.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">

                <div className="flex items-start">
                  <span className="text-sm text-primary font-medium mr-3 mt-1">
                    {faq?.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq?.question}
                  </h3>
                </div>
                <Icon
                name={openFAQ === faq?.id ? "ChevronUp" : "ChevronDown"}
                size={20}
                className="text-gray-500 flex-shrink-0" />

              </button>
              
              {openFAQ === faq?.id &&
            <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {faq?.answer}
                    </div>
                  </div>
                </div>
            }
            </div>
          )}
        </div>

        {/* Still have questions section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Остались вопросы?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Получите персональную консультацию от нашего эксперта
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Звонок эксперта</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Бесплатная 15-минутная консультация по вашему бизнесу
                </p>
                <Button
                  variant="outline"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => document.getElementById('trial-form')?.scrollIntoView({ behavior: 'smooth' })}>

                  Заказать звонок
                </Button>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="MessageCircle" size={24} className="text-success" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Онлайн-чат</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Мгновенные ответы на вопросы в рабочее время
                </p>
                <Button
                  variant="success"
                  iconName="MessageCircle"
                  iconPosition="left">

                  Написать в чат
                </Button>
              </div>
            </div>

            {/* Contact info */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-2" />
                  <span>Пн-Пт: 9:00-21:00 МСК</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  <span>support@otklik-ai.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge base hint */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Больше информации в нашей 
            <button className="text-primary hover:underline ml-1">
              базе знаний
            </button>
            {' '}и{' '}
            <button className="text-primary hover:underline">
              видео-инструкциях
            </button>
          </p>
        </div>
      </div>
    </section>);

};

export default FAQSection;