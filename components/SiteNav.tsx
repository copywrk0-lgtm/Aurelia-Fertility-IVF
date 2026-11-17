'use client';

import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const links = [['/doctor','Your Doctor'],['/treatments','Treatments'],['/journey','Your Journey'],['/costs','Costs'],['/faq','FAQs'],['/contact','Contact']];
  return <header className="nav-wrap"><nav className="nav container">
    <a href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">A</span><span>Aurelia <em>Fertility</em></span></a>
    <div className={'nav-links ' + (open ? 'open' : '')}>{links.map(([href,label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Book a consultation <ArrowRight size={16}/></a></div>
    <button className="menu-btn" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
  </nav></header>;
}