import { ArrowRight, Clock3, MapPin, Phone } from "lucide-react";
import { clinic } from "../config/clinic";
import { Reveal } from "../components/Reveal";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

const faqs = [
  ["When should I see a fertility specialist?", "The right time depends on age, medical history and how long you have been trying. A consultation can help make sense of your particular situation."],
  ["What happens during the first consultation?", "The doctor reviews your history, previous investigations and any treatment so far, then explains what may be useful to do next."],
  ["Is IVF painful?", "Experiences vary. Some parts of treatment can cause temporary discomfort, and your care team should explain what to expect before each step."],
];

export default function Home() {
  return (
    <main>
      <div className="demo-bar">{clinic.demoLabel} · Fictional content, doctor and contact details.</div>
      <SiteNav />

      <section className="hero">
        <div className="container hero-meta">
          <span>Fertility & women’s care</span>
          <span>South Delhi · Evening consultations</span>
        </div>
        <div className="container hero-image-wrap">
          <div className="hero-image">
            <img src={clinic.images.hero} alt="Fictional fertility specialist in a calm clinic setting" width="1800" height="1000" fetchPriority="high" />
            <div className="hero-caption"><span>DR. MEERA KHANNA</span><strong>11 years in obstetrics, gynaecology & reproductive medicine</strong></div>
          </div>
          <div className="hero-note">
            <span>THE FIRST APPOINTMENT</span>
            <strong>Come with questions. Leave with a clearer next step.</strong>
          </div>
        </div>
        <div className="container hero-copy">
          <div className="hero-kicker">A quieter way to begin</div>
          <h1>Fertility treatment should feel less like a maze.</h1>
          <p className="hero-lead">A considered first step for people who want to understand what is happening, what can be done, and what comes next.</p>
          <a className="primary-btn" href="/contact">Book a consultation <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section quiet-section">
        <div className="container editorial-grid">
          <div className="section-kicker">01 / The first conversation</div>
          <Reveal>
            <div>
              <h2>Most people don't arrive knowing which treatment they need.</h2>
              <p className="large">They arrive with questions. Sometimes test reports. Sometimes years of trying. Sometimes advice from five different people that doesn't quite agree.</p>
              <p>Our fictional clinic concept is designed around making that first conversation useful: understand the history, explain the findings and discuss sensible next steps without rushing the decision.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section olive-section">
        <div className="container doctor-feature">
          <Reveal>
            <div className="doctor-image"><img src={clinic.images.doctor} alt="Fictional Dr. Meera Khanna" width="1200" height="1400" loading="lazy" /></div>
          </Reveal>
          <Reveal>
            <div>
              <div className="section-kicker light">02 / Your doctor</div>
              <h2>“I want patients to leave knowing what their options mean for them.”</h2>
              <p className="large light-copy">{clinic.doctor.quote}</p>
              <div className="doctor-meta"><strong>{clinic.doctor.name}</strong><span>{clinic.doctor.credentials}</span><span>{clinic.doctor.experience} of experience</span></div>
              <a className="light-btn" href="/doctor">Meet Dr. Khanna <ArrowRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section service-preview">
        <div className="container">
          <div className="section-head">
            <div><div className="section-kicker">03 / Care</div><h2>Different treatment. Different reason.</h2></div>
            <p>Start with the service that brought you here, then discuss whether it actually fits your situation.</p>
          </div>
          <div className="service-list">
            {clinic.services.map((service, i) => (
              <a href={service.href} className="service-row" key={service.name}>
                <span>0{i + 1}</span><strong>{service.name}</strong><p>{service.description}</p><ArrowRight size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section practical">
        <div className="container practical-grid">
          <div>
            <div className="section-kicker">04 / Practical</div>
            <h2>Built around real working days.</h2>
            <p className="large">Consultations run until 8:30 PM, Monday through Saturday, so a first appointment doesn't have to mean losing a whole day.</p>
            <a className="outline-btn" href="/contact">See contact details <ArrowRight size={16} /></a>
          </div>
          <div className="hours-card">
            <div><Clock3 size={18} /><strong>Clinic hours</strong></div>
            {clinic.hours.map((item) => <div className="hours-row" key={item.day}><span>{item.day}</span><span>{item.hours}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section reviews">
        <div className="container review-placeholder">
          <div><div className="section-kicker">05 / Reviews</div><h2>Google reviews appear here.</h2></div>
          <p>Real review content should be connected only after the clinic has an established Google Business Profile. No testimonials or ratings are invented for this demo.</p>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <div><div className="section-kicker light">Start with a conversation</div><h2>You don't need all the answers before you call.</h2></div>
          <a className="light-btn" href="/contact">Book a consultation <ArrowRight size={17} /></a>
        </div>
      </section>

      <SiteFooter />
      <div className="mobile-cta">
        <a href={"tel:" + clinic.phone}><Phone size={17} />Call</a>
        <a href="/contact">Book</a>
        <a href={"https://wa.me/" + clinic.whatsapp.replace(/\D/g, "")}>WhatsApp</a>
      </div>
    </main>
  );
}
