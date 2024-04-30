import React, { useState, useEffect } from 'react';
import SrcItem from 'common/SrcItem';
import styles from './styles.module.css';
import { HOMEPAGE_ITEM_GRIDS } from 'util/js/constant';
import Pagination from 'common/Pagination';
import { getCompanies } from 'util/js/APIs';
import { formatCompany } from 'util/js/helper';
import { useSelector, useDispatch } from 'react-redux';
import { setUptHomePage } from '../../redux/action/app';

export default function HomePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  const isLoad = useSelector((state) => state.app.uptHomePage);
  const itemPerPage = 20;
  var header = [
    {
      text: 'Tên công ty',
      type: 'header',
    },
    {
      text: 'Dung lượng',
      type: 'header',
    },
    {
      text: 'Số lượng quản trị viên',
      type: 'header',
    },
    {
      text: 'Số lượng quản lí',
      type: 'header',
    },
    {
      text: 'Số lượng nhân viên',
      type: 'header',
    },
    {
      text: 'Trạng thái',
      type: 'header',
    },
    {
      text: 'Ngày hết hạn',
      type: 'header',
    },
    {
      text: '',
      type: '',
    },
  ];
  const [items, setItems] = useState([]);
  const [crtPage, setCrtPage] = useState(1);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const comRes = await getCompanies();
      if (comRes.status === 200) {
        setItems(comRes?.data?.data?.company);
        dispatch(setUptHomePage(false));
      }
    };

    fetchData();
  }, [isLoad]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderItem = () => {
    const tabItems = [
      <div key={0}>
        <SrcItem grid={HOMEPAGE_ITEM_GRIDS} value={header} />
      </div>,
    ];
    for (let i = 0; i < items.length; i++) {
      if (i >= (crtPage - 1) * itemPerPage && i < crtPage * itemPerPage) {
        tabItems.push(
          <div key={i + 1}>
            <SrcItem
              grid={HOMEPAGE_ITEM_GRIDS}
              value={formatCompany(items[i])}
            />
          </div>
        );
      }
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
          <Pagination
            selectedPage={crtPage}
            setSelectedPage={setCrtPage}
            itemLength={items.length}
            itemPerPage={itemPerPage}
          />
        </div>
      </div>
    </div>
  );
}
