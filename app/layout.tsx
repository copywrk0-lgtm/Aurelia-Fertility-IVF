import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
const dmSans=DM_Sans({subsets:['latin'],variable:'--font-sans'});
const playfair=Playfair_Display({subsets:['latin'],weight:['500','600'],variable:'--font-serif'});
export const metadata: Metadata = {
 title: {default:'Aurelia Fertility & IVF | Compassionate Fertility Care',template:'%s | Aurelia Fertility'},
 description:'A fictional IVF clinic website demo built for Copywrk.',
 openGraph:{title:'Aurelia Fertility & IVF',description:'A fictional fertility clinic website concept by Copywrk.',type:'website'}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={dmSans.variable+' '+playfair.variable}>{children}</body></html>}