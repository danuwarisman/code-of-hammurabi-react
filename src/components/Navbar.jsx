import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#beranda', label: 'Beranda' },
    { href: '#kasta', label: 'Kasta Sosial' },
    { href: '#simulator-hakim', label: 'Simulator Hakim' },
    { href: '#pahat-titah', label: 'Pahat Titah Baru' },
    { href: '#daftar-titah', label: 'Daftar Titah' },
  ];

  return (
    <header className="site-header">
      <div className="nav-container">
        <a href="#beranda" className="brand-mark">
          <span className="brand-seal-icon" aria-hidden="true">𒀭</span>
          <span className="brand-text">KODE HAMMURABI</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Navigasi Utama">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="btn btn-sm btn-outline-warning d-md-none text-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Buka Menu Navigasi"
          style={{ borderColor: 'var(--gold)', fontSize: '0.85rem' }}
        >
          {mobileMenuOpen ? '✕ Tutup' : '☰ Menu'}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="d-md-none p-3 border-top border-secondary bg-dark text-center">
          <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sandstone text-decoration-none d-block py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Subnav Rail Horizontal */}
      <div className="subnav-rail" aria-label="Jelajahi Topik Cepat">
        <div className="subnav-rail-inner">
          <span className="text-gold small fw-bold text-uppercase me-1">Kategori:</span>
          <a href="#daftar-titah" className="subnav-link active">1. Peradilan (1–5)</a>
          <a href="#daftar-titah" className="subnav-link">2. Pencurian (6–14)</a>
          <a href="#daftar-titah" className="subnav-link">4. Properti (21–25)</a>
          <a href="#daftar-titah" className="subnav-link">8. Dagang (100–126)</a>
          <a href="#daftar-titah" className="subnav-link">10. Pidana (194–233)</a>
          <a href="#daftar-titah" className="subnav-link">12. Upah (241–277)</a>
        </div>
      </div>
    </header>
  );
}