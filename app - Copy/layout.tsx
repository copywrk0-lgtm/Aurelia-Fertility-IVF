import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurelia Fertility & IVF | Compassionate Fertility Care',
  description: 'A fictional IVF clinic website demo built for Copywrk.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
