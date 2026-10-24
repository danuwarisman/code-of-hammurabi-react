export default function HeroStele() {
  return (
    <section id="beranda" className="stele-frame text-center mb-5">
      <div className="stele-relief mx-auto mb-4" style={{ maxWidth: '680px' }}>
        <svg viewBox="0 0 500 180" width="100%" height="auto" aria-hidden="true" style={{ maxHeight: '160px' }}>
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5eedf" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#c8a24a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#73541b" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="480" height="160" rx="20" fill="#1b1a19" stroke="#c8a24a" strokeWidth="1.5" strokeDasharray="4 2"/>
          <circle cx="250" cy="50" r="24" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" />
          <path d="M 250 16 L 250 84 M 216 50 L 284 50 M 226 26 L 274 74 M 226 74 L 274 26" stroke="#c8a24a" strokeWidth="1.5" />
          <path d="M 330 140 L 330 70 L 370 70 L 370 140 Z" fill="#2d2925" stroke="#c8a24a" strokeWidth="1.5" />
          <circle cx="350" cy="55" r="12" fill="#c8a24a" />
          <path d="M 320 85 Q 290 85 270 95" stroke="#c8a24a" strokeWidth="2" fill="none" />
          <circle cx="265" cy="95" r="6" stroke="#e6c875" strokeWidth="1.5" fill="none" />
          <line x1="265" y1="80" x2="265" y2="110" stroke="#e6c875" strokeWidth="2" />
          <path d="M 170 140 L 170 85 L 150 85 L 150 140 Z" fill="#2d2925" stroke="#c8a24a" strokeWidth="1.5" />
          <circle cx="160" cy="70" r="11" fill="#c8a24a" />
          <path d="M 165 92 L 200 95 L 245 95" stroke="#c8a24a" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="250" y="155" textAnchor="middle" fill="#c9bfae" fontFamily="'Cinzel', serif" fontSize="11" letterSpacing="3">
            DINAT MĪŠARIM ŠA ḪAMMURABI ŠARRUM
          </text>
        </svg>
        <p className="small text-gold mb-0 mt-2 font-monospace">
          Bas-relief Puncak Stele: Hammurabi Menerima Tongkat &amp; Cincin Keadilan dari Dewa Shamash
        </p>
      </div>

      <h1 className="display-5 text-gold mb-3">KODE HAMMURABI</h1>
      <p className="lead text-sandstone reading-column mx-auto mb-4" style={{ maxWidth: '720px' }}>
        Monolit batu diorit hitam setinggi 2,25 meter dari abad ke-18 SM. Memuat 282 klausul hukum tertulis terlengkap dari zaman kuno yang mengatur peradilan, perdagangan, keluarga, dan pertanggungjawaban sosial di Babilonia.
      </p>

      <div className="row g-3 justify-content-center mt-2 pt-3 border-top border-secondary reading-column mx-auto" style={{ maxWidth: '680px' }}>
        <div className="col-4">
          <span className="d-block small text-muted text-uppercase">Tahun Terbit</span>
          <strong className="text-sandstone font-monospace">k. 1750 SM</strong>
        </div>
        <div className="col-4">
          <span className="d-block small text-muted text-uppercase">Material</span>
          <strong className="text-sandstone">Diorit Hitam</strong>
        </div>
        <div className="col-4">
          <span className="d-block small text-muted text-uppercase">Lokasi Fisik</span>
          <strong className="text-sandstone">Louvre, Paris</strong>
        </div>
      </div>
    </section>
  );
}