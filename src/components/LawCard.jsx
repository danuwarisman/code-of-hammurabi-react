export default function LawCard({ law, onDeleteLaw }) {
  const casteBadgeClass =
    law.caste === 'Awilum'
      ? 'social-tag-awilum'
      : law.caste === 'Mushkenum'
      ? 'social-tag-mushkenum'
      : 'social-tag-wardum';

  return (
    <div className="col-lg-6">
      <div className="card-babylon h-100 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="cylinder-seal">{law.pasalNum}</span>
          <span className={`social-tag ${casteBadgeClass}`}>{law.caste}</span>
        </div>

        <h3 className="h5 text-gold mb-2">{law.title}</h3>
        <p className="fst-italic text-light mb-3">"{law.text}"</p>

        <div className="small text-muted mt-auto pt-2 border-top border-secondary">
          <strong>Logika Sosial:</strong> {law.logic}
        </div>

        <div className="text-end mt-3 pt-2">
          <button
            type="button"
            onClick={() => onDeleteLaw(law.id)}
            className="btn btn-sm btn-outline-danger"
            style={{ fontSize: '0.75rem', borderColor: '#a4552f', color: '#e69375' }}
          >
            Hapus dari Prasasti
          </button>
        </div>
      </div>
    </div>
  );
}
