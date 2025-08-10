import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const StickyAnchorNav = () => {
  const [activeSection, setActiveSection] = useState('solution');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  const navigationItems = [
  { id: 'solution', label: 'Решение', href: '#solution' },
  { id: 'results', label: 'Результаты', href: '#results' },
  { id: 'industries', label: 'Отрасли', href: '#industries' },
  { id: 'pricing', label: 'Цены', href: '#pricing' },
  { id: 'faq', label: 'Вопросы', href: '#faq' },
  { id: 'get-started', label: 'Начать', href: '#get-started' }];


  useEffect(() => {
    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func?.apply(context, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
        }
      };
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navigation after scrolling past hero section (approximately 100vh)
      setIsVisible(currentScrollY > window.innerHeight * 0.8);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = navigationItems?.map((item) => ({
        id: item?.id,
        element: document.getElementById(item?.id),
        offset: 0
      }));

      const currentSection = sections?.find((section) => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href, id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element?.offsetTop - 80; // Account for sticky nav height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!isVisible) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ${
        scrollDirection === 'down' && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'}`
        }
        style={{ boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 bg-green-600">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <span className="text-lg font-semibold text-gray-900">Otclick Ai</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems?.map((item) =>
                <button
                  key={item?.id}
                  onClick={() => handleNavClick(item?.href, item?.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item?.id ?
                  'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary hover:border-b-2 hover:border-primary/50'}`
                  }>

                    {item?.label}
                  </button>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                aria-expanded="false">

                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen &&
        <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems?.map((item) =>
            <button
              key={item?.id}
              onClick={() => handleNavClick(item?.href, item?.id)}
              className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
              activeSection === item?.id ?
              'text-primary bg-primary/10 border-l-4 border-primary' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`
              }>

                  {item?.label}
                </button>
            )}
            </div>
          </div>
        }
      </nav>
      {/* Mobile menu overlay */}
      {isMobileMenuOpen &&
      <div
        className="fixed inset-0 z-90 bg-black/20 md:hidden"
        onClick={() => setIsMobileMenuOpen(false)} />

      }
    </>);

};

export default StickyAnchorNav;