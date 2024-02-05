import GlobalLoading from '../common/GlobalLoading';
import Layout from '../layout';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoginPage from 'page/loginPage';
import HomePage from 'page/homePage';
import SearchPage from 'page/searchPage';
import UploadPage from 'page/uploadPage';
import ResultPage from 'page/resultPage';

export default function RouterProvider() {
  const getSwitchAndRoutes = () => (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/result-page" element={<ResultPage />} />
    </Routes>
  );

  return (
    <Router>
      <GlobalLoading />
      <Layout>{getSwitchAndRoutes()}</Layout>
    </Router>
  );
}
