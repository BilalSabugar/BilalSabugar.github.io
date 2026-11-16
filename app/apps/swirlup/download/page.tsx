import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata } from "@/lib/seo";
import { swirlup } from "@/lib/swirlup";
import { DownloadPanel } from "./DownloadPanel";

export const metadata = pageMetadata("SwirlUp | Download for Android", "Download the latest SwirlUp APK for Android, with install steps and a SHA-256 checksum to verify the file. SwirlUp is free.", "/apps/swirlup/download/");

const steps = [
  ["Download", "Open this page on your Android phone and tap Download SwirlUp. If Chrome warns that this type of file can harm your device, tap Download anyway. The warning appears for every app outside Google Play."],
  ["Open the file", "When the download finishes, tap Open in the notification, or open Files, then Downloads, and tap the SwirlUp APK."],
  ["Allow installs", "Android may say it can't install unknown apps from this source. Tap Settings, switch on Allow from this source, then press Back."],
  ["Install", "Tap Install. If Play Protect asks to scan the app, tap Scan or Install anyway."],
  ["Open and sign up", "Tap Open and create your account. Future updates are offered inside SwirlUp: tap Update now and repeat the install step."],
  ["Optional", "Afterwards you can switch Allow from this source off again under Settings, Apps, Special app access, Install unknown apps."],
];

export default function SwirlUpDownloadPage() {
  return <PortfolioShell>
    <Breadcrumb items={[{ label: "SwirlUp", href: "/apps/swirlup/" }, { label: "Download" }]} />
    <PageIntro label={`${swirlup.tagline} / Android`} title="Download SwirlUp." intro="SwirlUp is free. It is not on Google Play, so this page is the official source for the Android app." />
    <DownloadPanel />
    <section className="product-why section-space">
      <p className="eyebrow">How to install an APK</p>
      <h2>Six quick steps.</h2>
      <ol className="install-steps">{steps.map(([title, text]) => <li key={title}><strong>{title}.</strong> {text}</li>)}</ol>
      <p>Early testers who installed a debug build must uninstall it once before installing this version, because it uses a different signing key. Chats live on your device, so back up first from Settings, then Backup.</p>
    </section>
    <section className="case-conversation">
      <p className="eyebrow">Questions</p>
      <h2>Need a hand?</h2>
      <p>Email <a className="text-link" href={`mailto:${swirlup.contactEmail}`}>{swirlup.contactEmail}<Mail size={16} /></a> or read the <Link className="text-link" href="/apps/swirlup/privacy/">privacy policy<ArrowUpRight size={16} /></Link>.</p>
    </section>
  </PortfolioShell>;
}
