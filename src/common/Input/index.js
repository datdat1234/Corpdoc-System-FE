import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import CheckBoxForm from 'common/CheckBoxForm';

export default function Input({
  text = '',
  bonusText = '',
  type,
  value,
  setData,
  textStyles = '',
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
  const checkIsRow = (ctn) => {
    if (ctn === 'root') {
      return type.includes('row') ? 'h-40' : 'flex-column mBottom10';
    }
    if (ctn === 'input') {
      return type.includes('row') ? styles.input2 : styles.input;
    }
    if (ctn === 'text') {
      return !type.includes('row') ? 'mBottom10' : styles.textCtn1;
    }
  };

  const renderSelectOpts = () => {
    let options = [];
    for (let i = 0; i < value.length; i++) {
      options.push(
        <option key={i} value={value[i]}>
          {value[i]}
        </option>
      );
    }
    return (
      <>
        <option value="">Chọn tiêu chí</option>
        {options}
      </>
    );
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderInput = () => {
    if (type.includes('select')) {
      return (
        <div className={`${styles.selectCtn}`}>
          <select
            className={`${checkIsRow('input')}`}
            onChange={(e) => setData(e.target.value)}
          >
            {renderSelectOpts()}
          </select>
          <div className={`${styles.icon}`}>
            <FontAwesomeIcon icon={icon.angleDown} />
          </div>
        </div>
      );
    }
    if (type.includes('date')) {
      return (
        <div>
          <input
            type="date"
            className={`${checkIsRow('input')} ${styles.inputDate}`}
          />
        </div>
      );
    }
    if (type.includes('checkbox')) {
      return (
        <div className="mTop10">
          <CheckBoxForm text={text} textStyles={textStyles} />
        </div>
      );
    }
    if (type.includes('textarea')) {
      return (
        <div>
          <textarea
            className={`${styles.textareaCtn}`}
            onChange={(e) => setData(e.target.value)}
          ></textarea>
        </div>
      );
    }
    if (type.includes('text')) {
      return (
        <div>
          <input
            type="text"
            className={`${checkIsRow('input')}`}
            value={value}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
      );
    }
    return <></>;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root} ${checkIsRow('root')}`}>
      {type !== 'checkbox' && (
        <div className={`${styles.textCtn} ${checkIsRow('text')}`}>
          <p className="textH6Bold text-nowrap">{text}</p>
          {bonusText !== '' && (
            <p className={`text14 mLeft10 ${styles.text}`}>{bonusText}</p>
          )}
        </div>
      )}
      <div className={`${styles.inputCtn}`}>{renderInput()}</div>
    </div>
  );
}
