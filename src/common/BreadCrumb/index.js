import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import BreadCrumbModal from 'common/BreadCrumbModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import { getBreadCrumb } from 'util/js/APIs';

export default function BreadCrumb({}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const [item, setItems] = useState('');
  var switchFolder = useSelector((state) => state.app.folderPage);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const breadCrumb = await getBreadCrumb(id);
      const path = breadCrumb?.data?.data?.path ?? '';
      setItems(path);
    };

    fetchData();
  }, [switchFolder]);
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`w-100 pHorizontal10 ${
        modal ? 'br-2 br-TopLeft-15 br-TopRight-15' : 'br-15'
      } ${styles.root}`}
      onClick={() => setModal(!modal)}
    >
      <FontAwesomeIcon icon={icon.angleRight} />
      <p className="pHorizontal10 textH6ExtraBold">
        {item}
      </p>
      <FontAwesomeIcon icon={icon.caretDown} />
      {modal && <BreadCrumbModal ctnStyles='w-100 br-2 br-BottomLeft-15 br-BottomRight-15' setModal={setModal}/>}
    </div>
  );
}
