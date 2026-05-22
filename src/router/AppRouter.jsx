import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import DetailsPage from '../pages/DetailsPage';
import CollectionPage from '../pages/CollectionPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;