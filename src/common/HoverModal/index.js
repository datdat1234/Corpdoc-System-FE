import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Button from 'common/Button';
import SmallHoverModal from 'common/SmallHoverModal';
import { SMALL_HOVER_TABS, SMALL_HOVER_ICONS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function HoverModal({
  ctnStyles = '',
  icon = [],
  name = [],
  onClick = [],
  lastBtnStyles = '',
  lastBtnColor = 'bg-bgColor4',
  spacerColor = 'bg-bgColor5',
  isFolder = false,
  smallHoverIDs = [],
  setIsHovered1,
  onClickSmallHover=[],
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(-1);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const checkHavingLastBtn = (i) => {
    if (i === name.length - 1 && lastBtnStyles !== '') return true;
    return false;
  };

  const handleMouseEnter = (i) => {
    setIsHovered(i);
  };

  const handleMouseLeave = () => {
    setIsHovered(-1);
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
          className={`position-relative ${styles.itemButton}`}
          key={i}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={() => handleMouseLeave()}
        >
          <Button
            name={name[i]}
            ctnStyles={`w-100 pHorizontal15 pVertical10 
              ${i === name.length - 1 ? lastBtnColor : 'bg-bgColor4 bgColor4'}
              ${
                checkHavingLastBtn(i)
                  ? 'br-BottomRight-10 br-BottomLeft-10 mBottom2'
                  : 'br-BottomRight-15 br-BottomLeft-15'
              } 
            `}
            icon1Styles={`header`}
            icon2Styles={`text mLeft5`}
            btnStyles={`text14SemiBold
              ${i === name.length - 1 ? lastBtnColor : 'bg-bgColor4 black'} 
              ${i === name.length - 1 ? lastBtnStyles : ''} 
            `}
            icon1={
              icon[i]?.left && (
                <FontAwesomeIcon icon={icon[i].left} size={`lg`} />
              )
            }
            icon2={
              icon[i]?.right && (
                <FontAwesomeIcon icon={icon[i].right} size={`lg`} />
              )
            }
            onClick={onClick[i]}
          />
          {renderBorder(i)}
          {isHovered === i && renderSmallHover(i)}
        </div>
      );
    }
    return tabItems;
  };

  const renderBorder = (i) => {
    if (i === 0 || (i < name.length - 1 && i > 1)) {
      if (lastBtnStyles !== '' && i === name.length - 2) return <></>;
      return (
        <div className={`${styles.spacerCtn}`}>
          <div className={`${styles.border1} ${spacerColor}`} />
        </div>
      );
    }
    if (i === 1) {
      if (isFolder) {
        return (
          <div className={`${styles.spacerCtn}`}>
            <div className={`${styles.border2}`} />
          </div>
        );
      } else {
        if (i < name.length - 1) {
          return (
            <div className={`${styles.spacerCtn}`}>
              <div className={`${styles.border1} ${spacerColor}`} />
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
        <SmallHoverModal
          name={SMALL_HOVER_TABS}
          icon={SMALL_HOVER_ICONS}
          onClick={[
            () => {
              handleMouseLeave();
              navigate('/upload-folder', { state: { newStructure: false, id:onClickSmallHover[i-2] } });
              setIsHovered1(0);
            },
            () => {
              handleMouseLeave();
              navigate('/upload-file', { state: { id:onClickSmallHover[i-2] } });
              setIsHovered1(0);
            },
          ]}
        />
      );
    }
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${ctnStyles} ${styles.root}`}>{renderSearchModal()}</div>
  );
}
