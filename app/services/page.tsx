import { ArrowRight, CheckCircle2 } from "lucide-react";
import { clinic } from "../../config/clinic";
import { Reveal } from "../../components/Reveal";
import PageShell from "../../components/PageShell";

export default function ServicesPage() {
  return (
    <PageShell eyebrow="02 / Services" title="Treatment should start with understanding." body="A short guide to the care offered in this fictional clinic concept. Real clinic copy, indications and protocols should be supplied and approved by its clinicians.">
      <section className="section">
        <div className="container service-detail-list">
          {clinic.services.map((service, i) => (
            <Reveal key={service.name}>
              <article className={"service-detail " + (i === 0 ? "featured" : "")}>
                <div className="service-number">0{i + 1}</div>
                <div>
                  <h2>{service.name}</h2>
                  <p className="large">{service.description}</p>
                  <div className="service-points">
                    <span><CheckCircle2 size={15} /> Who it may be for</span>
                    <span><CheckCircle2 size={15} /> What the process can involve</span>
                    <span><CheckCircle2 size={15} /> What to ask at consultation</span>
                  </div>
                </div>
                {service.name === "IVF"
                  ? <a className="outline-btn" href="/ivf">Read the IVF guide <ArrowRight size={15} /></a>
                  : <span className="service-note">Discuss suitability with the doctor</span>}
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
