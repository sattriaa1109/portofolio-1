// ============================================================
// FILE: vite.config.js
// FUNGSI: Konfigurasi Vite (build tool). File ini dibaca
//         otomatis oleh Vite saat kamu menjalankan npm run dev.
// ============================================================

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})   