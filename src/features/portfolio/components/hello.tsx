import { Markdown } from "@/components/markdown"
import { HandwrittenArrow, HandwrittenNote } from "@/features/portfolio/components/handwritten-note"
import { HelloTitle } from "@/features/portfolio/components/hello-title"
import {
  Panel,
  PanelContent,
  PanelHeader,
} from "@/features/portfolio/components/panel"
import { USER } from "@/features/portfolio/data/user"

const ID = "hello"

export function Hello() {
  return (
    <Panel id={ID} className="screen-line-bottom-none">
      <PanelHeader>
        <h2 className="sr-only">About</h2>
        <HelloTitle />
      </PanelHeader>

      {/* Coretan highlight untuk link download di teks About (gaya sama
          seperti coretan di panel donasi & Blocks): pointer-events-none
          supaya tidak menghalangi klik, hanya tampil di layar lebar. */}
      <HandwrittenNote
        className="top-4 left-full ml-3 hidden w-36 flex-col items-start xl:flex"
        aria-hidden
      >
        <span className="-rotate-3">download here</span>
        <HandwrittenArrow className="mt-2 -rotate-3" />
      </HandwrittenNote>

      <PanelContent>
        <div className="typeset typeset-description [&_li]:ps-0.5 [&_ul]:ps-3.5">
          <Markdown>{USER.about}</Markdown>
        </div>
      </PanelContent>

      <div className="screen-line-bottom h-px" />
      <div className="h-4" />
      <div className="screen-line-bottom h-px" />
    </Panel>
  )
}
