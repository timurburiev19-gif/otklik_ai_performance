import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// Import all components
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionWorkflow from './components/SolutionWorkflow';
import BusinessCategoryGrid from './components/BusinessCategoryGrid';
import SuccessMetrics from './components/SuccessMetrics';
import ServiceBreakdown from './components/ServiceBreakdown';
import SocialProofCarousel from './components/SocialProofCarousel';
import TrialOfferSection from './components/TrialOfferSection';
import LeadCaptureForm from './components/LeadCaptureForm';
import FAQSection from './components/FAQSection';
import CompanyCredentials from './components/CompanyCredentials';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

// Import UI components
import StickyAnchorNav from '../../components/ui/StickyAnchorNav';
import SectionProgressIndicator from '../../components/ui/SectionProgressIndicator';

const AISalesAssistantLandingPage = () => {
  const sections = [
    { id: 'hero', label: 'Главная', icon: 'Home' },
    { id: 'problem', label: 'Проблемы', icon: 'AlertTriangle' },
    { id: 'solution', label: 'Решение', icon: 'Settings' },
    { id: 'industries', label: 'Отрасли', icon: 'Building' },
    { id: 'results', label: 'Результаты', icon: 'TrendingUp' },
    { id: 'services', label: 'Услуги', icon: 'Package' },
    { id: 'testimonials', label: 'Отзывы', icon: 'MessageSquare' },
    { id: 'trial-offer', label: 'Предложение', icon: 'Gift' },
    { id: 'trial-form', label: 'Заявка', icon: 'FileText' },
    { id: 'faq', label: 'FAQ', icon: 'HelpCircle' }
  ];

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e?.target?.getAttribute('href');
      if (href && href?.startsWith('#')) {
        e?.preventDefault();
        const element = document.getElementById(href?.substring(1));
        if (element) {
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI Sales Assistant - Автоматизация продаж за 7 дней | Otklik AI</title>
        <meta 
          name="description" 
          content="Полная автоматизация продаж с ИИ + таргетированная реклама. Результат в первую неделю или возврат денег. 100+ довольных клиентов. Начните тест за $800." 
        />
        <meta name="keywords" content="AI продажи, автоматизация продаж, чат-бот для бизнеса, таргетированная реклама, CRM интеграция, лиды для бизнеса" />
        <meta property="og:title" content="AI Sales Assistant - Автоматизация продаж за 7 дней" />
        <meta property="og:description" content="Увеличьте продажи на 67% с помощью AI. Мгновенные ответы клиентам 24/7, автоматическая запись на прием, интеграция с CRM." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://otklik-ai.ru/ai-sales-assistant" />
        <meta property="og:image" content="https://otklik-ai.ru/images/ai-sales-assistant-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Sales Assistant - Автоматизация продаж за 7 дней" />
        <meta name="twitter:description" content="Увеличьте продажи на 67% с помощью AI. Результат в первую неделю или возврат денег." />
        <meta name="twitter:image" content="https://otklik-ai.ru/images/ai-sales-assistant-twitter.jpg" />
        <link rel="canonical" href="https://otklik-ai.ru/ai-sales-assistant" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Sales Assistant",
            "description": "Автоматизация продаж с помощью искусственного интеллекта",
            "provider": {
              "@type": "Organization",
              "name": "Otklik AI",
              "url": "https://otklik-ai.ru"
            },
            "offers": {
              "@type": "Offer",
              "price": "800",
              "priceCurrency": "USD",
              "description": "7-дневный тест AI Sales Assistant"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Sticky Navigation */}
        <StickyAnchorNav sections={sections} />
        
        {/* Progress Indicator */}
        <SectionProgressIndicator sections={sections} />

        {/* Page Sections */}
        <HeroSection />
        <ProblemSection />
        <SolutionWorkflow />
        <BusinessCategoryGrid />
        <SuccessMetrics />
        <ServiceBreakdown />
        <SocialProofCarousel />
        <TrialOfferSection />
        <LeadCaptureForm />
        <FAQSection />
        <CompanyCredentials />
        <FinalCTASection />
        <Footer />
      </div>
    </>
  );
};

export default AISalesAssistantLandingPage;