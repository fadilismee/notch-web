import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Zero",
  lastName: "Notch",
  displayName: "Zero Notch",
  username: "fadilismee",
  gender: "male",
  pronouns: "he/him",
  bio: "Your focused workspace inside one notch.",
  flipSentences: [
    "Your focused workspace inside one notch.",
    "Work and Study modes — only the tools you need.",
    "UT calendar, modules, focus timer, and Kuma.",
    "Your workspace data stays on your device.",
  ],
  address: "Windows 10 & 11, 64-bit",
  phoneNumberB64: "LS0t", // placeholder: ganti dengan nomor asli, base64
  emailB64: "aGFsb0B6ZXJvLW5vdGNoLmFwcA==", // halo@zero-notch.app (placeholder, repo tidak mencantumkan email)
  website: "https://github.com/fadilismee/zeronotch",
  jobTitle: "Notch workspace for Windows",
  jobs: [
    {
      title: "Notch workspace for Windows",
      company: "zeronotch",
      website: "https://github.com/fadilismee/zeronotch",
      experienceId: "zero-notch",
    },
  ],
  about: `- One notch. Two focused spaces. zeronotch brings your work and study tools into one compact Windows workspace, designed to keep you focused without breaking your flow.
- Switch context, not applications. Each mode shows only the features relevant to what you are doing.
- Study mode: UT calendar, course schedule, module search and download, study notes, focus timer, learning streak, and Kuma, your interactive companion.
- Work mode: focus timer, Pomodoro sessions, tasks, music with lyrics, File Shelf, clipboard history, calculator, mirror, app shortcuts, and optional AI through your own OpenAI-compatible endpoint.
- Your workspace stays yours. Workspace data stays on your device, the camera is used for local mirror preview only, and no account is required for basic utilities.
- Download: [Download zeronotch for Windows](https://github.com/fadilismee/zeronotch/releases/download/v1.0.9/zeronotch-Setup-v1.0.9.exe) — version 1.0.9, Windows 10/11 64-bit. Linux coming soon. The installer is not code-signed yet, so SmartScreen may appear.
- Repo: [fadilismee/zeronotch](https://github.com/fadilismee/zeronotch), GPL-3.0 license.
- Support: [cebanmatters.com/zeronotch](https://cebanmatters.com/zeronotch).
`,
  avatar: "/zero-notch-cat-avatar.jpg",
  avatarSketch: "/zero-notch-cat-avatar.jpg",
  avatarVariants: {
    lightOff: "/zero-notch-cat-avatar.jpg",
    lightOn: "/zero-notch-cat-avatar.jpg",
    darkOff: "/zero-notch-cat-avatar.jpg",
    darkOn: "/zero-notch-cat-avatar.jpg",
  },
  ogImage: "/zero-notch-app-icon.svg",
  namePronunciationUrl: "",
  timeZone: "Asia/Jakarta",
  keywords: [
    "zeronotch",
    "zero notch",
    "fadilismee",
    "notch windows",
    "kuma",
    "kerja",
    "kuliah",
    "kalender ut",
    "modul ut",
  ],
  dateCreated: "2026-10-25",
}
