import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import ResultList from '../components/ResultList';
import EmptyState from '../components/EmptyState';
import ErrorMessage from '../components/ErrorMessage';
import { mockComics } from '../data/mockComics';

function SearchPage() {
  const [results, setResults] = useState(mockComics);
  const [error, setError] = useState('');

  const handleSearch = (title) => {
    const filtered = mockComics.filter((comic) =>
      comic.title.toLowerCase().includes(title.toLowerCase())
    );

    if (filtered.length === 0) {
      setResults([]);
      setError('Nie znaleziono komiksów o podanym tytule.');
    } else {
      setResults(filtered);
      setError('');
    }
  };

  return (
    <div>
      <h2>Wyszukiwarka</h2>
      <SearchForm onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {results.length > 0 ? <ResultList comics={results} /> : <EmptyState />}
    </div>
  );
}

export default SearchPage;