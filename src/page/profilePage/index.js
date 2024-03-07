import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import SidebarTab from 'common/SidebarTab';
import Button from 'common/Button';
import IconButton from 'common/IconButton';
import Input from 'common/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import { getNameRole, setNotification } from 'util/js/helper';
import { editUserInfo, refreshToken } from '../../util/js/APIs';
import { setUserInfo } from '../../redux/action/app';
import { logout } from '../../util/js/APICaller';

export default function ProfilePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const userInfo = useSelector((state) => state.app.userInfo);
  const dispatch = useDispatch();
  const [name, setName] = useState(userInfo.Name);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [handleBtn, setHandleBtn] = useState(false);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleSubmitBtn = async () => {
    setHandleBtn(true);
    if(name !== userInfo.Name || oldPassword || newPassword || confirmPassword) {
      if(oldPassword && !newPassword) {
        setHandleBtn(false);
        setNotification('warning', 'Vui lòng nhập mật khẩu mới!');
        return;
      }
      if(!oldPassword && newPassword) {
        setHandleBtn(false);
        setNotification('warning', 'Vui lòng nhập mật khẩu cũ!');
        return;
      }
      if(oldPassword && newPassword && !confirmPassword) {
        setHandleBtn(false);
        setNotification('warning', 'Vui lòng nhập xác nhận mật khẩu mới!');
        return;
      }
      if((!oldPassword || !newPassword) && confirmPassword) {
        setHandleBtn(false);
        setNotification('warning', 'Vui lòng nhập mật khẩu cũ và mật khẩu mới!');
        return;
      }
      if(newPassword !== confirmPassword) {
        setHandleBtn(false);
        setNotification('error', 'Mật khẩu xác nhận sai. Vui lòng nhập lại!');
        return;
      }
      const data = {
        name: name,
        oldPassword: oldPassword,
        newPassword: newPassword,
      }
      try {
        let isRefreshToken = 0;
        while (isRefreshToken < 2) {
          isRefreshToken++;
          const res = await editUserInfo(data);
          console.log(res);
          if (res.status !== 200) {
            if (res.data.resultCode === "00012") {
              const response = await refreshToken(userInfo.refreshToken);
              if(response?.status === 200) {
                if(response?.data?.resultCode === "00065") {
                  userInfo.accessToken = response?.data?.data?.accessToken;
                  userInfo.refreshToken = response?.data?.data?.refreshToken;
                  dispatch(setUserInfo(userInfo));
                  localStorage.setItem('token', response?.data?.data?.accessToken);
                  continue;
                }
                else {
                  logout();
                  return;
                }
              }
              return;
            }
            else setNotification('error', res.data.resultMessage.vi? res.data.resultMessage.vi : 'Thay đổi thông tin không thành công. Vui lòng thử lại!')
          }
          else {
            if (name !== userInfo.Name) userInfo.Name = name;
            dispatch(setUserInfo(userInfo));
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            setNotification('success', 'Thay đổi thông tin thành công!');
            isRefreshToken = 2;
          }
          setHandleBtn(false);
        }
      } catch (err) {
        logout();
      }
      return;
    }
    setHandleBtn(false);
    setNotification('warning', 'Vui lòng nhập thông tin muốn thay đổi!')
    return;
  }

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.contentCtn}`}>
        {/* <div className={`${styles.avtCtn}`}>
          <div className={`${styles.avtWrapper}`}>
            <img src={userInfo.Avatar} alt="Avatar" width="100%" height="100%"/>
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
        </div> */}
        <div className={`${styles.infoCtn}`}>
          <div className={`${styles.rowCtn}`}>
            <div className={`${styles.inputRowDetailCtn} mRight10`}>
              <Input
                type="text"
                text="Phòng ban"
                value="Phòng nhân sự"
                canChange={false}
              />
            </div>
            <div className={`${styles.inputRowDetailCtn}`}>
              <Input 
                type="text" 
                text="Phân quyền" 
                value={getNameRole(userInfo.Role)} 
                canChange={false}/>
            </div>
          </div>
          <Input
            type="text"
            text="Tên tài khoản"
            value={userInfo.Username}
            canChange={false}
          />
          <Input 
            type="text" 
            text="Họ và tên" 
            value={name} setData={setName} />
          <Input 
            type="password" 
            text="Mật khẩu cũ" 
            placeholder="Nhập mật khẩu cũ" 
            value={oldPassword} setData={setOldPassword} />
          <Input 
            type="password" 
            text="Mật khẩu mới" 
            placeholder="Nhập mật khẩu mới" 
            value={newPassword} setData={setNewPassword} />
          <Input 
            type="password" 
            text="Nhập lại mật khẩu" 
            placeholder="Xác nhận mật khẩu mới"
            value={confirmPassword} setData={setConfirmPassword} />
          {/* <div className={`${styles.rowCtn}`}>
            <div className={`${styles.inputRowDetailCtn} mRight10`}>
              <Input
                type="text"
                text="Mật khẩu mới"
                value="Phòng nhân sự"
              />
            </div>
            <div className={`${styles.inputRowDetailCtn}`}>
              <Input type="text" text="Nhập lại mật khẩu" value="Nhân sự" />
            </div>
          </div> */}
          <div className={`${styles.btnCtn}`}>
            <div className={`${styles.btnWrapper}`}>
              <Button
                name="XÁC NHẬN"
                ctnStyles="h-100 textH6Bold br-10 bg-text justify-content-end"
                btnStyles="bg-text white d-flex justify-content-center align-items-center"
                onClick={() => handleSubmitBtn()}
                isLoad = {handleBtn}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
