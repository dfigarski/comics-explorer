import { useEffect, useState } from 'react';
import './styles/app.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import EmptyState from './components/EmptyState';
import ErrorMessage from './components/ErrorMessage';
import { mockComics } from './data/mockComics';

function App() {
  const [results, setResults] = useState(mockComics);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    console.log('Aplikacja została uruchomiona lub zaktualizowano wyszukiwanie');
  }, [searchText]);

  const handleSearch = (title) => {
    setSearchText(title);

    const filteredComics = mockComics.filter((comic) =>
      comic.title.toLowerCase().includes(title.toLowerCase())
    );

    if (filteredComics.length === 0) {
      setResults([]);
      setError('Nie znaleziono komiksów o podanym tytule.');
    } else {
      setResults(filteredComics);
      setError('');
    }
  };

  return (
    <div className="container">
      <h1>Marvel Comics Explorer</h1>
      <p>Wyszukiwarka komiksów Marvel</p>

      <SearchForm onSearch={handleSearch} />

      {error && <ErrorMessage message={error} />}

      {results.length > 0 ? <ResultList comics={results} /> : <EmptyState />}
    </div>
  );
}

export default App;