import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './Header';
import SettingSidebar from './SettingSidebar';
import {
  NO_LAYOUT_LINKS,
  NOT_SHOW_SIDEBAR,
  IS_SETTING_PAGE,
} from 'util/js/constant';
import Notification from 'common/Notification';
import styles from './styles.module.css';

export default function Layout({ children }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const noti = useSelector((state) => state.app.noti);
  const resizableRef = useRef(null);
  const resizableSidebarRef = useRef(null);
  const location = useLocation();
  const [width, setWidth] = useState(100);
  const [sidebarWidth, setSidebarWidth] = useState(33.328);
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

  const checkShowSideBar = () => {
    return (
      NOT_SHOW_SIDEBAR.findIndex((item) => item === location.pathname) === -1
    );
  };

  const checkSettingPage = () => {
    return IS_SETTING_PAGE.findIndex((item) => item === location.pathname) >= 0;
  };

  const handleMouseMove = (event) => {
    const containerWidth = resizableRef.current.parentNode.clientWidth;
    var newWidth = (event.clientX / containerWidth) * 100;
    if (newWidth < 40) newWidth = 40;
    else if (newWidth > 60) newWidth = 60;
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMoveSideBar = (event) => {
    const containerWidth = resizableSidebarRef.current.parentNode.clientWidth;
    let newWidth = (event.clientX / containerWidth) * 100;
    if (newWidth > 40) newWidth = 40;
    setSidebarWidth(newWidth);
  };

  const handleMouseUpSideBar = () => {
    document.removeEventListener('mousemove', handleMouseMoveSideBar);
    document.removeEventListener('mouseup', handleMouseUpSideBar);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderLayout = () => {
    if (!isShowLayout()) return <>{children}</>;
    return (
      <div className={`container-fluid d-flex flex-row ${styles.root}`}>
        <div
          className="position-relative"
          ref={resizableRef}
          style={{ width: `${width}%` }}
        >
          <div className={`d-flex flex-column ${styles.leftDiv}`}>
            <Header />
            <div className={`d-flex flex-row ${styles.bodyLeft}`}>
              {checkSettingPage() && <SettingSidebar />}
              <div
                className={`${styles.contentCtn}`}
                style={{
                  width: `${
                    checkShowSideBar() || checkSettingPage()
                      ? 100 - sidebarWidth
                      : 100
                  }%`,
                }}
              >
                {children}
              </div>
            </div>
            {noti.type && <Notification noti={noti}/>}
          </div>
        </div>
      </div>
    );
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <>{renderLayout()}</>;
}
