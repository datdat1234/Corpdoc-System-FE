import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import Button from 'common/Button';
import IconButton from 'common/IconButton';
import Input from 'common/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function ProfilePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const userInfo = useSelector((state) => state.app.userInfo);
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

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
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
                type="text"
                text="Phòng ban"
                placeholder="Phòng nhân sự"
              />
            </div>
            <div className={`${styles.inputRowDetailCtn}`}>
              <Input type="text" text="Phân quyền" placeholder="Nhân sự" />
            </div>
          </div>
          <Input
            type="text"
            text="Tên tài khoản"
            placeholder="user1_group1_company"
          />
          <Input type="text" text="Họ và tên" placeholder="Nguyễn Văn A" />
          <Input type="text" text="Mật khẩu cũ" placeholder="**********" />
          <Input type="text" text="Mật khẩu mới" placeholder="**********" />
          <Input type="text" text="Nhập lại mật khẩu" placeholder="**********" />
          {/* <div className={`${styles.rowCtn}`}>
            <div className={`${styles.inputRowDetailCtn} mRight10`}>
              <Input
                type="text"
                text="Mật khẩu mới"
                placeholder="Phòng nhân sự"
              />
            </div>
            <div className={`${styles.inputRowDetailCtn}`}>
              <Input type="text" text="Nhập lại mật khẩu" placeholder="Nhân sự" />
            </div>
          </div> */}
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
