import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Edil Style s.r.l.s. | Servizi di Edilizia di Qualità',
  description: 'Edil Style è un\'azienda specializzata in tinteggiature, cartongesso e isolamento termico. Servizi professionali di edilizia in tutta Italia.',
  // Force light mode
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className="scroll-smooth" style={{ colorScheme: 'light' }}>
      <body>{children}</body>
    </html>
  );
}
