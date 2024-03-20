import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from 'common/BreadCrumb';
import SrcItem from 'common/SrcItem';
import styles from './styles.module.css';
import { SUPPORT_ITEM_GRIDS } from 'util/js/constant';
import Pagination from 'common/Pagination';
import { getSupportStructure, viewFile } from 'util/js/APIs';
import { formatItemSupportFolder, formatItemFile } from 'util/js/helper';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import IconButton from 'common/IconButton';
import { setFileInfo } from '../../redux/action/app';

export default function SupportFolderPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  var userInfo = useSelector((state) => state.app.userInfo);
  var switchFolder = useSelector((state) => state.app.folderPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  const { typeDoc, level } = useParams();
  const [items, setItems] = useState([]);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      if (level === "1") {
        setItems([]);
        const domainRes = await getSupportStructure(userInfo.DeptID, typeDoc);
        const domain = domainRes?.data?.data?.dataRes;
          setItems(formatItemSupportFolder(domain?.childs));
      }
    };

    fetchData();
  }, [switchFolder]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleViewfile = async (id) => {
    try {
      const response = await viewFile(id);
      const fileInfo = response?.data?.data;
      console.log(fileInfo)
      dispatch(setFileInfo({ ...fileInfo }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOnclick = (i) => {
    if(Number(level)+1 < 3) {
      setItems([])
      setItems(formatItemSupportFolder(items[i][5].childs))
      navigate(`/folder-support/${typeDoc}/${Number(level)+1}`);
    }
    else if (Number(level)+1 === 3) {
      setItems([])
      setItems(formatItemFile(items[i][5].childs))
      navigate(`/folder-support/${typeDoc}/${Number(level)+1}`);
    }
    else {
      handleViewfile(items[i][1].id);
    }
  }

  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderItem = () => {
    const tabItems = [];
    tabItems.push (
      <SrcItem
        grid={SUPPORT_ITEM_GRIDS}
        value={header}
      />
    )
    if (items !== undefined) {
      for (let i = 0; i < items.length; i++) {
        tabItems.push(
          <div key={i}>
            <div className={`${styles.item}`}>
              <IconButton
                icon={<FontAwesomeIcon icon={icon.unBookmark} />}
                ctnStyles="mRight10"
                onClick={() => {console.log('click')}}
              />
              <div
                className={`w-100 ${styles.textCtn}`}
                onClick={() => handleOnclick(i)}
              >
                <div className={`${styles.icon} ${level === "3" ? 'text' : 'main'}`}>{<FontAwesomeIcon icon={level === "3" ? icon.file :icon.folder} />}</div>
                <p className={`w-100 text14Bold mLeft10 ${styles.btn}`}>{items[i][1].text}</p>
              </div>
              <div className={`${styles.editCtn}`}>
                <IconButton
                  icon={<FontAwesomeIcon icon={icon.ellipsisVertical} />}
                  onClick={() => {console.log('click')}}
                />
              </div>
            </div>
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
        {/* <BreadCrumb /> */}
        <div className="w-100">{renderItem()}</div>
        <div className={`${styles.pagination}`}>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
