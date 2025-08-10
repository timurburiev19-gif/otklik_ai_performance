import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    company: [
      { name: 'О компании', href: '#credentials' },
      { name: 'Команда', href: '#credentials' },
      { name: 'Карьера', href: '#' },
      { name: 'Блог', href: '#' }
    ],
    services: [
      { name: 'AI Sales Assistant', href: '#solution' },
      { name: 'Таргетированная реклама', href: '#services' },
      { name: 'CRM интеграции', href: '#solution' },
      { name: 'Консалтинг', href: '#' }
    ],
    support: [
      { name: 'Часто задаваемые вопросы', href: '#faq' },
      { name: 'Техподдержка', href: '#' },
      { name: 'База знаний', href: '#' },
      { name: 'Обучение', href: '#' }
    ],
    legal: [
      { name: 'Политика конфиденциальности', href: '#' },
      { name: 'Пользовательское соглашение', href: '#' },
      { name: 'Публичная оферта', href: '#' },
      { name: 'Реквизиты', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Telegram', icon: 'MessageCircle', href: '#' },
    { name: 'WhatsApp', icon: 'MessageSquare', href: '#' },
    { name: 'Email', icon: 'Mail', href: 'mailto:support@otklik-ai.ru' },
    { name: 'Phone', icon: 'Phone', href: 'tel:+74951234567' }
  ];

  const integrationLogos = [
    { name: 'Instagram', icon: 'Instagram' },
    { name: 'Telegram', icon: 'MessageCircle' },
    { name: 'amoCRM', icon: 'Database' },
    { name: 'Tilda', icon: 'Globe' },
    { name: 'Google Ads', icon: 'Target' },
    { name: 'Яндекс.Директ', icon: 'Search' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                  <Icon name="Zap" size={24} color="white" />
                </div>
                <span className="text-2xl font-bold">Otklik AI</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Автоматизируем продажи с помощью AI и таргетированной рекламы. 
                Помогаем бизнесу получать больше клиентов без дополнительных сотрудников.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-3 text-gray-400" />
                  <span className="text-gray-300">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-3 text-gray-400" />
                  <span className="text-gray-300">support@otklik-ai.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-3 text-gray-400" />
                  <span className="text-gray-300">Москва, Россия</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="mr-3 text-gray-400" />
                  <span className="text-gray-300">Пн-Пт: 9:00-21:00 МСК</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Компания</h3>
              <ul className="space-y-2">
                {footerLinks?.company?.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link?.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2">
                {footerLinks?.services?.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link?.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2">
                {footerLinks?.support?.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link?.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link?.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Integration Logos */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-lg font-semibold mb-6 text-center">Интеграции и партнеры</h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {integrationLogos?.map((integration, index) => (
                <div key={index} className="flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                  <Icon name={integration?.icon} size={20} className="mr-2" />
                  <span className="text-sm">{integration?.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex justify-center space-x-6">
              {socialLinks?.map((social, index) => (
                <a
                  key={index}
                  href={social?.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Otklik AI. Все права защищены.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {footerLinks?.legal?.map((link, index) => (
                <a
                  key={index}
                  href={link?.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link?.name}
                </a>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <div className="text-xs text-gray-500 space-y-2">
              <p>
                ООО "Отклик АИ" | ИНН: 7701234567 | ОГРН: 1234567890123
              </p>
              <p>
                Юридический адрес: 123456, г. Москва, ул. Примерная, д. 1, оф. 100
              </p>
              <p>
                Данный сайт не является публичной офертой. Все цены указаны в долларах США.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;