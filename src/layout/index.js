import React, { useState } from 'react';
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
  const location = useLocation();
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [scale, setScale] = useState(100);
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
        <div className="col-12">
          <div className={`d-flex flex-column ${styles.leftDiv}`}>
            <Header />
            <div className="d-flex flex-row row-22">
              <Sidebar />
              <div className="col-16">{children}</div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end">
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
