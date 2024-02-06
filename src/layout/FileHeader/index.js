import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function FileHeader({
  name = '',
  page = 1,
  totalPage = 0,
  scale,
  setScale,
  setShowPdf,
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [scaleValue, setScaleValue] = useState(scale);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handlePlus = () => {
    setScale(Number(scaleValue) + 1);
    setScaleValue(Number(scaleValue) + 1);
  };

  const handleMinus = () => {
    setScale(Number(scaleValue) - 1);
    setScaleValue(Number(scaleValue) - 1);
  };

  const handleKeyDownScale = (e) => {
    var number = e.target.value;
    if (e.key === 'Enter') {
      if (isNaN(number) || number < 50 || number > 500) {
        setScale(100);
        setScaleValue(100);
        return;
      }
      setScale(scaleValue);
      setScaleValue(scaleValue);
    }
  };

  const handleChangeScale = (e) => {
    setScaleValue(e.target.value);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  };
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
      <p
        className={`${styles.fileName}`}
        style={{ width: `calc(${scale / 100}*10.5vw)` }}
      >
        {name}
      </p>
      <div>
        <button className={`${styles.button} pRight20`}>
          <FontAwesomeIcon icon={icon.download} />
        </button>
        <button className={`${styles.button} ${styles.button}`} onClick={handleClosePdf}>
          <FontAwesomeIcon icon={icon.xmark} />
        </button>
      </div>
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
            <FontAwesomeIcon icon={icon.minus} />
          </button>
          <div className={`${styles.bgScaleNum}`}>
            <input
              type="number"
              name="quantity"
              min="50"
              max="500"
              value={scaleValue}
              onKeyDown={(e) => {
                handleKeyDownScale(e);
              }}
              onChange={(e) => {
                handleChangeScale(e);
              }}
              className={`${styles.scaleNumber}`}
            />
            <p className={`${styles.pageNumber}`}>{`%`}</p>
          </div>
          <button className={`${styles.button}`} onClick={handlePlus}>
            <FontAwesomeIcon icon={icon.plus} />
          </button>
        </div>
      </div>
    </div>
  );
}
