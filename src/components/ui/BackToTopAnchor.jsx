import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const BackToTopAnchor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement?.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      
      // Show after scrolling 50% of the page
      setIsVisible(scrollPercent > 0.5);
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Brief highlight animation for hero section
    setTimeout(() => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.style.transition = 'background-color 0.3s ease';
        heroElement.style.backgroundColor = 'rgba(37, 99, 235, 0.05)';
        
        setTimeout(() => {
          heroElement.style.backgroundColor = '';
          setTimeout(() => {
            heroElement.style.transition = '';
          }, 300);
        }, 300);
      }
      setIsAnimating(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      disabled={isAnimating}
      className={`fixed bottom-6 right-6 z-80 w-12 h-12 bg-white border-2 border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 hover:border-primary group ${
        isAnimating ? 'animate-pulse' : ''
      } md:bottom-20 md:right-20`}
      aria-label="Вернуться к началу страницы"
    >
      <div className="flex items-center justify-center">
        <Icon 
          name="ArrowUp" 
          size={20} 
          className={`transition-colors duration-200 ${
            isAnimating ? 'text-primary' : 'text-gray-600 group-hover:text-primary'
          }`}
        />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
          Наверх
          <div className="absolute top-full right-2 w-0 h-0 border-l-2 border-l-transparent border-r-2 border-r-transparent border-t-4 border-t-gray-900" />
        </div>
      </div>
    </button>
  );
};

export default BackToTopAnchor;