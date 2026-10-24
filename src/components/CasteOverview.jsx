export default function CasteOverview({ total, awilumCount, mushkenumCount, wardumCount }) {
  return (
    <section id="kasta" className="mb-5">
      <div className="text-center mb-4">
        <h2 className="text-gold">Tiga Kasta Sosial dalam Hukum Hammurabi</h2>
        <p className="text-muted reading-column mx-auto mb-0" style={{ maxWidth: '640px' }}>
          Sanksi pidana dan ganti rugi perdata sepenuhnya ditentukan oleh hierarki status sosial di Babilonia.
        </p>
      </div>

      <div className="row g-4 mb-3">
        {/* Awilum */}
        <div className="col-md-4">
          <div className="card-babylon h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="cylinder-seal">I</span>
                <div>
                  <h3 className="h5 mb-0 text-gold">AWILUM</h3>
                  <small className="text-muted">Bangsawan Merdeka</small>
                </div>
              </div>
              <span className="badge bg-dark border border-warning text-gold font-monospace">{awilumCount} Titah</span>
            </div>
            <p className="small text-secondary mb-0">
              Kelas tertinggi. Berlaku asas <em>Lex Talionis</em> fisik mutlak: mata ganti mata, patah tulang ganti patah tulang.
            </p>
          </div>
        </div>

        {/* Mushkenum */}
        <div className="col-md-4">
          <div className="card-babylon h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="cylinder-seal">II</span>
                <div>
                  <h3 className="h5 mb-0 text-lapis">MUSHKENUM</h3>
                  <small className="text-muted">Rakyat Biasa</small>
                </div>
              </div>
              <span className="badge bg-dark border border-secondary text-light font-monospace">{mushkenumCount} Titah</span>
            </div>
            <p className="small text-secondary mb-0">
              Warga merdeka kelas bawah dan pengrajin. Kerusakan fisik diselesaikan lewat kompensasi tunai denda perak.
            </p>
          </div>
        </div>

        {/* Wardum */}
        <div className="col-md-4">
          <div className="card-babylon h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="d-flex align-items-center gap-2">
                <span className="cylinder-seal">III</span>
                <div>
                  <h3 className="h5 mb-0 text-clay">WARDUM</h3>
                  <small className="text-muted">Budak</small>
                </div>
              </div>
              <span className="badge bg-dark border border-secondary text-muted font-monospace">{wardumCount} Titah</span>
            </div>
            <p className="small text-secondary mb-0">
              Budak tawanan atau jeratan utang. Diperlakukan sebagai aset modal; ganti rugi fisik diserahkan kepada majikannya.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <span className="text-gold font-monospace small">Total Titah Terdata di Koleksi: <strong>{total}</strong></span>
      </div>
    </section>
  );
}