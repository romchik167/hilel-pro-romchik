const PersonDetails = ({ person, onClose }) => {
  if (!person) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="modal-close-btn"
        >
          ×
        </button>

        <h2 className="modal-title">
          {person.name}
        </h2>

        <div className="modal-grid">
          <DetailItem label="Зріст" value={`${person.height} см`} />
          <DetailItem label="Вага" value={`${person.mass} кг`} />
          <DetailItem label="Колір очей" value={person.eye_color} />
          <DetailItem label="Рік народження" value={person.birth_year} />
          <DetailItem label="Стать" value={person.gender} />
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="detail-item">
    <div className="detail-label">
      {label}
    </div>
    <div className="detail-value">
      {value}
    </div>
  </div>
);

export default PersonDetails;