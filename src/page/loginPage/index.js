import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { AUTH_FORM_WIDTH } from 'util/js/constant';
import { setUserInfo, setGlobalLoading } from '../../redux/action/app';
import LogoContainer from 'common/LogoContainer';
import Logo from 'asset/images/logo.png';
import FormInput from 'common/FormInput';
import Button from 'common/Button';
import { useNavigate } from 'react-router-dom';
import { login } from 'util/js/APIs';

export default function LoginPage({ setIsLogin }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const formWidth = AUTH_FORM_WIDTH;
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errUsername, setErrUsername] = useState('');
  const [errPassword, setErrPassword] = useState('');
  const [errLogin, setErrLogin] = useState('');
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const checkInputLogin = () => {
    if (username && password) return true;
    if (!username) {
      setErrUsername('Vui lòng điền username.');
    }
    if (!password) {
      setErrPassword('Vui lòng điền mật khẩu.');
    }
    return false;
  };

  const handleNavigate = async () => {
    setErrUsername('');
    setErrPassword('');
    setErrLogin('');
    setIsLoad(true);

    if (!checkInputLogin()) {
      setIsLoad(false);
      return;
    }

    try {
      dispatch(setGlobalLoading(true));

      const res = await login(username, password);
      const resultCode = res?.data?.resultCode;
      if (resultCode !== '00047') {
        setErrLogin(res?.data?.resultMessage.vi);
        dispatch(setGlobalLoading(false));
        setIsLoad(false);
        return;
      }

      const loginInfo = res?.data?.data;
      localStorage.setItem('token', loginInfo.accessToken);

      setIsLogin(loginInfo.accessToken);
      setIsLoad(false);

      dispatch(setUserInfo(loginInfo));
      dispatch(setGlobalLoading(false));

      navigate(`/home`);
    } catch (error) {
      setIsLoad(false);
      dispatch(setGlobalLoading(false));
      console.error('Error:', error);
    }
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderForm = () => {
    return (
      <>
        <FormInput
          name="Username"
          type="text"
          inputVal={username}
          setInputVal={setUsername}
          onEnter={() => {
            handleNavigate();
          }}
        />
        {errUsername && (
          <div className={`mVertical10 text16Bold ${styles.errCtn}`}>
            {errUsername}
          </div>
        )}
        <FormInput
          name="Mật khẩu"
          type="password"
          inputVal={password}
          setInputVal={setPassword}
          onEnter={() => {
            handleNavigate();
          }}
        />
        {errPassword && (
          <div className={`mVertical10 text16Bold ${styles.errCtn}`}>
            {errPassword}
          </div>
        )}
        {errLogin !== '' && (
          <div className={`mVertical10 text16Bold ${styles.errCtn}`}>
            {errLogin}
          </div>
        )}
        <div
          className={`d-flex justify-content-between align-items-center ${styles.forgotPass}`}
        ></div>
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
          CorpDoc System Manager
        </p>
        <div
          className={`d-flex flex-column justify-content-center align-items-center bg-bgColor4 ${styles.formContainer}`}
        >
          <div>
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${styles.formWrapper}`}
            >
              <div className={`w-100 ${styles.textWrapper}`}>
                <p className="text24Medium black">{'Đăng nhập'}</p>
              </div>
              <div>
                {renderForm()}
                <div className={styles.authButton}>
                  <Button
                    name="ĐĂNG NHẬP"
                    ctnStyles="w-100 h-56 bg-text br-8"
                    btnStyles="text-center textH6Bold white bg-text"
                    onClick={() => {
                      handleNavigate();
                    }}
                    isLoad={isLoad}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
