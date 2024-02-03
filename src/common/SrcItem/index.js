import React, { useState } from 'react';
import styles from './styles.module.css';
import IconButton from 'common/IconButton';
import Button from 'common/Button';
import TextIcon from 'common/TextIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faFile,
  faFolder,
  faBookmark,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

export default function SrcItem({ value = [], grid = [] }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const [isSaved, setIsSaved] = useState(false);
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
  const renderIconBtnCell = (isSave) => {
    if (isSave) {
      return (
        <IconButton
          icon={<FontAwesomeIcon icon={faBookmark} />}
          ctnStyles="mRight10"
          onClick={() => {
            console.log('click');
          }}
        />
      );
    } else {
      return (
        <IconButton
          icon={<FontAwesomeIcon icon={faEllipsisVertical} />}
          onClick={() => {
            console.log('click');
          }}
        />
      );
    }
  };

  const renderTextCell = (text) => {
    return <p className="text14Medium">{text}</p>;
  };

  const renderHeaderCell = (text) => {
    return (
      <Button
        name={text}
        ctnStyles="justify-content-start"
        icon1={null}
        icon2={<FontAwesomeIcon icon={faCaretDown} />}
        icon2Styles="pLeft10"
        btnStyles="textH6Bold w-auto text"
        onClick={() => {
          console.log('click');
        }}
      />
    );
  };

  const renderNameCell = (isFile, text) => {
    if (isFile)
      return (
        <TextIcon
          text={text}
          icon1={<FontAwesomeIcon icon={faFile} />}
          textStyles="text14Bold mLeft10"
        />
      );
    else {
      return (
        <TextIcon
          text={text}
          icon1={<FontAwesomeIcon icon={faFolder} />}
          icon1Styles="main"
          textStyles="text14Medium mLeft10"
        />
      );
    }
  };

  const renderGrid = () => {
    return grid.map((val, index) => {
      return (
        <div key={index} className={`${val}`}>
          {value[index].type === 'save' && renderIconBtnCell(true)}
          {value[index].type === 'edit' && renderIconBtnCell(false)}
          {value[index].type === 'text' && renderTextCell(value[index].text)}
          {value[index].type === 'header' &&
            renderHeaderCell(value[index].text)}
          {value[index].type === 'file' &&
            renderNameCell(true, value[index].text)}
          {value[index].type === 'folder' &&
            renderNameCell(false, value[index].text)}
        </div>
      );
    });
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <div className={`${styles.root}`}>{renderGrid()}</div>;
}
