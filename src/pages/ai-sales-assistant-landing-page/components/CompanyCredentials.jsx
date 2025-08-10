import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CompanyCredentials = () => {
  const credentials = [
    {
      title: "5+ лет в digital-маркетинге",
      description: "Опыт работы с 500+ проектами в сфере автоматизации продаж",
      icon: "Award"
    },
    {
      title: "Сертифицированные специалисты",
      description: "Google Ads, Яндекс.Директ, Facebook Blueprint сертификации",
      icon: "Certificate"
    },
    {
      title: "Собственная разработка AI",
      description: "Уникальные алгоритмы, адаптированные под российский рынок",
      icon: "Code"
    },
    {
      title: "100+ довольных клиентов",
      description: "Средняя оценка 4.9/5 по отзывам на независимых платформах",
      icon: "Users"
    }
  ];

  const teamMembers = [
    {
      name: "Алексей Петров",
      position: "CEO & AI Architect",
      experience: "8 лет в разработке AI решений",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      achievements: ["Ex-Яндекс", "PhD Computer Science", "15+ AI проектов"]
    },
    {
      name: "Мария Сидорова",
      position: "Head of Marketing",
      experience: "6 лет в performance-маркетинге",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
      achievements: ["Ex-Google", "Certified Trainer", "200M+ бюджет"]
    },
    {
      name: "Дмитрий Козлов",
      position: "Lead Developer",
      experience: "7 лет в enterprise разработке",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      achievements: ["Ex-Сбербанк", "Full-stack", "50+ интеграций"]
    }
  ];

  const clientPortfolio = [
    {
      company: "Сеть стоматологий \'Дента+'",
      industry: "Медицина",
      result: "+180% лидов за 3 месяца",
      logo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      company: "Фитнес-сеть \'Спорт Лайф'",
      industry: "Фитнес",
      result: "+240% продаж абонементов",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      company: "Образовательный холдинг",
      industry: "Образование",
      result: "+320% записей на курсы",
      logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      company: "Туроператор \'Мир путешествий'",
      industry: "Туризм",
      result: "+150% конверсия в продажи",
      logo: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const certifications = [
    { name: "Google Ads Certified", icon: "Award" },
    { name: "Яндекс.Директ Expert", icon: "Award" },
    { name: "Facebook Blueprint", icon: "Award" },
    { name: "Microsoft AI Certified", icon: "Award" }
  ];

  return (
    <section id="credentials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Почему нам доверяют
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Экспертиза и опыт в создании AI решений для бизнеса
          </p>
        </div>

        {/* Company Credentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials?.map((credential, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={credential?.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {credential?.title}
              </h3>
              <p className="text-sm text-gray-600">
                {credential?.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Команда экспертов
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers?.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <Image
                  src={member?.avatar}
                  alt={member?.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  {member?.name}
                </h4>
                <p className="text-primary font-medium mb-2">{member?.position}</p>
                <p className="text-sm text-gray-600 mb-4">{member?.experience}</p>
                <div className="space-y-1">
                  {member?.achievements?.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-success mr-2" />
                      <span className="text-xs text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Portfolio */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Портфолио клиентов
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {clientPortfolio?.map((client, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={client?.logo}
                    alt={`${client?.company} logo`}
                    className="w-12 h-12 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{client?.company}</h4>
                    <p className="text-sm text-gray-600">{client?.industry}</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Результат:</span>
                    <span className="font-bold text-success">{client?.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Сертификации и партнерства
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications?.map((cert, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                <Icon name={cert?.icon} size={20} className="text-primary mr-3" />
                <span className="text-sm font-medium text-gray-900">{cert?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Company Stats */}
        <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Наши достижения
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-gray-600">Проектов реализовано</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">95%</div>
              <div className="text-sm text-gray-600">Клиентов остаются с нами</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-warning mb-2">24ч</div>
              <div className="text-sm text-gray-600">Среднее время настройки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">4.9</div>
              <div className="text-sm text-gray-600">Средняя оценка клиентов</div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-gray-900 mb-6">
            Нам доверяют
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center">
              <Icon name="Shield" size={24} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">SSL Защита</span>
            </div>
            <div className="flex items-center">
              <Icon name="Award" size={24} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">Сертифицированы</span>
            </div>
            <div className="flex items-center">
              <Icon name="Users" size={24} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">100+ клиентов</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" size={24} className="text-gray-600 mr-2" />
              <span className="text-sm text-gray-600">5 лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCredentials;