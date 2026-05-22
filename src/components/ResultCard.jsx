import { Link } from 'react-router-dom';

function ResultCard({ comic }) {
  return (
    <Link to={`/item/${comic.id}`} className="card-link">
      <div className="card">
        <img src={comic.thumbnail} alt={comic.title} />
        <h3>{comic.title}</h3>
        <p>{comic.description}</p>
        <p>Rok: {comic.year}</p>
      </div>
    </Link>
  );
}

export default ResultCard;

