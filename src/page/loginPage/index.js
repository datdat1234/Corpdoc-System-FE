import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { AUTH_FORM_WIDTH } from '../../util/constant';
import LogoContainer from '../../common/LogoContainer';
import Logo from '../../asset/images/logo.png';
import { textStyle } from '../../util/helper';
import color from '../../util/color';
import FormTab from '../../common/FormTab';
import FormInput from '../../common/FormInput';
import FormBtn from '../../common/FormBtn';
import CheckBoxForm from '../../common/CheckBoxForm';
import { TEXT_STYLES } from '../../util/constant';

export default function LoginPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const formWidth = AUTH_FORM_WIDTH;
  const [tab, setTab] = useState(0);
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

  const renderForm = () => {
    if (tab == 0)
      return (
        <>
          <FormInput
            name={'Tên của bạn'}
            type="text"
            inputStyles={{
              maxHeight: '56px',
              flex: '1',
            }}
          />
          <FormInput
            name={'Email'}
            type="text"
            inputStyles={{
              maxHeight: '56px',
              flex: '1',
            }}
          />
          <FormInput
            name={'Mật khẩu'}
            type="password"
            inputStyles={{
              maxHeight: '56px',
              flex: '1',
            }}
          />
          <FormInput
            name={'Nhập lại mật khẩu'}
            type="password"
            inputStyles={{
              maxHeight: '56px',
              flex: '1',
            }}
          />
        </>
      );
    else
      return (
        <>
          <FormInput
            name={'Email'}
            type="text"
            inputStyles={{
              maxHeight: '56px',
              flex: '1',
            }}
          />
          <FormInput
            name={'Mật khẩu'}
            type="password"
            inputStyles={{
              maxHeight: '56px',
              flex: '1',
            }}
          />
          <div className={`d-flex justify-content-between align-items-center ${styles.forgotPass}`}>
            <CheckBoxForm 
              text="Ghi nhớ mật khẩu"
              checkBoxStyles={{
                height: '22px',
                width: '22px',
                marginTop: '0px',
              }}
              textStyles={{
                ...textStyle(
                  TEXT_STYLES.text14.size,
                  TEXT_STYLES.text14.weight,
                  "#424242"
                ),
                marginLeft: '10px',
              }}
            />
            <p
              style={{
                ...textStyle(
                  TEXT_STYLES.text14.size,
                  TEXT_STYLES.text14.weight,
                  "#424242"
                ),
              }}
              className={`${styles.hoverPass}`}
            >
              Quên mật khẩu?
            </p>
          </div>
        </>
      );
  };

  const handleSetTab = () => {
    if (tab == 0) setTab(1);
    else setTab(0);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`container-fluid d-flex flex-row ${styles.root}`}>
      <div
        className="col-15"
        style={{ maxWidth: `calc(100vw - ${formWidth}px)` }}
      >
        <LogoContainer
          src={Logo}
          alt="CorpDoc Logo"
          imgStyles={{
            position: 'absolute',
            top: '153px',
            left: '260px',
            height: '622px',
            width: '848px',
          }}
        />
      </div>
      <div
        className="col-9 d-flex justify-content-center align-items-center"
        style={{ minWidth: `${formWidth}px` }}
      >
        <div>
          <p
            className={`${styles.welcome}`}
            style={{ ...textStyle(36, 700, color.black) }}
          >
            Chào mừng đến với CorpDoc!
          </p>
          <div
            className={`d-flex flex-column justify-content-center align-items-center ${styles.formContainer}`}
          >
            <FormTab
              tabHeader={['Đăng ký', 'Đăng nhập']}
              action={[handleSignupTabClick, handleSigninTabClick]}
              tabStyles={[
                {
                  padding: '20px',
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '0px',
                  borderBottomLeftRadius: '0px',
                  borderBottomRightRadius: '10px',
                },
                {
                  padding: '20px',
                  borderTopLeftRadius: '0px',
                  borderTopRightRadius: '10px',
                  borderBottomLeftRadius: '10px',
                  borderBottomRightRadius: '0px',
                },
              ]}
              textStyles={{ ...textStyle(24, 700, color.black) }}
              boxShadows={[
                'inset -3px -3px 10px rgba(0,0,0,0.3)',
                'inset 3px -3px 10px rgba(0,0,0,0.3)',
              ]}
              activeTab={tab}
            />
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${styles.formWrapper}`}
            >
              <div
                className={`w-100 ${styles.textWrapper}`}
                style={{ marginBottom: '40px' }}
              >
                <h6
                  style={{
                    ...textStyle(
                      TEXT_STYLES.h6.size,
                      TEXT_STYLES.h6.weight,
                      color.black
                    ),
                    marginBottom: '15px',
                  }}
                >
                  {tab == 0 ? 'Cùng bắt đầu nào!' : 'Mừng bạn quay trở lại'}
                </h6>
                <p
                  style={{
                    ...textStyle(24, 500, color.black),
                  }}
                >
                  {tab == 0 ? 'Tạo tài khoản của bạn' : 'Đăng nhập ngay'}
                </p>
              </div>
              <div
                className={`d-flex flex-column justify-content-between align-content-center ${
                  tab == 0 ? styles.infoWrapper : styles.infoWrapperSignIn
                }`}
              >
                {renderForm()}
                <FormBtn
                  name={'Đăng Ký'}
                  btnStyles={{
                    maxHeight: '56px',
                    height: '56px',
                    flex: '1',
                    borderRadius: '8px',
                    backgroundColor: color.black,
                    fontSize: `${TEXT_STYLES.h6Bold.size}px`,
                    fontWeight: `${TEXT_STYLES.h6Bold.weight}`,
                    color: color.white,
                  }}
                />
                <div className="d-flex justify-content-center">
                  <p style={{ fontSize: '14px' }}>Đã có tài khoản?</p> &nbsp;
                  <div
                    style={{
                      ...textStyle(
                        TEXT_STYLES.text14Bold.size,
                        TEXT_STYLES.text14Bold.weight,
                        color.black
                      ),
                    }}
                    className={`${styles.signIn}`}
                    onClick={() => handleSetTab()}
                  >
                    <span
                      style={{
                        cursor: 'pointer',
                      }}
                    >
                      {tab == 0 ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
