import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import { clinic } from "../config/clinic";

export default function PageShell({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="demo-bar">{clinic.demoLabel} · All clinical details are illustrative.</div>
      <SiteNav />
      <section className="page-intro">
        <div className="container">
          <div className="section-kicker">{eyebrow}</div>
          <h1>{title}</h1>
          <p className="lead">{body}</p>
        </div>
      </section>
      {children}
      <SiteFooter />
    </main>
  );
}
