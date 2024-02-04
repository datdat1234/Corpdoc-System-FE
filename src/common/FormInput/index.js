import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function FormInput({
  name = '',
  type = 'text',
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [canSeen, setCanSeen] = useState(false);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handlePassword = () => {
    setCanSeen(!canSeen);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`w-100 ${styles.root}`}>
      <input
        type={!canSeen ? type : 'text'}
        className={`form-control ${styles.input}`}
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
      />
      <div className={styles.label}>
        <p className={styles.name}>{name}</p>
      </div>
      {type === 'password' && (
        <div className={styles.icon} onClick={() => handlePassword()}>
          {canSeen ? (
            <FontAwesomeIcon icon={icon.eye} />
          ) : (
            <FontAwesomeIcon icon={icon.eyeSlash} />
          )}
        </div>
      )}
    </div>
  );
}
