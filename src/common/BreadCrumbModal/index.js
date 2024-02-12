import React from 'react';
import styles from './styles.module.css';
import Button from 'common/Button';
import { BREAD_CRUMB_TABS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BreadCrumbModal({}) {
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
      className={`w-100 pHorizontal20 br-2 br-BottomLeft-15 br-BottomRight-15 ${styles.root}`}
    >
      {renderTabs()}
    </div>
  );
}
