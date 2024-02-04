import React from 'react';
import BreadCrumb from 'common/BreadCrumb';
import SrcItem from 'common/SrcItem';
import styles from './styles.module.css';
import { HOMEPAGE_ITEM_GRIDS } from 'util/js/constant';
import Pagination from 'common/Pagination';

export default function HomePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const value = [
    {
      text: null,
      type: null,
    },
    {
      text: 'Tên',
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
      text: null,
      type: null,
    },
  ];

  const value1 = [
    {
      text: null,
      type: 'save',
    },
    {
      text: 'Truyện hư cấu',
      type: 'folder',
    },
    {
      text: '1/12/2024 11:52 PM',
      type: 'text',
    },
    {
      text: '1,111,111 KB',
      type: 'text',
    },
    {
      text: null,
      type: 'edit',
    },
  ];

  const value2 = [
    {
      text: null,
      type: 'save',
    },
    {
      text: 'Truyện phi hư cấu',
      type: 'folder',
    },
    {
      text: '1/12/2024 11:52 PM',
      type: 'text',
    },
    {
      text: '1,100,099 KB',
      type: 'text',
    },
    {
      text: null,
      type: 'edit',
    },
  ];

  const value3 = [
    {
      text: null,
      type: 'save',
    },
    {
      text: 'Cây cam ngọt của tôi',
      type: 'file',
    },
    {
      text: '1/12/2024 11:52 PM',
      type: 'text',
    },
    {
      text: '200 KB',
      type: 'text',
    },
    {
      text: null,
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
      <div>
        <BreadCrumb />
        <div className="w-100">
          <SrcItem grid={HOMEPAGE_ITEM_GRIDS} value={value} />
          <SrcItem grid={HOMEPAGE_ITEM_GRIDS} value={value1} />
          <SrcItem grid={HOMEPAGE_ITEM_GRIDS} value={value2} />
          <SrcItem grid={HOMEPAGE_ITEM_GRIDS} value={value3} />
        </div>
      </div>
      <div className={`${styles.pagination}`}>
        <Pagination />
      </div>
    </div>
  );
}
