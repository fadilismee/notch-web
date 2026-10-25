import type { Metadata } from "next"

import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"

export const metadata: Metadata = {
  title: "Zero Notch",
  alternates: {
    canonical: "/profile",
  },
}

// Halaman profil ala screenshot: hero diamond + profil + contributions,
// TANPA navbar atas (route ini di luar grup (app), jadi SiteHeader dan
// SiteBottomNav tidak ikut dirender). Yang diubah dari tampilan asli hanya:
// 1. tidak ada navbar,
// 2. ikon sosial diganti teks ex,
// 3. grafik contributions dibuat satu strip API yang bergoyang kiri-kanan
//    (bukan area scroll manual). Sisanya memakai komponen yang sama persis
//    dengan homepage (ProfileHeader + GitHubContributions).
export default function ProfilePage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <style>{`
        /* Satu strip contributions yang bergoyang kiri-kanan, tanpa scrollbar. */
        .profile-pan { overflow: hidden; }
        .profile-pan .overflow-x-auto { overflow-x: clip; }
        .profile-pan > * { animation: profile-sway 18s ease-in-out infinite; }
        @keyframes profile-sway {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-48px); }
          75% { transform: translateX(48px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .profile-pan > * { animation: none; }
        }
      `}</style>

      <ProfileHeader />

      <Panel className="screen-line-bottom-none screen-line-top-none">
        <PanelContent>
          <p className="text-base text-foreground">
            Nothing going on here, bang. I just love and miss my ex.
          </p>
        </PanelContent>

        <HandwrittenNote className="-top-7 right-full mr-4 hidden w-20 flex-col items-end lg:flex">
          <span className="-rotate-6">follow me</span>
          <HandwrittenArrow className="size-7 translate-x-3 -scale-x-100 -rotate-6" />
        </HandwrittenNote>
      </Panel>

      <div className="profile-pan">
        <GitHubContributions />
      </div>
    </div>
  )
}
