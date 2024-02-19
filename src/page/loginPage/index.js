import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { AUTH_FORM_WIDTH } from 'util/js/constant';
import { setUserInfo } from '../../redux/action/app';
import LogoContainer from 'common/LogoContainer';
import Logo from 'asset/images/logo.png';
import FormTab from 'common/FormTab';
import FormInput from 'common/FormInput';
import Button from 'common/Button';
import CheckBoxForm from 'common/CheckBoxForm';
import { Form, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function LoginPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const formWidth = AUTH_FORM_WIDTH;
  const [tab, setTab] = useState(1);
  const [isResetPass, setIsResetPass] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleSignupTabClick = (e, data) => {
    setTab(0);
  };

  const handleSigninTabClick = (e, data) => {
    setTab(1);
  };

  const handleSetTab = () => {
    if (tab === 0) setTab(1);
    else setTab(0);
  };

  const handleNavigate = (tab) => {
    if (tab === 0) navigate(`/home`);
    else {
      dispatch(setUserInfo({name: 'Nguyễn Văn A', role: 'manager'}));
      navigate(`/home`);
    }
  };

  const handleResetPass = () => {
    setIsResetPass(true);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderForm = () => {
    if (tab === 0)
      return (
        <>
          <FormInput name="Tên của bạn" type="text" />
          <FormInput name="Email" type="text" />
          <FormInput name="Mật khẩu" type="password" />
          <FormInput name="Nhập lại mật khẩu" type="password" />
        </>
      );
    else
      return (
        <>
          <FormInput name="Email" type="text" />
          <FormInput name="Mật khẩu" type="password" />
          <div
            className={`d-flex justify-content-between align-items-center ${styles.forgotPass}`}
          >
            <CheckBoxForm text="Ghi nhớ mật khẩu" textStyles="text14" />
            <p
              className={`text14 ${styles.hoverPass}`}
              onClick={handleResetPass}
            >
              Quên mật khẩu?
            </p>
          </div>
        </>
      );
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className="position-relative">
      <LogoContainer src={Logo} alt="CorpDoc Logo" />
      <div
        className={`position-absolute end-0 d-flex flex-column zIndex-500 justify-content-center align-items-center ${styles.loginContainer}`}
        style={{ minWidth: `${formWidth}px` }}
      >
        <p className={`text36Bold black ${styles.welcome}`}>
          Chào mừng đến với CorpDoc!
        </p>
        <div
          className={`d-flex flex-column justify-content-center align-items-center bg-bgColor4 ${styles.formContainer}`}
        >
          {!isResetPass && (
            <div>
              {/* <FormTab
                tabHeader={['Đăng ký', 'Đăng nhập']}
                action={[handleSignupTabClick, handleSigninTabClick]}
                tabStyles={[
                  'p20 br-TopLeft-10 br-BottomRight-10',
                  'p20 br-TopRight-10 br-BottomLeft-10',
                ]}
                boxShadows={['formTab-1', 'formTab-2']}
                activeTab={tab}
              /> */}
              <div
                className={`d-flex flex-column justify-content-center align-items-center ${styles.formWrapper}`}
              >
                <div className={`w-100 ${styles.textWrapper}`}>
                  <h6 className="textH6 black mBottom15">
                    {tab === 0 ? 'Cùng bắt đầu nào!' : 'Mừng bạn quay trở lại!'}
                  </h6>
                  <p className="text24Medium black">
                    {tab === 0 ? 'Tạo tài khoản của bạn' : 'Đăng nhập ngay'}
                  </p>
                </div>
                <div
                // className={`d-flex flex-column justify-content-between align-content-center ${
                //   tab === 0 ? styles.infoWrapper : styles.infoWrapperSignIn
                // }`}
                >
                  {renderForm()}
                  <div className={styles.authButton}>
                    <Button
                      name={tab === 1 ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
                      ctnStyles="w-100 h-56 bg-text br-8"
                      btnStyles="text-center textH6Bold white bg-text"
                      onClick={() => {
                        console.log(1);
                        handleNavigate(tab);
                      }}
                    />
                  </div>
                  {/* <div className="d-flex justify-content-center">
                <p className={`${styles.haveAccount}`}>Đã có tài khoản?</p>{' '}
                &nbsp;
                <div
                  className={`text14Bold black ${styles.signIn}`}
                  onClick={() => handleSetTab()}
                >
                  <span className="pointer">
                    {tab === 0 ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
                  </span>
                </div>
              </div> */}
                </div>
              </div>
            </div>
          )}
          {isResetPass && (
            <div className={`${styles.forgotPassCtn}`}>
              <div className={styles.tabCtn}>
                <Button
                  name="Cài lại mật khẩu"
                  ctnStyles="h-68 pLeft25"
                  btnStyles="d-flex align-items-center justify-content-center text24Bold bg-bgColor4"
                  icon1={<FontAwesomeIcon icon={icon.angleLeft} />}
                  icon1Styles=""
                  onClick={() => setIsResetPass(false)}
                />
              </div>
              <div className={`${styles.contactCtn}`}>
                <p className="lh-sm text-center textH5">
                  Vui lòng liên hệ với{' '}
                  <span className="text20Black">Trưởng phòng ban</span> để có
                  thể cài đặt lại mật khẩu.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
