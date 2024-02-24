import React from 'react';
import styles from './styles.module.css';
import { viewFile } from 'util/js/APIs';
import { useDispatch } from 'react-redux';
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
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleViewfile = async () => {
    try {
      const response = await viewFile(id);
      const fileInfo = response?.data?.data;
      dispatch(setFileInfo({ ...fileInfo }));
    } catch (error) {
      console.error('Error:', error);
    }
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
      onClick={handleViewfile}
    >
      <div className={`${icon1Styles} ${styles.icon}`}>{icon1}</div>
      <p className={`w-100 ${textStyles} ${styles.btn}`}>{text}</p>
      <div className={`${icon2Styles}`}>{icon2}</div>
    </div>
  );
}
