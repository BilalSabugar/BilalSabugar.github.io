import Link from "next/link";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata } from "@/lib/seo";
import { zero } from "@/lib/zero";

export const metadata = pageMetadata("Zero | Privacy Policy", "Privacy policy for Zero (com.bilalsabugar.zero): local-first storage, device permissions, Unity Ads, children's privacy, your rights and data deletion.", "/apps/zero/privacy/");

export default function ZeroPrivacyPage() {
  return <PortfolioShell>
    <Breadcrumb items={[{ label: "Zero", href: "/apps/zero/" }, { label: "Privacy Policy" }]} />
    <PageIntro label={`Privacy policy / Effective ${zero.policyEffective}`} title="Zero privacy policy." intro="Zero is local-first. No accounts, no cloud sync, and no developer-run servers that collect your content." />
    <div className="policy-body">
      <section><h2>1. Overview</h2>
        <p><strong>App:</strong> {zero.name} ({zero.packageName})</p>
        <p><strong>Developer & Data Controller:</strong> {zero.developer}</p>
        <p><strong>Effective date:</strong> {zero.policyEffective}</p>
        <p>Zero operates as a local-first application. No user accounts, logins, personal identification, or cloud syncing are required. This policy explains what the app stores on your device, which permissions it asks for, and what the advertising partner may collect.</p>
      </section>
      <section><h2>2. Data stored on your device</h2>
        <p>Passwords you save in the vault, notes and checklists, scan history, calculation history, download history, game progress and settings are stored locally on your device, in the app&rsquo;s private storage (AsyncStorage). Other apps cannot read this storage under Android&rsquo;s app sandbox. You can additionally restrict who can open the app with the optional Biometric & PIN App Lock.</p>
        <p>The vault and notes are not separately encrypted by the app. Please do not store information in them that you are not comfortable keeping on your device.</p>
        <p>The developer does not host backend servers that collect, store, sell, or transmit this content. It never leaves your device unless you choose to share or export it yourself.</p>
      </section>
      <section><h2>3. Device permissions & purpose</h2>
        <ul>{zero.permissions.map(([name, desc]) => <li key={name}><code>{name}</code><br />{desc}</li>)}</ul>
      </section>
      <section><h2>4. Third-party advertising & analytics</h2>
        <p>The application integrates Unity Ads (Unity Technologies) for in-app monetization (Banner, Interstitial, and Rewarded Video Ads).</p>
        <p>Unity Ads may collect non-sensitive device identifiers (e.g., Google Advertising ID, IP address, device model, OS version, and network carrier) to deliver contextual and targeted advertisements according to <a href={zero.unityPrivacy} target="_blank" rel="noreferrer">Unity&rsquo;s Privacy Policy</a>. This data is processed by Unity under its own policy. The developer does not receive it.</p>
        <p><strong>Opting out of personalized ads:</strong> on Android, open Settings, then Google, then Ads, and choose to delete your advertising ID or opt out of ads personalization. You can also review the choices described in Unity&rsquo;s Privacy Policy.</p>
        <p>You can obtain an ad-free experience by using rewarded passes inside the app.</p>
      </section>
      <section><h2>5. Children&rsquo;s privacy (COPPA & IT Rules)</h2>
        <p>The app is rated for ages 13 and above. We do not knowingly collect personally identifiable information from children under 13. If you believe a child under 13 has provided information through the app&rsquo;s advertising, contact us and we will help you resolve it.</p>
      </section>
      <section><h2>6. Your rights & data deletion</h2>
        <p>Because the app&rsquo;s data resides locally on your hardware, you have direct control. Clearing the app&rsquo;s storage or uninstalling the app permanently deletes all stored data, passwords, notes and preferences from the device.</p>
        <p>Under India&rsquo;s Digital Personal Data Protection Act, 2023, you may ask to access, correct or erase personal data, withdraw consent, or raise a grievance. The developer holds no personal data about you, but you can contact us about advertising-related questions and we will help you reach Unity&rsquo;s privacy channels.</p>
      </section>
      <section><h2>7. Data retention & security</h2>
        <p>The developer retains no user data. Data on your device stays until you delete it. Network connections to download media and load ads use standard HTTPS where the remote service supports it.</p>
      </section>
      <section><h2>8. Changes to this policy</h2>
        <p>We may update this policy when the app or applicable law changes. The effective date above will change, and the current version will always be available at this address.</p>
      </section>
      <section><h2>9. Contact, support & grievances</h2>
        <p><strong>Developer & Grievance Officer:</strong> {zero.developer}</p>
        <p><strong>Support & inquiries:</strong> <a href={`mailto:${zero.email}`}>{zero.email}</a></p>
        <p><strong>GitHub:</strong> <a href={zero.github} target="_blank" rel="noreferrer">{zero.github}</a></p>
        <p>We aim to reply to privacy requests within 30 days. See also the <Link href="/apps/zero/terms/">Terms of Use</Link>.</p>
      </section>
    </div>
  </PortfolioShell>;
}
