// This file contains all website content
export const siteContent = {
  // Meta
  meta: {
    title: 'Edil Style - Pittura e Costruzioni',
    description: 'Servizi professionali di pittura, ristrutturazione e costruzione a Milano e dintorni',
  },
  
  // Header
  header: {
    logo: '/logo.svg',
    navigation: [
      { name: 'Home', href: '#' },
      { name: 'Servizi', href: '#servizi' },
      { name: 'Chi Siamo', href: '#chi-siamo' },
      { name: 'Galleria', href: '#galleria' },
      { name: 'Testimonianze', href: '#testimonianze' },
      { name: 'Contatti', href: '#contatti' },
    ],
  },
  
  // Hero
  hero: {
    title: 'Trasformiamo i tuoi spazi con stile e professionalità',
    subtitle: 'Servizi di pittura, ristrutturazione e costruzione a Milano e dintorni',
    cta: 'Richiedi un preventivo',
    backgroundImage: '/images/hero-bg.jpg',
    features: [
      {
        title: 'Consulenza Gratuita',
        description: 'Sopralluogo e preventivo senza impegno',
      },
      {
        title: 'Materiali Premium',
        description: 'Utilizziamo solo prodotti di alta qualità',
      },
      {
        title: 'Garanzia Lavori',
        description: 'Tutti i nostri interventi sono garantiti',
      },
    ],
  },
  
  // Servizi
  services: {
    title: 'I Nostri Servizi',
    subtitle: 'Soluzioni complete per ogni esigenza',
    description: 'Offriamo una gamma completa di servizi per trasformare i tuoi spazi, dalla semplice tinteggiatura alla ristrutturazione completa.',
    items: [
      {
        title: 'Pittura d\'Interni',
        description: 'Trasforma gli spazi interni con colori freschi e finiture di alta qualità per un ambiente accogliente e rinnovato.',
        icon: 'paintbrush',
        image: '/images/services/interior-painting.jpg',
      },
      {
        title: 'Pittura d\'Esterni',
        description: 'Proteggi e valorizza la tua proprietà con trattamenti esterni duraturi che resistono alle intemperie e mantengono la loro bellezza nel tempo.',
        icon: 'house',
        image: '/images/services/exterior-painting.jpg',
      },
      {
        title: 'Ristrutturazioni',
        description: 'Rinnova completamente i tuoi spazi con servizi di ristrutturazione completa, dal design all\'esecuzione finale.',
        icon: 'tools',
        image: '/images/services/renovations.jpg',
      },
      {
        title: 'Cartongesso',
        description: 'Crea nuovi spazi, controsoffitti e pareti divisorie con soluzioni in cartongesso personalizzate e di qualità.',
        icon: 'wall',
        image: '/images/services/drywall.jpg',
      },
      {
        title: 'Pavimentazioni',
        description: 'Installa pavimenti di ogni tipo, dal parquet alle piastrelle, con finiture impeccabili per ambienti eleganti e funzionali.',
        icon: 'floor',
        image: '/images/services/flooring.jpg',
      },
      {
        title: 'Decorazioni',
        description: 'Aggiungi un tocco unico con tecniche decorative speciali, dalle velature alle finiture artistiche personalizzate.',
        icon: 'decoration',
        image: '/images/services/decorations.jpg',
      },
    ],
    cta: {
      title: 'Hai un progetto in mente?',
      description: 'Contattaci oggi per un preventivo gratuito e senza impegno.',
      button: 'Contattaci ora',
    },
  },
  
  // Chi Siamo
  about: {
    title: 'Chi Siamo',
    subtitle: 'La nostra storia e i nostri valori',
    description: 'Da oltre 15 anni trasformiamo spazi con passione e professionalità. Edil Style nasce dall\'esperienza nel settore edile e dalla passione per il design, combinando competenze tecniche e attenzione ai dettagli per offrire soluzioni personalizzate e di alta qualità.',
    history: 'Fondato nel 2008 da un team di professionisti con esperienza nel settore delle costruzioni e del design d\'interni, Edil Style è cresciuto fino a diventare un punto di riferimento a Milano e dintorni per servizi di pittura, ristrutturazione e costruzione.',
    values: [
      {
        title: 'Qualità',
        description: 'Utilizziamo solo materiali premium e tecniche all\'avanguardia per garantire risultati eccellenti e duraturi.',
      },
      {
        title: 'Professionalità',
        description: 'Il nostro team di professionisti qualificati garantisce un servizio impeccabile, puntuale e attento ai dettagli.',
      },
      {
        title: 'Affidabilità',
        description: 'Rispettiamo sempre le tempistiche e i preventivi concordati, garantendo trasparenza in ogni fase del progetto.',
      },
      {
        title: 'Sostenibilità',
        description: 'Scegliamo materiali e processi eco-compatibili per ridurre l\'impatto ambientale dei nostri interventi.',
      },
    ],
    image: '/images/about/team.jpg',
    stats: [
      { value: '15+', label: 'Anni di esperienza' },
      { value: '500+', label: 'Progetti completati' },
      { value: '350+', label: 'Clienti soddisfatti' },
      { value: '25+', label: 'Professionisti' },
    ],
  },
  
  // Progetti
  gallery: {
    title: 'I Nostri Lavori',
    subtitle: 'Esplora alcuni dei nostri progetti recenti',
    description: 'Dai un\'occhiata ad alcuni dei nostri lavori recenti e lasciati ispirare per il tuo prossimo progetto.',
    categories: [
      { id: 'all', name: 'Tutti' },
      { id: 'interior', name: 'Interni' },
      { id: 'exterior', name: 'Esterni' },
      { id: 'renovation', name: 'Ristrutturazioni' },
      { id: 'commercial', name: 'Commerciale' },
    ],
    projects: [
      {
        id: 1,
        title: 'Appartamento Moderno',
        category: 'interior',
        image: '/images/gallery/interior-1.jpg',
        description: 'Ristrutturazione completa di un appartamento di 120mq con finiture moderne e luminose.',
      },
      {
        id: 2,
        title: 'Villa Residenziale',
        category: 'exterior',
        image: '/images/gallery/exterior-1.jpg',
        description: 'Pittura esterna e restauro dettagli architettonici di una villa storica.',
      },
      {
        id: 3,
        title: 'Ufficio Open Space',
        category: 'commercial',
        image: '/images/gallery/commercial-1.jpg',
        description: 'Realizzazione di uno spazio di lavoro moderno e funzionale per un\'azienda tech.',
      },
      {
        id: 4,
        title: 'Loft Industriale',
        category: 'renovation',
        image: '/images/gallery/renovation-1.jpg',
        description: 'Conversione di un ex spazio industriale in un loft residenziale contemporaneo.',
      },
      {
        id: 5,
        title: 'Negozio di Design',
        category: 'commercial',
        image: '/images/gallery/commercial-2.jpg',
        description: 'Progettazione e realizzazione degli interni per un negozio di arredamento.',
      },
      {
        id: 6,
        title: 'Casa di Campagna',
        category: 'interior',
        image: '/images/gallery/interior-2.jpg',
        description: 'Ristrutturazione conservativa di una casa di campagna con materiali tradizionali.',
      },
    ],
  },
  
  // Testimonianze
  testimonials: {
    title: 'Cosa Dicono i Clienti',
    subtitle: 'Le esperienze di chi ha scelto i nostri servizi',
    items: [
      {
        author: 'Marco Bianchi',
        role: 'Proprietario di casa',
        text: 'Ho affidato a Edil Style la ristrutturazione completa del mio appartamento e sono rimasto estremamente soddisfatto. Professionali, puntuali e attenti a ogni dettaglio. Il risultato ha superato le mie aspettative.',
        image: '/images/testimonials/client1.jpg',
      },
      {
        author: 'Laura Rossi',
        role: 'Interior Designer',
        text: 'Collaboro con Edil Style da anni per i miei progetti di interior design. La loro capacità di tradurre le mie idee in realtà, unita alla cura dei dettagli e alla qualità delle finiture, li rende partner affidabili e preziosi.',
        image: '/images/testimonials/client2.jpg',
      },
      {
        author: 'Giorgio Verdi',
        role: 'Titolare negozio',
        text: 'Abbiamo rinnovato completamente il nostro negozio nel centro di Milano. Edil Style ha gestito tutto il progetto con professionalità, rispettando tempi e budget. I nostri clienti sono entusiasti del nuovo look.',
        image: '/images/testimonials/client3.jpg',
      },
    ],
  },
  
  // Contatti
  contact: {
    title: 'Contattaci',
    subtitle: 'Siamo qui per realizzare il tuo progetto',
    address: 'Via dei Pittori 123, 20100 Milano',
    email: 'info@edilstyle.it',
    phone: '+39 02 1234 5678',
    hours: 'Lun-Ven: 8:00-18:00, Sab: 9:00-13:00',
    form: {
      name: 'Nome',
      email: 'Email',
      phone: 'Telefono',
      service: 'Servizio',
      message: 'Messaggio',
      submit: 'Invia Messaggio',
    },
  },
  
  // Social
  social: [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/edilstyle',
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/edilstyle',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/edilstyle',
    },
  ],
  
  // Footer
  footer: {
    description: 'Edil Style offre servizi professionali di pittura, ristrutturazione e costruzione a Milano e dintorni, con un focus sulla qualità e l\'attenzione ai dettagli.',
    quickLinks: [
      { title: 'Home', url: '#' },
      { title: 'Chi Siamo', url: '#chi-siamo' },
      { title: 'Servizi', url: '#servizi' },
      { title: 'Galleria', url: '#galleria' },
      { title: 'Contatti', url: '#contatti' },
    ],
    services: [
      { title: 'Pittura d\'Interni', url: '#servizi' },
      { title: 'Pittura d\'Esterni', url: '#servizi' },
      { title: 'Ristrutturazioni', url: '#servizi' },
      { title: 'Cartongesso', url: '#servizi' },
      { title: 'Pavimentazioni', url: '#servizi' },
    ],
    legal: [
      { title: 'Privacy Policy', url: '/privacy' },
      { title: 'Termini di Servizio', url: '/termini' },
    ],
    copyright: '© 2023 Edil Style. Tutti i diritti riservati.',
  },
}; 