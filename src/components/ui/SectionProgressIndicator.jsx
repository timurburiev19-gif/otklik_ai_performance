import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Главная' },
    { id: 'solution', label: 'Решение' },
    { id: 'results', label: 'Результаты' },
    { id: 'industries', label: 'Отрасли' },
    { id: 'pricing', label: 'Цены' },
    { id: 'faq', label: 'Вопросы' },
    { id: 'get-started', label: 'Начать' }
  ];

  useEffect(() => {
    const throttle = (func, limit) => {
      let inThrottle;
      return function(...args) {
        const context = this;
        if (!inThrottle) {
          func?.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Find active section
      const sectionElements = sections?.map(section => ({
        ...section,
        element: document.getElementById(section?.id)
      }));

      const currentSection = sectionElements?.findIndex(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= window.innerHeight / 2 && rect?.bottom >= window.innerHeight / 2;
      });

      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const handleDotClick = (index, sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-80 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {/* Progress bar */}
        <div className="w-1 h-32 bg-gray-200 rounded-full relative mb-4">
          <div 
            className="w-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Section dots */}
        {sections?.map((section, index) => (
          <div key={section?.id} className="relative group">
            <button
              onClick={() => handleDotClick(index, section?.id)}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-200 hover:scale-125 ${
                index === activeSection
                  ? 'bg-primary border-primary' :'bg-white border-gray-300 hover:border-primary'
              }`}
              aria-label={`Перейти к разделу: ${section?.label}`}
            />
            
            {/* Tooltip */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {section?.label}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProgressIndicator;