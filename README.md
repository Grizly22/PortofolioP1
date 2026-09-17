# 🌐 Web Portofolio Pribadi Modern & Rapi

Website portofolio pribadi modern, profesional, dan responsif dengan fitur utama **Animasi Geser (Slide / Carousel) pada Kartu Identitas Diri**, galeri portofolio dengan filter kategori, tech stack marquee berputar otomatis, serta dual tema (Dark & Light mode).

---

## ✨ Fitur Unggulan

1. **Animasi Geser Identitas Diri (Identity Slider)**
   - Menggunakan Swiper.js modern dengan transisi mulus (*centered slides*).
   - Mendukung gesture sentuhan / swipe di smartphone, drag mouse di desktop, tombol panah kiri-kanan, dan indikator titik (*pagination*).
   - Terdapat **5 Kartu Identitas Interaktif**:
     1. Profil & Biodata Utama (Nama, Profesi, Domisili, Bahasa, Minat Khusus).
     2. Pendidikan & Riwayat Belajar / Sertifikasi.
     3. Pilar Keahlian Inti & Progress Bar Kemampuan.
     4. Nilai Personal & Etika Kerja (Rapi, Disiplin, Komunikatif, Bertanggung Jawab).
     5. Visi & Harapan Masa Depan.
   - Dilengkapi **Tab Navigasi Cepat** di atas kartu slider untuk melompat langsung ke kartu yang diinginkan.

2. **Hero Section Dinamis**
   - Animasi teks geser vertikal berganti otomatis (*Full-Stack Developer*, *UI/UX Enthusiast*, dll).
   - Status badge aktif (*Terbuka untuk Peluang Kerja*).
   - Profil card kaca bergaya modern (*glassmorphism*) dengan avatar berbingkai gradien.

3. **Continuous Marquee Tech Stack**
   - Baris keahlian dan teknologi yang bergerak otomatis ke samping tanpa jeda (*infinite marquee*), dan otomatis berhenti saat kursor diarahkan (*hover to pause*).

4. **Karya & Proyek Terpilih (Filterable)**
   - Galeri proyek dengan kartu visual rapi dan tombol filter interaktif (*Semua*, *Web App*, *UI / Landing Page*, *Backend / API*).

5. **Rekam Jejak & Pengalaman (Timeline)**
   - Alur pengalaman terstruktur rapi dengan dot penanda bercahaya.

6. **Formulir Kontak & Modal CV**
   - Form kontak interaktif dengan umpan balik visual (*toast notification*).
   - Modal popup ringkasan unduh CV.

7. **Dual Mode (Dark / Light Theme)**
   - Pengganti tema gelap dan terang secara instan dengan penyimpanan preferensi di `localStorage`.

---

## 🚀 Cara Menjalankan Website

Website ini dibangun murni menggunakan HTML5, Tailwind CSS, Lucide Icons, dan Swiper.js, sehingga **tidak membutuhkan proses build/compile yang rumit**.

### Cara 1: Buka Langsung di Browser
1. Buka File Explorer di Windows.
2. Masuk ke folder:
   `C:\Users\SATRIA\.gemini\antigravity\scratch\portfolio-web`
3. Klik ganda file `index.html` untuk membukanya di Google Chrome, Microsoft Edge, atau browser pilihan Anda.

### Cara 2: Menjalankan Server Lokal (Opsional)
Buka terminal / PowerShell di folder proyek ini, lalu jalankan perintah berikut:

```powershell
python -m http.server 3000
```
Lalu buka browser di alamat: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Cara Mengubah Data Pribadi

Semua konten dapat dengan mudah Anda sesuaikan di dalam file `index.html`:

| Bagian | Lokasi di `index.html` | Keterangan |
| :--- | :--- | :--- |
| **Nama & Peran** | Tag `<h1 class="... Satria Pratama ...">` | Ubah nama lengkap dan headline Anda. |
| **Data Kartu Identitas** | Bagian `<div class="swiper-slide">` | Ubah teks biodata, riwayat pendidikan, keahlian, atau visi pada masing-masing kartu slide 1 sampai 5. |
| **Foto Profil** | Bagian avatar di dalam `#home` | Ganti ikon user dengan tag `<img>` yang mengarah ke file foto Anda (misal `assets/foto-profil.jpg`). |
| **Proyek & Portofolio** | Bagian `<div class="project-card">` | Tambah atau ubah judul proyek, deskripsi, link GitHub, dan demo karya Anda. |
| **Kontak & Media Sosial** | Bagian `#contact` dan tautan sosial | Perbarui alamat email, nomor telepon, username LinkedIn, GitHub, dan Instagram. |

---

## 📂 Struktur File

```
portfolio-web/
├── index.html        # Struktur HTML halaman utama & seluruh konten
├── style.css         # Styling kustom, slider transitions, & marquee
├── script.js         # Logika interaktif Swiper, tema gelap/terang, filter, modal
└── README.md         # Panduan penggunaan dan kustomisasi
```
