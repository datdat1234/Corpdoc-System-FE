import React, { useState } from 'react';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import Button from 'common/Button';
import IconButton from 'common/IconButton';
import Input from 'common/Input';
import { PROFILE_PAGE_TABS, PROFILE_PAGE_ICONS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function ProfilePage() {
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
    for (let i = 0; i < PROFILE_PAGE_TABS.length; i++) {
      tabItems.push(
        <div key={i}>
          <Button
            name={PROFILE_PAGE_TABS[i]}
            btnStyles={`textH6ExtraBold ${
              currentTab === i ? 'bg-main' : 'bg-bgColor4'
            } mLeft10`}
            ctnStyles={`h-39 br-TopRight-10 br-BottomRight-10 pLeft10 border-bottom-1 border-main border-style-solid
              ${currentTab === i ? 'bg-main' : 'bg-bgColor4'}
            `}
            icon1Styles="w-24 h-24 d-flex justify-content-center align-items-center"
            onClick={() => {
              setCurrentTab(i);
            }}
            icon1={<FontAwesomeIcon icon={PROFILE_PAGE_ICONS[i]} />}
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
      <div className={`${styles.navCtn}`}>
        <SidebarTab
          tabItems={renderTabItems()}
          ctnStyles="pVertical50 pRight40"
        />
      </div>
      <div className={`${styles.contentCtn}`}>
        <div className={`${styles.avtCtn}`}>
          <div className={`${styles.avtWrapper}`}>
            <div className={`${styles.edit}`}>
              <IconButton
                icon={
                  <FontAwesomeIcon
                    icon={icon.pencil}
                    className="bg-text white"
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className={`${styles.infoCtn}`}>
          <div className={`${styles.rowCtn}`}>
            <div className={`${styles.inputRowDetailCtn} mRight10`}>
              <Input
                type="select"
                text="Phòng ban"
                placeholder="Phòng nhân sự"
              />
            </div>
            <div className={`${styles.inputRowDetailCtn}`}>
              <Input type="select" text="Phân quyền" placeholder="Nhân sự" />
            </div>
          </div>
          <Input
            type="text"
            text="Tên tài khoản"
            placeholder="user1_group1_company"
          />
          <Input type="text" text="Họ và tên" placeholder="Nguyễn Văn A" />
          <div className={`${styles.rowCtn}`}>
            <div className={`${styles.inputRowDetailCtn} mRight10`}>
              <Input
                type="select"
                text="Phòng ban"
                placeholder="Phòng nhân sự"
              />
            </div>
            <div className={`${styles.inputRowDetailCtn}`}>
              <Input type="select" text="Phân quyền" placeholder="Nhân sự" />
            </div>
          </div>
          <div className={`${styles.btnCtn}`}>
            <div className={`${styles.btnWrapper}`}>
              <Button
                name="XÁC NHẬN"
                ctnStyles="h-100 textH6Bold br-10 bg-text justify-content-end"
                btnStyles="bg-text white d-flex justify-content-center align-items-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
