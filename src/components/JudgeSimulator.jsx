import { useState } from 'react';

const CRIME_CASES = {
  eye: {
    label: 'Merusak / Membutakan Mata',
    resolve: (perp, victim) => {
      if (victim === 'awilum') {
        return {
          pasalNum: 196,
          caste: 'Awilum',
          tag: 'Lex Talionis Mutlak',
          tagClass: 'social-tag-awilum',
          title: perp === 'wardum'
            ? 'Vonis: Mata Pelaku Dibutakan (atau Hukuman Fisik Berat oleh Hakim)'
            : 'Vonis: Mata Pelaku Harus Dibutakan!',
          desc: 'Korban adalah seorang Awilum (bangsawan merdeka). Hukum Hammurabi menolak kompensasi uang untuk cedera permanen pada bangsawan: mata harus dibayar dengan mata.',
          quote: 'If a man destroy the eye of a man (gentleman), they shall destroy his eye.',
          note: 'Konsep: Kesetaraan biologis mutlak berlaku ketika korbannya berstatus bangsawan (Awilum).'
        };
      } else if (victim === 'mushkenum') {
        return {
          pasalNum: 198,
          caste: 'Mushkenum',
          tag: 'Kompensasi Finansial Perak',
          tagClass: 'social-tag-mushkenum',
          title: 'Vonis: Denda Tunai 1 Mana Perak (Tanpa Mutilasi)',
          desc: 'Karena korban berstatus Mushkenum (rakyat biasa), pelaku TIDAK dibutakan matanya, melainkan wajib membayar denda 1 Mana perak (sekitar 500 gram perak murni).',
          quote: 'If one destroy the eye of a freeman (mushkenum)... he shall pay one mana of silver.',
          note: 'Nilai Ekonomi: 1 Mana perak (60 syikal) setara upah buruh tani selama kurang lebih 10 tahun.'
        };
      } else {
        return {
          pasalNum: 199,
          caste: 'Wardum',
          tag: 'Ganti Rugi Properti Tuan',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Membayar Separuh Harga Pasar Budak kepada Majikannya',
          desc: 'Karena korban berstatus Wardum (budak), kecacatan mata dinilai sebagai penurunan nilai aset produksi. Pelaku membayar 50% harga pasar budak kepada pemiliknya.',
          quote: "If one destroy the eye of a man's slave... he shall pay one-half his price.",
          note: 'Budak dilindungi melalui kompensasi modal kepada sang majikan.'
        };
      }
    }
  },
  bone: {
    label: 'Mematahkan Tulang',
    resolve: (perp, victim) => {
      if (victim === 'awilum') {
        return {
          pasalNum: 197,
          caste: 'Awilum',
          tag: 'Lex Talionis Mutlak',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: Tulang Pelaku Harus Dipatahkan!',
          desc: 'Mematahkan tulang seorang bangsawan merdeka dibalas langsung dengan mematahkan bagian tulang yang sama pada tubuh pelaku.',
          quote: "If one break a man's bone, they shall break his bone.",
          note: 'Prinsip proporsionalitas kuno agar keluarga korban tidak membalas dengan pembunuhan.'
        };
      } else if (victim === 'mushkenum') {
        return {
          pasalNum: 198,
          caste: 'Mushkenum',
          tag: 'Kompensasi Finansial Perak',
          tagClass: 'social-tag-mushkenum',
          title: 'Vonis: Denda Tunai 1 Mana Perak',
          desc: 'Tulang pelaku tetap utuh karena korbannya rakyat biasa. Pelaku wajib menyerahkan 1 Mana perak (60 syikal).',
          quote: 'If one destroy the eye of a freeman or break the bone of a freeman, he shall pay 1 mana of silver.',
          note: 'Denda patah tulang rakyat biasa disetarakan dengan kehilangan satu mata.'
        };
      } else {
        return {
          pasalNum: 199,
          caste: 'Wardum',
          tag: 'Ganti Rugi Properti Majikan',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Membayar Separuh Nilai Budak kepada Majikannya',
          desc: 'Tulang budak yang patah mengurangi daya kerjanya. Pelaku membayar 50% nilai pasar budak kepada tuannya.',
          quote: "If one break a bone of a man's slave, he shall pay one-half his price.",
          note: 'Perlindungan nilai aset modal pemilik budak.'
        };
      }
    }
  },
  tooth: {
    label: 'Merontokkan Gigi',
    resolve: (perp, victim) => {
      if (victim === 'awilum') {
        return {
          pasalNum: 200,
          caste: 'Awilum',
          tag: 'Gigi Ganti Gigi',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: Gigi Pelaku Harus Dirontokkan!',
          desc: 'Merontokkan gigi sesama bangsawan (Awilum) dihukum dengan memukul rontok gigi pelaku di hadapan hakim.',
          quote: 'If a man knock out a tooth of a man of his own rank, they shall knock out his tooth.',
          note: 'Asal-usul historis hukum lex talionis gigi ganti gigi di Mesopotamia.'
        };
      } else if (victim === 'mushkenum') {
        return {
          pasalNum: 201,
          caste: 'Mushkenum',
          tag: 'Denda Perak',
          tagClass: 'social-tag-mushkenum',
          title: 'Vonis: Denda 1/3 Mana Perak (20 Syikal)',
          desc: 'Jika gigi yang rontok milik seorang Mushkenum, pelaku cukup membayar denda 20 syikal perak (sekitar 165 gram perak).',
          quote: 'If one knock out the tooth of a freeman, he shall pay one-third mana of silver.',
          note: '20 syikal setara dengan harga 1 orang budak dewasa atau upah buruh kasar selama 3 tahun.'
        };
      } else {
        return {
          pasalNum: 199,
          caste: 'Wardum',
          tag: 'Ganti Rugi Majikan',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Ganti Rugi Kerusakan Fisik kepada Majikan Budak',
          desc: 'Hakim menerapkan analogi kompensasi proporsional di bawah 20 syikal perak kepada tuan pemilik budak.',
          quote: "If one damage a man's slave, he shall pay proportionate restitution to his master.",
          note: 'Analogi peradilan Babilonia untuk cedera pada budak.'
        };
      }
    }
  },
  slap: {
    label: 'Menampar Pipi di Muka Umum',
    resolve: (perp, victim) => {
      if (perp === 'wardum' && victim === 'awilum') {
        return {
          pasalNum: 205,
          caste: 'Wardum',
          tag: 'Pelanggaran Hierarki Kasta',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Telinga Budak Harus Dipotong!',
          desc: 'Seorang budak yang menampar pipi seorang bangsawan dianggap melakukan pembangkangan sosial ekstrem terhadap hierarki kasta.',
          quote: "If a man's slave strike a man's son, they shall cut off his ear.",
          note: 'Telinga adalah simbol kepatuhan dan pendengaran hamba dalam tradisi Mesopotamia.'
        };
      } else if (perp === 'awilum' && victim === 'awilum') {
        return {
          pasalNum: 202,
          caste: 'Awilum',
          tag: 'Hukuman Cambuk / Denda Kehormatan',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: 60 Cambukan Ekor Lembu (Jika Korban Atasan) atau Denda 1 Mana Perak',
          desc: 'Jika menampar bangsawan yang lebih tinggi kedudukannya, dihukum cambuk 60 kali di muka umum; jika setara, denda 1 Mana perak.',
          quote: 'If a man strike the person of a man who is his superior, he shall receive 60 strokes with an ox-tail whip in public.',
          note: 'Penghinaan kehormatan dinilai sangat berat bagi bangsawan Babilonia.'
        };
      } else if (perp === 'mushkenum' && victim === 'mushkenum') {
        return {
          pasalNum: 204,
          caste: 'Mushkenum',
          tag: 'Denda Ringan Antar-Rakyat',
          tagClass: 'social-tag-mushkenum',
          title: 'Vonis: Denda 10 Syikal Perak',
          desc: 'Tamparan antar-rakyat biasa diselesaikan dengan denda perdata 10 syikal perak (1/6 denda bangsawan).',
          quote: 'If a freeman strike the person of a freeman, he shall pay 10 shekels of silver.',
          note: 'Kehormatan pipi bangsawan (60 syikal) dinilai 6 kali lipat dibanding pipi rakyat biasa.'
        };
      } else {
        return {
          pasalNum: 203,
          caste: 'Mushkenum',
          tag: 'Sanksi Disiplin Kasta',
          tagClass: 'social-tag-mushkenum',
          title: perp === 'mushkenum' && victim === 'awilum'
            ? 'Vonis: 60 Cambukan Cambuk Ekor Lembu di Muka Umum!'
            : 'Vonis: Denda Kompensasi Ringan (10 Syikal Perak)',
          desc: perp === 'mushkenum' && victim === 'awilum'
            ? 'Rakyat biasa yang menampar bangsawan dianggap menyerang atasan sosialnya di depan majelis kota.'
            : 'Bangsawan yang menampar kelas bawahnya hanya dikenai sanksi perdata ringan.',
          quote: 'Order and caste boundaries are strictly defended by the royal stele.',
          note: 'Hierarki kasta dipertahankan secara tegas dalam hukum Babilonia.'
        };
      }
    }
  },
  miscarriage: {
    label: 'Memukul Wanita Hamil (Hingga Keguguran)',
    resolve: (perp, victim) => {
      if (victim === 'awilum') {
        return {
          pasalNum: 209,
          caste: 'Awilum',
          tag: 'Kompensasi Janin Bangsawan',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: Denda 10 Syikal Perak untuk Janin Bangsawan yang Gugur',
          desc: 'Pelaku yang memukul putri bangsawan hingga keguguran wajib membayar ganti rugi 10 syikal perak (sekitar 83 gram perak).',
          quote: "If a man strike a man's daughter and bring about a miscarriage, he shall pay 10 shekels of silver for that which was in her womb.",
          note: 'Perbandingan kompensasi janin: Awilum 10 syikal, Mushkenum 5 syikal, Wardum 2 syikal.'
        };
      } else if (victim === 'mushkenum') {
        return {
          pasalNum: 211,
          caste: 'Mushkenum',
          tag: 'Kompensasi Janin Rakyat',
          tagClass: 'social-tag-mushkenum',
          title: 'Vonis: Denda 5 Syikal Perak',
          desc: 'Jika wanita hamil yang keguguran berasal dari kelas rakyat biasa, dendanya setengah dari bangsawan (5 syikal perak).',
          quote: 'If through a stroke he bring about a miscarriage to the daughter of a freeman, he shall pay 5 shekels of silver.',
          note: 'Stratifikasi kasta berlaku sejak manusia masih berada di dalam kandungan.'
        };
      } else {
        return {
          pasalNum: 213,
          caste: 'Wardum',
          tag: 'Kompensasi Janin Budak',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Denda 2 Syikal Perak kepada Pemilik Budak',
          desc: 'Jika korban adalah budak wanita, pelaku membayar 2 syikal perak langsung kepada majikan sang budak.',
          quote: 'If he strike the female slave of a man and bring about a miscarriage, he shall pay 2 shekels of silver.',
          note: 'Kompensasi diserahkan kepada majikan sebagai pemilik hak kebendaan budak.'
        };
      }
    }
  },
  pregnant_death: {
    label: 'Memukul Wanita Hamil (Hingga Tewas)',
    resolve: (perp, victim) => {
      if (victim === 'awilum') {
        return {
          pasalNum: 210,
          caste: 'Awilum',
          tag: 'Hukuman Vikarius (Anak Pelaku Dihukum)',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: Anak Perempuan Pelaku Wajib Dihukum Mati!',
          desc: 'Jika putri bangsawan itu tewas, bukan pelaku yang dihukum mati, melainkan ANAK PEREMPUAN PELAKU yang dieksekusi mati!',
          quote: 'If that woman die, they shall put his daughter to death.',
          note: 'Contoh Vicarious Punishment ekstrem yang sangat terkenal dalam sejarah hukum peradaban kuno.'
        };
      } else if (victim === 'mushkenum') {
        return {
          pasalNum: 212,
          caste: 'Mushkenum',
          tag: 'Denda Nyawa Rakyat Biasa',
          tagClass: 'social-tag-mushkenum',
          title: 'Vonis: Denda 1/2 Mana Perak (30 Syikal)',
          desc: 'Jika wanita rakyat biasa itu meninggal dunia, tidak ada eksekusi mati keluarga; pelaku cukup membayar denda 30 syikal perak.',
          quote: 'If that woman die, he shall pay one-half mana of silver.',
          note: 'Nyawa seorang wanita Mushkenum ditebus secara finansial dengan 30 syikal perak.'
        };
      } else {
        return {
          pasalNum: 214,
          caste: 'Wardum',
          tag: 'Ganti Rugi Kematian Budak',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Denda 1/3 Mana Perak (20 Syikal) kepada Majikan',
          desc: 'Jika budak wanita itu meninggal dunia akibat pukulan, pelaku wajib membayar 20 syikal perak (harga beli penuh 1 orang budak) kepada tuannya.',
          quote: 'If that female slave die, he shall pay one-third mana of silver.',
          note: '20 syikal perak adalah patokan harga beli standar seorang budak dewasa di Babilonia.'
        };
      }
    }
  },
  surgery_fail: {
    label: 'Operasi Tabib Gagal (Pasien Meninggal/Buta)',
    resolve: (perp, victim) => {
      if (victim === 'awilum' || victim === 'mushkenum') {
        return {
          pasalNum: 218,
          caste: 'Awilum',
          tag: 'Liabilitas Profesi Medis',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: Jari-Jari Tangan Tabib Harus Dipotong!',
          desc: 'Jika seorang tabib membedah orang merdeka dengan pisau perunggu dan menyebabkan kematian pasien atau kebutaan mata, jari tangannya diamputasi.',
          quote: "If a physician operate on a man for a severe wound with a bronze lancet and cause the man's death... they shall cut off his fingers.",
          note: 'Perlindungan pasien terhadap malpraktik bedah paling awal dalam sejarah kedokteran.'
        };
      } else {
        return {
          pasalNum: 219,
          caste: 'Wardum',
          tag: 'Ganti Rugi Medis Budak',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Mengganti Budak Baru (Jika Mati) atau Bayar 1/2 Harga (Jika Buta)',
          desc: 'Jika pasien bedah yang meninggal adalah budak, jari tabib tidak dipotong. Tabib wajib menyerahkan budak baru yang setara nilainya.',
          quote: 'If a physician operate on a slave of a freeman... and cause his death, he shall restore a slave of equal value.',
          note: 'Tanggung jawab ganti rugi perdata kepada pemilik budak.'
        };
      }
    }
  },
  house_collapse: {
    label: 'Rumah Roboh Menewaskan Penghuni',
    resolve: (perp, victim) => {
      if (victim === 'awilum' || victim === 'mushkenum') {
        return {
          pasalNum: 229,
          caste: 'Awilum',
          tag: 'Liabilitas Mutlak Konstruksi',
          tagClass: 'social-tag-awilum',
          title: 'Vonis: Tukang Bangunan Dihukum Mati! (Atau Anaknya bila Korban Anak Pemilik)',
          desc: 'Jika tukang membuat rumah rapuh hingga roboh menewaskan pemilik rumah, tukang dihukum mati (Pasal 229). Jika menewaskan anak pemilik, anak tukang dihukum mati (Pasal 230)!',
          quote: 'If a builder build a house and the house collapse and cause the death of the owner, that builder shall be put to death.',
          note: 'Selain hukuman mati, seluruh harta benda yang rusak wajib diganti dari kekayaan pribadi tukang.'
        };
      } else {
        return {
          pasalNum: 231,
          caste: 'Wardum',
          tag: 'Ganti Rugi Budak Tertimpa',
          tagClass: 'social-tag-wardum',
          title: 'Vonis: Tukang Wajib Mengganti Budak yang Setara ("Budak Ganti Budak")',
          desc: 'Jika runtuhan rumah menewaskan budak milik pemilik rumah, tukang wajib menyerahkan satu budak baru yang setara dan membangun ulang rumah dengan biaya sendiri.',
          quote: 'If it cause the death of a slave of the owner of the house, he shall give to the owner of the house a slave of equal value.',
          note: 'Restitusi aset dan rekonstruksi wajib tanpa hukuman fisik bagi tukang bangunan.'
        };
      }
    }
  }
};

export default function JudgeSimulator({ onAdoptVerdict }) {
  const [crime, setCrime] = useState('eye');
  const [perp, setPerp] = useState('awilum');
  const [victim, setVictim] = useState('awilum');
  const [adoptedFeedback, setAdoptedFeedback] = useState(false);

  const crimeData = CRIME_CASES[crime] || CRIME_CASES.eye;
  const verdict = crimeData.resolve(perp, victim);

  const handleRandomize = () => {
    const crimeKeys = Object.keys(CRIME_CASES);
    const castes = ['awilum', 'mushkenum', 'wardum'];
    const randomCrime = crimeKeys[Math.floor(Math.random() * crimeKeys.length)];
    const randomPerp = castes[Math.floor(Math.random() * castes.length)];
    const randomVictim = castes[Math.floor(Math.random() * castes.length)];

    setCrime(randomCrime);
    setPerp(randomPerp);
    setVictim(randomVictim);
  };

  const handleAddVerdictToLaws = () => {
    if (onAdoptVerdict) {
      onAdoptVerdict({
        id: Date.now(),
        pasalNum: verdict.pasalNum,
        caste: verdict.caste,
        title: `${crimeData.label} (${verdict.tag})`,
        text: verdict.quote,
        logic: `${verdict.title} - ${verdict.desc} [${verdict.note}]`
      });
      setAdoptedFeedback(true);
      setTimeout(() => setAdoptedFeedback(false), 2500);
    }
  };

  return (
    <section id="simulator-hakim" className="mb-5" aria-labelledby="simulator-heading">
      <div className="stele-frame p-4 p-md-5">
        <div className="text-center mb-4">
          <span className="text-gold font-monospace small text-uppercase d-block mb-1">
            ⚖ Fitur Interaktif Sejarah
          </span>
          <h2 id="simulator-heading" className="h3 text-gold mt-1 mb-2">
            Sidang Hakim Babilonia: Kalkulator Lex Talionis
          </h2>
          <p className="text-muted small reading-column mx-auto mb-0" style={{ maxWidth: '680px' }}>
            Pilih jenis perkara serta kasta sosial pelaku dan korban untuk melihat bagaimana hukum Raja Hammurabi menjatuhkan vonis pada abad ke-18 SM.
          </p>
        </div>

        <div className="row g-3 mb-4">
          {/* Perkara */}
          <div className="col-md-4">
            <label htmlFor="sim-crime" className="form-label small text-gold font-monospace text-uppercase">
              1. Jenis Perkara / Cedera
            </label>
            <select
              id="sim-crime"
              className="form-select judge-select"
              value={crime}
              onChange={(e) => setCrime(e.target.value)}
            >
              {Object.entries(CRIME_CASES).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Kasta Pelaku */}
          <div className="col-md-4">
            <label htmlFor="sim-perp" className="form-label small text-gold font-monospace text-uppercase">
              2. Status Pelaku
            </label>
            <select
              id="sim-perp"
              className="form-select judge-select"
              value={perp}
              onChange={(e) => setPerp(e.target.value)}
            >
              <option value="awilum">Awilum (Bangsawan / Merdeka)</option>
              <option value="mushkenum">Mushkenum (Rakyat Jelata)</option>
              <option value="wardum">Wardum (Budak)</option>
            </select>
          </div>

          {/* Kasta Korban */}
          <div className="col-md-4">
            <label htmlFor="sim-victim" className="form-label small text-gold font-monospace text-uppercase">
              3. Status Korban
            </label>
            <select
              id="sim-victim"
              className="form-select judge-select"
              value={victim}
              onChange={(e) => setVictim(e.target.value)}
            >
              <option value="awilum">Awilum (Bangsawan / Merdeka)</option>
              <option value="mushkenum">Mushkenum (Rakyat Jelata)</option>
              <option value="wardum">Wardum (Budak Milik Orang)</option>
            </select>
          </div>
        </div>

        {/* Kotak Putusan Hakim */}
        <div className="judge-verdict-box" aria-live="polite">
          <div className="d-flex flex-wrap justify-content-between align-items-center border-bottom border-secondary pb-2 mb-3 gap-2">
            <div className="d-flex align-items-center gap-2">
              <span className="cylinder-seal">{verdict.pasalNum}</span>
              <span className="text-gold fw-bold font-monospace">Rujukan: Pasal {verdict.pasalNum}</span>
            </div>
            <span className={`social-tag ${verdict.tagClass}`}>{verdict.tag}</span>
          </div>

          <h3 className="h4 text-light mb-2">{verdict.title}</h3>
          <p className="text-secondary small mb-3">{verdict.desc}</p>

          <div className="p-3 rounded bg-dark border border-secondary small mb-3">
            <div className="text-gold font-monospace mb-1">Kutipan Prasasti (Terjemahan R.F. Harper):</div>
            <blockquote className="fst-italic text-sandstone mb-2">
              "{verdict.quote}"
            </blockquote>
            <div className="text-muted border-top border-secondary pt-2 mt-2">
              <strong>Catatan Konteks:</strong> {verdict.note}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={handleRandomize}
              className="btn-hammurabi-outline py-1 px-3 small"
            >
              🎲 Acak Kasus Sidang
            </button>

            {onAdoptVerdict && (
              <button
                type="button"
                onClick={handleAddVerdictToLaws}
                className="btn-hammurabi-gold py-1 px-3 small"
              >
                <span>{adoptedFeedback ? '✓ Berhasil Dipahat!' : '+ Pahat Vonis ke Daftar Titah'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
