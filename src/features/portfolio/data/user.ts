import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Zero",
  lastName: "Notch",
  displayName: "Zero Notch",
  username: "fadilismee",
  gender: "male",
  pronouns: "he/him",
  bio: "Workspace notch yang fokus untuk Windows.",
  flipSentences: [
    "Workspace notch yang fokus untuk Windows.",
    "Mode Kerja dan Kuliah — hanya tools yang relevan.",
    "Kalender UT, modul, timer fokus, dan Kuma.",
    "Data workspace tetap lokal di perangkat.",
  ],
  address: "Windows 10 & 11, 64-bit",
  phoneNumberB64: "LS0t", // placeholder: ganti dengan nomor asli, base64
  emailB64: "aGFsb0B6ZXJvLW5vdGNoLmFwcA==", // halo@zero-notch.app (placeholder, repo tidak mencantumkan email)
  website: "https://github.com/fadilismee/zeronotch",
  jobTitle: "Notch untuk Windows",
  jobs: [
    {
      title: "Notch untuk Windows",
      company: "zeronotch",
      website: "https://github.com/fadilismee/zeronotch",
      experienceId: "zero-notch",
    },
  ],
  about: `- zeronotch mengubah area di sekitar notch Windows jadi workspace ringkas. Ganti mode Kerja dan Kuliah, jadi antarmuka hanya menampilkan tools yang relevan dengan konteks saat ini.
- Mode Kuliah: tugas, kalender UT, timer fokus, streak belajar, catatan, cari/unduh modul, dan pendamping interaktif Kuma.
- Mode Kerja: Beranda, Fokus Pomodoro + streak, Utilitas (File Shelf, Clipboard, Kalkulator, Cermin, shortcut), dan Musik dengan kontrol ringkas + lirik opsional. AI opsional lewat endpoint OpenAI-compatible milikmu sendiri.
- Download: [Unduh untuk Windows](https://github.com/fadilismee/zeronotch/releases/download/v1.0.9/zeronotch-Setup-v1.0.9.exe) — rilis v1.0.9, installer zeronotch-Setup-v1.0.9.exe, Windows 10/11 64-bit. Linux menyusul. Installer saat ini belum ditandatangani, jadi SmartScreen bisa muncul; cek SHA-256 di catatan rilis.
- Repo: [fadilismee/zeronotch](https://github.com/fadilismee/zeronotch), lisensi GPL-3.0, dibuat 25 Okt 2026. Per 25 Okt 2026: 0 stars, 1 rilis (v1.0.9).
- Dukungan: [cebanmatters.com/zeronotch](https://cebanmatters.com/zeronotch).
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
