import { ArrowRight, Check, Clock3 } from 'lucide-react';
import PageIntro from '../../../components/PageIntro';
import { Reveal } from '../../../components/Reveal';
import SiteNav from '../../../components/SiteNav';
import SiteFooter from '../../../components/SiteFooter';

const image='https://images.unsplash.com/photo-1758691461973-553db5285280?auto=format&fit=crop&w=1800&q=85';
const steps: [string, string, string][] = [
  ['01','Assessment','Review history, tests and treatment options.'],
  ['02','Stimulation & monitoring','Medication and monitoring may be used to support follicle development.'],
  ['03','Egg retrieval & fertilisation','Eggs are collected and fertilisation takes place in the laboratory.'],
  ['04','Embryo transfer & follow-up','When appropriate, an embryo is transferred and follow-up is planned.']
];

export default function IVFPage(){
 return <main>
  <div className="demo-bar">DEMO — FICTIONAL CLINIC • Medical content is illustrative and must be reviewed by the treating doctor.</div>
  <SiteNav/>
  <PageIntro eyebrow="Treatment / IVF" title="IVF, explained without the medical maze." body="In vitro fertilisation is a treatment where eggs and sperm are brought together as part of an assisted reproduction process. The exact plan varies from person to person." image={image}/>
  <section className="section"><div className="container process-grid">
   <Reveal><div><div className="section-kicker">The idea</div><h2>What is IVF?</h2><p className="large">IVF involves ovarian stimulation, egg retrieval, fertilisation in a laboratory, embryo development and transfer when appropriate. Your doctor decides which parts of the process apply to your situation.</p></div></Reveal>
   <Reveal delay={120}><div className="info-card"><Clock3/><strong>Timeline</strong><p>A cycle can take several weeks. Your clinic should provide a personalised schedule after assessment.</p></div></Reveal>
  </div></section>
  <section className="section soft-section"><div className="container">
   <Reveal><div className="section-kicker">A typical pathway</div><h2>Four stages to understand.</h2></Reveal>
   <div className="ivf-steps">{steps.map(([n,t,d],i)=><Reveal key={n} delay={i*80}><div><span>{n}</span><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
  </div></section>
  <section className="section"><div className="container split-content">
   <Reveal><div><div className="section-kicker">Questions to ask</div><h2>Bring these to your consultation.</h2></div></Reveal>
   <Reveal delay={100}><div className="question-list">{['Why is IVF being recommended in my situation?','What tests do I need before starting?','What will my estimated costs include?','What happens if the first cycle does not work?','How will my treatment timeline be decided?'].map(x=><div key={x}><Check/><span>{x}</span></div>)}</div></Reveal>
  </div></section>
  <section className="cta-band"><div className="container"><div><span className="section-kicker">Next step</span><h2>Get a plan that is specific to you.</h2></div><a className="primary-btn" href="/contact">Book a consultation <ArrowRight size={17}/></a></div></section>
  <SiteFooter/>
 </main>
}