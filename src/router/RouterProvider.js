import GlobalLoading from '../common/GlobalLoading';
import Layout from '../layout';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoginPage from 'page/loginPage';
import HomePage from 'page/homePage';
import SearchFolderPage from 'page/searchFolderPage';
import SearchFilePage from 'page/searchFilePage';
import UploadFilePage from 'page/uploadFilePage';
import UploadFolderPage from 'page/uploadFolderPage';
import ResultPage from 'page/resultPage';
import SearchFolderResultPage from 'page/searchFolderResultPage';
import SearchFileResultPage from 'page/searchFileResultPage';
import ProfilePage from 'page/profilePage';
import StaffManagePage from 'page/staffManagePage';
import ApprovalPage from 'page/approvalPage';

export default function RouterProvider() {
  const getSwitchAndRoutes = () => (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/search-folder" element={<SearchFolderPage />} />
      <Route path="/search-file" element={<SearchFilePage />} />
      <Route path="/upload-file" element={<UploadFilePage />} />
      <Route path="/upload-folder" element={<UploadFolderPage />} />
      <Route path="/result-page" element={<ResultPage />} />
      <Route path="/search-folder-result" element={<SearchFolderResultPage />} />
      <Route path="/search-file-result" element={<SearchFileResultPage />} />
      <Route path="/approval" element={<ApprovalPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/staff-manage" element={<StaffManagePage />} />
      <Route path="/company-manage" element={<ProfilePage />} />
      <Route path="/dept-manage" element={<ProfilePage />} />
    </Routes>
  );

  return (
    <Router>
      <GlobalLoading />
      <Layout>{getSwitchAndRoutes()}</Layout>
    </Router>
  );
}
