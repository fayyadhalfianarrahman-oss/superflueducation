
import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ChatBot from './components/ChatBot';
import { ContentSection } from './types';

const sections: ContentSection[] = [
  {
    id: 'apa-itu',
    subtitle: 'Pengenalan Dasar',
    title: 'Apa Itu Super Flu?',
    icon: '🧬',
    content: `
      <p>Super Flu bukanlah istilah medis resmi, namun sering digunakan untuk menggambarkan strain virus <strong>Influenza</strong> yang sangat menular dan mematikan, seperti H5N1 atau varian pandemi lainnya.</p>
      <p>Berbeda dengan flu musiman biasa, Super Flu memiliki kemampuan untuk melewati sistem imun manusia dengan lebih efektif, seringkali menyebabkan komplikasi pernapasan berat yang dapat mengancam jiwa dalam waktu singkat.</p>
    `,
    image: 'Microscopic view of a dangerous glowing influenza virus, teal and blue lighting, hyper-realistic scientific visualization'
  },
  {
    id: 'mengapa',
    subtitle: 'Asal-Usul & Evolusi',
    title: 'Kenapa Ada Super Flu?',
    icon: '🔬',
    content: `
      <p>Virus influenza adalah ahli dalam bermutasi. Fenomena ini terjadi melalui dua cara utama:</p>
      <ul class="list-disc ml-5 space-y-2 mt-4">
        <li><strong>Antigenic Drift:</strong> Mutasi kecil terus-menerus yang membuat virus sulit dikenali imun tubuh.</li>
        <li><strong>Antigenic Shift:</strong> Perubahan drastis di mana virus flu hewan (seperti dari burung atau babi) bertukar materi genetik dengan virus flu manusia, menciptakan strain baru yang benar-benar asing bagi kita.</li>
      </ul>
      <p class="mt-4">Interaksi yang terlalu dekat antara manusia dan ternak di lingkungan yang tidak higienis mempercepat risiko terciptanya strain "Super" ini.</p>
    `,
    image: 'DNA sequence mutation into a virus structure, laboratory setting, minimalist medical science aesthetic'
  },
  {
    id: 'target',
    subtitle: 'Zoonosis & Penularan',
    title: 'Siapa yang Diserang?',
    icon: '🌍',
    content: `
      <p>Super Flu bersifat <strong>Zoonotik</strong>, artinya dapat berpindah dari hewan ke manusia. Target utamanya meliputi:</p>
      <ul class="list-disc ml-5 space-y-2 mt-4">
        <li><strong>Hewan:</strong> Terutama unggas liar, ayam ternak, dan babi yang bertindak sebagai "wadah pencampur" gen virus.</li>
        <li><strong>Manusia:</strong> Semua golongan usia rentan, namun mereka dengan sistem imun lemah, lansia, dan pekerja di industri peternakan memiliki risiko tertinggi.</li>
      </ul>
      <p class="mt-4">Penularan terjadi melalui kontak langsung dengan cairan tubuh hewan yang terinfeksi atau lewat droplet udara (batuk/bersin).</p>
    `,
    image: 'A stylized conceptual map showing transmission from farm birds to a human silhouette, clean infographic style'
  },
  {
    id: 'dampak',
    subtitle: 'Konsekuensi Global',
    title: 'Dampak Super Flu',
    icon: '📉',
    content: `
      <p>Dampaknya tidak hanya pada kesehatan fisik, tetapi meluas ke berbagai aspek kehidupan:</p>
      <ul class="list-decimal ml-5 space-y-2 mt-4">
        <li><strong>Kesehatan:</strong> Badai sitokin (reaksi imun berlebih) yang menyebabkan kegagalan organ.</li>
        <li><strong>Ekonomi:</strong> Penurunan produktivitas global dan guncangan pada pasar pangan akibat pemusnahan ternak massal.</li>
        <li><strong>Psikososial:</strong> Kecemasan publik dan beban berat pada sistem rumah sakit.</li>
      </ul>
    `,
    image: 'A minimalist illustration of an empty city street or a futuristic calm hospital hallway, emphasizing public impact'
  },
  {
    id: 'penanganan',
    subtitle: 'Pencegahan & Aksi',
    title: 'Bagaimana Penanganannya?',
    icon: '🛡️',
    content: `
      <p>Kunci menghadapi Super Flu adalah persiapan dan kebersihan. Langkah konkret yang bisa diambil:</p>
      <ul class="list-disc ml-5 space-y-2 mt-4">
        <li><strong>Vaksinasi:</strong> Mendapatkan vaksin flu tahunan untuk memperkuat pertahanan basal.</li>
        <li><strong>Higiene:</strong> Mencuci tangan secara rutin dengan sabun dan menjaga etika batuk.</li>
        <li><strong>Bio-security:</strong> Membatasi kontak dengan unggas liar dan memastikan daging dimasak hingga matang sempurna.</li>
        <li><strong>Pengobatan:</strong> Penggunaan obat antivirus (seperti Oseltamivir) segera setelah gejala muncul.</li>
      </ul>
    `,
    image: 'Modern vaccine vial and medical protection equipment, high-end studio lighting, minimalist medical branding'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 bg-teal-100 text-teal-700 rounded-full text-sm font-bold tracking-wide animate-fade-in">
            EDUKASI KESEHATAN GLOBAL
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 max-w-4xl leading-tight">
            Memahami Fenomena <span className="text-teal-600">Super Flu</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed">
            Panduan komprehensif untuk memahami evolusi virus influenza, dampaknya terhadap ekosistem, dan langkah proteksi diri yang paling efektif.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#apa-itu" className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200">
              Pelajari Sekarang
            </a>
            <a href="#asisten" className="bg-white text-teal-700 border-2 border-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-all">
              Tanya Asisten AI
            </a>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <main>
        {sections.map((sec, idx) => (
          <Section key={sec.id} data={sec} reverse={idx % 2 !== 0} />
        ))}
      </main>

      {/* Interactive AI Assistant */}
      <ChatBot />

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-teal-600 rounded flex items-center justify-center text-white font-bold text-xs">S</div>
              <span className="font-bold text-white text-lg">EduSense</span>
            </div>
            <p className="text-sm leading-relaxed">
              Platform edukasi terbuka untuk meningkatkan kesadaran publik mengenai risiko pandemi influenza di masa depan.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#apa-itu" className="hover:text-teal-400 transition-colors">Definisi</a></li>
              <li><a href="#mengapa" className="hover:text-teal-400 transition-colors">Evolusi</a></li>
              <li><a href="#target" className="hover:text-teal-400 transition-colors">Target</a></li>
              <li><a href="#dampak" className="hover:text-teal-400 transition-colors">Dampak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Sumber Data</h4>
            <p className="text-xs leading-relaxed">
              Informasi yang disajikan disarikan dari pedoman World Health Organization (WHO), CDC, dan studi virologi terkini. Selalu konsultasikan kondisi kesehatan Anda ke tenaga medis profesional.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} EduSense - Super Flu Awareness Project. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
