import { useState } from 'react';
import LawCard from './LawCard';

export default function LawList({ laws, onDeleteLaw }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCaste, setSelectedCaste] = useState('ALL');

  // Ketentuan 5c Tugas: Teks bila data array kosong
  if (laws.length === 0) {
    return (
      <section id="daftar-titah" className="card-babylon text-center py-5 mb-5">
        <span className="brand-seal-icon fs-1 d-block mb-2 text-muted">∅</span>
        <h3 className="h5 text-gold font-monospace">Belum ada data titah hukum</h3>
        <p className="text-secondary small mb-0">
          Semua pasal pada prasasti telah dihapus. Gunakan formulir atau simulator di atas untuk memahat titah baru.
        </p>
      </section>
    );
  }

  // Filter pencarian dan kasta
  const filteredLaws = laws.filter((law) => {
    const matchesCaste = selectedCaste === 'ALL' || law.caste.toUpperCase() === selectedCaste.toUpperCase();
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      query === '' ||
      law.title.toLowerCase().includes(query) ||
      law.text.toLowerCase().includes(query) ||
      law.logic.toLowerCase().includes(query) ||
      String(law.pasalNum).includes(query);

    return matchesCaste && matchesQuery;
  });

  return (
    <section id="daftar-titah" className="mb-5">
      <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3 flex-wrap gap-2">
        <div>
          <h2 className="text-gold mb-1">Daftar Titah Monolit Terkurasi</h2>
          <p className="text-muted mb-0">
            Koleksi hukum yang tersimpan di dalam state aplikasi ({laws.length} pasal terdata).
          </p>
        </div>
      </div>

      {/* Toolbar Filter Cepat & Pencarian */}
      <div className="ux-reading-toolbar d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div className="d-flex align-items-center gap-2 flex-grow-1" style={{ minWidth: '240px' }}>
          <input
            type="search"
            className="form-control form-control-sm judge-select"
            placeholder="Cari kata kunci, topik, atau nomor pasal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Cari titah hukum"
          />
        </div>

        {/* Tab Filter Kasta */}
        <div className="d-flex flex-wrap gap-1 align-items-center">
          <span className="small text-gold font-monospace me-1">Kasta:</span>
          {['ALL', 'Awilum', 'Mushkenum', 'Wardum'].map((caste) => {
            const isActive = selectedCaste === caste;
            return (
              <button
                key={caste}
                type="button"
                onClick={() => setSelectedCaste(caste)}
                className={`btn btn-sm ${
                  isActive
                    ? 'btn-hammurabi-gold'
                    : 'btn-hammurabi-outline'
                } py-1 px-2`}
                style={{ fontSize: '0.8rem' }}
              >
                {caste === 'ALL' ? 'Semua' : caste}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bila hasil filter pencarian kosong */}
      {filteredLaws.length === 0 ? (
        <div className="card-babylon text-center py-4">
          <p className="text-muted mb-2">Tidak ditemukan titah hukum yang cocok dengan kata kunci atau filter yang dipilih.</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCaste('ALL');
            }}
            className="btn btn-sm btn-hammurabi-outline py-1 px-3"
          >
            Reset Filter Pencarian
          </button>
        </div>
      ) : (
        <div className="row g-4">
          {filteredLaws.map((law) => (
            <LawCard key={law.id} law={law} onDeleteLaw={onDeleteLaw} />
          ))}
        </div>
      )}
    </section>
  );
}