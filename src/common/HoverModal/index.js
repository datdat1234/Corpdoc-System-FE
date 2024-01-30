import React, { useState } from 'react';
import styles from './styles.module.css';
import Button from 'common/Button';
import SmallHoverModal from 'common/SmallHoverModal';
import color from 'util/color';
import {
  TEXT_STYLES,
  SMALL_HOVER_TABS,
  SMALL_HOVER_ICONS,
} from 'util/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HoverModal({
  ctnStyles = {},
  icon = [],
  name = [],
  onClick = [],
  lastBtnStyles = {},
  lastBtnColor = color.bgColor4,
  spacerColor = color.bgColor5,
  smallHoverIDs = [],
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const rootStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '57px',
    padding: '5px',
    paddingRight: '10px',
  };

  const hoverBtnStyles = {
    backgroundColor: color.bgColor4,
    color: color.text,
    marginLeft: '10px',
    fontSize: TEXT_STYLES.text14SemiBold.size,
    fontWeight: TEXT_STYLES.text14SemiBold.weight,
    textAlign: 'left',
  };

  const [isHovered, setIsHovered] = useState(-1);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const checkLastBtn = (i) => {
    if (lastBtnColor != color.bgColor4) {
      if (i == name.length - 1) return false;
      else return true;
    } else {
      return true;
    }
  };

  const checkLastBtn2 = (i) => {
    if (lastBtnColor != color.bgColor4) {
      return false;
    } else {
      if (i == name.length - 1) return true;
      else return false;
    }
  };

  const checkLastBtn3 = (i) => {
    if (lastBtnColor != color.bgColor4) {
      return i == name.length - 1;
    } else {
      return true;
    }
  };

  const handleMouseEnter = (i) => {
    setIsHovered(i);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1)
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderSearchModal = () => {
    const tabItems = [];
    for (let i = 0; i < name.length; i++) {
      tabItems.push(
        <div
          className="w-100 position-relative"
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Button
            name={name[i]}
            ctnStyles={{
              ...rootStyles,
              backgroundColor:
                i == name.length - 1 ? lastBtnColor : color.bgColor4,
              borderRadius: checkLastBtn(i) ? 'none' : '15px',
              ...(checkLastBtn2(i) && {
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
                marginBottom: '2px',
              }),
              paddingLeft: checkLastBtn3(i) && '10px',
            }}
            icon1Styles={{ color: color.header, padding: i != 3 && 'none' }}
            icon2Styles={{
              color: color.text,
              padding: i == name.length - 1 && 'none',
            }}
            btnStyles={{
              ...hoverBtnStyles,
              ...(i === name.length - 1 && lastBtnStyles),
            }}
            icon1={icon[i].left && <FontAwesomeIcon icon={icon[i].left} />}
            icon2={icon[i].right && <FontAwesomeIcon icon={icon[i].right} />}
            onClick={onClick[i]}
          />
          {renderBorder(i)}
          {isHovered == i && renderSmallHover(i)}
        </div>
      );
    }
    return tabItems;
  };

  const renderBorder = (i) => {
    if (i == 0 || (i < name.length - 1 && i > 1)) {
      if (lastBtnColor != color.bgColor4 && i == name.length - 2) return <></>;
      return (
        <div className={`${styles.spacerCtn}`}>
          <div
            className={`${styles.border1}`}
            style={{ backgroundColor: spacerColor }}
          />
        </div>
      );
    }
    if (i == 1) {
      if (lastBtnColor != color.bgColor4) {
        return (
          <div className={`${styles.spacerCtn}`}>
            <div className={`${styles.border2}`} />
          </div>
        );
      } else {
        if (i < name.length - 1) {
          return (
            <div className={`${styles.spacerCtn}`}>
              <div
                className={`${styles.border1}`}
                style={{ backgroundColor: spacerColor }}
              />
            </div>
          );
        }
      }
      return <></>;
    }
  };

  const renderSmallHover = (i) => {
    if (smallHoverIDs.includes(i)) {
      return (
        <SmallHoverModal name={SMALL_HOVER_TABS} icon={SMALL_HOVER_ICONS} />
      );
    }
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div style={ctnStyles} className={`${styles.root}`}>
      {renderSearchModal()}
    </div>
  );
}
