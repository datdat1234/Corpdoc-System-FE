import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import BreadCrumbModal from 'common/BreadCrumbModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function Notification( {noti} ) {
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
  const getIcon = (type) => {
    switch(type) {
      case 'warning': return icon.triangleExclamation;
      case 'error': return icon.circleExclamation;
      default: return icon.circleCheck;
    }
  }

  const getNotiType = (type) => {
    switch(type) {
      case 'warning': return 'bg-warning black';
      case 'error': return 'bg-error white';
      default: return 'bg-success white';
    }
  }

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`br-10 ${getNotiType(noti.type)} ${styles.root}`}>
      <FontAwesomeIcon icon={getIcon(noti.type)} size={'lg'} />
      <p className="mLeft10 text14Medium">
        {noti.message ? noti.message : 'Không có thông báo nào cả!'}
      </p>
    </div>
  );
}
