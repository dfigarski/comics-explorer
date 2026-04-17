function ResultCard({ comic }) {
  return (
    <div>
      <img src={comic.thumbnail} alt={comic.title} />
      <h3>{comic.title}</h3>
      <p>{comic.description}</p>
      <p>Rok: {comic.year}</p>
    </div>
  );
}

export default ResultCard;

