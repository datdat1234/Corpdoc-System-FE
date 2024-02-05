import React from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import CheckBoxForm from 'common/CheckBoxForm';

export default function Input({
  text = '',
  bonusText = '',
  type,
  placeholder = '',
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

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderInput = () => {
    if (type === 'text') {
      return (
        <div>
          <input
            type="text"
            className={`${styles.input}`}
            placeholder={placeholder}
          />
        </div>
      );
    }
    if (type === 'select') {
      return (
        <div className={`${styles.selectCtn}`}>
          <select className={`${styles.input}`}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
          <div className={`${styles.icon}`}>
            <FontAwesomeIcon icon={icon.angleDown} />
          </div>
        </div>
      );
    }
    if (type === 'date') {
      return (
        <div>
          <input
            type="date"
            className={`${styles.input} ${styles.inputDate}`}
          />
        </div>
      );
    }
    if (type === 'checkbox') {
      return (
        <div>
          <CheckBoxForm text={text} textStyles={textStyles} />
        </div>
      );
    }
    if (type === 'textarea') {
      return (
        <div>
          <textarea className={`${styles.textareaCtn}`}></textarea>
        </div>
      );
    }
    return <></>;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      {type !== 'checkbox' && (
        <div className={`${styles.textCtn}`}>
          <p className="textH6Bold mRight10">{text}</p>
          <p className={`text14 ${styles.text}`}>{bonusText}</p>
        </div>
      )}
      <div className={`${styles.inputCtn}`}>{renderInput()}</div>
    </div>
  );
}
