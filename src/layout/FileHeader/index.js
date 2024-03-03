import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFileInfo } from '../../redux/action/app';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import { useSelector } from 'react-redux';
import { downloadFile } from 'util/js/APIs';
import { saveAs } from 'file-saver';

export default function FileHeader({
  page = 1,
  setPage,
  totalPage = 0,
  scale,
  setScale,
  setShowPdf,
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [scaleValue, setScaleValue] = useState(scale);
  const fileInfo = useSelector((state) => state.app.fileInfo);
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
    dispatch(setFileInfo({}));
    setShowPdf(false);
  };

  const handleDownloadfile = async () => {
    try {
      const fileId = fileInfo?.FileID;
      const response = await downloadFile(fileId);
      const blob = new Blob([response?.data], { type: 'application/pdf' });
      saveAs(blob, `${fileId}.pdf`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`d-flex align-items-center justify-content-start ${styles.headerCtn}`}
    >
      <div className={`col-7 mRight20 pRight20 ${styles.fileName}`}>
        {fileInfo?.Name}
      </div>
      <div className={`col-7 mHorizontal20 ${styles.fileEdit}`}>
        <div className={`${styles.pageCtn}`}>
          <div className={`${styles.bgPageNum}`}>
            {/* <p className={`${styles.pageNumber}`}>{page}</p> */}
            <input
              type="number"
              name="page"
              min="1"
              max={totalPage}
              value={page}
              onChange={(e) => {setPage(e)}}
              className={`${styles.scaleNumber}`}
            />
          </div>
          <div className={`${styles.splash}`}>/</div>
          <p className={`${styles.pageNumber}`}>{totalPage}</p>
        </div>
        <div className={`${styles.divider}`}></div>
        <div className={`${styles.scaleCtn}`}>
          <button className={`${styles.button}`} onClick={handleMinus}>
            <FontAwesomeIcon icon={icon.minus} />
          </button>
          <div className={`pVertical5 ${styles.bgScaleNum}`}>
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
      <div className={`mLeft20 d-flex justify-content-end ${styles.fileAct}`}>
        <button
          className={`${styles.button} pRight20`}
          onClick={handleDownloadfile}
        >
          <FontAwesomeIcon icon={icon.download} />
        </button>
        <button
          className={`${styles.button} ${styles.button}`}
          onClick={handleClosePdf}
        >
          <FontAwesomeIcon icon={icon.xmark} />
        </button>
      </div>
    </div>
  );
}
