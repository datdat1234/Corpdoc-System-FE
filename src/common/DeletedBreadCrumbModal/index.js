import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UseOnClickOutside from 'util/hook/useOnClickOutside';
import styles from './styles.module.css';
import Button from 'common/Button';
import { DELETED_BREAD_CRUMB_TABS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setNotification } from 'util/js/helper';
import { setChangeFolderDelete, setChangeFileDelete } from 'util/js/APIs';

export default function DeletedBreadCrumbModal({
  ctnStyles = '',
  isFolder=true, 
  infoItm='',
  update = false,
  setUpdate=(e)=>{}
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.app.userInfo);
  
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleRestoreBtn = async () => {
    if (isFolder) {
      await setChangeFolderDelete(infoItm, true).then((res) => {
        if (res?.data?.data) {
          setNotification('success', 'Đã khôi phục thành công.');
          setUpdate(!update);
        } else {
          setNotification('error', res?.data?.resultMessage?.vi);
        }
      });
    } else {
      await setChangeFileDelete(infoItm, true).then((res) => {
        if (res?.data?.data) {
          setNotification('success', 'Đã khôi phục thành công.');
          setUpdate(!update);
        } else {
          setNotification('error', res?.data?.resultMessage?.vi);
        }
      });
    }
  };

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderTabs = () => {
    const tabItems = [];
    const tabLength = DELETED_BREAD_CRUMB_TABS.length;
    for (let i = 0; i < tabLength; i++) {
      tabItems.push(
        <div key={i} className={styles.tabCtn}>
          <Button
            ctnStyles={`h-60 ${
              i !== tabLength - 1 && 'border-bottom-1 border-style-solid'
            }`}
            name={DELETED_BREAD_CRUMB_TABS[i].text}
            icon1Styles="w-24 h-24 fs-16"
            icon2Styles="w-24 h-24 fs-16"
            btnStyles="bg-bgColor5 text14SemiBold pLeft10"
            icon1={
              DELETED_BREAD_CRUMB_TABS[i].icon1 && (
                <FontAwesomeIcon icon={DELETED_BREAD_CRUMB_TABS[i].icon1} />
              )
            }
            icon2={
              DELETED_BREAD_CRUMB_TABS[i].icon2 && (
                <FontAwesomeIcon icon={DELETED_BREAD_CRUMB_TABS[i].icon2} />
              )
            }
            onClick={() => handleRestoreBtn()}
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
