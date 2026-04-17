import './styles/app.css';
import SearchForm from './components/search';
import ResultList from './components/resultlist';
import { mockComics } from './data/mock';

function App() {
  return (
    <div>
      <h1>Marvel Comics Explorer</h1>
      <p>Biblioteka komiksów Marvel - projekt semestralny.</p>

      <SearchForm />
      <ResultList comics={mock} />
    </div>
  );
}

export default App;