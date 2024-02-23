import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Button from 'common/Button';
import SrcItem from 'common/SrcItem';
import Pagination from 'common/Pagination';
import Input from 'common/Input';
import { STAFF_MANAGE_GRIDS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function CompanyManagePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckAllInput, setIsCheckAllInput] = useState(true);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////
  
  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const value = [
    {
      text: '',
      type: 'checkbox',
      isChecked: isChecked && isCheckAllInput,
      setCheckAll: setIsChecked,
      isCheckAllInput: true,
      setIsCheckAllInput: setIsCheckAllInput,
    },
    {
      text: 'Họ và tên',
      type: 'header',
    },
    {
      text: 'Tên tài khoản',
      type: 'header',
    },
    {
      text: 'Phân quyền',
      type: 'header',
    },
    {
      text: '',
      type: '',
    },
  ];

  const value1 = [
    {
      text: '',
      type: 'checkbox',
      isChecked: isChecked,
      setCheckAll: setIsChecked,
      setIsCheckAllInput: setIsCheckAllInput,
    },
    {
      text: 'Nguyễn Văn A',
      type: 'text',
    },
    {
      text: 'user1_group1_company',
      type: 'text',
    },
    {
      text: 'Trưởng phòng',
      type: 'text',
    },
    {
      text: '',
      type: 'approval',
    },
  ];
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`border-bottom-1 border-style-solid border-bg5-60 br-10 ${styles.navCtn}`}>
        <div className='col-12'>
          <Button
            name="PHÒNG NHÂN SỰ"
            ctnStyles="h-100 text24Black"
            btnStyles="bg-bgColor4 pLeft10 main"
            onClick={() => console.log(-1)}
          />
        </div>
        <div className={`${styles.storageCtn} pVertical15 pHorizontal15`}>
          <p className="text14 pVertical5">
            Đã sử dụng 14,62 GB trong tổng số 15 GB (76%)
          </p>
          <div className={`${styles.progressCtn} progress bg-text60`}>
            <div
              className={`${styles.progressBar} progress-bar bg-main`}
              style={{ width: '25%' }}
            ></div>
          </div>
        </div>
      </div>
      <div className={`${styles.contentCtn}`}>
        <div className={`${styles.searchCtn}`}>
          <div className={`${styles.inputCtn} mBottom20`}>
            <div className={`${styles.inputDetailCtn}`}>
              <Input type="row-text" text="Tên" />
            </div>
            <div className={`${styles.inputDetailCtn}`}>
              <Input type="row-text" text="Tài khoản" />
            </div>
          </div>
          <div className={`${styles.inputCtn} justify-content-end`}>
            <div className={`${styles.inputWrapper}`}>
              <Button
                name="Tìm kiếm"
                ctnStyles="pHorizontal43 textH6Bold br-10 bg-header justify-content-end"
                icon1={<FontAwesomeIcon icon={icon.magnifyingGlass} />}
                icon1Styles="fs-20 black"
                btnStyles="bg-header black d-flex justify-content-center align-items-center"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.btnCtn}`}>
          <div className={`${styles.btnWrapper} bg-bgColor3 mRight5`}>
            <Button
              name="Cài đặt lại mật khẩu"
              ctnStyles="pHorizontal15 pVertical10 br-10 text14Bold bg-bgColor3"
              btnStyles="bg-bgColor3 black"
            />
          </div>
          <div className={`${styles.btnWrapper} bg-error`}>
            <Button
              name="Chặn tài khoản"
              ctnStyles="pHorizontal15 pVertical10 br-10 text14Bold bg-error"
              btnStyles="bg-error white"
            />
          </div>
          <div className={`${styles.totalWrapper} text-end main text20Black`}>
            Tổng cộng: 3
          </div>
        </div>
        <div className={`${styles.resultCtn}`}>
          <div className="w-100">
            <SrcItem grid={STAFF_MANAGE_GRIDS} value={value} />
            <SrcItem grid={STAFF_MANAGE_GRIDS} value={value1} />
            <SrcItem grid={STAFF_MANAGE_GRIDS} value={value1} />
          </div>
          <div className={`${styles.pagination}`}>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
}
