# 🤖 AI Coding Agent Guidelines (Nano.js)

Dokumen ini berisi standar kerja & aturan wajib bagi AI Agent di repository ini.

---

## 1. Project Context & Environment
- **Environment:** GitHub Repository + Cloudflare Stack (Pages, Workers, D1, R2).
- **Project Type:** Personal Developer/Designer Portfolio (Astro + React Islands + Tailwind CSS).
- **Runtime:** Node.js 20+, Wrangler CLI untuk deploy & manajemen resource Cloudflare.
- Gunakan environment variables (`.dev.vars` untuk lokal, `wrangler secret` untuk produksi) untuk semua kredensial. Jangan pernah menyimpan API key, D1 binding ID, R2 token, atau email service key langsung di dalam kode atau `wrangler.toml` yang di-commit ke publik.

---

## 2. Code Quality & Security
- Tulis kode modular: pisahkan komponen UI (Astro/React), Worker functions (`/functions`), dan skema database (`/db/schema.sql`).
- Gunakan TypeScript untuk seluruh Worker/Functions.
- Semua input dari form (contact form, guestbook) **wajib** disanitasi dan divalidasi sebelum ditulis ke D1 (cegah SQL Injection & XSS). Gunakan prepared statements bawaan D1 (`.prepare().bind()`), jangan pernah melakukan string concatenation pada query SQL.
- Aktifkan proteksi anti-spam (Cloudflare Turnstile) pada setiap form publik.
- Sebelum menyelesaikan tugas, pastikan:
  - `npm run lint` bebas error.
  - `npm run build` berhasil tanpa warning fatal.
  - Tidak ada secret/API key yang ter-expose di kode atau log.

---

## 3. Git Workflow & Mandatory CI/CD Trigger (WAJIB)
1. **Granular Commit:** Lakukan `git commit` untuk setiap 1 tugas/fitur kecil yang selesai dikerjakan. Gunakan konvensi pesan commit (`feat: ...`, `fix: ...`, `chore: ...`, `docs: ...`).
2. **Migrasi Database:** Jika ada perubahan skema, jalankan dan sertakan file migrasi baru di `/db/migrations/`, lalu terapkan dengan `wrangler d1 migrations apply`.
3. **Auto Push:** Setelah komit berhasil dan dipastikan bebas error (lint + build lolos), kamu **WAJIB** menjalankan perintah:
   `git push origin main`

   > ⚠️ **Catatan Penting:** Perintah `git push` ini adalah pemicu (*trigger*) otomatis untuk GitHub Actions, yang akan menjalankan build → deploy ke Cloudflare Pages (`wrangler pages deploy`) dan menyinkronkan Worker/D1/R2 bindings secara otomatis.

---

## 4. Restrictions (Yang Dilarang)
- ❌ Dilarang melakukan `git push` jika build/lint masih bermasalah/error.
- ❌ Dilarang menjalankan perintah destruktif (`wrangler d1 execute --command "DROP TABLE..."`, `rm -rf`, penghapusan bucket R2, dll) tanpa persetujuan eksplisit.
- ❌ Dilarang mengubah struktur folder utama (`/src`, `/functions`, `/db`) atau `wrangler.toml` tanpa instruksi spesifik.
- ❌ Dilarang menyimpan kredensial (D1 binding, R2 access key, Turnstile secret, email API key) di kode maupun histori Git.
- ❌ Dilarang mengubah skema tabel D1 yang sudah ada tanpa membuat file migrasi baru.
