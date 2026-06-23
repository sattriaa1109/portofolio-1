import simpegImg from "../assets/simpeg.png";

export const profileData = {
  name: "Satria Pamungkas",
  role: "Backend Engineer",
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
  {
    id: 7,
    name: "Flutter",
    level: 65,
    icon: "SiFlutter",
    description: "Cross-platform mobile development",
    color: "#54C5F8",
  },
  {
    id: 8,
    name: "Swift",
    level: 40,
    icon: "SiSwift",
    description: "iOS development, SwiftUI",
    color: "#F05138",
  },
  {
    id: 9,
    name: "Kotlin",
    level: 45,
    icon: "SiKotlin",
    description: "Android development, JVM",
    color: "#7F52FF",
  },
];

export const softSkills = [
  { id: 1, name: "Problem Solving" },
  { id: 2, name: "Kerja Tim" },
  { id: 3, name: "Manajemen Waktu" },
  { id: 4, name: "Cepat Belajar" },
  { id: 5, name: "Komunikasi" },
  { id: 6, name: "Analitis" },
];

export const educationData = [
  {
    id: 1,
    school: "SMK Wikrama Bogor",
    major: "Rekayasa Perangkat Lunak (RPL)",
    year: "2024 – Sekarang",
    description:
      "Mempelajari dasar-dasar pemrograman, web development, basis data, dan praktikum pengembangan perangkat lunak secara menyeluruh.",
    current: true,
  },
  {
    id: 2,
    school: "SMP Megamendung 1",
    major: "Ilmu Pengetahuan Umum",
    year: "2021 – 2024",
    description:
      "Lulus dengan predikat baik. Mulai tertarik dengan dunia komputer dan teknologi.",
    current: false,
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Backend dengan Golang (Sewa Mobil)",
    description:
      "Membangun RESTful API untuk sistem Sewa Mobil (Rent Car) menggunakan Golang dan framework Gin. Dilengkapi autentikasi JWT dan koneksi ke PostgreSQL.",
    tech: ["Golang", "Gin", "PostgreSQL", "JWT"],
    github: "https://github.com/sattriaa1109/golangbe.git",
    demo: null,
    color: "#00ACD7",
    comingSoon: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Backend dengan Golang (To-Do)",
    description:
      "Saya sedang mengembangkan API backend untuk aplikasi To-Do dengan memanfaatkan keunggulan bahasa pemrograman Go agar sistem yang dihasilkan memiliki performa yang tinggi, responsif, dan manajemen data yang sangat efisien.",
    tech: ["Golang", "Gin", "PostgreSQL"],
    github: "https://github.com/sattriaa1109/todo-app.git",
    demo: null,
    color: "#339933",
    comingSoon: true,
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Website Sistem Managemen Pegawai",
    description:
      "Website Sistem Managemen Pegawai menggunakan ReactJS untuk frontend dan juga menggunakan FiberGO untuk backend. menampilkan absen karyawan sampai dengan chart penggajian pegawai, absen menggunakan qr yang dapat di scan dan absen secara online yang mendapatkan lokasi terbaru karyawan",
    tech: ["Golang", "Fiber", "ReactJS", "Postgresql"],
    github: "https://github.com/sattriaa1109/simpeg-be",
    demo: null,
    color: "#0175C2",
    comingSoon: true,
    image: simpegImg,
  },
  {
    id: 4,
    title: "Waktu Sholat Web App",
    description: "Aplikasi pengingat jadwal sholat interaktif berbasis web. Menampilkan jadwal sholat secara akurat untuk berbagai wilayah di Indonesia. Dilengkapi dengan desain responsif dan elegan.",
    tech: ["React.js", "Vite", "API", "JavaScript"],
    github: "https://github.com/sattriaa1109/waktu-sholat",
    demo: "https://waktu-sholat-blue.vercel.app/",
    color: "#22d3ee",
    comingSoon: false,
    image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=2076&auto=format&fit=crop",
  },
];