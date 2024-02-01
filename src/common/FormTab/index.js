import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import color from 'util/js/color';

export default function FormTab({
  tabHeader = [],
  action = [],
  tabStyles = [],
  textStyles = {},
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
            className="nav-link zindex-fixed"
            ident={i}
            style={{
              borderRadius: '0',
              ...tabStyles[i],
              backgroundColor: btnKey == i ? color.bgColor4 : color.bgColor3,
              boxShadow: btnKey != i && boxShadows[i],
            }}
            onClick={(e, data) => {
              action[i]();
              handleClicked(e, data);
            }}
          >
            <div className="d-flex justify-content-center align-items-center w-100 h-100">
              <p style={textStyles}>{tabHeader[i]}</p>
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
