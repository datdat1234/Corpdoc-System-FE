import GlobalLoading from '../common/GlobalLoading';
import Layout from '../layout';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from 'page/loginPage';
import HomePage from 'page/homePage';

export default function RouterProvider() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'));

  const getElement = (path) => {
    if (!isLogin) return <Navigate replace to="/login" />;
    switch (path) {
      case '/home':
        return <HomePage />;
      default:
        return <Navigate replace to="/login" />;
    }
  };
  const getSwitchAndRoutes = () => (
    <Routes>
      <Route
        path="/login"
        element={
          isLogin ? (
            <Navigate replace to="/home" />
          ) : (
            <LoginPage setIsLogin={setIsLogin} />
          )
        }
      />
      <Route path="/" element={getElement('/')} />
      <Route path="/home" element={getElement('/home')} />
    </Routes>
  );

  return (
    <Router>
      <GlobalLoading />
      <Layout>{getSwitchAndRoutes()}</Layout>
    </Router>
  );
}
