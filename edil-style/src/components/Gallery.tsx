'use client';

import { useState } from 'react';
import { siteContent } from '../data/content';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  
  const filteredProjects = activeCategory === 'all'
    ? siteContent.gallery.projects
    : siteContent.gallery.projects.filter(project => project.category === activeCategory);
    
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  
  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length));
  };
  
  const hasMore = visibleCount < filteredProjects.length;
  
  return (
    <section id="galleria" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-text-primary">
            {siteContent.gallery.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {siteContent.gallery.subtitle}
          </p>
          <p className="mt-4 text-text-secondary max-w-3xl mx-auto">
            {siteContent.gallery.description}
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {siteContent.gallery.categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${activeCategory === category.id 
                  ? 'bg-primary text-white shadow-primary' 
                  : 'bg-white text-text-secondary hover:bg-primary/10 border border-gray-200'}
              `}
              onClick={() => {
                setActiveCategory(category.id);
                setVisibleCount(6);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                {/* Placeholder - replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-secondary/70 flex items-center justify-center">
                  <span className="text-6xl text-white">🏠</span>
                </div>
                {/* Uncomment when you have actual images
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                */}
                
                {/* Overlay info */}
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <span className="px-3 py-1 bg-white/20 rounded-full text-white text-sm mb-4">
                    {siteContent.gallery.categories.find(c => c.id === project.category)?.name || project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  {project.description}
                </p>
                <a href="#" className="text-primary font-medium inline-flex items-center text-sm hover:underline">
                  Vedi dettagli
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load more button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors duration-300"
            >
              Carica altri progetti
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 