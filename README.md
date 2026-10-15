# Icon by Solar

> **Credit Title:** **Icon by Solar**  
> Professional, reusable, and framework-agnostic icon library built on the Solar Icon Set. Fully documented and integrated for **React** and **Laravel Blade**.

---

## 1. Deskripsi Library & Hasil Audit Aktual

**Icon by Solar** mengonversi seluruh koleksi SVG Solar menjadi icon library modern dengan API yang konsisten, type safety, tree-shaking, serta kompatibilitas penuh dengan sistem pewarnaan utilitas seperti Tailwind CSS.

Berdasarkan audit aktual terhadap repository:
- **Total file SVG sumber:** **3.738 file** (100% valid XML dengan `viewBox="0 0 24 24"`).
- **Jumlah ikon unik (konsep ikon):** **1.246 ikon**.
- **Ketersediaan pasangan style:** **100% berpasangan sempurna** (setiap ikon memiliki 3 varian lengkap: Bold, Bold Duotone, dan Outline).
- **Inkonsistensi penamaan:** Ditemukan 4 file di `Bold Duotone` yang memiliki spasi ganda (`Chat  Square ...`) serta variasi serupa di kategori Arrows. Seluruh file sumber asli tetap dipertahankan tanpa modifikasi, dan dihubungkan secara otomatis melalui sistem mapping nama kanonis dan metadata alias terpusat.

---

## 2. Daftar Style & Kategori

### Style yang Didukung (3 Varian per Ikon)
1. **`outline`** (1.246 SVG) — Garis luar bersih dengan ketebalan visual seimbang.
2. **`bold`** (1.246 SVG) — Bentuk solid tebal untuk penekanan dan status aktif.
3. **`bold-duotone`** (1.246 SVG) — Kombinasi bentuk solid dan aksen sekunder beropasitas halus (duotone).

### 37 Kategori Lengkap (Masing-masing 3 Gaya)
- Arrows
- Arrows Action
- Astronomy
- Building, Infrastructure
- Business, Statistic
- Call
- Design, Tools
- Electronic, Devices
- Essentional, UI
- Faces, Emotions, Stickers
- Files
- Folders
- Food, Kitchen
- Hands
- Home, Furniture
- Like
- List
- Map & Location
- Medicine
- Messages, Conversation
- Money
- Nature, Travel
- Network, IT, Programming
- Notes
- Notifications
- School
- Search
- Security
- Settings, Fine Tuning
- Shopping, Ecommerce
- Sports
- Text Formatting
- Time
- Transport, Parts, Service
- Users
- Video, Audio, Sound
- Weather

---

## 3. Prasyarat Sistem

- **Node.js:** Versi `>= 18.0.0` (diuji pada v20.19.5).
- **npm:** Versi `>= 9.0.0` (diuji pada 10.9.8).
- **PHP:** Versi `>= 8.1` (diuji pada PHP 8.3.35).
- **Composer:** Versi `>= 2.0` (diuji pada Composer 2.10.3).
- **Python 3:** Versi `>= 3.8` (untuk generator manifest & catalog tooling).

---

## 4. Struktur Project

```text
icon-by-solar/
├── Bold/                                # 1.246 file SVG sumber asli (tidak diubah)
├── Bold Duotone/                        # 1.246 file SVG sumber asli (tidak diubah)
├── Outline/                             # 1.246 file SVG sumber asli (tidak diubah)
├── catalog/                             # Katalog preview visual interaktif
│   ├── catalog.html                     # Preview mandiri (tanpa server backend)
│   ├── inventory.json                   # Daftar inventaris lengkap
│   ├── validation.md                    # Laporan status validasi koleksi
│   └── README.md
├── packages/
│   ├── react/                           # Package React (@icon-by-solar/react)
│   │   ├── src/                         # Komponen TypeScript, types, data
│   │   ├── dist/                        # Build output: ESM (.js), CJS (.cjs), types (.d.ts)
│   │   ├── dist/icons/                  # 1.246 modul per-ikon (selective imports)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   └── laravel-blade/                   # Package Laravel Blade (icon-by-solar/blade)
│       ├── config/                      # File konfigurasi icon-by-solar.php
│       ├── resources/                   # manifest.json & view template
│       ├── src/                         # ServiceProvider, Component, SvgResolver
│       ├── composer.json
│       └── README.md
├── tools/                               # Tooling & automation scripts
│   ├── build_catalog.py                 # Regenerasi katalog & validasi
│   ├── generate_manifest.py             # Regenerasi manifest.json
│   ├── build_react_package.py           # Kompilasi source React
│   └── build_react_icons.py             # Generator modul per-ikon selective import
├── tests/                               # Test suite otomatis end-to-end
│   ├── test_svg_integrity.py            # Validasi XML & viewBox 3.738 file
│   ├── test_manifest_integrity.py       # Validasi manifest & pairing 1.246 ikon
│   ├── react/test_react_component.mjs   # Test komponen & render React
│   ├── blade/test_svg_resolver.php      # Test SvgResolver & atribut Blade
│   └── run_all_tests.sh                 # Test runner terpadu
├── manifest.json                        # Manifest kanonis terpusat
├── README.md                            # Dokumentasi utama
└── LICENSE                              # Lisensi CC BY 4.0 (Artwork) & MIT (Code)
```

---

## 5. Instalasi & Penggunaan: Package React

### Instalasi Lokal / Monorepo

```bash
# Dari root project React Anda:
npm install /path/to/icon-by-solar/packages/react
```

### Cara 1: Universal Component (Target Desain)

Gunakan `<SolarIcon />` untuk kemudahan pemanggilan dinamis berbasis nama kanonis:

```tsx
import React from 'react';
import { SolarIcon } from '@icon-by-solar/react';

export default function Header() {
  return (
    <div className="flex items-center gap-3">
      {/* Outline (default) */}
      <SolarIcon name="home" variant="outline" size={24} />

      {/* Bold dengan warna kustom */}
      <SolarIcon name="home" variant="bold" size={32} color="#0342C9" />

      {/* Bold Duotone */}
      <SolarIcon name="home" variant="bold-duotone" size={24} />
    </div>
  );
}
```

### Cara 2: Selective Import (Tree-Shaking Optimal)

Untuk memastikan bundle web browser hanya memuat ikon yang benar-benar digunakan tanpa overhead:

```tsx
import React from 'react';
import { HomeOutline, HomeBold, HomeBoldDuotone } from '@icon-by-solar/react/icons/home';
import { BellBingBold } from '@icon-by-solar/react/icons/bell-bing';

export function Navigation() {
  return (
    <nav>
      <HomeOutline size={24} className="text-gray-700" />
      <HomeBold size={24} color="#2563EB" />
      <HomeBoldDuotone size={24} secondaryOpacity={0.6} />
      <BellBingBold size={24} className="text-amber-500" />
    </nav>
  );
}
```

---

## 6. Instalasi & Penggunaan: Package Laravel Blade

### Instalasi Lokal via Composer

Tambahkan konfigurasi `path` repository pada file `composer.json` project Laravel Anda:

```json
"repositories": [
    {
        "type": "path",
        "url": "/path/to/icon-by-solar/packages/laravel-blade"
    }
]
```

Kemudian jalankan:

```bash
composer require icon-by-solar/blade
```

### Target Penggunaan Blade

Gunakan komponen `<x-icon-by-solar>` atau `<x-solar-icon>` pada template Blade Anda:

```blade
{{-- 1. Ikon Outline (Default) --}}
<x-icon-by-solar
    name="home"
    variant="outline"
    size="24"
    class="text-blue-600"
/>

{{-- 2. Ikon Bold dengan Ukuran dan Warna Kustom --}}
<x-icon-by-solar
    name="bell-bing"
    variant="bold"
    size="32"
    color="#0342C9"
/>

{{-- 3. Ikon Bold Duotone dengan Pewarnaan Tailwind --}}
<x-icon-by-solar
    name="chat-square-arrow"
    variant="bold-duotone"
    size="24"
    class="text-emerald-500"
/>
```

---

## 7. Pengaturan Ukuran, Warna, Class CSS, & Atribut SVG

### Pewarnaan Dinamis (Tailwind CSS Ready)
Secara default, seluruh ikon dirender dengan `color="currentColor"`. Hal ini memungkinkan class utilitas Tailwind CSS seperti `text-blue-600`, `hover:text-blue-800`, atau `dark:text-white` mengontrol warna ikon secara langsung tanpa konfigurasi tambahan.

Jika Anda ingin mempertahankan warna asli hasil ekspor Figma (`#1C274C` / `white`), atur prop `color="original"`.

### Meneruskan Atribut HTML
Seluruh atribut HTML tambahan (`id`, `aria-label`, `data-testid`, `style`, `role`) akan digabungkan secara otomatis ke elemen `<svg>` root:

```blade
<x-icon-by-solar
    name="shield-check"
    size="24"
    id="security-badge"
    aria-label="Akun terverifikasi"
    data-testid="verified-icon"
/>
```

---

## 8. Menggunakan Ikon Duotone

Ikon pada gaya `bold-duotone` memiliki dua lapisan visual:
1. **Lapisan Primer:** Elemen utama dengan opasitas penuh (100%).
2. **Lapisan Sekunder:** Elemen latar atau bayangan dengan opasitas parsial asli (biasanya `0.5`).

### Kustomisasi Duotone di React:
```tsx
<SolarIcon
  name="shield-check"
  variant="bold-duotone"
  size={28}
  color="#1E40AF"               // Warna lapisan primer
  secondaryColor="#93C5FD"      // Warna kustom lapisan sekunder
  secondaryOpacity={0.7}        // Override nilai opasitas
/>
```

### Kustomisasi Duotone di Laravel Blade:
```blade
<x-icon-by-solar
    name="shield-check"
    variant="bold-duotone"
    size="28"
    color="#1E40AF"
    secondary-color="#93C5FD"
    secondary-opacity="0.7"
/>
```

---

## 9. Menemukan Nama Ikon Melalui Katalog

Katalog visual mandiri tersedia di:  
[`catalog/catalog.html`](file:///Users/macbookpro/Documents/DEVELOPER/icon-by-solar/catalog/catalog.html)

**Fitur Katalog:**
- **Pencarian Instan:** Cari berdasarkan nama kanonis (misal: `home`, `chat-square-arrow`), kategori, maupun nama file asli.
- **Filter Style:** Filter berdasarkan `Bold`, `Bold Duotone`, `Outline`, atau tampilkan semua.
- **Filter Kategori:** Telusuri 37 kategori ikon secara terorganisir.
- **Modal Snippet Generator:** Klik pada kartu ikon mana saja untuk melihat:
  - Nama kanonis.
  - Cuplikan kode React JSX yang siap disalin.
  - Cuplikan kode Laravel Blade yang siap disalin.
- **Bekerja Offline:** Berjalan langsung di browser tanpa server backend (cukup klik dua kali `catalog.html` atau buka via `file://`).

---

## 10. Penanganan Nama Ikon yang Tidak Ditemukan

Jika pengguna memasukkan nama ikon yang tidak terdaftar:
- **Di React:** 
  - Pada mode pengembangan (`development`), peringatan konsol yang jelas dicetak: `[Icon by Solar] Icon "foo" with variant "bar" was not found.`
  - Mengembalikan fallback yang aman (dapat dikustomisasi via prop `fallback={<span />}`).
- **Di Laravel Blade:**
  - Mengeluarkan komentar HTML: `<!-- [Icon by Solar] Icon "foo" (bar) not found -->` dan kotak dashed SVG minimal agar layout aplikasi tidak rusak.
  - Jika `config('icon-by-solar.throw_on_missing')` disetel `true`, package akan melempar `\InvalidArgumentException`.

---

## 11. Build, Test, & Validasi

### Menjalankan Test Suite & Integration Tests Lengkap
Jalankan runner pengujian terintegrasi dari root repository:

```bash
./tests/run_all_tests.sh
```

Pengujian ini mengeksekusi **8 tahap validasi komprehensif**:
1. **Validasi Integritas SVG:** Memeriksa seluruh 3.738 file SVG untuk parsing XML yang valid dan atribut `viewBox="0 0 24 24"`.
2. **Validasi Manifest:** Memeriksa bahwa 1.246 ikon kanonis memiliki 3 gaya lengkap dan file fisik ada di disk.
3. **Validasi Katalog:** Memeriksa sinkronisasi katalog dan ketiadaan error visual.
4. **Validasi UI Katalog & Kontras Outline:** Memeriksa 37 section kategori, navigasi jump, dan kontras preview Outline.
5. **Unit Test Package React:** Memvalidasi render universal component, duotone opacity, selective import, dan fallback.
6. **Unit Test Package Blade:** Memvalidasi `SvgResolver`, normalisasi spasi ganda, penggantian warna, dan atribut merging.
7. **Consumer Integration Test (React):** Memvalidasi instalasi path lokal, bundling Vite, dan SSR render dari project terpisah.
8. **Consumer Integration Test (Laravel Blade):** Memvalidasi instalasi Composer path repository, autoloading, ServiceProvider, dan Blade compiler dari project terpisah.

> 📄 **Laporan Lengkap:** Lihat dokumentasi detail di [`catalog/INTEGRATION_TEST_REPORT.md`](file:///Users/macbookpro/Documents/DEVELOPER/icon-by-solar/catalog/INTEGRATION_TEST_REPORT.md).

### Membangun Ulang Package React
```bash
npm --prefix packages/react run build
```

---

## 12. Cara Memperbarui Manifest & Katalog

Jika Anda menambahkan SVG baru ke dalam direktori `Bold/`, `Bold Duotone/`, atau `Outline/`, jalankan script regenerasi:

```bash
# 1. Regenerasi manifest.json terpusat
python3 tools/generate_manifest.py

# 2. Perbarui katalog preview, inventory.json, dan validation.md
python3 tools/build_catalog.py

# 3. Bangun ulang package React
python3 tools/build_react_package.py
npm --prefix packages/react run build

# 4. Salin manifest terbaru ke package Blade
cp manifest.json packages/laravel-blade/resources/manifest.json

# 5. Jalankan validasi
./tests/run_all_tests.sh
```

---

## 13. Panduan Kontribusi & Pemeliharaan

1. **Prinsip Utama:** Jangan pernah memodifikasi, menghapus, atau menimpa file SVG sumber asli di `Bold/`, `Bold Duotone/`, dan `Outline/`.
2. **Penanganan Anomali Nama:** Jika ditemukan inkonsistensi penamaan nama file (seperti spasi ganda atau typo pada aset sumber), selesaikan melalui metadata alias pada `tools/generate_manifest.py` tanpa mengubah nama file asli.
3. **Resolusi Tabrakan Kategori:** Jika ada file dengan nama yang sama di dua kategori berbeda, tetapkan slug primer dan slug sekunder yang didisambiguasi (misal: `home` untuk `Essentional, UI` dan `home-building` untuk `Building, Infrastructure`).

---

## 14. Informasi Distribusi & Konfigurasi Repository

- **Status Publikasi:** Package ini dirancang siap pakai untuk monorepo / repositori lokal (path repository). Package **belum dipublikasikan** ke npm public registry atau Packagist publik.
- **Persiapan Publikasi Publik:** Sebelum menerbitkan package ke publik, pastikan hak cipta atribusi CC BY 4.0 dicantumkan dengan jelas sesuai panduan di bawah.

---

## 15. Identitas & Credit Title

Nama resmi dan credit title library ini:

**Icon by Solar**

Credit title ini wajib dicantumkan pada seluruh dokumentasi turunan, metadata package, dan informasi atribusi.

---

## 16. Lisensi & Atribusi

Proyek ini menggunakan model lisensi ganda yang transparan:

1. **Aset Gambar / Desain Ikon SVG:**  
   Dibuat oleh **480 Design** (*Solar Icon Set*) dan dilisensikan di bawah lisensi **Creative Commons Attribution 4.0 International (CC BY 4.0)**.  
   Anda bebas menggunakan, memodifikasi, dan mengintegrasikannya untuk keperluan personal maupun komersial dengan tetap memberikan atribusi kepada 480 Design.

2. **Kode Sumber Library & Tooling:**  
   Kode komponen React, integrasi Laravel Blade, script generator, dan test suite dilisensikan di bawah **MIT License**.

> *Disclaimer:* Proyek ini adalah implementasi library komunitas independen dan **bukan merupakan produk resmi atau terafiliasi secara langsung dengan 480 Design**.
