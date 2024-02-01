import React, { useState } from 'react';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import FolderStruct from 'common/FolderStruct';
import Button from 'common/Button';
import { SIDEBAR_TABS, SIDEBAR_STRUCTURE } from 'util/js/constant';
import { TEXT_STYLES } from 'util/js/constant';
import color from 'util/js/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faBookmark,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const btnStyles = {
    fontSize: TEXT_STYLES.h6ExtraBold.size,
    fontWeight: TEXT_STYLES.h6ExtraBold.weight,
    textAlign: 'left',
  };

  const ctnStyles = {
    height: '39px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    borderBottom: `1px solid ${color.main}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '10px',
  };

  const icon1Styles = {
    width: '24px',
  };

  const [currentTab, setCurrentTab] = useState(0);

  const icons = [
    <></>,
    <FontAwesomeIcon icon={faShare} />,
    <FontAwesomeIcon icon={faBookmark} />,
    <FontAwesomeIcon icon={faTrashCan} />,
  ];
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
  const renderTabItems = () => {
    const tabItems = [];
    for (let i = 0; i < SIDEBAR_TABS.length; i++) {
      tabItems.push(
        <div key={i}>
          <Button
            name={SIDEBAR_TABS[i]}
            btnStyles={{
              ...btnStyles,
              backgroundColor: currentTab == i ? color.main : color.bgColor4,
              marginLeft: i != 0 && '10px',
            }}
            ctnStyles={{
              ...ctnStyles,
              backgroundColor: currentTab == i ? color.main : color.bgColor4,
            }}
            icon1Styles={i != 0 ? icon1Styles : {}}
            onClick={() => {
              setCurrentTab(i);
            }}
            icon1={icons[i]}
          />
        </div>
      );
    }
    return tabItems;
  };

  const renderFolderStructs = () => {
    const tabItems = [];
    for (let i = 0; i < SIDEBAR_STRUCTURE.length; i++) {
      tabItems.push(
        <div key={i}>
          <FolderStruct
            name={SIDEBAR_STRUCTURE[i].name}
            onClick={() => {}}
            ident={SIDEBAR_STRUCTURE[i].id}
          />
        </div>
      );
    }
    return tabItems;
  };

  const renderUserStructs = () => {
    const tabItems = [];
    for (let i = 0; i < 1; i++) {
      tabItems.push(
        <div key={i}>
          <FolderStruct
            name={"Đồ án tốt nghiệp / Luận văn tốt nghiệp"}
            onClick={() => {}}
            ident={1}
          />
        </div>
      );
    }
    return tabItems;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`col-8 ${styles.root}`}>
      <SidebarTab tabItems={renderTabItems()} />
      <div className={`${styles.structCtn}`}>{renderFolderStructs()}</div>
      <div className={`${styles.spacer}`}></div>
      <div className={`${styles.structCtn}`}>{renderUserStructs()}</div>
    </div>
  );
}
