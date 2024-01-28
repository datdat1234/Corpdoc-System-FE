import React from 'react';
import logo1 from '../../asset/images/logo1.png';
import styles from './styles.module.css';
import Button from '../../common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileArrowUp,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import color from '../../util/color';
import { TEXT_STYLES } from '../../util/constant';

export default function Header() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const ctnStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '57px',
    borderRadius: '15px',
    padding: '0 5px',
    backgroundColor: color.bgColor5,
  };

  const btnStyles = {
    backgroundColor: color.bgColor5,
    color: color.header,
    fontSize: TEXT_STYLES.h6Black.size,
    fontWeight: TEXT_STYLES.h6Black.weight,
  };

  const iconStyles = {
    color: color.header,
    padding: '10px',
  };
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
  const renderUserInfo = () => {
    return (
      <div>
        <p className={`${styles.name}`}>Nguyễn Văn A</p>
        <p className={`${styles.role}`}>Người dùng</p>
      </div>
    );
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`row-2 ${styles.headerCtn}`}>
      <div className="h-100 d-flex align-items-center justify-content-around">
        <div className="h-100 d-flex align-items-center">
          <img className={styles.logo} src={logo1} alt={'Logo'}></img>
        </div>
        <div>
          <Button
            name={'Tải lên tài liệu'}
            ctnStyles={ctnStyles}
            icon1Styles={iconStyles}
            icon2Styles={iconStyles}
            btnStyles={btnStyles}
            icon1={<FontAwesomeIcon icon={faFileArrowUp} />}
            icon2={<FontAwesomeIcon icon={faChevronDown} />}
            onClick={() => ({})}
          />
        </div>
        <div>
          <Button
            name={'Tìm kiếm'}
            ctnStyles={ctnStyles}
            icon1Styles={iconStyles}
            icon2Styles={iconStyles}
            btnStyles={btnStyles}
            icon1={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            icon2={<FontAwesomeIcon icon={faChevronDown} />}
            onClick={() => ({})}
          />
        </div>
        <div style={{ width: '143px' }}></div>
        <div>
          <Button
            name={renderUserInfo()}
            ctnStyles={{
              ...ctnStyles,
              padding: '0 5px 0 25px',
              backgroundColor: color.header,
            }}
            icon2Styles={{ ...iconStyles, color: color.text }}
            icon2={<FontAwesomeIcon icon={faChevronDown} />}
            onClick={() => ({})}
          />
        </div>
      </div>
    </div>
  );
}
