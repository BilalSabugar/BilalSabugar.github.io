import { ArrowUpRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata, JsonLd } from "@/lib/seo";
import { swirlup } from "@/lib/swirlup";
import { siteUrl } from "@/lib/portfolio";

export const metadata = pageMetadata("SwirlUp | Your vibe. Your circle. Your rules.", "SwirlUp is a social app for Gen Z with mood-first feeds, truly private chats and calls, and no ads profile. Coming to Android.", "/apps/swirlup/");

export default function SwirlUpPage() {
  return <PortfolioShell>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: swirlup.name, operatingSystem: "Android", applicationCategory: "SocialNetworkingApplication", description: swirlup.promise, url: `${siteUrl}/apps/swirlup/` }} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: swirlup.faq.map(item => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />
    <Breadcrumb items={[{ label: "Apps" }, { label: "SwirlUp" }]} />
    <PageIntro label={`${swirlup.tagline} / ${swirlup.platform}`} title={`${swirlup.name}.`} intro={swirlup.promise} />
    <div className="app-actions app-hero-actions">
      {swirlup.downloadUrl
        ? <a className="button-primary" href={swirlup.downloadUrl} target="_blank" rel="noreferrer">Download for Android<Download size={18} /></a>
        : <span className="button-secondary" aria-disabled="true">Coming soon to Android</span>}
      <Link className="button-secondary" href="/apps/swirlup/privacy/">Privacy Policy<ArrowUpRight size={18} /></Link>
    </div>

    <section className="product-why section-space">
      <p className="eyebrow">Why SwirlUp exists</p>
      <h2>Social media should work for you.</h2>
      {swirlup.why.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="product-grid section-space">
      <div className="section-heading"><div><p className="eyebrow">What makes it different</p><h2>Built around you, not around ads.</h2></div></div>
      <div className="product-cards">{swirlup.different.map((item, index) => <article key={item.title}><span className="record-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>

    <section className="product-grid section-space">
      <div className="section-heading"><div><p className="eyebrow">Express yourself</p><h2>Three ways to share.</h2></div></div>
      <div className="product-cards product-cards-three">{swirlup.express.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>

    <section className="product-grid section-space">
      <div className="section-heading"><div><p className="eyebrow">And more</p><h2>Your space, your style.</h2></div></div>
      <div className="product-cards product-cards-three">{swirlup.extras.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>

    <section className="product-protect section-space">
      <p className="eyebrow">How we protect you</p>
      <h2>Private, and honest about it.</h2>
      <ul>{swirlup.protect.map(line => <li key={line}>{line}</li>)}</ul>
      <p><Link className="text-link" href="/apps/swirlup/privacy/">Read the full privacy policy<ArrowUpRight size={16} /></Link></p>
    </section>

    <section className="product-faq section-space">
      <p className="eyebrow">Questions</p>
      <h2>Quick answers.</h2>
      {swirlup.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
    </section>

    <section className="case-conversation">
      <p className="eyebrow">Get SwirlUp</p>
      <h2>{swirlup.downloadUrl ? "Ready when you are." : "Coming soon to Android."}</h2>
      <p>{swirlup.tagline}</p>
      <div className="app-actions app-hero-actions">
        {swirlup.downloadUrl && <a className="button-primary" href={swirlup.downloadUrl} target="_blank" rel="noreferrer">Download for Android<Download size={18} /></a>}
        <Link className="button-secondary" href="/apps/swirlup/privacy/">Privacy Policy<ArrowUpRight size={18} /></Link>
        {swirlup.contactEmail
          ? <a className="button-secondary" href={`mailto:${swirlup.contactEmail}`}>Contact<Mail size={18} /></a>
          : <Link className="button-secondary" href="/contact/">Contact<Mail size={18} /></Link>}
      </div>
    </section>
  </PortfolioShell>;
}
