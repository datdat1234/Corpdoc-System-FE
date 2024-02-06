import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import FileHeader from './FileHeader';
import Sidebar from './Sidebar';
import { NO_LAYOUT_LINKS, NOT_SHOW_SIDEBAR } from 'util/js/constant';
import styles from './styles.module.css';
import PDFRenderer from 'common/PDFRenderer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function Layout({ children }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const resizableRef = useRef(null);
  const resizableSidebarRef = useRef(null);
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [scale, setScale] = useState(100);
  const [width, setWidth] = useState(50);
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

  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const containerWidth = resizableRef.current.parentNode.clientWidth;
    var newWidth = (event.clientX / containerWidth) * 100;
    if(newWidth < 25) newWidth = 25
    else if(newWidth > 75) newWidth = 75;
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDownSideBar = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMoveSideBar);
    document.addEventListener('mouseup', handleMouseUpSideBar);
  };

  const handleMouseMoveSideBar = (event) => {
    const containerWidth = resizableSidebarRef.current.parentNode.clientWidth;
    const newWidth = (event.clientX / containerWidth) * 100;
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
          className="col-12 position-relative"
          ref={resizableRef}
          style={{ width: `${width}%` }}
        >
          <div className={`d-flex flex-column ${styles.leftDiv}`}>
            <Header />
            <div className="d-flex flex-row row-22">
              {checkShowSideBar() && (
                <div
                  className={`${styles.sidebar}`}
                  ref={resizableSidebarRef}
                  style={{ width: `${sidebarWidth}%` }}
                >
                  <Sidebar />
                  <div
                    className={`${styles.resizerSideBar}`}
                    onMouseDown={handleMouseDownSideBar}
                  ></div>
                </div>
              )}
              <div
                className={`${styles.contentCtn}`}
                style={{
                  width: `${checkShowSideBar() ? 100 - sidebarWidth : 100}%`,
                }}
              >
                {children}
              </div>
            </div>
          </div>
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.resizer}`}
            onMouseDown={handleMouseDown}
          >
            <FontAwesomeIcon icon={icon.gripLinesVertical} />
          </div>
        </div>
        <div
          className={`${styles.pdfCtn}`}
          style={{ width: `${100 - width}%` }}
        >
          <div className={`d-flex flex-column ${styles.rightDiv}`}>
            <div className={`row-2 ${styles.rightDivHeader}`}>
              <FileHeader
                page={page}
                totalPage={totalPage}
                name={'Cây Cam Ngọt Của Tôi'}
                scale={scale}
                setScale={setScale}
              />
            </div>
            <PDFRenderer
              setPage={setPage}
              setTotalPage={setTotalPage}
              scale={scale}
            />
          </div>
        </div>
      </div>
    );
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <>{renderLayout()}</>;
}
