import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

const base = pageMetadata("Join SwirlUp", "You have been invited to SwirlUp, a free and private social app for Android.", "/apps/swirlup/invite/");

export const metadata: Metadata = { ...base, robots: { index: false, follow: false }, referrer: "no-referrer" };

export default function InviteLayout({ children }: { children: React.ReactNode }) { return children; }
