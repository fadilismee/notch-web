import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "mahasiswa-ut",
    school: "Mahasiswa UT",
    fieldOfStudy: "Kalender, Modul, Fokus, dan Kuma",
    period: {
      start: "10.2026",
    },
    description: `- Lihat jadwal UT di Kalender setelah sign-in.
- Cari modul berdasarkan kode atau judul, lalu unduh file-nya (butuh Python 3).
- Lacak sesi belajar, streak, dan Kuma di Fokus; simpan catatan dan referensi di Catatan dan Clipboard.`,
    skills: ["Kalender UT", "Modul", "Fokus", "Streak", "Catatan", "Kuma"],
  },
  {
    id: "pekerja",
    school: "Pekerja",
    fieldOfStudy: "Beranda, Fokus, Utilitas, dan Musik",
    period: {
      start: "10.2026",
    },
    description: `- Beranda untuk ringkasan workspace cepat.
- Fokus untuk Pomodoro dan streak.
- Utilitas: File Shelf, Clipboard, Kalkulator, Cermin, dan shortcut aplikasi.
- Musik dengan kontrol ringkas dan lirik saat tersedia.`,
    skills: ["Beranda", "Fokus", "File Shelf", "Clipboard", "Kalkulator", "Cermin", "Musik"],
  },
  {
    id: "pengguna-windows",
    school: "Pengguna Windows 10 & 11",
    fieldOfStudy: "64-bit, data lokal",
    period: {
      start: "10.2026",
    },
    description: `- Windows 10 atau Windows 11, 64-bit.
- Data workspace tetap di perangkat; kamera hanya lokal untuk Cermin.
- Internet hanya untuk fitur yang kamu hubungkan: UT, unduhan modul, lirik, atau endpoint AI.`,
    skills: ["Windows 10", "Windows 11", "64-bit", "Data lokal"],
  },
]
