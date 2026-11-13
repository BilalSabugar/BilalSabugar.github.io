export const swirlup = {
  name: "SwirlUp",
  tagline: "Your vibe. Your circle. Your rules.",
  packageName: "com.novyex.swirlup",
  platform: "Android",
  // TODO: fill in before publishing the policy to a store or API provider.
  contactEmail: "" as string,
  controllerName: "" as string,
  policyEffective: "13 November 2026",
  klipyPrivacy: "https://klipy.com/privacy-policy",
  firebasePrivacy: "https://firebase.google.com/support/privacy",
  features: [
    { title: "Posts, Shouts and Sizzles", points: [
      "Posts: photos with captions.",
      "Shouts: short text posts, like tweets. Shout straight from a news article.",
      "Sizzles: short vertical videos, like reels.",
      "Stories, likes, comments, follows, and private accounts that require follow approval.",
    ] },
    { title: "Mood-based feeds", points: [
      "Pick a mood, such as \"Hindi songs to vibe on\", or create your own in Mood Studio.",
      "Ranking runs entirely on your phone from a local interest profile that is never uploaded.",
    ] },
    { title: "News, built in", points: [
      "A news tab built on RSS with an in-app reader.",
      "Turn any article into a Shout in a tap.",
    ] },
    { title: "Private by design", points: [
      "End-to-end encrypted chats using the Signal-style X3DH and Double Ratchet protocol (X25519, XChaCha20-Poly1305). Media uses streaming encryption.",
      "Messages are deleted from the server once delivered. Chat history lives only on your phone, in an encrypted database (SQLCipher).",
      "Safety numbers and QR verification let you confirm who you are talking to.",
      "One account on up to 5 linked phones. Each phone has its own keys, certified by an account key, and is linked by QR with a 6-digit pairing code.",
      "Peer-to-peer voice and video calls over WebRTC, with signed DTLS fingerprints so the server cannot intercept a call.",
      "No tracking or ads profile. Push notifications carry no message content.",
      "Private friend suggestions: contact matching uses k-anonymous hash prefixes, so phone numbers are never uploaded.",
      "GIF search goes through SwirlUp's own server, so the GIF provider never sees who searched or their IP. A chosen GIF is sent as an encrypted attachment.",
    ] },
    { title: "Creation tools, all on your phone", points: [
      "Image editor with filters and adjustments.",
      "Sizzle editor: trim, speed, filters, text, and music from your phone, mixed and rendered to 9:16 video.",
      "\"Use this sound\" on any Sizzle starts a new one with its audio.",
      "Built-in PDF viewer.",
    ] },
    { title: "Make it yours", points: [
      "Material You and One UI inspired design with custom themes, accent colours, fonts, chat wallpapers and smooth animations.",
    ] },
  ],
};
