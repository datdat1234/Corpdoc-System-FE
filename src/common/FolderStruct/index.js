import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faCaretRight,
  faFolder,
} from '@fortawesome/free-solid-svg-icons';

export default function FolderStruct({
  name = '',
  onClick,
  ctnStyles = {},
  ident,
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [isExpand, setIsExpand] = useState(false);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleExpand = () => {
    setIsExpand(!isExpand);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderChildren = () => {
    if (!isExpand) return null;
    const tabItems = [];
    for (let i = 0; i < 5; i++) {
      tabItems.push(
        <div key={i}>
          <FolderStruct name={`Folder ${i}`} onClick={() => {}} ident={i} />
        </div>
      );
    }
    return tabItems;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.ctn}`}>
      <div
        className={`w-100 ${styles.root}`}
        style={ctnStyles}
        onClick={onClick}
      >
        <div
          className={`${styles.icon} ${styles.expandIcon}`}
          onClick={handleExpand}
        >
          {isExpand ? (
            <FontAwesomeIcon icon={faCaretDown} />
          ) : (
            <FontAwesomeIcon icon={faCaretRight} />
          )}
        </div>
        <div className={`${styles.icon} ${styles.folderIcon}`}>
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <button type="button" className={`${styles.button}`} onClick={onClick}>
          {name}
        </button>
      </div>
      {renderChildren()}
    </div>
  );
}
