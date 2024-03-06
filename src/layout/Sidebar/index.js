import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import FolderStruct from 'common/FolderStruct';
import Button from 'common/Button';
import {
  SIDEBAR_TABS,
  SIDEBAR_ICONS,
  SIDEBAR_TABS_ADMIN,
  SIDEBAR_ICONS_ADMIN,
  SIDEBAR_STRUCTURE,
} from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getChildByFolderId } from 'util/js/APIs';

export default function Sidebar() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [child, setChild] = useState([]);
  const userInfo = useSelector((state) => state.app.userInfo);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const rootId = await localStorage.getItem('root');
      const childRes = await getChildByFolderId(rootId);
      setChild(childRes?.data?.data?.child);
    };

    fetchData();
  }, []);
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
    if (userInfo.Role === 'Admin') {
      for (let i = 0; i < SIDEBAR_TABS_ADMIN.length; i++) {
        tabItems.push(
          <div
            key={SIDEBAR_TABS_ADMIN.length - i + 2}
            className={`mBottom5 ${styles.tabCtn}`}
          >
            <Button
              name={SIDEBAR_TABS_ADMIN[i]}
              btnStyles={`textH6ExtraBold ${styles.buttonText}
              ${currentTab === i ? 'bg-header' : 'bg-bgColor4'}`}
              ctnStyles={`br-TopRight-10 br-BottomRight-10 p10 border-bottom-1 border-header border-style-solid
                ${currentTab === i ? 'bg-header' : 'bg-bgColor4'}
              `}
              icon1={<FontAwesomeIcon icon={SIDEBAR_ICONS_ADMIN[i]} />}
              onClick={() => {
                setCurrentTab(i);
              }}
            />
          </div>
        );
      }
    }
    for (let i = 0; i < SIDEBAR_TABS.length; i++) {
      if (
        userInfo.Role === 'Manager' ||
        (userInfo.Role === 'Staff' && SIDEBAR_TABS[i] !== 'Thùng rác')
      ) {
        tabItems.push(
          <div key={i} className={`mBottom5 ${styles.tabCtn}`}>
            <Button
              name={SIDEBAR_TABS[i]}
              btnStyles={`textH6ExtraBold ${styles.buttonText}
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
            ident={SIDEBAR_STRUCTURE[i].id}
          />
        </div>
      );
    }
    return tabItems;
  };

  const renderUserStructs = () => {
    if (!child) return [];
    const tabItems = [];
    for (let i = 0; i < child.length; i++) {
      tabItems.push(
        <div key={i}>
          <FolderStruct
            name={child[i].Name}
            ident={child[i].FolderID}
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
      <SidebarTab
        tabItems={renderTabItems()}
        ctnStyles="pVertical20 pRight60"
      />
      <div className={`${styles.folderStruct}`}>
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
