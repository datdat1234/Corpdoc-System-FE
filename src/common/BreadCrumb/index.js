import React, { useState } from 'react';
import styles from './styles.module.css';
import BreadCrumbModal from 'common/BreadCrumbModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export default function BreadCrumb({}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [modal, setModal] = useState(false);
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

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`w-100 pHorizontal10 ${
        modal ? 'br-TopLeft-15 br-TopRight-15' : 'br-15'
      } ${styles.root}`}
      onClick={() => setModal(!modal)}
    >
      <FontAwesomeIcon icon={faAngleRight} />
      <p className="pHorizontal10 textH6ExtraBold">
        Phòng Nhân sự / Thư viện sách cá nhân
      </p>
      <FontAwesomeIcon icon={faCaretDown} />
      <i className="fa-solid fa-caret-up"></i>
      {modal && <BreadCrumbModal />}
    </div>
  );
}
