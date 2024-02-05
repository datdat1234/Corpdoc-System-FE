import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import icon from 'util/js/icon';
import Button from 'common/Button';
import Input from 'common/Input';
import CriteriaTag from 'common/CriteriaTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UploadPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleNavigate = () => {
    navigate(`/result-page`, { state: { type: 'file', status: 'error' } });
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.navCtn}`}>
        <Button
          name="Tải lên tài liệu cho miền Đồ án tốt nghiệp _ Luận văn tốt nghiệp"
          ctnStyles="h-100 text18SemiBold border-bottom-1 border-style-solid border-bg5-60 br-10"
          btnStyles="bg-bgColor4 pLeft10"
          icon1Styles="w-24 h-24 d-flex justify-content-center align-items-center"
          icon1={<FontAwesomeIcon icon={icon.angleLeft} />}
          onClick={() => console.log(1)}
        />
      </div>
      <div className={`${styles.input}`}>
        <div className={`${styles.btnUploadCtn}`}>
          <Button
            name="Quét tài liệu"
            ctnStyles="h-100 text14Medium bg-main br-10 pHorizontal15"
            btnStyles="bg-main pLeft10"
            icon1Styles="fs-16 d-flex justify-content-center align-items-center mRight10"
            icon1={<FontAwesomeIcon icon={icon.camera} />}
          />
          <p className="textH6Bold mHorizontal10">Hoặc</p>
          <Button
            name="Tải từ hệ thống"
            ctnStyles="h-100 text14Medium bg-bgColor5 br-10 pHorizontal15"
            btnStyles="bg-bgColor5 pLeft10 white"
            icon1Styles="fs-16 d-flex justify-content-center align-items-center mRight10 white"
            icon1={<FontAwesomeIcon icon={icon.link} />}
          />
        </div>
        <Input type="text" text="Tên tài liệu" bonusText="(tối đa 50 ký tự)" />
        <Input type="text" text="Tác giả" bonusText="(Tối đâ 20 ký tự)" />
        <Input type="textarea" text="Mô tả" />
        <Input type="select" text="Tiêu chí của tài liệu" />
        <div className={`${styles.checkboxCtn}`}>
          <CriteriaTag text="Khoa học máy tính" />
          <CriteriaTag text="Khoa học máy tính" />
        </div>
        <div className={`${styles.btnCtn} mBottom10`}>
          <div className={`${styles.btnWrapper}`}>
            <Button
              name="XÁC NHẬN"
              ctnStyles="h-100 textH6Bold br-10 bg-text justify-content-end"
              btnStyles="bg-text white d-flex justify-content-center align-items-center"
              onClick={handleNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
