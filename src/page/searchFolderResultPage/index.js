import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Button from 'common/Button';
import SrcItem from 'common/SrcItem';
import Pagination from 'common/Pagination';
import { SEARCH_RESULT_GRIDS } from 'util/js/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

export default function SearchFolderResultPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const value = [
    {
      text: '',
      type: '',
    },
    {
      text: 'Tên',
      type: 'header',
    },
    {
      text: 'Phòng ban',
      type: 'header',
    },
    {
      text: 'Ngày đăng tải',
      type: 'header',
    },
    {
      text: 'Kích thước',
      type: 'header',
    },
    {
      text: 'Địa điểm',
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
      type: 'save',
    },
    {
      text: 'Truyện hư cấu',
      type: 'folder',
    },
    {
      text: 'Phòng nhân sự',
      type: 'text',
    },
    {
      text: '1/12/2024 11:52 PM',
      type: 'text',
    },
    {
      text: '1,111,111 KB',
      type: 'text-size',
    },
    {
      text: 'Tài liệu của tôi/Truyện hư cấu',
      type: 'text',
    },
    {
      text: '',
      type: 'edit',
    },
  ];
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
          name="Kết quả tìm kiếm"
          ctnStyles="h-100 text18SemiBold border-bottom-1 border-style-solid border-bg5-60 br-10"
          btnStyles="bg-bgColor4 pLeft10"
          icon1Styles="w-24 h-24 d-flex justify-content-center align-items-center"
          icon1={<FontAwesomeIcon icon={icon.angleLeft} />}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className={`${styles.resultCtn}`}>
        <div className="w-100">
          <SrcItem grid={SEARCH_RESULT_GRIDS} value={value} />
          <SrcItem grid={SEARCH_RESULT_GRIDS} value={value1} />
          <SrcItem grid={SEARCH_RESULT_GRIDS} value={value1} />
          <SrcItem grid={SEARCH_RESULT_GRIDS} value={value1} />
        </div>
        <div className={`${styles.pagination}`}>
          <p className="text14 mLeft10">
            Tìm thấy <span className="text14Bold">3</span> kết quả thư mục phù
            hợp.
          </p>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
