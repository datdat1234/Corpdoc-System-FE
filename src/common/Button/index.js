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
}) {
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

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`w-100 ${styles.root} ${ctnStyles}`} onClick={onClick}>
      {icon1 && (
        <div className={`${icon1Styles} ${styles.icon} d-flex align-items-center justify-content-center`}>{icon1}</div>
      )}
      {name && (
        <button
          type="button"
          onClick={onClick}
          className={`${btnStyles} ${styles.btn}`}
        >
          {name}
        </button>
      )}
      {icon2 && (
        <div className={`${icon2Styles} d-flex align-items-center justify-content-center`}>{icon2}</div>
      )}
    </div>
  );
}
