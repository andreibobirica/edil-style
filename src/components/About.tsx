'use client';

import { siteContent } from '../data/content';

// Helper function to get value icon
function getValueIcon(title: string) {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('qualità')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  }
  
  if (titleLower.includes('professionalità')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  
  if (titleLower.includes('affidabilità')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  
  if (titleLower.includes('sostenibilità')) {
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  
  // Default icon
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="chi-siamo" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
            CHI SIAMO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-primary">
            {siteContent.about.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {siteContent.about.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Company History */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-text-primary">La Nostra Storia</h3>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed">
              {siteContent.about.history}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              {siteContent.about.description}
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {siteContent.about.stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">
                  {stat.value}
                </div>
                <div className="text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 text-text-primary text-center">I Nostri Valori</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.about.values.map((value, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {getValueIcon(value.title)}
                </div>
                <h4 className="text-lg font-bold mb-3 text-text-primary">{value.title}</h4>
                <p className="text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 shadow-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Pronti a trasformare i tuoi spazi?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
              Affidati a Edil Style per un lavoro di qualità, realizzato da professionisti esperti e attenti ad ogni dettaglio.
            </p>
            <a
              href="#contatti"
              className="inline-block px-8 py-4 bg-white text-primary font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              Contattaci ora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 