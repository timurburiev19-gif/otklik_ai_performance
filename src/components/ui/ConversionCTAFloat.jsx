import React, { useState, useEffect } from 'react';
import Button from './Button';


const ConversionCTAFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ctaVariant, setCTAVariant] = useState('trial');
  const [currentSection, setCurrentSection] = useState('');
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const heroHeight = window.innerHeight;
      
      // Show after scrolling past hero section
      setIsVisible(scrollTop > heroHeight * 0.5);

      // Determine CTA variant based on current section
      const sections = ['solution', 'results', 'industries', 'pricing', 'faq'];
      const currentSectionElement = sections?.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (!element) return false;
        const rect = element?.getBoundingClientRect();
        return rect?.top <= window.innerHeight / 2 && rect?.bottom >= window.innerHeight / 2;
      });

      if (currentSectionElement) {
        setCurrentSection(currentSectionElement);
        
        // Change CTA variant based on section
        if (currentSectionElement === 'pricing' || currentSectionElement === 'faq') {
          setCTAVariant('trial');
        } else if (currentSectionElement === 'results') {
          setCTAVariant('callback');
        } else {
          setCTAVariant('trial');
        }
      }
    };

    const handleMouseLeave = (e) => {
      if (e?.clientY <= 0) {
        setShowExitIntent(true);
        setTimeout(() => setShowExitIntent(false), 5000);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

  const handleCTAClick = () => {
    const targetSection = ctaVariant === 'trial' ? 'get-started' : 'pricing';
    const element = document.getElementById(targetSection);
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const getCTAContent = () => {
    if (showExitIntent) {
      return {
        text: 'Получить скидку 50%',
        icon: 'Gift',
        variant: 'success'
      };
    }

    switch (ctaVariant) {
      case 'callback':
        return {
          text: 'Заказать звонок',
          icon: 'Phone',
          variant: 'outline'
        };
      case 'trial':
      default:
        return {
          text: 'Начать 7-дневный тест',
          icon: 'Play',
          variant: 'default'
        };
    }
  };

  if (!isVisible) return null;

  const ctaContent = getCTAContent();

  return (
    <>
      {/* Desktop floating CTA */}
      <div className="fixed bottom-6 right-6 z-90 hidden md:block">
        <div className={`transition-all duration-300 ${showExitIntent ? 'animate-pulse' : ''}`}>
          <Button
            variant={ctaContent?.variant}
            size="lg"
            onClick={handleCTAClick}
            iconName={ctaContent?.icon}
            iconPosition="left"
            className="conversion-shadow hover:shadow-lg smooth-transition scale-hover"
          >
            {ctaContent?.text}
          </Button>
          
          {showExitIntent && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-warning text-white text-xs px-3 py-1 rounded-full whitespace-nowrap animate-bounce">
              Ограниченное предложение!
            </div>
          )}
        </div>
      </div>
      {/* Mobile sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-90 md:hidden bg-white border-t border-gray-200 p-4">
        <Button
          variant={ctaContent?.variant}
          size="lg"
          fullWidth
          onClick={handleCTAClick}
          iconName={ctaContent?.icon}
          iconPosition="left"
          className="conversion-shadow"
        >
          {ctaContent?.text}
        </Button>
        
        {showExitIntent && (
          <div className="text-center mt-2">
            <span className="text-xs text-warning font-medium animate-pulse">
              🎁 Ограниченное предложение - скидка 50%!
            </span>
          </div>
        )}
      </div>
      {/* Mobile content padding to prevent overlap */}
      <div className="md:hidden h-20" />
    </>
  );
};

export default ConversionCTAFloat;