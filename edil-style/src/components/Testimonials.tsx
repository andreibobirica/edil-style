'use client';

import { useState, useEffect, useCallback } from 'react';
import { siteContent } from '../data/content';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const length = siteContent.testimonials.items.length;
  
  const nextTestimonial = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [nextTestimonial]);
  
  return (
    <section id="testimonianze" className="py-20 bg-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-primary"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 rounded-full bg-secondary"></div>
        <div className="absolute -bottom-10 right-1/3 w-72 h-72 rounded-full bg-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
            TESTIMONIANZE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-primary">
            {siteContent.testimonials.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {siteContent.testimonials.subtitle}
          </p>
        </div>
        
        {/* Testimonial slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {siteContent.testimonials.items.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === current ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-8">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto md:mx-0 flex-shrink-0 bg-gradient-primary flex items-center justify-center shadow-md border-4 border-white">
                      {/* Placeholder avatar - replace with actual image */}
                      <span className="text-3xl text-white">👤</span>
                      {/* Uncomment when you have actual images
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                      */}
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-4 text-primary">
                        <svg className="w-10 h-10 opacity-30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391C14.017 10.645 16.389 8.17 19.512 8 19.867 8.097 20 8.294 20 8.554v2.029h-1.1c-0.906 0-1.433 0.392-1.433 1.372v1.646h2.808l-0.58 2.472h-2.228V21h-3.45Zm-6.45 0v-7.446c0-0.129-0.001-0.257-0.003-0.384-0.014-0.826-0.416-1.242-1.196-1.242h-1.51V9.297c2.281-0.358 3.361-1.511 3.607-3.297h2.484v3.135h2.801v2.793h-2.801v3.744c0 0.693 0.259 1.203 1.359 1.203l1.383-0.002V21H7.567Z"></path>
                        </svg>
                      </div>
                      <p className="text-lg md:text-xl text-text-secondary mb-8 italic">
                        {testimonial.text}
                      </p>
                      <div>
                        <p className="text-lg font-bold text-text-primary">{testimonial.author}</p>
                        <p className="text-text-secondary">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Indicators */}
            <div className="flex space-x-2">
              {siteContent.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 hover:bg-primary/50'
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 text-text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            Unisciti alle centinaia di clienti soddisfatti che hanno scelto i nostri servizi di qualità.
          </p>
          <a
            href="#contatti"
            className="inline-block px-8 py-4 bg-gradient-primary text-white font-medium rounded-lg shadow-primary hover:shadow-lg transition-all duration-300"
          >
            Richiedi un preventivo
          </a>
        </div>
      </div>
    </section>
  );
} 