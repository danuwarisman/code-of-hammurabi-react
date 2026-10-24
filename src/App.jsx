import { useState } from 'react';
import './css/bootstrap.min.css';
import './css/theme.css';

import Navbar from './components/Navbar';
import HeroStele from './components/HeroStele';
import CasteOverview from './components/CasteOverview';
import JudgeSimulator from './components/JudgeSimulator';
import LawForm from './components/LawForm';
import LawList from './components/LawList';
import ScrollFeatures from './components/ScrollFeatures';

// 4 pasal monumental bersejarah sebagai initial state
const INITIAL_LAWS = [
  {
    id: 1,
    pasalNum: 196,
    caste: 'Awilum',
    title: 'Hukum Mata Ganti Mata (Lex Talionis)',
    text: 'If a man destroy the eye of a man (gentleman), they shall destroy his eye.',
    logic: 'Membatasi aksi balas dendam keluarga tanpa batas (blood feud) menjadi hukuman proporsional resmi antar-bangsawan.'
  },
  {
    id: 2,
    pasalNum: 23,
    caste: 'Mushkenum',
    title: 'Ganti Rugi oleh Kas Pemerintah Kota',
    text: 'If the brigand be not captured, the city and governor shall compensate him for whatever was lost.',
    logic: 'Konsep awal asuransi sosial negara: keamanan wilayah adalah tanggung jawab langsung pemerintah kota.'
  },
  {
    id: 3,
    pasalNum: 117,
    caste: 'Wardum',
    title: 'Batas Perbudakan Utang (3 Tahun)',
    text: 'For three years they shall work in the house of their master; in the fourth year they shall be given their freedom.',
    logic: 'Mencegah perbudakan permanen seumur hidup bagi warga Babilonia yang gagal melunasi utang komersial.'
  },
  {
    id: 4,
    pasalNum: 229,
    caste: 'Awilum',
    title: 'Tanggung Jawab Mutlak Arsitek & Tukang',
    text: 'If a builder build a house and the house collapse and cause the death of the owner, that builder shall be put to death.',
    logic: 'Perlindungan keselamatan konsumen konstruksi paling ketat di dunia kuno terhadap kelalaian fatal tukang bangunan.'
  }
];

export default function App() {
  const [laws, setLaws] = useState(INITIAL_LAWS);

  const handleAddLaw = (newLaw) => {
    setLaws((prev) => [newLaw, ...prev]);
  };

  const handleDeleteLaw = (id) => {
    setLaws((prev) => prev.filter((law) => law.id !== id));
  };

  const awilumCount = laws.filter((l) => l.caste === 'Awilum').length;
  const mushkenumCount = laws.filter((l) => l.caste === 'Mushkenum').length;
  const wardumCount = laws.filter((l) => l.caste === 'Wardum').length;

  return (
    <>
      <ScrollFeatures />
      <Navbar />

      <main className="py-5">
        <div className="container">
          <HeroStele />

          <CasteOverview
            total={laws.length}
            awilumCount={awilumCount}
            mushkenumCount={mushkenumCount}
            wardumCount={wardumCount}
          />

          <JudgeSimulator onAdoptVerdict={handleAddLaw} />

          <LawForm onAddLaw={handleAddLaw} />

          <LawList laws={laws} onDeleteLaw={handleDeleteLaw} />
        </div>
      </main>

      <footer className="site-footer py-4 mt-5 border-top border-secondary text-center small text-muted">
        <div className="container">
          <p className="mb-1 text-sandstone font-monospace">
            The Code of Hammurabi · Porting React + Vite · Arsitektur Komponen Modular
          </p>
          <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>
            Prasasti Diorit Hitam Abad ke-18 SM · R.F. Harper Translation &amp; Analisis Sosial Babilonia
          </p>
        </div>
      </footer>
    </>
  );
}