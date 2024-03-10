import React, { useRef } from 'react';
import UseOnClickOutside from 'util/hook/useOnClickOutside';
import styles from './styles.module.css';
import Button from 'common/Button';
import { BREAD_CRUMB_TABS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BreadCrumbModal({ctnStyles = '', setModal}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const ref = useRef();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  UseOnClickOutside(ref, () => setModal(false));
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
    for (let i = 0; i < tabLength; i++) {
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
      ref={ref}
      className={`pHorizontal20 ${styles.root} ${ctnStyles}`}
    >
      {renderTabs()}
    </div>
  );
}
