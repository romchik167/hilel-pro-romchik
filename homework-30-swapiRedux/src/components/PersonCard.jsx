const PersonCard = ({ person, onClick }) => {
  const personId = person.url.match(/\/(\d+)\/$/)[1];
  
  return (
    <div
      onClick={() => onClick(personId)}
      className="person-card"
    >
      <h3>{person.name}</h3>
      <p className="id">ID: {personId}</p>
      <p className="birth-year">Birthday: {person.birth_year}</p>
    </div>
  );
};

export default PersonCard;