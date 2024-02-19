import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import icon from 'util/js/icon';
import Button from 'common/Button';
import Input from 'common/Input';
import CriteriaTag from 'common/CriteriaTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SearchFolderPage() {
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
          name="Tìm kiếm thư mục"
          ctnStyles="h-100 text18SemiBold border-bottom-1 border-style-solid border-bg5-60 br-10"
          btnStyles="bg-bgColor4 pLeft10"
          icon1Styles="w-24 h-24 d-flex justify-content-center align-items-center"
          icon1={<FontAwesomeIcon icon={icon.angleLeft} />}
          onClick={() => navigate('/home')}
        />
      </div>
      <div className={`${styles.input}`}>
        <Input type="text" text="Từ khóa" bonusText="(tối đa 50 ký tự)" />
        <div className={`${styles.inputRowCtn}`}>
          <div className={`${styles.inputRowDetailCtn} mRight10`}>
            <Input type="select" text="Phòng ban" />
          </div>
          <div className={`${styles.inputRowDetailCtn}`}>
            <Input type="select" text="Người tạo" />
          </div>
        </div>
        <Input type="select" text="Miền" />
        <Input type="select" text="Thư mục" />
        <div className={`${styles.inputRowCtn}`}>
          <div className={`${styles.inputRowDetailCtn} mRight10`}>
            <Input type="date" text="Ngày tạo" />
          </div>
          <div className={`${styles.inputRowDetailCtn}`}>
            <Input type="date" text="Ngày được xác nhận" />
          </div>
        </div>
        <Input
          type="text"
          text="Tiêu chí"
          bonusText="(Tối đa 20 ký tự. Nhấn phím Enter khi kết thúc 1 tiêu chí. Bạn được chọn tối đa 3 tiêu chí)"
        />
        <div className={`${styles.checkboxCtn}`}>
          <CriteriaTag text="Khoa học máy tính" />
          <CriteriaTag text="Khoa học máy tính" />
        </div>
        <div className={`${styles.checkboxCtn}`}>
          <Input
            type="checkbox"
            text="Thư mục đã lưu"
            textStyles="textH6Bold mRight10"
          />
          <Input
            type="checkbox"
            text="Thư mục được chia sẻ"
            textStyles="textH6Bold"
          />
        </div>
        <div className={`${styles.btnCtn} mBottom10`}>
          <div className={`${styles.btnWrapper}`}>
            <Button
              name="XÁC NHẬN"
              ctnStyles="h-100 textH6Bold br-10 bg-text justify-content-end"
              btnStyles="bg-text white d-flex justify-content-center align-items-center"
              onClick={() => navigate('/search-folder-result')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
