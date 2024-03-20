import React from 'react';
import styles from './styles.module.css';
import NotificationTab from 'common/NotificationTab';

export default function NotificationBox({notis}) {
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
  const renderNotis = () => {
    const tabItems = [];
    const tabLength = notis?.length;
    if (notis !== undefined) {
      for (let i = 0; i < tabLength; i++) {
        tabItems.push(
          <div
            key={i}
            className={`${styles.tabCtn}
              ${i === 0 && 'br-TopLeft-15 br-TopRight-2'}`}
          >
            <NotificationTab noti={notis[i]} />
          </div>
        );
      }
    }
    return tabItems;
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`br-15 br-TopRight-2 ${styles.root}`}>
        {renderNotis()}
    </div>
  );
}
