import {Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogDetailPage from '../pages/BlogDetailPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
    </Routes>
  );
};


export default AppRoutes;

