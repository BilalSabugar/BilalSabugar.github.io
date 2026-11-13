import { ArrowUpRight, Download, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata, JsonLd } from "@/lib/seo";
import { zero } from "@/lib/zero";
import { asset, siteUrl } from "@/lib/portfolio";

export const metadata = pageMetadata("Zero | Android utility & offline arcade", "Zero is an Android app with a media downloader, QR scanner, calculators, a password vault and 13+ offline games. No account required.", "/apps/zero/");

export default function ZeroPage() {
  return <PortfolioShell>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: zero.name, alternateName: zero.packageName, operatingSystem: "Android", applicationCategory: "UtilitiesApplication", description: zero.tagline, url: `${siteUrl}/apps/zero/`, author: { "@type": "Person", name: zero.developer, url: zero.github }, offers: { "@type": "Offer", price: "0", priceCurrency: "INR" } }} />
    <Breadcrumb items={[{ label: "Apps" }, { label: "Zero" }]} />
    <PageIntro label={`Android app / ${zero.platform}`} title={`${zero.name}.`} intro={`${zero.tagline} A local-first Android toolkit: no account, no cloud sync, no bloat.`} />
    <section className="app-facts">
      <dl>
        <div><dt>Package</dt><dd>{zero.packageName}</dd></div>
        <div><dt>Developer</dt><dd>{zero.developer}</dd></div>
        <div><dt>Platform</dt><dd>{zero.platform}</dd></div>
        <div><dt>Availability</dt><dd>{zero.downloadUrl ? "Indus Appstore (by PhonePe)" : "Coming soon to Indus Appstore (by PhonePe)"}</dd></div>
      </dl>
      <div className="app-actions">
        {zero.downloadUrl
          ? <a className="button-primary" href={zero.downloadUrl} target="_blank" rel="noreferrer">Download APK / Store link<Download size={18} /></a>
          : <span className="button-secondary" aria-disabled="true">Store link coming soon</span>}
        <Link className="button-secondary" href="/apps/zero/privacy/">Privacy Policy<ArrowUpRight size={18} /></Link>
        <Link className="button-secondary" href="/apps/zero/terms/">Terms of Use<ArrowUpRight size={18} /></Link>
      </div>
    </section>
    <section className="app-screens" aria-label="Zero screenshots">
      {zero.screenshots.map(shot => <figure key={shot.file}><Image src={asset(shot.file)} alt={shot.alt} width={540} height={960} /></figure>)}
    </section>
    <section className="app-features section-space">
      {zero.features.map((feature, index) => <article key={feature.title}>
        <span className="record-number">0{index + 1}</span>
        <div><h2>{feature.title}</h2><ul>{feature.points.map(point => <li key={point}>{point}</li>)}</ul></div>
      </article>)}
    </section>
    <section className="case-conversation">
      <p className="eyebrow">Support & contact</p>
      <h2>Questions about Zero?</h2>
      <p>Email <a className="text-link" href={`mailto:${zero.email}`}>{zero.email}<Mail size={16} /></a> or find the developer on <a className="text-link" href={zero.github} target="_blank" rel="noreferrer">GitHub<ArrowUpRight size={16} /></a>.</p>
    </section>
  </PortfolioShell>;
}
