import { Suspense } from "react"
import type { Metadata } from "next"

import { getGitHubContributions } from "@/features/portfolio/data/github-contributions"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import { Panel, PanelContent } from "@/features/portfolio/components/panel"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"

import {
  ProfileContributionFallback,
  ProfileContributionGraph,
} from "./graph"

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
// 3. grafik contributions dari API yang sama tapi bloknya lebih kecil supaya
//    muat penuh di dalam panel tanpa scrollbar dan tanpa terpotong,
// 4. klik diamond memutar bunyi fahhh (MP3 myinstants, file lokal di
//    public/sounds/fahhh-pump.mp3), bukan metal-click bawaan.
// Sisanya memakai komponen yang sama persis dengan homepage.
export default function ProfilePage() {
  const contributions = getGitHubContributions()

  return (
    <div className="mx-auto md:max-w-3xl">
      <ProfileHeader clickSoundSrc="/sounds/fahhh-pump.mp3" />

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

      <Panel>
        <h2 className="sr-only">GitHub contributions</h2>

        <Suspense fallback={<ProfileContributionFallback />}>
          <ProfileContributionGraph contributions={contributions} />
        </Suspense>
      </Panel>
    </div>
  )
}
