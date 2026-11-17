'use client';

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { clinic } from "../config/clinic";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/doctor", "Doctor"],
    ["/services", "Services"],
    ["/faq", "FAQ"],
    ["/contact", "Contact"],
  ];
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Main navigation">
        <a href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">N</span>
          <span>{clinic.shortName} <em>Fertility</em></span>
        </a>
        <div className={"nav-links " + (open ? "open" : "")}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="/contact" onClick={() => setOpen(false)}>
            Book a consultation <ArrowRight size={16} />
          </a>
        </div>
        <button className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
}
