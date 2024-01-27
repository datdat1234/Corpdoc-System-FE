import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { NO_LAYOUT_LINKS } from "../util/constant";
import styles from './styles.module.css';

export default function Layout({ children }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const location = useLocation();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////
  
  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const isShowLayout = () => {
    return (
      NO_LAYOUT_LINKS.findIndex((item) => item === location.pathname) === -1
    );
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderLayout = () => {
    if (!isShowLayout()) return <>{children}</>;
    return (
      <div className={`container-fluid d-flex flex-row ${styles.root}`}>
        <div className="d-flex flex-column col-12">
          <Header />
          <div className="d-flex flex-row row-22">
            <Sidebar />
            <div className="col-16">
              {children}
            </div>
          </div>
        </div>
        <div className="col-12">
          Render File here
        </div>
      </div>
    );
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <>{renderLayout()}</>;
}
