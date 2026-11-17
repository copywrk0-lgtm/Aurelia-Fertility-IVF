import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
export default function PageIntro({ eyebrow,title,body,image }: { eyebrow:string; title:string; body:string; image?:string }) {
 return <section className="page-intro"><div className="container page-intro-grid"><Reveal><div className="eyebrow"><span className="dot"/> {eyebrow}</div><h1>{title}</h1><p className="lead">{body}</p><a className="primary-btn" href="/contact">Book a consultation <ArrowRight size={17}/></a></Reveal>{image && <Reveal delay={120}><div className="page-image"><img src={image} alt="" /></div></Reveal>}</div></section>;
}