export const zero = {
  name: "Zero",
  tagline: "Zero bloat. Pure utility & offline arcade.",
  packageName: "com.bilalsabugar.zero",
  developer: "Bilal Sabugar",
  platform: "Android (API 26+)",
  email: "bilal.07.04.07@gmail.com",
  github: "https://github.com/BilalSabugar",
  // TODO: replace with the real Indus Appstore listing / APK URL once published.
  downloadUrl: "" as string,
  policyEffective: "13 November 2026",
  termsEffective: "13 November 2026",
  unityPrivacy: "https://unity.com/legal/game-player-and-app-user-privacy-policy",
  screenshots: [
    { file: "/apps/zero/home.webp", alt: "Zero home screen with search, category tabs and pinned shortcuts" },
    { file: "/apps/zero/video-downloader.webp", alt: "Zero video downloader with link field, auto-save to gallery and built-in browser options" },
    { file: "/apps/zero/calculator.webp", alt: "Zero scientific calculator with trigonometry, logarithm and factorial keys" },
  ],
  features: [
    { title: "Media & Video Downloader", points: [
      "High-speed parsing and local downloading of public videos, reels, and audio.",
      "Deep integration with the Android system share sheet.",
      "Direct-to-gallery storage with offline playback.",
    ] },
    { title: "Optical QR & Barcode Recognition", points: [
      "Real-time camera scanner with auto-focus and flashlight controls.",
      "Scan directly from saved device photos and screenshots.",
      "Built-in customizable QR generator for links, Wi-Fi credentials, and text.",
    ] },
    { title: "Computational & Financial Suite", points: [
      "Full scientific calculator: trigonometry, logarithms, factorials, inverse, degree/radian modes.",
      "Loan & EMI amortization calculator with installment breakdown.",
      "Multi-category metric & imperial unit converter.",
      "Expense & bill splitter, plus a Pomodoro productivity timer.",
    ] },
    { title: "App Lock & Vault", points: [
      "Optional app lock using Android BiometricPrompt (fingerprint/face unlock) with a 4-digit PIN fallback.",
      "On-device password vault, kept in the app private storage.",
      "Private notes and checklist manager, stored only on your device.",
    ] },
    { title: "Offline Arcade (13+ Games)", points: [
      "Super Tic-Tac-Toe, 2048 Puzzle, Classic Tic-Tac-Toe (AI vs 2P), Minesweeper, Memory Match, Chess, Snake, Dino Run, and randomizers.",
      "Anti-tamper persistent single-session progress saves.",
    ] },
  ],
  permissions: [
    ["CAMERA", "Used exclusively for real-time QR code and barcode scanning in the viewfinder. No images or video feeds are transmitted off-device."],
    ["READ_MEDIA_IMAGES / READ_MEDIA_VIDEO / STORAGE", "Used solely to save downloaded media directly to the device Gallery and to let you select images for QR decoding."],
    ["ACCESS_NETWORK_STATE & INTERNET", "Required to process user-initiated video downloads and to fetch third-party ad inventory."],
    ["USE_BIOMETRIC / USE_FINGERPRINT", "Interacts with the local Android BiometricPrompt hardware abstraction layer to unlock the app vault. Biometric data never leaves the device's secure hardware element."],
    ["AD_ID (com.google.android.gms.permission.AD_ID)", "Declared for compliance with Android 13+ requirements for ad network mediation."],
  ] as [string, string][],
};
