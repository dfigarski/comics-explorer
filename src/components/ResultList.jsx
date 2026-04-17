import ResultCard from './ResultCard';

function ResultList({ comics }) {
  return (
    <div className="list">
      {comics.map((comic) => (
        <ResultCard key={comic.id} comic={comic} />
      ))}
    </div>
  );
}

export default ResultList;