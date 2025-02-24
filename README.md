# PERTEMUAN 1 - PENGANTAR PEMROGRAMAN BERBASIS FRAMEWORK DAN REACTJS

> Nama: Fahridana Ahmad Rayyansyah
>
> Kelas: TI-3A
>
> Absen: 11

<hr />

## Praktikum 1: Menyiapkan Lingkungan Pengembangan

### Pertanyaan Praktikum 1

1. Jelaskan kegunaan masing-masing dari Git, VS Code dan NodeJS yang telah Anda install pada sesi praktikum ini! <br/>
   **Jawab**

    > #### Git
    >
    > Git adalah sistem kontrol versi (VCS) terdistribusi yang digunakan untuk melacak perubahan kode dalam pengembangan perangkat lunak. <br/> **Kegunaan utama:** <br/>
    >
    > - Versi Kontrol → Melacak setiap perubahan kode dan memungkinkan rollback ke versi sebelumnya.
    > - Kolaborasi Tim → Memungkinkan banyak pengembang bekerja pada satu proyek secara bersamaan tanpa konflik kode.
    > - Branching & Merging → Membantu dalam pengembangan fitur secara terpisah tanpa mengganggu kode utama.
    > - Integrasi dengan Platform → Bekerja dengan layanan seperti GitHub, GitLab, dan Bitbucket untuk penyimpanan dan kolaborasi.
    >
    > #### VSCode (Visual Studio Code)
    >
    > VS Code adalah code editor yang ringan dan kuat, dikembangkan oleh Microsoft, dengan dukungan banyak bahasa pemrograman.
    > **Kegunaan utama:**
    >
    > - Editing Kode dengan Fitur Pintar → Menyediakan fitur auto-complete, debugging, dan IntelliSense.
    > - Dukungan Ekstensi → Bisa diperluas dengan berbagai ekstensi seperti Prettier, ESLint, dan GitLens.
    > - Terminal Terintegrasi → Bisa menjalankan perintah terminal langsung dari dalam editor.
    > - Git Integration → Mempermudah commit, push, dan pull dari repositori Git langsung dari editor.
    > - Multi-language Support → Mendukung berbagai bahasa seperti JavaScript, Python, PHP, Go, dll.
    >
    > #### Node.js
    >
    > Node.js adalah runtime JavaScript yang berjalan di sisi server, dibangun di atas mesin V8 milik Google Chrome.
    > **Kegunaan utama:**
    >
    > - Menjalankan JavaScript di Server → Memungkinkan JavaScript berjalan di backend, bukan hanya di browser.
    > - Membangun API & Web Server → Mempermudah pengembangan API RESTful dengan framework seperti Express.js.
    > - Asynchronous & Event-Driven → Cocok untuk aplikasi real-time seperti chat dan streaming.
    > - NPM (Node Package Manager) → Memudahkan manajemen dependensi dan pustaka pihak ketiga.
    > - Full-Stack JavaScript → Bisa digunakan untuk pengembangan full-stack dengan kombinasi frontend (React, Vue, Next.js) dan backend (Express, NestJS).

2. Buktikan dengan screenshoot yang menunjukkan bahwa masing-masing tools tersebut telah berhasil terinstall di perangkat Anda! <br/>
   **Jawab:**
    > ![alt text](screenshot/1.png)

## Praktikum 2: Membuat Proyek Pertama React Menggunakan Next.js

### pertanyaan Praktikum 2

1. Pada Langkah ke-2, setelah membuat proyek baru menggunakan Next.js, terdapat beberapa istilah yang muncul. Jelaskan istilah tersebut, TypeScript, ESLint, Tailwind CSS, App Router, Import alias, App router, dan Turbopack! <br/>
   **Jawab**

    > #### Typescript
    >
    > TypeScript adalah superset dari JavaScript yang menambahkan static typing. Ini membantu dalam pengembangan dengan memberikan autocomplete, type safety, dan error checking sebelum kode dijalankan.
    >
    > #### ESLint
    >
    > ESLint adalah alat linter untuk JavaScript dan TypeScript yang membantu menjaga konsistensi kode dengan mendeteksi dan memperbaiki potensi kesalahan serta mengikuti aturan coding standar.
    >
    > #### Tailwind CSS
    >
    > Tailwind CSS adalah framework CSS berbasis utility-first yang memungkinkan pengembangan UI dengan cepat tanpa perlu menulis banyak file CSS terpisah.
    >
    > #### App Router
    >
    > App Router adalah sistem routing baru di Next.js yang menggantikan Pages Router. Ini berbasis server components dan menggunakan sistem file di dalam folder `/app`.
    >
    > #### Import Alias
    >
    > Import alias memungkinkan penulisan path yang lebih pendek dalam impor file, menghindari path relatif yang panjang. <br/> **Contoh tanpa alias:**
    >
    > ```tsx
    > import Button from "../../components/ui/Button";
    > ```
    >
    > **Dengan import alias (@/) dalam tsconfig.json atau jsconfig.json:**
    >
    > ```tsx
    > import Button from "@/components/ui/Button";
    > ```
    >
    > #### Turbopack
    >
    > Turbopack adalah bundler baru dalam Next.js yang menggantikan Webpack dengan performa lebih cepat. Dibangun menggunakan **Rust**, ini memberikan kompilasi dan **HMR (Hot Module Replacement)** yang lebih efisien.

2. Apa saja kegunaan folder dan file yang ada pada struktur proyek React yang tampil pada gambar pada tahap percobaan ke-3! <br/>
   **Jawab**

    > #### 1. `.next` (Folder Build)
    >
    > Folder ini dibuat secara otomatis saat menjalankan next build atau next dev. Folder ini Menyimpan hasil **kompilasi** dan **caching** untuk mempercepat waktu build dan runtime.
    >
    > #### 2. `.node_modules` (Folder Dependensi)
    >
    > Berisi semua library dan package yang diinstal dengan npm atau yarn.
    >
    > #### 3. `public` (Folder Aset Statis)
    >
    > Tempat menyimpan gambar, favicon, font, atau file statis lainnya yang bisa diakses langsung di browser.
    >
    > #### 4. `src` (Folder Sumber Kode)
    >
    > Digunakan untuk menyimpan kode utama proyek.
    >
    > #### 5. `.gitignore`
    >
    > Menentukan file/folder yang tidak boleh di-track oleh Git.
    >
    > #### 6. `package-lock.json`
    >
    > Berisi daftar versi spesifik dari semua dependensi yang diinstal dan juga Membantu memastikan proyek tetap konsisten meskipun dijalankan di komputer berbeda.
    >
    > #### 7. `package.json`
    >
    > File utama untuk mengatur proyek Node.js. File ini Menyimpan informasi proyek, dependensi, dan skrip yang dapat dijalankan.
    >
    > #### 8. `tsconfig.json`
    >
    > Konfigurasi untuk TypeScript dalam proyek Next.js. File ini mengatur bagaimana TypeScript akan dikompilasi.
    >
    > #### 9. `eslint.config.mjs`
    >
    > File untuk konfigurasi ESLint, yang membantu memastikan kode tetap rapi dan bebas error.
    >
    > #### 10. `postcss.config.mjs`
    >
    > Konfigurasi untuk PostCSS, yang sering digunakan bersama Tailwind CSS.
    >
    > #### 11. `next-env.d.ts`
    >
    > File khusus untuk TypeScript, yang membantu Next.js mengenali tipe data default.
    >
    > #### 12. `next.config.ts`
    >
    > Konfigurasi utama untuk Next.js. Bisa digunakan untuk mengaktifkan fitur experimental, redirect, rewrites, dsb.
    >
    > #### 13. `tailwind.config.ts`
    >
    > Konfigurasi untuk Tailwind CSS dalam proyek.

3. Buktikan dengan screenshoot yang menunjukkan bahwa tahapan percobaan di atas telah berhasil Anda lakukan! <br/>
   **Jawab**
    > #### Inisialisasi Project
    >
    > ![alt text](screenshot/2.png)
    >
    > #### Menjalankan Program
    >
    > ![alt text](screenshot/3.png)
    >
    > ![alt text](screenshot/4.png)
