import React, { useState } from 'react';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import FolderStruct from 'common/FolderStruct';
import Button from 'common/Button';
import { SIDEBAR_TABS, SIDEBAR_STRUCTURE } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShare,
  faBookmark,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
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
            btnStyles={`textH6ExtraBold ${
              currentTab === i ? 'bg-main' : 'bg-bgColor4'
            } ${i !== 0 && 'mLeft10'}`}
            ctnStyles={`h-39 br-TopRight-10 br-BottomRight-10 pLeft10 border-bottom-1 border-main border-style-solid
              ${currentTab === i ? 'bg-main' : 'bg-bgColor4'}
            `}
            icon1Styles={i !== 0 ? 'w-24' : ''}
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
            name={'Đồ án tốt nghiệp / Luận văn tốt nghiệp'}
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
