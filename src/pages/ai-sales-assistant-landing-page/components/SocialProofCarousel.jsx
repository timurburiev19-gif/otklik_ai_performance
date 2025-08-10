import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProofCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
  {
    id: 1,
    name: "Анна Петрова",
    position: "Главный врач",
    company: "Стоматологическая клиника \'Белые зубы'",
    location: "Москва",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    linkedinVerified: true,
    videoThumbnail: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    testimonial: `"За 2 недели количество записей выросло на 42%. AI отвечает пациентам мгновенно, даже ночью. Теперь мы не теряем ни одного обращения. Особенно впечатляет, как система квалифицирует пациентов и сразу предлагает подходящие услуги."`,
    results: {
      metric: "+42%",
      description: "рост записей за 2 недели",
      revenue: "+240,000₽ в месяц"
    },
    companyLogo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "Михаил Сидоров",
    position: "Директор",
    company: "Туристическое агентство \'Мечта'",
    location: "Санкт-Петербург",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedinVerified: true,
    videoThumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    testimonial: `"67 лидов за 5 дней! AI консультирует клиентов по турам, собирает заявки и сразу передает мне горячих клиентов. Конверсия выросла до 89%. Это революция в туристическом бизнесе."`,
    results: {
      metric: "67 лидов",
      description: "за 5 дней работы",
      revenue: "+245,000₽ за месяц"
    },
    companyLogo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Елена Козлова",
    position: "Владелец",
    company: "Фитнес-центр \'Энергия'",
    location: "Екатеринбург",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    linkedinVerified: true,
    videoThumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    testimonial: `"Конверсия выросла до 73%! AI продает абонементы, записывает на тренировки и консультирует по программам. Клиенты в восторге от мгновенных ответов. Окупилось за 10 дней."`,
    results: {
      metric: "+85%",
      description: "рост конверсии",
      revenue: "+360,000₽ в месяц"
    },
    companyLogo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 4,
    name: "Дмитрий Волков",
    position: "Управляющий",
    company: "Салон красоты \'Стиль'",
    location: "Новосибирск",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
    linkedinVerified: true,
    videoThumbnail: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    testimonial: `"AI помогает записывать клиентов на процедуры, консультирует по услугам и даже напоминает о визитах. Количество no-show сократилось на 60%. Мастера довольны загруженностью."`,
    results: {
      metric: "+58%",
      description: "рост записей",
      revenue: "+180,000₽ в месяц"
    },
    companyLogo: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 5,
    name: "Ольга Морозова",
    position: "Директор",
    company: "Образовательный центр \'Знание'",
    location: "Казань",
    avatar: "https://randomuser.me/api/portraits/women/42.jpg",
    linkedinVerified: true,
    videoThumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    testimonial: `"AI консультирует родителей по курсам, записывает детей на занятия и отвечает на вопросы о программах. Количество записей выросло на 76%. Родители довольны быстрыми ответами."`,
    results: {
      metric: "+76%",
      description: "рост записей на курсы",
      revenue: "+320,000₽ в месяц"
    },
    companyLogo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 6,
    name: "Александр Кузнецов",
    position: "Владелец",
    company: "Ресторан \'Вкус'",
    location: "Ростов-на-Дону",
    avatar: "https://randomuser.me/api/portraits/men/38.jpg",
    linkedinVerified: true,
    videoThumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    testimonial: `"AI принимает заказы, бронирует столики и консультирует по меню. Особенно помогает в часы пик, когда официанты заняты. Выручка выросла на 92% благодаря автоматизации."`,
    results: {
      metric: "+92%",
      description: "рост выручки",
      revenue: "+450,000₽ в месяц"
    },
    companyLogo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const playVideo = () => {
    setIsPlaying(true);
    // In a real implementation, this would play the actual video
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const currentTestimonialData = testimonials?.[currentTestimonial];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Что говорят наши клиенты
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Реальные отзывы от владельцев бизнеса
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
          <div className="lg:grid lg:grid-cols-2">
            {/* Video/Image Section */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 lg:aspect-h-10">
                <Image
                  src={currentTestimonialData?.videoThumbnail}
                  alt={`${currentTestimonialData?.name} testimonial`}
                  className="w-full h-64 lg:h-full object-cover" />

                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  {!isPlaying ?
                  <Button
                    variant="default"
                    size="lg"
                    onClick={playVideo}
                    iconName="Play"
                    iconPosition="left"
                    className="bg-white/90 text-gray-900 hover:bg-white">

                      Смотреть отзыв
                    </Button> :

                  <div className="text-white text-center">
                      <Icon name="Loader" size={48} className="animate-spin mx-auto mb-2" />
                      <p>Загрузка видео...</p>
                    </div>
                  }
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <Image
                  src={currentTestimonialData?.avatar}
                  alt={currentTestimonialData?.name}
                  className="w-16 h-16 rounded-full object-cover" />

                <div className="ml-4">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {currentTestimonialData?.name}
                    </h3>
                    {currentTestimonialData?.linkedinVerified &&
                    <Icon name="CheckCircle" size={16} className="ml-2 text-blue-500" />
                    }
                  </div>
                  <p className="text-gray-600">{currentTestimonialData?.position}</p>
                  <p className="text-sm text-gray-500">{currentTestimonialData?.company}</p>
                  <p className="text-sm text-gray-500">{currentTestimonialData?.location}</p>
                </div>
              </div>

              <blockquote className="text-lg text-gray-700 mb-6">
                {currentTestimonialData?.testimonial}
              </blockquote>

              {/* Results */}
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Результаты:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">
                      {currentTestimonialData?.results?.metric}
                    </div>
                    <div className="text-sm text-gray-600">
                      {currentTestimonialData?.results?.description}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">
                      {currentTestimonialData?.results?.revenue}
                    </div>
                    <div className="text-sm text-gray-600">дополнительной выручки</div>
                  </div>
                </div>
              </div>

              {/* Company Logo */}
              <div className="flex items-center">
                <Image
                  src={currentTestimonialData?.companyLogo}
                  alt={`${currentTestimonialData?.company} logo`}
                  className="w-12 h-12 rounded-lg object-cover" />

                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {currentTestimonialData?.company}
                  </p>
                  <p className="text-xs text-gray-500">Проверенный клиент</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevTestimonial}
            iconName="ChevronLeft"
            iconPosition="left">

            Предыдущий
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials?.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'}`
              }
              aria-label={`Перейти к отзыву ${index + 1}`} />

            )}
          </div>

          <Button
            variant="outline"
            onClick={nextTestimonial}
            iconName="ChevronRight"
            iconPosition="right">

            Следующий
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Нам доверяют 100+ бизнесов
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">4.9</div>
                <div className="text-sm text-gray-600">Средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">24/7</div>
                <div className="text-sm text-gray-600">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">7 дней</div>
                <div className="text-sm text-gray-600">До первых результатов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SocialProofCarousel;