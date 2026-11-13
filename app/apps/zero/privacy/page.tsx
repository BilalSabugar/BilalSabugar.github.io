import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata } from "@/lib/seo";
import { zero } from "@/lib/zero";

export const metadata = pageMetadata("Zero — Privacy Policy", "Privacy policy for Zero (com.bilalsabugar.zero): local-first storage, device permissions, Unity Ads, children's privacy and data deletion.", "/apps/zero/privacy/");

export default function ZeroPrivacyPage() {
  return <PortfolioShell>
    <Breadcrumb items={[{ label: "Zero", href: "/apps/zero/" }, { label: "Privacy Policy" }]} />
    <PageIntro label={`Privacy policy / Effective ${zero.policyEffective}`} title="Zero privacy policy." intro="Zero is local-first. No accounts, no cloud sync, and no developer-run servers that collect your content." />
    <div className="policy-body">
      <section><h2>1. Overview</h2>
        <p><strong>App:</strong> {zero.name} ({zero.packageName})</p>
        <p><strong>Developer & Data Controller:</strong> {zero.developer}</p>
        <p><strong>Effective date:</strong> {zero.policyEffective}</p>
        <p>Zero operates as a local-first application. No user accounts, logins, personal identification, or cloud syncing are required.</p>
      </section>
      <section><h2>2. On-device data storage</h2>
        <p>Passwords, notes, scans, calculations, and download histories are encrypted and stored strictly on your local device using AsyncStorage and Android Keystore.</p>
        <p>The developer does not host backend servers that collect, store, sell, or transmit user-generated content.</p>
      </section>
      <section><h2>3. Device permissions & purpose</h2>
        <ul>{zero.permissions.map(([name, desc]) => <li key={name}><code>{name}</code><br />{desc}</li>)}</ul>
      </section>
      <section><h2>4. Third-party advertising & analytics</h2>
        <p>The application integrates Unity Ads (Unity Technologies) for in-app monetization (Banner, Interstitial, and Rewarded Video Ads).</p>
        <p>Unity Ads may collect non-sensitive device identifiers (e.g., Google Advertising ID, IP address, device model, OS version, and network carrier) to deliver contextual and targeted advertisements according to <a href={zero.unityPrivacy} target="_blank" rel="noreferrer">Unity&rsquo;s Privacy Policy</a>.</p>
        <p>You can obtain an ad-free experience by using rewarded passes inside the app.</p>
      </section>
      <section><h2>5. Children&rsquo;s privacy (COPPA & IT Rules)</h2>
        <p>The app is rated for ages 13 and above. We do not knowingly collect personally identifiable information from children under 13.</p>
      </section>
      <section><h2>6. User rights & data deletion</h2>
        <p>Because all application data resides locally on your hardware, you have absolute control: clearing the app cache/data or uninstalling the app permanently deletes all stored data, passwords, and preferences immediately.</p>
      </section>
      <section><h2>7. Contact & support</h2>
        <p><strong>Developer:</strong> {zero.developer}</p>
        <p><strong>GitHub:</strong> <a href={zero.github} target="_blank" rel="noreferrer">{zero.github}</a></p>
        <p><strong>Support & inquiries:</strong> <a href={`mailto:${zero.email}`}>{zero.email}</a></p>
      </section>
    </div>
  </PortfolioShell>;
}
