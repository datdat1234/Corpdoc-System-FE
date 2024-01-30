import React, { useState } from 'react';
import logo1 from 'asset/images/logo1.png';
import styles from './styles.module.css';
import Button from 'common/Button';
import HoverModal from 'common/HoverModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileArrowUp,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import color from 'util/color';
import {
  TEXT_STYLES,
  UPLOAD_TABS,
  UPLOAD_TABS_ICON,
  SEARCH_TABS,
  SEARCH_TABS_ICON,
  PROFILE_TABS,
  PROFILE_TABS_ICON,
} from 'util/constant';

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

  const lastUploadBtnStyles = {
    backgroundColor: color.bgColor5,
    fontSize: TEXT_STYLES.h6Black.size,
    fontWeight: TEXT_STYLES.h6Black.weight,
    color: color.main,
  };

  const lastProfileBtnStyles = {
    backgroundColor: color.main,
    fontSize: TEXT_STYLES.h6Black.size,
    fontWeight: TEXT_STYLES.h6Black.weight,
    color: color.bgColor5,
  };

  const [isHovered, setIsHovered] = useState(0);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleMouseEnter = (i) => {
    setIsHovered(i);
  };

  const handleMouseLeave = () => {
    setIsHovered(0);
  };
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
        <div
          className="position-relative"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave()}
        >
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
          {isHovered == 1 && (
            <HoverModal
              ctnStyles={{
                backgroundColor: color.bgColor5,
                padding: '0px 2px',
                paddingTop: '5%',
              }}
              icon={UPLOAD_TABS_ICON}
              name={UPLOAD_TABS}
              lastBtnStyles={lastUploadBtnStyles}
              lastBtnColor={color.bgColor5}
              onClick={[
                () => console.log(1),
                () => console.log(2),
                () => console.log(3),
                () => console.log(4),
              ]}
              smallHoverIDs={[2]}
            />
          )}
        </div>
        <div
          className="position-relative"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave()}
        >
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
          {isHovered == 2 && (
            <HoverModal
              ctnStyles={{
                backgroundColor: color.bgColor5,
                padding: '0px 2px',
                paddingTop: '5%',
              }}
              icon={SEARCH_TABS_ICON}
              name={SEARCH_TABS}
              onClick={[() => console.log(1), () => console.log(2)]}
            />
          )}
        </div>
        <div style={{ width: '143px' }}></div>
        <div
          className="position-relative"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        >
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
          {isHovered == 3 && (
            <HoverModal
              ctnStyles={{
                backgroundColor: color.header,
                padding: '0px 2px',
                paddingTop: '5%',
              }}
              icon={PROFILE_TABS_ICON}
              name={PROFILE_TABS}
              lastBtnStyles={{
                ...lastProfileBtnStyles,
                backgroundColor: color.header,
              }}
              lastBtnColor={color.header}
              spacerColor={color.header}
              onClick={[
                () => console.log(1),
                () => console.log(2),
                () => console.log(3),
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
}
