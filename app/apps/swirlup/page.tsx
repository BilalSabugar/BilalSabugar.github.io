import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata, JsonLd } from "@/lib/seo";
import { swirlup } from "@/lib/swirlup";
import { siteUrl } from "@/lib/portfolio";

export const metadata = pageMetadata("SwirlUp | Private social app for Android", "SwirlUp is an Android social app for Gen Z with Posts, Shouts and Sizzles, mood-based feeds, news, and end-to-end encrypted chats and calls.", "/apps/swirlup/");

export default function SwirlUpPage() {
  return <PortfolioShell>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: swirlup.name, alternateName: swirlup.packageName, operatingSystem: "Android", applicationCategory: "SocialNetworkingApplication", description: swirlup.tagline, url: `${siteUrl}/apps/swirlup/` }} />
    <Breadcrumb items={[{ label: "Apps" }, { label: "SwirlUp" }]} />
    <PageIntro label={`Android app / ${swirlup.platform}`} title={`${swirlup.name}.`} intro={`${swirlup.tagline} A social app for Gen Z where chats are end-to-end encrypted, feeds are ranked on your phone, and there is no ads profile.`} />
    <section className="app-facts">
      <dl>
        <div><dt>Package</dt><dd>{swirlup.packageName}</dd></div>
        <div><dt>Platform</dt><dd>{swirlup.platform}</dd></div>
        <div><dt>Built with</dt><dd>React Native 0.78 and Firebase</dd></div>
        <div><dt>Status</dt><dd>In development</dd></div>
      </dl>
      <div className="app-actions">
        <Link className="button-secondary" href="/apps/swirlup/privacy/">Privacy Policy<ArrowUpRight size={18} /></Link>
      </div>
    </section>
    <section className="app-features section-space">
      {swirlup.features.map((feature, index) => <article key={feature.title}>
        <span className="record-number">0{index + 1}</span>
        <div><h2>{feature.title}</h2><ul>{feature.points.map(point => <li key={point}>{point}</li>)}</ul></div>
      </article>)}
    </section>
    <section className="case-conversation">
      <p className="eyebrow">Support & contact</p>
      <h2>Questions about SwirlUp?</h2>
      {swirlup.contactEmail
        ? <p>Email <a className="text-link" href={`mailto:${swirlup.contactEmail}`}>{swirlup.contactEmail}<Mail size={16} /></a>.</p>
        : <p>Contact details will be added here shortly. In the meantime, use the <Link className="text-link" href="/contact/">portfolio contact page<ArrowUpRight size={16} /></Link>.</p>}
    </section>
  </PortfolioShell>;
}
