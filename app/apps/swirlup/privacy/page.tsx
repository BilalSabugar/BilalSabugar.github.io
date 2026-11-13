import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { pageMetadata } from "@/lib/seo";
import { swirlup } from "@/lib/swirlup";

export const metadata = pageMetadata("SwirlUp | Privacy Policy", "Privacy policy for SwirlUp (com.novyex.swirlup): what is stored, what is never collected, third-party services, encryption and account deletion.", "/apps/swirlup/privacy/");

const missing = "[to be added]";

export default function SwirlUpPrivacyPage() {
  const contact = swirlup.contactEmail ? <a href={`mailto:${swirlup.contactEmail}`}>{swirlup.contactEmail}</a> : missing;
  return <PortfolioShell>
    <Breadcrumb items={[{ label: "SwirlUp", href: "/apps/swirlup/" }, { label: "Privacy Policy" }]} />
    <PageIntro label={`Privacy policy / Effective ${swirlup.policyEffective}`} title="SwirlUp privacy policy." intro="Your messages are end-to-end encrypted, your interest profile stays on your phone, and there is no ads profile." />
    <div className="policy-body">
      <section><h2>1. Overview</h2>
        <p><strong>App:</strong> {swirlup.name} ({swirlup.packageName})</p>
        <p><strong>Developer & Data Controller:</strong> {swirlup.controllerName || missing}</p>
        <p><strong>Effective date:</strong> {swirlup.policyEffective}</p>
        <p>SwirlUp is a social app. This policy explains what we store, what we never collect, and which third parties help run the service.</p>
      </section>
      <section><h2>2. Data we store</h2>
        <ul>
          <li><strong>Account email</strong>, used to sign in and recover your account.</li>
          <li><strong>Public profile</strong>, such as your username, display name and photo.</li>
          <li><strong>Public posts</strong>: Posts, Shouts, Sizzles and stories you choose to publish, and your likes, comments and follows.</li>
          <li><strong>Encrypted message envelopes.</strong> Messages are end-to-end encrypted, so the server only holds encrypted data, and it is deleted from the server once delivered.</li>
          <li><strong>FCM device tokens</strong>, used to deliver push notifications. Notifications carry no message content.</li>
          <li><strong>Hashed contact prefixes, only if you opt in</strong> to friend suggestions. Matching uses k-anonymous hash prefixes, so your contacts&rsquo; phone numbers are never uploaded.</li>
        </ul>
      </section>
      <section><h2>3. Data we never collect</h2>
        <ul>
          <li><strong>Message content.</strong> We cannot read your chats. Chat history lives only on your phone, in an encrypted database (SQLCipher).</li>
          <li><strong>Location,</strong> unless you choose to share it in a chat, where it is end-to-end encrypted like any other message.</li>
          <li><strong>Interest profiles.</strong> Mood-based feed ranking runs entirely on your phone from a local profile that is never uploaded.</li>
        </ul>
        <p>We do not build an advertising profile and we do not show targeted ads.</p>
      </section>
      <section><h2>4. Encryption & calls</h2>
        <p>Chats use the Signal-style X3DH and Double Ratchet protocol (X25519, XChaCha20-Poly1305), and media uses streaming encryption. You can confirm who you are talking to with safety numbers and QR verification. Voice and video calls are peer-to-peer over WebRTC, with signed DTLS fingerprints so the server cannot intercept a call.</p>
        <p>One account can be used on up to 5 linked phones. Each phone has its own keys, certified by an account key, and is linked with a QR code and a 6-digit pairing code.</p>
      </section>
      <section><h2>5. Third-party services</h2>
        <ul>
          <li><strong>Google Firebase</strong> provides authentication, database, storage, functions and push notifications. See <a href={swirlup.firebasePrivacy} target="_blank" rel="noreferrer">Firebase privacy information</a>.</li>
          <li><strong>Klipy</strong> provides GIF search. Searches go through SwirlUp&rsquo;s own server, so Klipy receives only the search terms and never your identity or IP address. A GIF you choose is sent as an encrypted attachment, so the recipient never contacts Klipy either. See <a href={swirlup.klipyPrivacy} target="_blank" rel="noreferrer">Klipy&rsquo;s privacy policy</a>.</li>
          <li><strong>RSS news sources.</strong> The in-app news reader loads articles directly from the publishers, which may see your IP address as any website would.</li>
        </ul>
      </section>
      <section><h2>6. Account deletion</h2>
        <p>You can delete your account from within the app. Deletion removes your profile and content through a Cloud Function. Chat history stored on your phone is removed when you uninstall the app or clear its data.</p>
      </section>
      <section><h2>7. Children</h2>
        <p>SwirlUp is not intended for children under 13, and we do not knowingly collect their personal information. If you believe a child has created an account, contact us and we will remove it.</p>
      </section>
      <section><h2>8. Changes to this policy</h2>
        <p>We may update this policy as the app or the law changes. The effective date above will change, and the current version is always at this address.</p>
      </section>
      <section><h2>9. Contact</h2>
        <p><strong>Email:</strong> {contact}</p>
      </section>
    </div>
  </PortfolioShell>;
}
