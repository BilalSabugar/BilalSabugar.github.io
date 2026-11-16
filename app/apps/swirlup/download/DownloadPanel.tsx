"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";

type Release = { versionName: string; versionCode?: number; apkUrl: string; sha256?: string; notes?: string; size?: number; publishedAt?: string };

const endpoint = "https://asia-south1-swirlup-deaf1.cloudfunctions.net/latestRelease";
const certificate = "07:AC:58:2F:C1:E6:22:BE:8E:DE:CA:8B:E3:19:6C:63:8E:D1:85:D4:04:2E:AE:1E:3E:8D:41:59:FF:81:73:FB";

export function DownloadPanel() {
  const [release, setRelease] = useState<Release | null>(null);
  const [failed, setFailed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let live = true;
    fetch(endpoint).then(r => { if (!r.ok) throw new Error("lookup failed"); return r.json(); })
      .then((data: Release) => { if (live) setRelease(data); })
      .catch(() => { if (live) setFailed(true); });
    return () => { live = false; };
  }, []);

  const copy = () => { if (release?.sha256) navigator.clipboard?.writeText(release.sha256).then(() => setCopied(true)).catch(() => undefined); };
  const meta = release ? [`Version ${release.versionName}`, release.size ? `${(release.size / 1048576).toFixed(0)} MB` : "", release.publishedAt ? new Date(release.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }) : "", "Android 7 or newer"].filter(Boolean).join(" · ") : "";

  return <section className="download-panel">
    {release ? <>
      <div className="app-actions app-hero-actions"><a className="button-primary" href={release.apkUrl} download>Download SwirlUp {release.versionName}<Download size={18} /></a></div>
      <p className="app-free-note">{meta}</p>
      {release.notes && <><h2>What&rsquo;s new</h2><p className="download-notes">{release.notes}</p></>}
      {release.sha256 && <div className="download-verify">
        <h2>Verify your download</h2>
        <p>SHA-256 of the APK:</p>
        <code>{release.sha256}</code>
        <p><button type="button" className="button-secondary" onClick={copy}>{copied ? "Copied" : "Copy checksum"}</button></p>
        <p>On Windows PowerShell run <code>Get-FileHash .\SwirlUp-{release.versionName}.apk -Algorithm SHA256</code>. On Android with Termux run <code>sha256sum SwirlUp-{release.versionName}.apk</code>. The release signing certificate SHA-256, which you can check with <code>apksigner verify --print-certs</code>, is:</p>
        <code>{certificate}</code>
      </div>}
    </> : failed
      ? <p>We could not load the latest release right now. Please refresh the page or try again in a few minutes, or email the developer below.</p>
      : <p className="app-free-note">Loading the latest release...</p>}
  </section>;
}
