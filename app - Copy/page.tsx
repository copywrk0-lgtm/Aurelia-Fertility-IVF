'use client';

import { useState } from 'react';
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock3, HeartHandshake, MapPin, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, Stethoscope, X } from 'lucide-react';

const faqs = [
  ['When should I see a fertility specialist?', 'If you have been trying to conceive without success, or have concerns about fertility, an evaluation can help you understand your options. The right time depends on age, history and individual circumstances.'],
  ['What happens during the first consultation?', 'The first visit is a conversation. The doctor reviews your history, asks about previous investigations or treatments, and explains which next steps may be appropriate.'],
  ['Is IVF painful?', 'Experiences vary. Some parts of treatment can cause temporary discomfort, and the clinic team should explain what to expect before each step.'],
  ['How long does IVF take?', 'A treatment cycle can take several weeks, depending on the protocol and individual response. Your doctor will give you a personalised timeline.'],
  ['How much does IVF cost?', 'Costs vary based on medicines, investigations, the treatment plan and any additional procedures. A consultation is the best way to understand the likely cost for your situation.'],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="demo-bar">DEMO — FICTIONAL CLINIC • All doctors, credentials, numbers, testimonials and patient stories shown here are fictional.</div>
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#top" className="brand"><span className="brand-mark">A</span><span>Aurelia <em>Fertility</em></span></a>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#doctor" onClick={() => setMenuOpen(false)}>Your Doctor</a>
            <a href="#treatments" onClick={() => setMenuOpen(false)}>Treatments</a>
            <a href="#journey" onClick={() => setMenuOpen(false)}>Your Journey</a>
            <a href="#cost" onClick={() => setMenuOpen(false)}>Costs</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a>
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Book a consultation <ArrowRight size={16}/></a>
          </div>
          <button className="menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-glow one"/><div className="hero-glow two"/>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="dot"/> Fertility care, with clarity and compassion</div>
            <h1>A thoughtful beginning to your <span>fertility journey.</span></h1>
            <p className="lead">Personalised fertility care designed around your questions, your circumstances and the next step that makes sense for you.</p>
            <div className="hero-actions"><a className="primary-btn" href="#contact">Book a consultation <ArrowRight size={18}/></a><a className="text-btn" href="#journey">See how it works <ArrowRight size={16}/></a></div>
            <div className="trust-row"><div><ShieldCheck size={17}/><span>Confidential consultations</span></div><div><HeartHandshake size={17}/><span>Personalised care</span></div></div>
          </div>
          <div className="doctor-card">
            <div className="portrait"><div className="portrait-shape"><div className="hair"/><div className="face"/><div className="coat"/></div><div className="portrait-note">Dr. Anaya Mehra<br/><span>Reproductive Medicine Specialist</span></div></div>
            <div className="credential-card"><div className="mini-icon"><Stethoscope size={18}/></div><div><strong>Dr. Anaya Mehra</strong><p>MBBS · MD · Fellowship in Reproductive Medicine</p></div></div>
          </div>
        </div>
      </section>

      <section className="proof-strip"><div className="container proof-grid"><div><strong>One clear plan.</strong><span>Understand your options before you decide.</span></div><div><strong>One familiar team.</strong><span>Guidance through every stage of care.</span></div><div><strong>One conversation at a time.</strong><span>No pressure. No confusing jargon.</span></div></div></section>

      <section id="doctor" className="section doctor-section"><div className="container split"><div className="section-kicker">01 / Your doctor</div><div className="section-content"><h2>Meet the doctor behind your care.</h2><p className="large">Fertility treatment can involve big decisions. We believe you should know who is guiding them, what they recommend, and why.</p><div className="bio-grid"><div className="bio-stat"><strong>12+</strong><span>Years in reproductive medicine</span></div><div className="bio-stat"><strong>MBBS</strong><span>Medical qualification</span></div><div className="bio-stat"><strong>MD</strong><span>Obstetrics & Gynaecology</span></div></div><p>Dr. Anaya Mehra is a fictional reproductive medicine specialist created for this website demonstration. In a live clinic site, every qualification, registration, accreditation and clinical claim would be supplied and approved by the clinic before publication.</p><a className="outline-btn" href="#contact">Meet the doctor <ArrowRight size={16}/></a></div></div></section>

      <section id="treatments" className="section treatments"><div className="container"><div className="section-head"><div><div className="section-kicker">02 / Treatments</div><h2>Care explained in plain language.</h2></div><p>Different situations call for different approaches. Your treatment plan should start with understanding, not assumptions.</p></div><div className="treatment-grid">{[['IVF','For people who need a more assisted route to conception.'],['IUI','A less invasive treatment that may suit selected fertility situations.'],['ICSI','A specialised IVF technique involving individual sperm injection.'],['Egg freezing','Preserving eggs for potential future use, depending on individual circumstances.'],['Male infertility','Assessment and treatment options for male-factor fertility concerns.'],['Fertility preservation','Planning ahead when future fertility may be affected by treatment or circumstances.']].map(([title,desc],i)=><article className="treatment-card" key={title}><span className="card-num">0{i+1}</span><h3>{title}</h3><p>{desc}</p><a href="#contact">Learn about this treatment <ArrowRight size={15}/></a></article>)}</div></div></section>

      <section id="journey" className="section journey"><div className="container"><div className="section-head"><div><div className="section-kicker">03 / Your journey</div><h2>Know what happens next.</h2></div><p>The first appointment doesn't have to feel like walking into the unknown.</p></div><div className="steps">{[['01','First conversation','We listen to your history, concerns and goals.'],['02','Assessment','Your doctor explains which investigations may be useful.'],['03','A clear plan','We discuss suitable treatment options and what they involve.'],['04','Treatment & follow-up','You receive guidance throughout the plan, with regular follow-up.']].map(([n,t,d])=><div className="step" key={n}><div className="step-number">{n}</div><div><h3>{t}</h3><p>{d}</p></div></div>)}</div></div></section>

      <section id="cost" className="section cost"><div className="container cost-box"><div><div className="section-kicker">04 / Costs</div><h2>Know what can affect the cost.</h2><p>Fertility treatment costs can vary from person to person. Medicines, investigations, treatment protocols and additional procedures can all affect the final amount.</p><a className="primary-btn" href="#contact">Discuss your options <ArrowRight size={17}/></a></div><div className="cost-list"><div><Check size={17}/><span>Initial consultation & assessment</span></div><div><Check size={17}/><span>Investigations recommended by the doctor</span></div><div><Check size={17}/><span>Medicines and monitoring</span></div><div><Check size={17}/><span>Procedure-specific costs</span></div><div><Check size={17}/><span>Any additional treatment required</span></div></div></div></section>

      <section id="faq" className="section faq"><div className="container faq-grid"><div><div className="section-kicker">05 / FAQs</div><h2>Questions you may be carrying with you.</h2><p>It's okay to have a lot of them. Start here, then bring the rest to your consultation.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'active':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<div className="answer"><p>{a}</p></div>}</div>)}</div></div></section>

      <section id="contact" className="section contact"><div className="container contact-grid"><div><div className="section-kicker">06 / Begin here</div><h2>You don't need to have all the answers before you call.</h2><p>Tell us a little about what you're looking for. Our team can help you find a suitable consultation time.</p><div className="contact-info"><div><Phone size={18}/><span>+91 11 4567 8900</span></div><div><MessageCircle size={18}/><span>WhatsApp the clinic</span></div><div><MapPin size={18}/><span>42 Rosewood Avenue, New Delhi</span></div><div><Clock3 size={18}/><span>Mon–Sat · 9:00 AM–6:00 PM</span></div></div></div><form className="booking-card" onSubmit={(e)=>e.preventDefault()}><div className="form-title"><CalendarDays size={20}/><div><strong>Book a consultation</strong><span>We'll get back to you to confirm a suitable time.</span></div></div><label>Name<input placeholder="Your name"/></label><label>Phone number<input placeholder="10-digit mobile number"/></label><label>Preferred time<select defaultValue=""><option value="" disabled>Select a time</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label><button className="primary-btn full">Request consultation <ArrowRight size={17}/></button><small>Your information is kept confidential and used only to respond to your enquiry.</small></form></div></section>

      <footer><div className="container footer-grid"><div><a className="brand" href="#top"><span className="brand-mark">A</span><span>Aurelia <em>Fertility</em></span></a><p>A fictional IVF clinic website concept by Copywrk.</p></div><div className="footer-links"><a href="#doctor">Doctor</a><a href="#treatments">Treatments</a><a href="#journey">Journey</a><a href="#faq">FAQs</a><a href="#contact">Contact</a></div></div><div className="container legal">© 2026 Aurelia Fertility — Fictional demonstration website. Not a real medical clinic.</div></footer>

      <div className="mobile-cta"><a href="tel:+911145678900"><Phone size={18}/>Call</a><a href="#contact"><CalendarDays size={18}/>Book consultation</a><a href="#contact"><MessageCircle size={18}/>WhatsApp</a></div>
    </main>
  );
}
