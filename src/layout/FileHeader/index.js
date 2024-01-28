import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import color from '../../util/color';
import { TEXT_STYLES } from '../../util/constant';

export default function FileHeader({ name = '', page = 1, totalPage = 0, scale, setScale }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handlePlus = () => {
    setScale(scale + 1);
  }

  const handleMinus = () => {
    setScale(scale - 1);
  }
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`d-flex align-items-center justify-content-between ${styles.headerCtn}`}
    >
      <p className={`${styles.fileName}`}>{name}</p>
      <button className={`${styles.button}`}>
        <FontAwesomeIcon icon={faDownload} />
      </button>
      <div className={`${styles.fileEdit}`}>
        <div className={`${styles.pageCtn}`}>
          <div className={`${styles.bgPageNum}`}>
            <p className={`${styles.pageNumber}`}>{page}</p>
          </div>
          <div className={`${styles.splash}`}>/</div>
          <p className={`${styles.pageNumber}`}>{totalPage}</p>
        </div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.scaleCtn}`}>
          <button className={`${styles.button}`} onClick={handleMinus}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <div className={`${styles.bgScaleNum}`}>
            <p className={`${styles.pageNumber}`}>{`${scale} %`}</p>
          </div>
          <button className={`${styles.button}`} onClick={handlePlus}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
}
