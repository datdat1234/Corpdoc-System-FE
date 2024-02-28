import React, { useState, useEffect } from 'react';
import BreadCrumb from 'common/BreadCrumb';
import SrcItem from 'common/SrcItem';
import styles from './styles.module.css';
import { HOMEPAGE_ITEM_GRIDS } from 'util/js/constant';
import Pagination from 'common/Pagination';
import { getChildByFolderId, getFileByCriteria } from 'util/js/APIs';
import { formatItemFolder, formatItemFile } from 'util/js/helper';
import { useParams } from 'react-router-dom';

export default function FolderPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  var header = [
    {
      text: '',
      type: '',
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
      text: '',
      type: '',
    },
  ];
  const { id } = useParams();
  const [items, setItems] = useState([]);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const childRes = await getChildByFolderId(id);
      const filesRes = await getFileByCriteria(id);
      const folders = childRes?.data?.data?.child;
      const files = filesRes?.data?.data?.files;
      setItems(formatItemFolder(folders).concat(formatItemFile(files)));
    };

    fetchData();
  }, [items]);
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
            grid={HOMEPAGE_ITEM_GRIDS}
            value={i === 0 ? header : items[i - 1]}
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
        <BreadCrumb />
        <div className="w-100">{renderItem()}</div>
        <div className={`${styles.pagination}`}>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
