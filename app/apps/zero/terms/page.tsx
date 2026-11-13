import Link from "next/link";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata } from "@/lib/seo";
import { zero } from "@/lib/zero";

export const metadata = pageMetadata("Zero | Terms of Use", "Terms of use for Zero (com.bilalsabugar.zero), including acceptable use of the media downloader, advertising, warranties and contact details.", "/apps/zero/terms/");

export default function ZeroTermsPage() {
  return <PortfolioShell>
    <Breadcrumb items={[{ label: "Zero", href: "/apps/zero/" }, { label: "Terms of Use" }]} />
    <PageIntro label={`Terms of use / Effective ${zero.termsEffective}`} title="Zero terms of use." intro="The rules for using Zero, including responsible use of the media downloader." />
    <div className="policy-body">
      <section><h2>1. Acceptance</h2>
        <p>By installing or using {zero.name} ({zero.packageName}), you agree to these terms and to the <Link href="/apps/zero/privacy/">Privacy Policy</Link>. If you do not agree, please uninstall the app.</p>
      </section>
      <section><h2>2. Licence</h2>
        <p>{zero.developer} grants you a personal, non-exclusive, non-transferable licence to use the app on your own devices. You may not copy, resell, reverse engineer or redistribute the app except where the law allows.</p>
      </section>
      <section><h2>3. Media downloader: acceptable use</h2>
        <p>The downloader works on links you provide. Zero does not host, index, store or endorse third-party content.</p>
        <ul>
          <li>Download only content you own, content that is in the public domain or openly licensed, or content you otherwise have the right or permission to save.</li>
          <li>You are responsible for following copyright law and the terms of service of the website or platform you download from.</li>
          <li>Do not use the app to infringe intellectual property, to download private or paid content you have no right to, or to redistribute downloaded material unlawfully.</li>
        </ul>
        <p>The developer is not responsible for how you use downloaded content.</p>
      </section>
      <section><h2>4. Advertising</h2>
        <p>The app shows ads provided by Unity Ads. Rewarded passes may remove ads for a limited time inside the app. Ads and passes have no cash value.</p>
      </section>
      <section><h2>5. Your data and your device</h2>
        <p>Your content stays on your device, as described in the Privacy Policy. You are responsible for your device, for keeping your app lock PIN private, and for backing up anything important. Clearing app data or uninstalling the app deletes it permanently.</p>
      </section>
      <section><h2>6. No warranty</h2>
        <p>The app is provided &ldquo;as is&rdquo;, without warranties of any kind. Calculators, converters and loan or EMI figures are for convenience, so verify important results independently. Downloads depend on third-party services that may change or stop working.</p>
      </section>
      <section><h2>7. Limitation of liability</h2>
        <p>To the extent the law allows, the developer is not liable for indirect or consequential loss, or for loss of data, arising from your use of the app.</p>
      </section>
      <section><h2>8. Copyright complaints & takedown</h2>
        <p>Because Zero hosts no third-party content, there is nothing to take down from the app itself. If you believe the app is being used to infringe your rights, email <a href={`mailto:${zero.email}`}>{zero.email}</a> with details.</p>
      </section>
      <section><h2>9. Changes & governing law</h2>
        <p>These terms may be updated, and the current version is always at this address. They are governed by the laws of India.</p>
      </section>
      <section><h2>10. Contact</h2>
        <p><strong>Developer:</strong> {zero.developer}<br /><strong>Email:</strong> <a href={`mailto:${zero.email}`}>{zero.email}</a></p>
      </section>
    </div>
  </PortfolioShell>;
}
