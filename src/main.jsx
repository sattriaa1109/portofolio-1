// ============================================================
// FILE: src/main.jsx
// FUNGSI: Entry point aplikasi React. File ini yang pertama
//         dijalankan oleh Vite. Tugasnya: "pasang" App ke HTML.
// ============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// createRoot: ambil elemen <div id="root"> dari index.html,
// lalu render komponen <App /> di dalamnya.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);