"use client";
import { useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { PortfolioShell, PageIntro, Breadcrumb } from "@/components/PortfolioShell";
import { swirlup } from "@/lib/swirlup";

const HANDLE = /^[a-z0-9._]{2,30}$/i;

const subscribe = () => () => undefined;

export default function SwirlUpInvitePage() {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const raw = new URLSearchParams(search).get("u")?.replace(/^@/, "") ?? "";
  const handle = HANDLE.test(raw) ? raw.toLowerCase() : null;

  useEffect(() => {
    if (handle && /android/i.test(navigator.userAgent)) window.location.href = `swirlup://u/${handle}`;
  }, [handle]);

  return <PortfolioShell>
    <Breadcrumb items={[{ label: "SwirlUp", href: "/apps/swirlup/" }, { label: "Invite" }]} />
    <PageIntro label={`${swirlup.tagline} / Invite`} title={handle ? `@${handle} invited you to SwirlUp.` : "Join SwirlUp."} intro="A free, private social app: Posts, Shouts and Sizzles, mood-based feeds ranked on your phone, and end-to-end encrypted chats and calls." />
    <div className="app-actions app-hero-actions">
      {handle && <a className="button-primary" href={`swirlup://u/${handle}`}>Open in SwirlUp<ArrowUpRight size={18} /></a>}
      <Link className={handle ? "button-secondary" : "button-primary"} href="/apps/swirlup/download/">Get SwirlUp<Download size={18} /></Link>
      <Link className="button-secondary" href="/apps/swirlup/">About SwirlUp<ArrowUpRight size={18} /></Link>
    </div>
    <p className="app-free-note">SwirlUp is free. This link only contains {handle ? `@${handle}'s` : "a"} public username. We don&rsquo;t track who clicks it.</p>
    <section className="case-conversation">
      <p className="eyebrow">Contact</p>
      <h2>Questions?</h2>
      <p>Bilal Sabugar, <a className="text-link" href={`mailto:${swirlup.contactEmail}`}>{swirlup.contactEmail}<Mail size={16} /></a></p>
    </section>
  </PortfolioShell>;
}
