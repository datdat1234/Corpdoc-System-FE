import React, { useState } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function Pagination({}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [page, setPage] = useState(1);
  const [selectedPage, setSelectedPage] = useState(1);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleDecreasePage = () => {
    setPage(page - 1 < 1 ? 1 : page - 1);
    setSelectedPage(page - 1 < 1 ? 1 : page - 1);
  };

  const handleIncreasePage = () => {
    setPage(page + 1);
    setSelectedPage(page + 1);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderPagination = () => {
    const items = [];
    for (let i = page; i <= page + 2; i++) {
      items.push(
        <div
          key={i}
          className={`pHorizontal10 pVertical5 br-5 text14 ${
            selectedPage === i ? 'bg-main' : 'bg-bgColor4'
          } ${styles.page}`}
          style={{ border: selectedPage !== i && '1px solid #231811' }}
          onClick={() => setSelectedPage(i)}
        >
          {i}
        </div>
      );
    }
    return items;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <button onClick={handleDecreasePage}>
        <FontAwesomeIcon icon={icon.angleLeft} />
      </button>
      <div className={`${styles.pageCtn}`}> {renderPagination()}</div>
      <button onClick={handleIncreasePage}>
        <FontAwesomeIcon icon={icon.angleRight} />
      </button>
    </div>
  );
}
