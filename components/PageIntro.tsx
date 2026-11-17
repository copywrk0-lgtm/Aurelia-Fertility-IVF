import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  body: string;
  image?: string;
};

export default function PageIntro({ eyebrow, title, body, image }: Props) {
  return (
    <section className="page-intro">
      <div className="container page-intro-grid">
        <Reveal>
          <div>
            <div className="section-kicker">{eyebrow}</div>
            <h1>{title}</h1>
            <p className="lead">{body}</p>
            <a className="primary-btn" href="/contact">
              Book a consultation <ArrowRight size={17} />
            </a>
          </div>
        </Reveal>
        {image && (
          <Reveal className="page-intro-image">
            <div className="page-image">
              <img src={image} alt="" />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
