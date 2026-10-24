import { useState, useEffect } from 'react';

export default function ScrollFeatures() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowTopBtn(scrollTop > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Back to Top button */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`btn-back-to-top ${showTopBtn ? 'show' : ''}`}
        aria-label="Kembali ke atas halaman"
        title="Kembali ke Atas"
      >
        ↑
      </button>
    </>
  );
}
