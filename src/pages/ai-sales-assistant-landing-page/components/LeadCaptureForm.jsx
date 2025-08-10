import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    businessSize: '',
    industry: '',
    phone: '',
    name: '',
    currentLeads: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const businessSizeOptions = [
  { value: 'solo', label: 'Только я (1 человек)' },
  { value: 'small', label: 'Малый бизнес (2-10 человек)' },
  { value: 'medium', label: 'Средний бизнес (11-50 человек)' },
  { value: 'large', label: 'Крупный бизнес (50+ человек)' }];


  const industryOptions = [
  { value: 'dental', label: 'Стоматология' },
  { value: 'fitness', label: 'Фитнес и спорт' },
  { value: 'beauty', label: 'Красота и косметология' },
  { value: 'education', label: 'Образование' },
  { value: 'travel', label: 'Туризм и путешествия' },
  { value: 'restaurants', label: 'Рестораны и кафе' },
  { value: 'automotive', label: 'Автосервис' },
  { value: 'real-estate', label: 'Недвижимость' },
  { value: 'medical', label: 'Медицина' },
  { value: 'legal', label: 'Юридические услуги' },
  { value: 'consulting', label: 'Консалтинг' },
  { value: 'other', label: 'Другое' }];


  const currentLeadsOptions = [
  { value: '0-10', label: '0-10 лидов в месяц' },
  { value: '11-50', label: '11-50 лидов в месяц' },
  { value: '51-100', label: '51-100 лидов в месяц' },
  { value: '101-200', label: '101-200 лидов в месяц' },
  { value: '200+', label: 'Более 200 лидов в месяц' }];


  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Введите ваше имя';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/?.test(formData?.phone)) {
      newErrors.phone = 'Введите номер в формате +7(999)123-45-67';
    }

    if (!formData?.industry) {
      newErrors.industry = 'Выберите сферу бизнеса';
    }

    if (!formData?.businessSize) {
      newErrors.businessSize = 'Выберите размер бизнеса';
    }

    if (!formData?.currentLeads) {
      newErrors.currentLeads = 'Выберите количество лидов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const formatPhoneNumber = (value) => {
    const numbers = value?.replace(/\D/g, '');
    if (numbers?.startsWith('7')) {
      const match = numbers?.match(/^7(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);
      if (match) {
        return `+7${match?.[1] ? `(${match?.[1]}` : ''}${match?.[2] ? `)${match?.[2]}` : ''}${match?.[3] ? `-${match?.[3]}` : ''}${match?.[4] ? `-${match?.[4]}` : ''}`;
      }
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e?.target?.value);
    handleInputChange('phone', formatted);
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In real implementation, send data to backend
      console.log('Form submitted:', formData);

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="trial-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-success/5 rounded-lg p-8 text-center border border-success/20">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Заявка отправлена!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Спасибо за интерес к AI Sales Assistant. Наш эксперт свяжется с вами в течение 30 минут 
              для обсуждения деталей и начала настройки.
            </p>
            <div className="bg-white rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Что происходит дальше:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-gray-700">Звонок эксперта в течение 30 минут</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Settings" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-gray-700">Настройка AI под ваш бизнес (1 день)</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Rocket" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-gray-700">Запуск системы и первые результаты</span>
                </div>
                <div className="flex items-center">
                  <Icon name="TrendingUp" size={16} className="text-primary mr-3" />
                  <span className="text-sm text-gray-700">Отчет о результатах через 7 дней</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              Проверьте email и телефон - мы отправили подтверждение
            </p>
          </div>
        </div>
      </section>);

  }

  return (
    <section id="trial-form" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Начать 7-дневный тест
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Заполните форму и получите персональную настройку AI для вашего бизнеса
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Ваше имя"
                type="text"
                placeholder="Введите ваше имя"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                required />

              
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
                description="Для отправки отчетов и результатов" />

            </div>

            <Input
              label="Номер телефона"
              type="tel"
              placeholder="+7(999)123-45-67"
              value={formData?.phone}
              onChange={handlePhoneChange}
              error={errors?.phone}
              required
              description="Для связи с экспертом по настройке" />


            {/* Business Information */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Информация о бизнесе
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Select
                  label="Сфера бизнеса"
                  placeholder="Выберите сферу"
                  options={industryOptions}
                  value={formData?.industry}
                  onChange={(value) => handleInputChange('industry', value)}
                  error={errors?.industry}
                  required
                  searchable />

                
                <Select
                  label="Размер бизнеса"
                  placeholder="Выберите размер"
                  options={businessSizeOptions}
                  value={formData?.businessSize}
                  onChange={(value) => handleInputChange('businessSize', value)}
                  error={errors?.businessSize}
                  required />

              </div>

              <Select
                label="Текущее количество лидов"
                placeholder="Выберите диапазон"
                options={currentLeadsOptions}
                value={formData?.currentLeads}
                onChange={(value) => handleInputChange('currentLeads', value)}
                error={errors?.currentLeads}
                required
                description="Поможет настроить AI под ваши объемы"
                className="mt-6" />

            </div>

            {/* Benefits reminder */}
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Что вы получите:
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-success mr-2" />
                  <span className="text-sm text-gray-700">Персональная настройка AI</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-success mr-2" />
                  <span className="text-sm text-gray-700">Интеграция с вашими системами</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-success mr-2" />
                  <span className="text-sm text-gray-700">Запуск рекламных кампаний</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={16} className="text-success mr-2" />
                  <span className="text-sm text-gray-700">Поддержка 30 дней</span>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              loading={isSubmitting}
              iconName="Rocket"
              iconPosition="left"
              disabled={isSubmitting}>

              {isSubmitting ? 'Отправляем заявку...' : 'Начать 7-дневный тест за $800'}
            </Button>

            {/* Trust indicators */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="mr-2 text-success" />
                  <span>Гарантия результата</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Lock" size={16} className="mr-2 text-primary" />
                  <span>Безопасная оплата</span>
                </div>
                <div className="flex items-center">
                  <Icon name="RefreshCw" size={16} className="mr-2 text-warning" />
                  <span>Возврат 100%</span>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* FAQ hint */}
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Есть вопросы? 
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-primary hover:underline ml-1">Посмотрите ответы на частые вопросы


            </button>
          </p>
        </div>
      </div>
    </section>);

};

export default LeadCaptureForm;