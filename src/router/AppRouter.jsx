import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<div>Search (placeholder)</div>} />
        <Route path="/item/:id" element={<div>Details (placeholder)</div>} />
        <Route path="/collection" element={<div>Collection (placeholder)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;