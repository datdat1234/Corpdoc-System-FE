import React, { useState } from 'react';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import FolderStruct from 'common/FolderStruct';
import Button from 'common/Button';
import {
  SIDEBAR_TABS,
  SIDEBAR_ICONS,
  SIDEBAR_STRUCTURE,
} from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Sidebar() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [currentTab, setCurrentTab] = useState(0);
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
        <div key={i} className={`mBottom5 ${styles.tabCtn}`}>
          <Button
            name={SIDEBAR_TABS[i]}
            btnStyles={`textH6ExtraBold mLeft5 ${styles.buttonText}
            ${currentTab === i ? 'bg-header' : 'bg-bgColor4'}`}
            ctnStyles={`br-TopRight-10 br-BottomRight-10 p10 border-bottom-1 border-header border-style-solid
              ${currentTab === i ? 'bg-header' : 'bg-bgColor4'}
            `}
            icon1={<FontAwesomeIcon icon={SIDEBAR_ICONS[i]} />}
            onClick={() => {
              setCurrentTab(i);
            }}
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
    <div className={`${styles.root}`}>
      <SidebarTab tabItems={renderTabItems()} ctnStyles='pVertical20 pRight60'/>
      <div>
        <div className={`${styles.structCtn}`}>{renderFolderStructs()}</div>
        <div className={`${styles.spacer}`}></div>
        <div className={`${styles.structCtn}`}>{renderUserStructs()}</div>
      </div>
      <div className={`${styles.storageCtn} pVertical15 pHorizontal15`}>
        <p className="text14 pVertical5">
          Đã sử dụng 14,62 GB trong tổng số 15 GB (76%)
        </p>
        <div className={`${styles.progressCtn} progress bg-text60`}>
          <div
            className={`${styles.progressBar} progress-bar bg-main`}
            style={{ width: '25%' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
