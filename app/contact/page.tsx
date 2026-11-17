import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic } from "../../config/clinic";
import PageShell from "../../components/PageShell";

export default function ContactPage() {
  return (
    <PageShell eyebrow="05 / Contact" title="Let's start with a conversation." body="Tell the clinic a little about what you are looking for. A real appointment team can then confirm a suitable time.">
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="contact-details">
              <a href={"tel:" + clinic.phone}><Phone size={18} /><span><strong>Call</strong>{clinic.phone}</span></a>
              <a href={"https://wa.me/" + clinic.whatsapp.replace(/\D/g, "")}><MessageCircle size={18} /><span><strong>WhatsApp</strong>{clinic.whatsapp}</span></a>
              <div><MapPin size={18} /><span><strong>South Delhi</strong>{clinic.address}</span></div>
              <div><Clock3 size={18} /><span><strong>Clinic hours</strong>Mon–Sat · 9:00 AM – 8:30 PM</span></div>
            </div>
            <div className="map-placeholder"><span>MAP / GOOGLE MAPS EMBED GOES HERE</span><strong>{clinic.address}</strong></div>
          </div>
          <form className="contact-form" action="/contact" method="get">
            <div><label htmlFor="name">Name</label><input id="name" name="name" required placeholder="Your name" /></div>
            <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" required placeholder="10-digit mobile number" /></div>
            <div><label htmlFor="day">Preferred day</label><select id="day" name="day" defaultValue=""><option value="" disabled>Select a day</option>{clinic.hours.filter((x) => x.hours !== "Closed").map((x) => <option key={x.day}>{x.day}</option>)}</select></div>
            <div><label htmlFor="message">What would you like to discuss?</label><textarea id="message" name="message" rows={5} placeholder="A short note is enough." /></div>
            <button className="primary-btn" type="submit">Request a consultation</button>
            <p className="form-note">Demo form only — no patient information is stored or sent.</p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
