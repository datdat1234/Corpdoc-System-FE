import React, { useState } from 'react';
import styles from './styles.module.css';
import IconButton from 'common/IconButton';
import Button from 'common/Button';
import TextIcon from 'common/TextIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';

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
          icon={<FontAwesomeIcon icon={icon.bookMark} />}
          ctnStyles="mRight10"
          onClick={() => {
            console.log('click');
          }}
        />
      );
    } else {
      return (
        <IconButton
          icon={<FontAwesomeIcon icon={icon.ellipsisVertical} />}
          onClick={() => {
            console.log('click');
          }}
        />
      );
    }
  };

  const renderTextCell = (text, type) => {
    return (
      <p
        className={`text14Medium ellipsis ${
          type === 'text-size' && 'ta-right mRight10'
        }`}
      >
        {text}
      </p>
    );
  };

  const renderHeaderCell = (text) => {
    return (
      <Button
        name={text}
        ctnStyles="justify-content-start"
        icon1={null}
        icon2={<FontAwesomeIcon icon={icon.caretDown} />}
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
          icon1={<FontAwesomeIcon icon={icon.file} />}
          textStyles="text14Bold mLeft10"
        />
      );
    else {
      return (
        <TextIcon
          text={text}
          icon1={<FontAwesomeIcon icon={icon.folder} />}
          icon1Styles="main"
          textStyles="text14Medium mLeft10"
        />
      );
    }
  };

  const renderItems = (item) => {
    if (item.type.includes('save')) return renderIconBtnCell(true);
    if (item.type.includes('edit')) return renderIconBtnCell(false);
    if (item.type.includes('text')) return renderTextCell(item.text, item.type);
    if (item.type.includes('header')) return renderHeaderCell(item.text);
    if (item.type.includes('file')) return renderNameCell(true, item.text);
    if (item.type.includes('folder')) return renderNameCell(false, item.text);
  };

  const renderGrid = () => {
    return grid.map((val, index) => {
      return (
        <div key={index} className={`${val}`}>
          {renderItems(value[index])}
        </div>
      );
    });
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <div className={`${styles.root}`}>{renderGrid()}</div>;
}
