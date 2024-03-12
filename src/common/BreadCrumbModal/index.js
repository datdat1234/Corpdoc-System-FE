import React, { useRef } from 'react';
import UseOnClickOutside from 'util/hook/useOnClickOutside';
import styles from './styles.module.css';
import Button from 'common/Button';
import { BREAD_CRUMB_TABS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function BreadCrumbModal({
  ctnStyles = '',
  save,
  setSave,
  handleChangeSave
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  
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
  const renderTabs = () => {
    const tabItems = [];
    const tabLength = BREAD_CRUMB_TABS.length;
    tabItems.push(
      <div key={0} className={styles.tabCtn}>
        <Button
          ctnStyles={`h-60 border-bottom-1 border-style-solid`}
          name={!save? "Lưu": "Bỏ lưu"}
          icon1Styles="w-24 h-24 fs-16"
          icon2Styles="w-24 h-24 fs-16"
          btnStyles="bg-bgColor4 text14SemiBold pLeft10"
          icon1={<FontAwesomeIcon icon={!save? icon.bookmark: icon.unBookmark} />}
          onClick={() => handleChangeSave()}
        />
      </div>
    );
    for (let i = 1; i < tabLength; i++) {
      tabItems.push(
        <div key={i} className={styles.tabCtn}>
          <Button
            ctnStyles={`h-60 ${
              i !== tabLength - 1 && 'border-bottom-1 border-style-solid'
            }`}
            name={BREAD_CRUMB_TABS[i].text}
            icon1Styles="w-24 h-24 fs-16"
            icon2Styles="w-24 h-24 fs-16"
            btnStyles="bg-bgColor4 text14SemiBold pLeft10"
            icon1={
              BREAD_CRUMB_TABS[i].icon1 && (
                <FontAwesomeIcon icon={BREAD_CRUMB_TABS[i].icon1} />
              )
            }
            icon2={
              BREAD_CRUMB_TABS[i].icon2 && (
                <FontAwesomeIcon icon={BREAD_CRUMB_TABS[i].icon2} />
              )
            }
            onClick={() => console.log(1)}
          />
        </div>
      );
    }
    return tabItems;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`pHorizontal20 ${styles.root} ${ctnStyles}`}
    >
      {renderTabs()}
    </div>
  );
}
