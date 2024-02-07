import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function CheckBoxForm({
  text = '',
  textStyles = '',
  checked = false,
  setCheckAll = (value) => {},
  isCheckAllInput = false,
  setIsCheckAllInput = (value) => {},
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [isChecked, setIsChecked] = useState(checked);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleCheck = () => {
    setIsChecked(!isChecked);
    if (isCheckAllInput) {
      setCheckAll(!isChecked);
      setIsCheckAllInput(true);
    } else setIsCheckAllInput(false);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div
        className={`form-check d-flex align-items-center ${styles.checkBoxCtn}`}
      >
        <input
          className={`form-check-input ${styles.checkBox}`}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
        />
        <label className={`form-check-label ${textStyles} ${styles.text}`}>
          {text}
        </label>
      </div>
    </div>
  );
}
