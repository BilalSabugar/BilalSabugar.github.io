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
          <li><strong>Encrypted message envelopes.</strong> Message content is end-to-end encrypted, so the server only holds encrypted data. While a message waits for delivery, its envelope shows the sender, recipient, device identifiers and time. Delivered envelopes are deleted from the server, and undelivered ones are deleted automatically after 30 days.</li>
          <li><strong>Conversation records.</strong> Each conversation has a small server record of its two members and delivered and read timestamps. You can turn off read receipts.</li>
          <li><strong>Online status and last seen</strong>, stored in Firebase Realtime Database while you use the app. You can hide your presence.</li>
          <li><strong>Linked phone details.</strong> Each linked phone&rsquo;s public keys and device name are published so your contacts can encrypt messages to that phone.</li>
          <li><strong>FCM device tokens</strong>, used to deliver push notifications. Notifications carry only routing identifiers and never message content.</li>
          <li><strong>Encrypted chat backup, only if you turn it on.</strong> It is stored in Firebase Storage and encrypted with a key derived (using scrypt) from a passphrase only you know, so we cannot read it.</li>
        </ul>
      </section>
      <section><h2>3. Contact discovery (optional)</h2>
        <p>Contact discovery is opt-in and has two parts:</p>
        <ul>
          <li>If you choose to be discoverable, a SHA-256 hash of your email is stored on the server so others can find you.</li>
          <li>When you look for contacts, only 5-character hash prefixes of their identifiers are sent, and nothing about them is stored. The server keeps only a daily rate-limit counter.</li>
        </ul>
        <p>Phone numbers are never uploaded.</p>
      </section>
      <section><h2>4. Data we never collect</h2>
        <ul>
          <li><strong>Message content.</strong> We cannot read your chats. Chat history lives only on your phone, in an encrypted database (SQLCipher).</li>
          <li><strong>Location,</strong> unless you choose to share it in a chat, where it is end-to-end encrypted like any other message.</li>
          <li><strong>Interest profiles and view history.</strong> Mood-based feed ranking runs entirely on your phone from a local profile that is never uploaded.</li>
        </ul>
        <p>Message content is never readable by us, but message metadata is not hidden from the server. See the sections above for exactly what is stored. We do not build an advertising profile and we do not show targeted ads.</p>
      </section>
      <section><h2>5. Encryption & calls</h2>
        <p>Chats use the Signal-style X3DH and Double Ratchet protocol (X25519, XChaCha20-Poly1305), and media uses streaming encryption. You can confirm who you are talking to with safety numbers and QR verification. Voice and video calls are peer-to-peer over WebRTC, with signed DTLS fingerprints so the server cannot intercept a call.</p>
        <p>One account can be used on up to 5 linked phones. Each phone has its own keys, certified by an account key, and is linked with a QR code and a 6-digit pairing code.</p>
      </section>
      <section><h2>6. Third-party services</h2>
        <ul>
          <li><strong>Google Firebase</strong> provides authentication, database, storage, functions and push notifications. Firebase processes data in India (asia-south1) and Singapore (asia-southeast1, for Realtime Database). See <a href={swirlup.firebasePrivacy} target="_blank" rel="noreferrer">Firebase privacy information</a>.</li>
          <li><strong>Klipy</strong> provides GIF search. Searches go through SwirlUp&rsquo;s own server, so Klipy receives only the search terms and never your identity or IP address. A GIF you choose is sent as an encrypted attachment, so the recipient never contacts Klipy either. See <a href={swirlup.klipySite} target="_blank" rel="noreferrer">Klipy</a> for its own terms.</li>
          <li><strong>RSS news sources.</strong> The in-app news reader loads articles directly from the publishers, which may see your IP address as any website would.</li>
        </ul>
      </section>
      <section><h2>7. Account deletion</h2>
        <p>You can delete your account from within the app. A Cloud Function then deletes your profile, handle, public keys, notifications, uploaded media, encrypted media and backups, your Posts, Shouts, Sizzles and stories, and your follow relationships.</p>
        <p><strong>Not deleted:</strong> likes and comments you left on other people&rsquo;s content, conversation records, and anything already delivered to other people&rsquo;s phones. Chat history stored on your own phone is removed when you uninstall the app or clear its data.</p>
      </section>
      <section><h2>8. Children</h2>
        <p>SwirlUp is not intended for children under 13, and we do not knowingly collect their personal information. If you believe a child has created an account, contact us and we will remove it.</p>
      </section>
      <section><h2>9. Changes to this policy</h2>
        <p>We may update this policy as the app or the law changes. The effective date above will change, and the current version is always at this address.</p>
      </section>
      <section><h2>10. Contact</h2>
        <p><strong>Email:</strong> {contact}</p>
      </section>
    </div>
  </PortfolioShell>;
}
