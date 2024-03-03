import React from 'react';
import styles from './styles.module.css';

export default function Button({
  name = null,
  ctnStyles = '',
  icon1Styles = '',
  icon2Styles = '',
  btnStyles = '',
  icon1 = null,
  icon2 = null,
  onClick,
  isLoad = false,
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const ctnLoadStyles="h-100 textH6Bold br-10 bg-bgColor6 justify-content-end";
  const btnLoadStyles="bg-bgColor6 black d-flex justify-content-center align-items-center"

  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`w-100 ${styles.root} ${isLoad ? ctnLoadStyles : ctnStyles} ${isLoad? styles.cursorDefault : styles.cursorPointer}`} onClick={isLoad ? '' : onClick}>
      {icon1 && (
        <div className={`${icon1Styles} ${styles.icon} d-flex align-items-center justify-content-center`}>{icon1}</div>
      )}
      {name && (
        <div
          onClick={isLoad? '' : onClick}
          className={`${isLoad? btnLoadStyles : btnStyles} ${isLoad? styles.cursorDefault : styles.cursorPointer} ${styles.btn}`}
        >
          {name}
        </div>
      )}
      {icon2 && (
        <div className={`${icon2Styles} d-flex align-items-center justify-content-center`}>{icon2}</div>
      )}
    </div>
  );
}
