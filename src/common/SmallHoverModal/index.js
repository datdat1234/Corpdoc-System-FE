import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'common/Button';
import color from 'util/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TEXT_STYLES } from 'util/constant';

export default function SmallHoverModal({
  name = [],
  icon = [],
  onClick = [],
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const ctnStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '57px',
    padding: '0 20px',
    backgroundColor: color.bgColor4,
  };

  const btnStyles = {
    backgroundColor: color.bgColor4,
    fontSize: TEXT_STYLES.text14SemiBold.size,
    fontWeight: TEXT_STYLES.text14SemiBold.weight,
    color: color.text,
  };
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
  const renderChild = () => {
    const items = [];
    for (let i = 0; i < name.length; i++) {
      items.push(
        <div className={`w-100 ${i == 0 && styles.border}`} key={i}>
          <Button
            name={name[i]}
            ctnStyles={ctnStyles}
            btnStyles={btnStyles}
            icon1={icon[i].left && <FontAwesomeIcon icon={icon[i].left} />}
            icon2={icon[i].right && <FontAwesomeIcon icon={icon[i].right} />}
            onClick={onClick[i]}
          />
        </div>
      );
    }
    return items;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <div className={`${styles.root}`}>{renderChild()}</div>;
}
