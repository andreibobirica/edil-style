'use client';

import { siteContent } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-secondary/5"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-primary/5"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content - Text */}
          <div className="flex flex-col items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight text-text-primary mb-6">
              {siteContent.hero.title}
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 max-w-xl">
              {siteContent.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contatti"
                className="px-8 py-4 bg-gradient-primary text-white font-medium rounded-lg shadow-primary hover:shadow-lg transition-all duration-300"
              >
                {siteContent.hero.cta}
              </a>
              
              <a
                href="#servizi"
                className="px-8 py-4 bg-white text-text-primary border border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Scopri i Servizi
              </a>
            </div>
          </div>
          
          {/* Right content - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteContent.hero.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-text-primary mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
    </section>
  );
} 