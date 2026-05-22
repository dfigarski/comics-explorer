import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchPage from '../pages/SearchPage';
import DetailsPage from '../pages/DetailsPage';
import CollectionPage from '../pages/CollectionPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Marvel Comics Explorer</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/search" replace />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/item/:id" element={<DetailsPage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;