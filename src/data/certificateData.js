import dartImg from '../assets/dart.png';
import gdgImg  from '../assets/gdg.png';
import jsImg   from '../assets/Js.png';
import webImg  from '../assets/web.png';

import cert1 from '../assets/MUHAMMAD NUR SATRIA PAMUNGKAS.pdf';
import cert2 from '../assets/sertifikat_course_123_4372458_301024085627.pdf';
import cert3 from '../assets/sertifikat_course_191_4372458_221225212314.pdf';
import cert4 from '../assets/sertifikat_course_256_4372458_050125175903.pdf';

export const certificates = [
  {
    id: 1,
    title: "GDG Certificate",
    issuer: "Google Developer Group",
    image: gdgImg,
    pdf:   cert1,
  },
  {
    id: 2,
    title: "JavaScript",
    issuer: "Course Certificate",
    image: jsImg,
    pdf:   cert2,
  },
  {
    id: 3,
    title: "Dart",
    issuer: "Course Certificate",
    image: dartImg,
    pdf:   cert3,
  },
  {
    id: 4,
    title: "Web Development",
    issuer: "Course Certificate",
    image: webImg,
    pdf:   cert4,
  },
];

// Ganti link ini saat CV sudah selesai
export const cvLink = "https://drive.google.com/uc?export=download&id=1yxncTAAR_zglowzOvzXVa3edAsIEudG7";
