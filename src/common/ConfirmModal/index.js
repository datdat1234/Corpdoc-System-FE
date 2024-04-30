import React from 'react';
import IconButton from 'common/IconButton';
import Button from 'common/Button';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setUptHomePage } from '../../redux/action/app';
import icon from 'util/js/icon';
import styles from './styles.module.css';

export default function ConfirmModal({ text = '', setShowModal, setValue }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleSetModal = (val1, val2) => {
    setShowModal(val1);
    setValue(val2);
    if(val2) {
      dispatch(setUptHomePage(true));
    }
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.bg}`}>
      <div className={`${styles.root} br-8`}>
        <div className={`${styles.wrapper} br-8`}>
          <div className={`${styles.exitCtn}`}>
            <IconButton
              icon={<FontAwesomeIcon icon={icon.xmark} />}
              onClick={() => handleSetModal(false, false)}
              ctnStyles="fs-24 bgColor5"
            />
          </div>
          <div className="mTop15">
            <div className={`${styles.info}`}>
              <p className="textH5">{`${text}`}</p>
            </div>
          </div>
          <div className={`${styles.btnCtn}`}>
            <div className="mRight10">
              <Button
                name="Đồng ý"
                ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black bg-success white pVertical15"
                onClick={() => handleSetModal(false, true)}
              />
            </div>
            <div>
              <Button
                name="Hủy bỏ"
                ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black bg-error white pVertical15"
                onClick={() => handleSetModal(false, false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
