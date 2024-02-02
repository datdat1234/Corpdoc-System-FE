import React from 'react';
import styles from './styles.module.css';
import Button from 'common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SmallHoverModal({
  name = [],
  icon = [],
  onClick = [],
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
  const renderChild = () => {
    const items = [];
    for (let i = 0; i < name.length; i++) {
      items.push(
        <div className={`w-100 ${i === 0 && styles.border}`} key={i}>
          <Button
            name={name[i]}
            ctnStyles="flex-row h-57 pHorizontal20 bg-bgColor4"
            btnStyles="text14SemiBold bg-bgColor4 text"
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
