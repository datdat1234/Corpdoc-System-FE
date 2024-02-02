import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function FormTab({
  tabHeader = [],
  action = [],
  tabStyles = [],
  boxShadows = [],
  activeTab = 0,
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [btnKey, setBtnKey] = useState(activeTab);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    setBtnKey(activeTab);
  }, [activeTab]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleClicked = (e, data) => {
    setBtnKey(e.currentTarget.getAttribute('ident'));
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderTab = () => {
    const length = tabHeader.length;
    if (length === 0) return <></>;

    const tabs = [];
    for (let i = 0; i < length; i++) {
      tabs.push(
        <li
          className="nav-item"
          style={{ width: `calc(100%/${length})` }}
          key={i}
        >
          <button
            type="button"
            className={`zindex-fixed ${styles.button} ${tabStyles[i]} ${
              btnKey === i ? 'bg-bgColor4' : 'bg-bgColor3'
            } ${btnKey !== i && boxShadows[i]}`}
            ident={i}
            onClick={(e, data) => {
              action[i]();
              handleClicked(e, data);
            }}
          >
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <p className="text24Bold black">{tabHeader[i]}</p>
            </div>
          </button>
        </li>
      );
    }

    return tabs;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className="w-100">
      <ul className="nav nav-pills nav-fill">{renderTab()}</ul>
    </div>
  );
}
