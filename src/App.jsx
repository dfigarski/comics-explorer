import './styles/app.css';
import SearchForm from './components/SearchForm';
import ResultList from './components/ResultList';
import { mockComics } from './data/mockComics';

function App() {
  return (
    <div>
      <h1>Marvel Comics Explorer</h1>
      <p>Biblioteka komiksów Marvel - projekt semestralny.</p>
      <SearchForm />
      <ResultList comics={mockComics} />
    </div>
  );
}

export default App;