'use client';

import { useState } from 'react';
import { siteContent } from '../data/content';
import { SocialIcon } from '../utils/icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xvgkvzza', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'Nuovo messaggio dal sito web - Richiesta Preventivo'
        }),
      });
      
      if (!response.ok) {
        throw new Error('Errore nell\'invio del modulo');
      }
      
      console.log('Form submitted successfully:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setError('Si è verificato un errore. Riprova più tardi.');
      console.error('Form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // The rest of the component remains the same
  return (
    <section id="contatti" className="py-20 bg-gray-50 relative">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-20 bg-white"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-primary"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
            CONTATTI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-primary">
            {siteContent.contact.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Informazioni di Contatto
              </h3>
              <p className="text-text-secondary mb-8">
                Siamo a tua disposizione per qualsiasi domanda o richiesta.
              </p>
              
              <ul className="space-y-6">
                {/* Phone */}
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Telefono</p>
                    <a href={`tel:${siteContent.contact.phone}`} className="text-text-secondary hover:text-primary transition-colors">
                      {siteContent.contact.phone}
                    </a>
                  </div>
                </li>
                
                {/* Email */}
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Email</p>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-text-secondary hover:text-primary transition-colors">
                      {siteContent.contact.email}
                    </a>
                  </div>
                </li>
                
                {/* Address */}
                <li className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">Indirizzo</p>
                    <address className="text-text-secondary not-italic">
                      {siteContent.contact.address}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Social links */}
            <div>
              <h4 className="text-lg font-bold text-text-primary mb-4">
                Seguici sui social
              </h4>
              <div className="flex space-x-4">
                {siteContent.social && siteContent.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-colors duration-300"
                  >
                    <SocialIcon platform={social.platform} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 md:p-10">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Richiedi un Preventivo
            </h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-green-800 mb-2">Grazie per averci contattato!</h4>
                <p className="text-green-700">Ti risponderemo al più presto con un preventivo personalizzato.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-white border border-green-200 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
                >
                  Invia un'altra richiesta
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">
                      {siteContent.contact.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">
                      {siteContent.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="La tua email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-1">
                    {siteContent.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="Il tuo numero di telefono"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">
                    {siteContent.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    placeholder="Descrivi il tuo progetto..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                    {error}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-primary text-white font-medium rounded-lg shadow-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    "Richiedi Preventivo Gratuito"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 