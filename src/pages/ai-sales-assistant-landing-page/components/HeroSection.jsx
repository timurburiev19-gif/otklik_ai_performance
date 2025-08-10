import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = () => {
  const [businessCount, setBusinessCount] = useState(100);
  const [showSuccessStories, setShowSuccessStories] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessCount((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTrialClick = () => {
    const element = document.getElementById('trial-form');
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuccessStoriesClick = () => {
    setShowSuccessStories(!showSuccessStories);
  };

  const platformLogos = [
  { name: 'Instagram', icon: 'Instagram' },
  { name: 'MessageCircle', icon: 'MessageCircle' },
  { name: 'Database', icon: 'Database' },
  { name: 'Globe', icon: 'Globe' }];


  const successStories = [
  {
    id: 1,
    business: "Стоматологическая клиника \'Белые зубы'",
    result: "+42% записей на прием",
    period: "за первые 2 недели",
    owner: "Доктор Анна Петрова"
  },
  {
    id: 2,
    business: "Туристическое агентство \'Мечта'",
    result: "67 новых лидов",
    period: "за 5 дней",
    owner: "Михаил Сидоров"
  },
  {
    id: 3,
    business: "Фитнес-центр \'Энергия'",
    result: "+85% конверсия",
    period: "в первый месяц",
    owner: "Елена Козлова"
  }];


  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:mx-auto sm:max-w-3xl sm:px-6 lg:col-span-6 lg:text-left lg:mx-0 lg:px-0">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">AI Sales Assistant</span>{' '}
                    <span className="block xl:inline text-[rgba(21,168,16,1)]">за 7 дней</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Полная автоматизация продаж с ИИ, который работает 24/7, плюс таргетированная реклама для постоянного потока лидов. 
                    <span className="block mt-2 font-semibold text-gray-900">
                      Результат в первую неделю или возврат денег
                    </span>
                  </p>

                  {/* Trust Bar */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                    <div className="flex items-center text-sm text-gray-600 mb-4 sm:mb-0 sm:mr-8">
                      <Icon name="Users" size={20} className="mr-2 text-success" />
                      <span className="font-medium">{businessCount}+ автоматизированных бизнесов</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      {platformLogos?.map((platform, index) =>
                      <div key={index} className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg">
                          <Icon name={platform?.icon} size={16} className="text-gray-600" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Button
                        variant="default"
                        size="lg"
                        onClick={handleTrialClick}
                        iconName="Play"
                        iconPosition="left"
                        className="w-full sm:w-auto"
                        style={{ backgroundColor: '#15a44a' }}>

                        посмотреть видео
                      </Button>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleSuccessStoriesClick}
                        iconName="TrendingUp"
                        iconPosition="left"
                        className="w-full sm:w-auto">

                        Истории успеха
                      </Button>
                    </div>
                  </div>

                  {/* Success Stories Expansion */}
                  {showSuccessStories &&
                  <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Реальные результаты наших клиентов:</h3>
                      <div className="space-y-4">
                        {successStories?.map((story) =>
                      <div key={story?.id} className="bg-white rounded-lg p-4 border border-gray-100">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">{story?.business}</h4>
                                <p className="text-sm text-gray-600 mt-1">{story?.owner}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-success">{story?.result}</p>
                                <p className="text-sm text-gray-500">{story?.period}</p>
                              </div>
                            </div>
                          </div>
                      )}
                      </div>
                    </div>
                  }
                </div>

                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                  <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                    <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="AI Sales Assistant Dashboard"
                        className="w-full h-64 object-cover" />

                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                      
                      {/* Floating Stats */}
                      <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                        <div className="flex items-center">
                          <Icon name="TrendingUp" size={16} className="text-success mr-2" />
                          <span className="text-sm font-semibold text-gray-900">+67% продаж</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                        <div className="flex items-center">
                          <Icon name="Clock" size={16} className="text-primary mr-2" />
                          <span className="text-sm font-semibold text-gray-900">24/7 работа</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"></div>
      </div>
    </section>);

};

export default HeroSection;