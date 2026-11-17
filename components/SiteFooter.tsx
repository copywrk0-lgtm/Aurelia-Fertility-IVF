import { clinic } from "../config/clinic";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="/">
            <span className="brand-mark">N</span>
            <span>{clinic.shortName} <em>Fertility</em></span>
          </a>
          <p>{clinic.demoLabel}. Built as a reusable Copywrk sales concept.</p>
        </div>
        <div className="footer-links">
          <a href="/doctor">Doctor</a>
          <a href="/services">Services</a>
          <a href="/ivf">IVF</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="container legal">
        © 2026 {clinic.name} — fictional demonstration website. Medical details must be replaced and clinically approved before launch.
      </div>
    </footer>
  );
}
