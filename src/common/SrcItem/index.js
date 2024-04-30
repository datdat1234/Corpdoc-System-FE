import React, { useState, useRef } from 'react';
import styles from './styles.module.css';
import IconButton from 'common/IconButton';
import Button from 'common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import UseOnClickOutside from 'util/hook/useOnClickOutside';
import InfoModal from 'common/InfoModal';

export default function SrcItem({ value = [], grid = [] }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  var modals = Array(grid.length).fill(false);
  const [modal, setModal] = useState(modals);
  const ref = useRef();
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  UseOnClickOutside(ref, () => setModal([]));
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const setOpenModal = (index) => {
    if (modal[index] === true) {
      modals = Array(grid.length).fill(false);
    } else {
      modals = Array(grid.length).fill(false);
      modals[index] = true;
    }
    setModal(modals);
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////
  const renderEditBtnCell = (index = 0, id) => {
    return (
      <div className={`${styles.editCtn}`} ref={ref}>
        <IconButton
          icon={<FontAwesomeIcon icon={icon.ellipsisVertical} />}
          onClick={() => setOpenModal(index)}
        />
        {modal[index] && (
          <InfoModal
            ctnStyles="br-8"
            setModal={() => setModal([])}
            companyId={id}
          />
        )}
      </div>
    );
  };

  const renderTextCell = (text, type) => {
    return (
      <p
        className={`text14Medium ellipsis ${
          type === 'text-size' && 'ta-right mRight10'
        }`}
      >
        {text} {type === 'text-size' && 'KB'}
      </p>
    );
  };

  const renderHeaderCell = (text, type) => {
    return (
      <Button
        name={text}
        ctnStyles="justify-content-start"
        icon1={null}
        icon2={type !== '' && <FontAwesomeIcon icon={icon.caretDown} />}
        icon2Styles="pLeft10 pRight5"
        btnStyles="textH6Bold w-auto text bg-bgColor4"
        onClick={() => {
          console.log('click');
        }}
      />
    );
  };

  const renderItems = (item, index) => {
    if (item.type.includes('edit')) return renderEditBtnCell(index, item.id);
    if (item.type.includes('text')) return renderTextCell(item.text, item.type);
    if (item.type.includes('header'))
      return renderHeaderCell(item.text, item.type);
  };

  const renderGrid = () => {
    return grid.map((val, index) => {
      return (
        <div key={index} className={`${val}`}>
          {renderItems(value[index], index)}
        </div>
      );
    });
  };
  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return <div className={`${styles.root}`}>{renderGrid()}</div>;
}
