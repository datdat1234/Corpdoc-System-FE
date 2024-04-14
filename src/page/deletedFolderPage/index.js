import React, { useState, useEffect } from 'react';
import BreadCrumb from 'common/BreadCrumb';
import SrcItem from 'common/SrcItem';
import styles from './styles.module.css';
import { DELETED_ITEM_GRIDS } from 'util/js/constant';
import Pagination from 'common/Pagination';
import { getDeletedFolder } from 'util/js/APIs';
import { formatItemDeletedFolder, formatItemDeletedFile } from 'util/js/helper';
import { upload } from '@testing-library/user-event/dist/upload';

export default function DeletedFolderPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  var header = [
    {
      text: 'Tên',
      type: 'header',
    },
    {
      text: 'Ngày đăng tải',
      type: 'header',
    },
    {
      text: 'Ngày xóa',
      type: 'header',
    },
    {
      text: 'Kích thước',
      type: 'header',
    },
    {
      text: '',
      type: '',
    },
  ];
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(false);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const childRes = await getDeletedFolder();
      const folders = childRes?.data?.data?.folders;
      const files = childRes?.data?.data?.files;
      setItems(formatItemDeletedFolder(folders).concat(formatItemDeletedFile(files)));
    };

    fetchData();
  }, [change]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderItem = () => {
    const tabItems = [];
    for (let i = 0; i <= items.length; i++) {
      tabItems.push(
        <div key={i}>
          <SrcItem
            grid={DELETED_ITEM_GRIDS}
            value={i === 0 ? header : items[i - 1]}
            update={change}
            setUpdate={setChange}
          />
        </div>
      );
    }
    return tabItems;
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.wrapper}`}>
        <div className="w-100">{renderItem()}</div>
        <div className={`${styles.pagination}`}>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
