import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from 'asset/images/logo1.png';
import styles from './styles.module.css';
import Button from 'common/Button';
import NewComModal from 'common/NewComModal';
import icon from 'util/js/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

////////API IMPORT //////////////////////////////////
////////////////////////////////////////////////////
import { logout } from 'util/js/APICaller';

export default function Header() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
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
    <div
      className={`row-2 d-flex align-items-center justify-content-start ${styles.headerCtn}`}
    >
      <div className={styles.logoCtn} onClick={() => navigate('/home')}>
        <img className={styles.logo} src={logo1} alt={'Logo'}></img>
      </div>
      <div className={styles.remainCtn}></div>
      <div className="position-relative">
        <Button
          ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 bg-bgColor5"
          icon1Styles="header"
          icon1={<FontAwesomeIcon icon={icon.plus} size={`lg`} />}
          onClick={() => setIsOpenModal(true)}
        />
      </div>
      <div className="position-relative">
        <Button
          name="Đăng xuất"
          ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black bgColor5 bg-header"
          icon2Styles="text mLeft10"
          icon2={<FontAwesomeIcon icon={icon.rightFromBracket} />}
          onClick={() => logout()}
        />
        {isOpenModal && (
          <NewComModal
            ctnStyles="br-8"
            setModal={() => setIsOpenModal(false)}
          />
        )}
      </div>
    </div>
  );
}
