import { ArrowRight } from "lucide-react";
import { clinic } from "../../config/clinic";
import { Reveal } from "../../components/Reveal";
import PageShell from "../../components/PageShell";

export default function DoctorPage() {
  return (
    <PageShell eyebrow="01 / Doctor" title="Meet the doctor behind the plan." body="A fertility consultation is easier when you know who is listening, how they think and what the appointment is designed to do.">
      <section className="section">
        <div className="container doctor-page-grid">
          <Reveal><div className="portrait-large"><img src={clinic.images.doctor} alt="Fictional Dr. Meera Khanna" width="1200" height="1400" /></div></Reveal>
          <Reveal><div>
            <div className="section-kicker">Dr. Meera Khanna</div>
            <h2>Clear explanations. Individual decisions.</h2>
            <p className="large">{clinic.doctor.bio}</p>
            <div className="credential-list">
              <div><span>Qualifications</span><strong>{clinic.doctor.credentials}</strong></div>
              <div><span>Experience</span><strong>{clinic.doctor.experience}</strong></div>
              <div><span>Consultation focus</span><strong>Fertility assessment, assisted reproduction and reproductive health</strong></div>
            </div>
          </div></Reveal>
        </div>
      </section>
      <section className="section paper-section">
        <div className="container narrow">
          <div className="section-kicker">How she approaches a first visit</div>
          <div className="editorial-list">
            {[
              ["01", "Listen first", "Your history and previous treatment are part of the clinical picture, not paperwork to rush through."],
              ["02", "Explain the why", "If a test or treatment is suggested, the reason for it should be clear to you."],
              ["03", "Make the next step practical", "The aim is a plan you can understand, discuss and decide on — not a pile of unexplained instructions."],
            ].map(([n, t, d]) => <div key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}
          </div>
        </div>
      </section>
      <section className="cta-band"><div className="container cta-inner"><div><div className="section-kicker light">Next step</div><h2>Bring your questions.</h2></div><a className="light-btn" href="/contact">Book a consultation <ArrowRight size={17} /></a></div></section>
    </PageShell>
  );
}
