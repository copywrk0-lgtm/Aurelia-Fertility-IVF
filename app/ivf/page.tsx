import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "../../components/Reveal";
import PageShell from "../../components/PageShell";

const steps = [
  ["01", "Assessment", "Review history, previous treatment and investigations before deciding whether IVF is appropriate."],
  ["02", "Stimulation & monitoring", "Medication and monitoring may be used to support follicle development according to the treatment plan."],
  ["03", "Egg retrieval & fertilisation", "Eggs are collected and fertilisation takes place in the laboratory."],
  ["04", "Embryo transfer & follow-up", "When appropriate, an embryo is transferred and follow-up is planned."],
];

export default function IVFPage() {
  return (
    <PageShell eyebrow="03 / IVF" title="IVF, explained without the medical maze." body="IVF is one form of assisted reproduction. The exact treatment plan, medicines and timeline depend on the individual assessment.">
      <section className="section">
        <div className="container ivf-intro">
          <Reveal><div><div className="section-kicker">The idea</div><h2>What is IVF?</h2><p className="large">IVF involves ovarian stimulation, egg retrieval, fertilisation in a laboratory, embryo development and transfer when appropriate. Not every person follows the same sequence or protocol.</p></div></Reveal>
          <Reveal><div className="ivf-callout"><strong>What matters first</strong><p>The reason IVF is being considered, what has already been investigated, and what alternatives may be reasonable in your situation.</p></div></Reveal>
        </div>
      </section>
      <section className="section olive-section">
        <div className="container">
          <div className="section-kicker light">A typical pathway</div>
          <h2 className="light-heading">Four stages to understand.</h2>
          <div className="ivf-stage-grid">
            {steps.map(([n,t,d]) => <Reveal key={n}><article><span>{n}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container questions-grid">
          <div><div className="section-kicker">Questions to ask</div><h2>Bring these to your consultation.</h2></div>
          <div className="question-list">
            {["Why is IVF being recommended in my situation?","What tests do I need before starting?","What will the estimated cost include?","How will my treatment timeline be decided?","What happens if the first cycle does not work?"].map(q => <div key={q}><Check size={16} /><span>{q}</span></div>)}
          </div>
        </div>
      </section>
      <section className="cta-band"><div className="container cta-inner"><div><div className="section-kicker light">Next step</div><h2>Get a plan specific to you.</h2></div><a className="light-btn" href="/contact">Book a consultation <ArrowRight size={17} /></a></div></section>
    </PageShell>
  );
}
