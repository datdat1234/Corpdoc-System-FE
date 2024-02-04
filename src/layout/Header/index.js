import React, { useState } from 'react';
import logo1 from 'asset/images/logo1.png';
import styles from './styles.module.css';
import Button from 'common/Button';
import HoverModal from 'common/HoverModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import {
  UPLOAD_TABS,
  UPLOAD_TABS_ICON,
  SEARCH_TABS,
  SEARCH_TABS_ICON,
  PROFILE_TABS,
  PROFILE_TABS_ICON,
} from 'util/js/constant';

export default function Header() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
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
            ctnStyles="flex-row h-57 br-15 bg-bgColor5 pHorizontal5"
            icon1Styles="header p10"
            icon2Styles="header p10"
            btnStyles="textH6Black bg-bgColor5 header"
            icon1={<FontAwesomeIcon icon={icon.fileArrowUp} />}
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
          {isHovered === 1 && (
            <HoverModal
              ctnStyles="bg-bgColor5 pHorizontal2"
              icon={UPLOAD_TABS_ICON}
              name={UPLOAD_TABS}
              lastBtnStyles="textH6Black bg-bgColor5"
              lastBtnColor="main"
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
            ctnStyles="flex-row h-57 br-15 bg-bgColor5 pHorizontal5"
            icon1Styles="header p10"
            icon2Styles="header p10"
            btnStyles="textH6Black bg-bgColor5 header"
            icon1={<FontAwesomeIcon icon={icon.magnifyingGlass} />}
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
          {isHovered === 2 && (
            <HoverModal
              ctnStyles="bg-bgColor5 pHorizontal2"
              icon={SEARCH_TABS_ICON}
              name={SEARCH_TABS}
              onClick={[() => console.log(1), () => console.log(2)]}
            />
          )}
        </div>
        <div className={`${styles.spacer}`}></div>
        <div
          className="position-relative"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Button
            name={renderUserInfo()}
            ctnStyles="flex-row h-57 br-15 bg-header pRight5 pLeft25"
            icon2Styles="text p10"
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
          {isHovered === 3 && (
            <HoverModal
              ctnStyles="bg-header pHorizontal2"
              icon={PROFILE_TABS_ICON}
              name={PROFILE_TABS}
              lastBtnStyles="textH6Black bg-header"
              lastBtnColor="bgColor5"
              spacerColor="bg-header"
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
