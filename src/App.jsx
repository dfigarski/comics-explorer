import './styles/app.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import { mockComics } from './data/mockComics';

function App() {
  return (
    <div className="container">
      <h1>Marvel Comics Explorer</h1>
      <p>Wyszukiwarka komiksów Marvel</p>

      <SearchForm />
      <ResultList comics={mockComics} />
    </div>
  );
}

export default App;