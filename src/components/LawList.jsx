import LawCard from './LawCard';

export default function LawList({ laws, onDeleteLaw }) {
  // Ketentuan c: Teks bila data kosong
  if (laws.length === 0) {
    return (
      <section id="daftar-titah" className="card-babylon text-center py-5 mb-5">
        <span className="brand-seal-icon fs-1 d-block mb-2 text-muted">∅</span>
        <h3 className="h5 text-gold font-monospace">Belum ada data titah hukum</h3>
        <p className="text-secondary small mb-0">
          Semua pasal pada prasasti telah dihapus. Gunakan formulir di atas untuk memahat titah baru.
        </p>
      </section>
    );
  }

  // Ketentuan a: Render list dengan .map() dan key unik via komponen LawCard
  return (
    <section id="daftar-titah" className="mb-5">
      <div className="d-flex justify-content-between align-items-end mb-4 border-bottom border-secondary pb-3 flex-wrap gap-2">
        <div>
          <h2 className="text-gold mb-1">Daftar Titah Monolit Terkurasi</h2>
          <p className="text-muted mb-0">Koleksi hukum yang tersimpan di dalam state aplikasi ({laws.length} pasal).</p>
        </div>
      </div>

      <div className="row g-4">
        {laws.map((law) => (
          <LawCard key={law.id} law={law} onDeleteLaw={onDeleteLaw} />
        ))}
      </div>
    </section>
  );
}