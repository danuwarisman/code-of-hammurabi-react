export default function Navbar() {
  return (
    <header className="site-header">
      <div className="nav-container">
        <a href="#beranda" className="brand-mark">
          <span className="brand-seal-icon" aria-hidden="true">𒀭</span>
          <span className="brand-text">KODE HAMMURABI</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi Utama">
          <a href="#beranda" className="active">Beranda</a>
          <a href="#kasta">Kasta Sosial</a>
          <a href="#pahat-titah">Pahat Titah Baru</a>
          <a href="#daftar-titah">Daftar Titah</a>
        </nav>
      </div>

      <div className="subnav-rail" aria-label="Jelajahi Topik Cepat">
        <div className="subnav-rail-inner">
          <span className="text-gold small fw-bold text-uppercase me-1">Kategori:</span>
          <span className="subnav-link active">1. Peradilan (1–5)</span>
          <span className="subnav-link">2. Pencurian (6–14)</span>
          <span className="subnav-link">4. Properti (21–25)</span>
          <span className="subnav-link">8. Dagang (100–126)</span>
          <span className="subnav-link">10. Pidana (194–233)</span>
        </div>
      </div>
    </header>
  );
}