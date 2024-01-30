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

export default function RouterProvider() {
  const getSwitchAndRoutes = () => (
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/home" element={<HomePage />} />
    </Routes>
  );

  return (
    <Router>
      <GlobalLoading />
      <Layout>{getSwitchAndRoutes()}</Layout>
    </Router>
  );
}
