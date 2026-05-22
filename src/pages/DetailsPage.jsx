import { useParams, Link } from 'react-router-dom';
import { mockComics } from '../data/mockComics';

function DetailsPage() {
  const { id } = useParams();
  const comic = mockComics.find((c) => c.id === Number(id));

  if (!comic) {
    return (
      <div>
        <h2>Nie znaleziono komiksu</h2>
        <Link to="/search">Wróć do wyszukiwarki</Link>
      </div>
    );
  }

  return (
    <div className="card" style={{ maxWidth: 400, margin: '0 auto' }}>
      <img src={comic.thumbnail} alt={comic.title} />
      <h2>{comic.title}</h2>
      <p>{comic.description}</p>
      <p>Rok: {comic.year}</p>
      <Link to="/search">← Wróć do listy</Link>
    </div>
  );
}

export default DetailsPage;