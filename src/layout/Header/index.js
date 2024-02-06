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
    <div className={`row-2 d-flex align-items-center justify-content-start ${styles.headerCtn}`}>
      <div>
        <img className={styles.logo} src={logo1} alt={'Logo'}></img>
      </div>
      <div className={styles.remainCtn}></div>
      <div
        className="position-relative"
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {isHovered === 1 ? (
          <Button
            name={'Tải lên tài liệu'}
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-TopLeft-15 br-TopRight-15 bg-bgColor5"
            icon1Styles="header"
            icon2Styles="header mLeft10"
            btnStyles="textH6Black bg-bgColor5 header mHorizontal5"
            icon1={<FontAwesomeIcon icon={icon.fileArrowUp} size={`lg`} />}
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
        ): (
          <Button
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 bg-bgColor5"
            icon1Styles="header"
            icon1={<FontAwesomeIcon icon={icon.fileArrowUp} size={`lg`} />}
            onClick={() => ({})}
          />
        )}
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
        {isHovered === 2 ? (
          <Button
            name={'Tìm kiếm'}
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-TopLeft-15 br-TopRight-15 bg-bgColor5"
            icon1Styles="header"
            icon2Styles="header mLeft10"
            btnStyles="textH6Black bg-bgColor5 header mHorizontal5"
            icon1={<FontAwesomeIcon icon={icon.magnifyingGlass} size={`lg`}/>}
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
        ): (
          <Button
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 bg-bgColor5"
            icon1Styles="header"
            icon1={<FontAwesomeIcon icon={icon.magnifyingGlass} size={`lg`}/>}
            onClick={() => ({})}
          />
        )}
        {isHovered === 2 && (
          <HoverModal
            ctnStyles="bg-bgColor5 pHorizontal2"
            icon={SEARCH_TABS_ICON}
            name={SEARCH_TABS}
            onClick={[() => console.log(1), () => console.log(2)]}
          />
        )}
      </div>
      <div
        className="position-relative"
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
      >
        <Button
          ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 bg-bgColor3"
          icon1Styles="text"
          icon1={<FontAwesomeIcon icon={icon.bell} size={`2x`}/>}
          onClick={() => ({})}
        />
      </div>
      <div
        className="position-relative"
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave()}
      >
        {isHovered === 3 ? (
          <Button
            name={renderUserInfo()}
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-TopLeft-15 br-TopRight-15 bg-header"
            icon2Styles="text mLeft10"
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
        ) : (
          <Button
            name={renderUserInfo()}
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 bg-header"
            icon2Styles="text mLeft10"
            icon2={<FontAwesomeIcon icon={icon.chevronDown} />}
            onClick={() => ({})}
          />
        )}
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
  );
}
