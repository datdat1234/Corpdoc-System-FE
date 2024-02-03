import React, { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import FileHeader from './FileHeader';
import Sidebar from './Sidebar';
import { NO_LAYOUT_LINKS } from 'util/js/constant';
import styles from './styles.module.css';
import PDFRenderer from 'common/PDFRenderer';

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

  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (event) => {
    const containerWidth = resizableRef.current.parentNode.clientWidth;
    const newWidth = (event.clientX / containerWidth) * 100;
    setWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown1 = (event) => {
    event.preventDefault();
    document.addEventListener('mousemove', handleMouseMove1);
    document.addEventListener('mouseup', handleMouseUp1);
  };

  const handleMouseMove1 = (event) => {
    const containerWidth = resizableSidebarRef.current.parentNode.clientWidth;
    const newWidth = (event.clientX / containerWidth) * 100;
    setSidebarWidth(newWidth);
  };

  const handleMouseUp1 = () => {
    document.removeEventListener('mousemove', handleMouseMove1);
    document.removeEventListener('mouseup', handleMouseUp1);
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
              <div
                className={`${styles.sidebar}`}
                ref={resizableSidebarRef}
                style={{ width: `${sidebarWidth}%` }}
              >
                <Sidebar />
                <div
                  className={`${styles.resizerSideBar}`}
                  onMouseDown={handleMouseDown1}
                ></div>
              </div>
              <div
                className={`${styles.contentCtn} col-16`}
                style={{ width: `${100 - sidebarWidth}%` }}
              >
                {children}
              </div>
            </div>
          </div>
          <div
            className={`${styles.resizer}`}
            onMouseDown={handleMouseDown}
          ></div>
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
