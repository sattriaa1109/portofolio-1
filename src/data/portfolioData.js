// ============================================================
// FILE: src/data/portfolioData.js
// FUNGSI: Menyimpan semua data konten portofolio di satu tempat.
//         Kalau mau update konten, cukup edit file ini saja!
// ============================================================

export const profileData = {
  name: "Satria Pamungkas",
  role: "Backend Developer",
  tagline: "Building robust systems from the server side — one API at a time.",
  email: "satlfc767@gmail.com",
  github: "https://github.com/sattriaa1109",
  linkedin: "https://www.linkedin.com/in/satriaaa-pamungkass-12a795335/",
  location: "Indonesia",
  bio: "Siswa SMK Kelas XI jurusan Rekayasa Perangkat Lunak yang passionate di bidang Backend Development. Saya senang membangun sistem yang efisien, skalabel, dan andal menggunakan Golang, Dart, dan Node.js.",
};

export const hardSkills = [
  {
    id: 1,
    name: "Golang",
    level: 80,
    icon: "SiGo",
    description: "Backend service, REST API, Goroutines",
    color: "#00ACD7",
  },
  {
    id: 2,
    name: "Node.js",
    level: 75,
    icon: "SiNodedotjs",
    description: "Express.js, REST API, NPM ecosystem",
    color: "#339933",
  },
  {
    id: 3,
    name: "Dart",
    level: 70,
    icon: "SiDart",
    description: "Flutter, OOP, Async programming",
    color: "#0175C2",
  },
  {
    id: 4,
    name: "PostgreSQL",
    level: 65,
    icon: "SiPostgresql",
    description: "Relational DB, Query, Indexing",
    color: "#336791",
  },
  {
    id: 5,
    name: "Docker",
    level: 55,
    icon: "SiDocker",
    description: "Containerization, Docker Compose",
    color: "#2496ED",
  },
  {
    id: 6,
    name: "Git & GitHub",
    level: 75,
    icon: "SiGit",
    description: "Version control, Branching, Pull Request",
    color: "#F05032",
  },
];

export const softSkills = [
  { id: 1, name: "Problem Solving", icon: "🧩" },
  { id: 2, name: "Kerja Tim", icon: "🤝" },
  { id: 3, name: "Manajemen Waktu", icon: "⏰" },
  { id: 4, name: "Cepat Belajar", icon: "📚" },
  { id: 5, name: "Komunikasi", icon: "💬" },
  { id: 6, name: "Analitis", icon: "🔍" },
];

export const educationData = [
  {
    id: 1,
    school: "SMK Wikrama Bogr",
    major: "Rekayasa Perangkat Lunak (RPL)",
    year: "2023 – Sekarang",
    description:
      "Mempelajari dasar-dasar pemrograman, web development, basis data, dan praktikum pengembangan perangkat lunak secara menyeluruh.",
    current: true,
  },
  {
    id: 2,
    school: "SMP Megamendung 1",
    major: "Ilmu Pengetahuan Umum",
    year: "2020 – 2023",
    description:
      "Lulus dengan predikat baik. Mulai tertarik dengan dunia komputer dan teknologi.",
    current: false,
  },
];

export const projectsData = [
  {
    id: 1,
    title: "REST API dengan Golang",
    description:
      "Membangun RESTful API untuk sistem manajemen tugas (To-Do App) menggunakan Golang dan framework Gin. Dilengkapi autentikasi JWT dan koneksi ke PostgreSQL.",
    tech: ["Golang", "Gin", "PostgreSQL", "JWT"],
    github: "https://github.com/usernamekamu/todo-api-golang",
    demo: null,
    color: "#00ACD7",
  },
  {
    id: 2,
    title: "Backend Node.js + Express",
    description:
      "API backend untuk aplikasi e-commerce sederhana menggunakan Node.js dan Express.js. Fitur meliputi autentikasi user, manajemen produk, dan keranjang belanja.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/usernamekamu/ecommerce-api-node",
    demo: null,
    color: "#339933",
  },
  {
    id: 3,
    title: "Aplikasi Mobile dengan Flutter/Dart",
    description:
      "Aplikasi catatan harian (diary app) yang dibuat menggunakan Flutter dan Dart. Memiliki fitur tambah, edit, hapus catatan, serta penyimpanan lokal menggunakan Hive.",
    tech: ["Dart", "Flutter", "Hive", "Provider"],
    github: "https://github.com/usernamekamu/diary-app-flutter",
    demo: null,
    color: "#0175C2",
  },
  {
    id: 4,
    title: "Waktu Sholat Web App",
    description: "Aplikasi pengingat jadwal sholat interaktif berbasis web. Menampilkan jadwal sholat secara akurat untuk berbagai wilayah di Indonesia. Dilengkapi dengan desain responsif dan elegan.",
    tech: ["React.js", "Vite", "API", "JavaScript"],
    github: "https://github.com/sattriaa1109/waktu-sholat",
    demo: "https://waktu-sholat-blue.vercel.app/",
    color: "#22d3ee",
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2076&auto=format&fit=crop",
  },
];