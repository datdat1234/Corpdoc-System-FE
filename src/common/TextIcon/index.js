import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFolderPage } from '../../redux/action/app';
import styles from './styles.module.css';
import { viewFile } from 'util/js/APIs';
import { setFileInfo } from '../../redux/action/app';

export default function TextIcon({
  text,
  ctnStyles = '',
  icon1Styles = '',
  icon2Styles = '',
  textStyles = '',
  icon1 = <></>,
  icon2 = <></>,
  id,
  type = '',
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const switchFolder = useSelector((state) => state.app.folderPage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleOnlick = () => {
    if (type === 'file') {
      handleViewfile();
    }
    if (type === 'folder') {
      handleOpenFolder();
    }
  };

  const handleViewfile = async () => {
    try {
      const response = await viewFile(id);
      const fileInfo = response?.data?.data;
      dispatch(setFileInfo({ ...fileInfo }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOpenFolder = async () => {
    dispatch(setFolderPage(!switchFolder));
    navigate(`/folder/${id}`);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div
      className={`w-100 ${styles.root} ${ctnStyles}`}
      id={id}
      onClick={handleOnlick}
    >
      <div className={`${icon1Styles} ${styles.icon}`}>{icon1}</div>
      <p className={`w-100 ${textStyles} ${styles.btn}`}>{text}</p>
      <div className={`${icon2Styles}`}>{icon2}</div>
    </div>
  );
}
