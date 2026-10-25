import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { HandwrittenArrow, HandwrittenNote } from "../handwritten-note"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel"
import { PanelTitleCopy } from "../panel-title-copy"

const ID = "blocks"

// Screenshot fitur zeronotch: 3 dari repo (docs/img) + 3 kiriman user
// (Beranda, Kalender UT, Fokus belajar). Kartu ikon aplikasi diganti
// screenshot Beranda sesuai permintaan terakhir user.
// Blok bawaan chanhdai TIDAK dipakai di homepage ini dan TIDAK dihapus:
// kode BlockItem/getBlocks tetap ada di repo, tinggal pakai lagi kalau mau.
// Repo hanya menyediakan 3 screenshot fitur, jadi kartu ke-4 memakai ikon
// aplikasi asli (bukan screenshot palsu).
const FEATURE_SCREENSHOTS = [
  {
    title: "Mode Kuliah",
    description:
      "Tugas, kalender UT, timer fokus, streak belajar, dan Kuma.",
    image: "/zeronotch/overview-study.png",
    width: 840,
    height: 364,
  },
  {
    title: "Musik",
    description: "Kontrol playback ringkas dengan lirik opsional.",
    image: "/zeronotch/music.png",
    width: 620,
    height: 364,
  },
  {
    title: "Clipboard",
    description: "Riwayat clipboard yang bisa di-scroll, dalam bentuk kartu.",
    image: "/zeronotch/clipboard.png",
    width: 840,
    height: 364,
  },
  {
    title: "Mode produktif",
    description:
      "Beranda kerja: pintasan, Pomodoro 25:00, progres hari, tugas, catatan, dan kalkulator.",
    image: "/zeronotch/beranda.png",
    width: 1094,
    height: 455,
  },
  {
    title: "Kalender UT",
    description:
      "Kalender UT dengan agenda Forum Diskusi dan catatan kuliah per tanggal.",
    image: "/zeronotch/kalender-ut.png",
    width: 990,
    height: 457,
  },
  {
    title: "Fokus belajar",
    description:
      "Timer fokus 25 menit, streak belajar, dan pendamping interaktif.",
    image: "/zeronotch/fokus-belajar.png",
    width: 925,
    height: 456,
  },
]

export function Blocks() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Blocks</a>
          <PanelTitleSup>({FEATURE_SCREENSHOTS.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <HandwrittenNote
        className="top-16 right-full mr-4 hidden w-36 flex-col items-end xl:flex"
        aria-hidden
      >
        <span className="-rotate-3 text-right">
          screenshot asli,
          <span className="block" />
          dari app
        </span>
        <HandwrittenArrow className="-scale-x-100 -rotate-6" />
      </HandwrittenNote>

      <div className="relative py-4">
        <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line"></div>
          <div className="border-l border-line"></div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FEATURE_SCREENSHOTS.map((item) => (
            <li
              key={item.title}
              className={cn(
                "max-sm:screen-line-top max-sm:screen-line-bottom",
                "sm:nth-[2n+1]:screen-line-top sm:nth-[2n+1]:screen-line-bottom"
              )}
            >
              <div className="group/block relative flex h-full flex-col gap-2 p-2 transition-[background-color] ease-out hover:bg-accent-muted">
                <div className="relative flex h-40 items-center justify-center overflow-hidden select-none [--image-radius:var(--radius-xl)]">
                  <Image
                    className="h-full w-auto rounded-(--image-radius) object-contain"
                    src={item.image}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    quality={100}
                    loading="eager"
                    unoptimized
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-(--image-radius) inset-ring-1 inset-ring-black/15 dark:inset-ring-white/15" />
                </div>

                <div className="flex flex-col gap-1 p-2">
                  <h3 className="text-lg/snug font-medium text-balance">
                    <a href="#blocks">
                      <span className="absolute inset-0" aria-hidden />
                      {item.title}
                    </a>
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="screen-line-top flex justify-center py-4">
        <Button
          className="gap-2 pr-2.5 pl-3 shadow-[inset_0_0_1px] shadow-foreground/20"
          variant="secondary"
          size="sm"
          nativeButton={false}
          render={<Link href="#blocks" />}
        >
          All blocks
          <ArrowRightIcon />
        </Button>
      </div>
    </Panel>
  )
}
