import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './styles.module.css';
import icon from 'util/js/icon';
import Button from 'common/Button';
import Input from 'common/Input';
import CriteriaTag from 'common/CriteriaTag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCriteria } from 'util/js/APIs';

export default function UploadFolderPage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const location = useLocation();
  const newStructure = location.state ? location.state.newStructure : null;
  const [criteria, setCritetia] = useState([]);
  const [folderCriteria, setFoldeCriteria] = useState([]);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const response = await getCriteria();
      setCritetia(response?.data?.data?.criteria);
    };

    fetchData();
  }, []);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleNavigate = () => {
    navigate(`/result-page`, { state: { type: 'file', status: 'error' } });
  };

  const handleSetCriteria = (criterion) => {
    if (folderCriteria.includes(criterion) || criterion === '') return;
    else {
      setFoldeCriteria([...folderCriteria, criterion]);
    }
  };

  const handleCloseCriteria = (criterion) => {
    setFoldeCriteria(folderCriteria.filter((value) => value !== criterion));
  };

  const renderCriterionTag = () => {
    return folderCriteria.map((criterion, index) => {
      return (
        <CriteriaTag
          key={index}
          text={criterion}
          handleClick={handleCloseCriteria}
        />
      );
    });
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.root}`}>
      <div className={`${styles.navCtn}`}>
        <Button
          name={newStructure ? 'Tạo miền cấu trúc mới' : 'Thêm thư mục mới'}
          ctnStyles="h-100 text18SemiBold border-bottom-1 border-style-solid border-bg5-60 br-10"
          btnStyles="bg-bgColor4 pLeft10"
          icon1Styles="w-24 h-24 d-flex justify-content-center align-items-center"
          icon1={<FontAwesomeIcon icon={icon.angleLeft} />}
          onClick={() => navigate('/home')}
        />
      </div>
      <div className={`${styles.input}`}>
        {/* {!newStructure && <Input type="select" text="Thư mục cha" />} */}
        <Input type="text" text="Tên miền" bonusText="(tối đa 50 ký tự)" />
        <Input type="textarea" text="Mô tả" />
        <Input
          type="select"
          text="Tiêu chí của tài liệu"
          value={criteria}
          setData={handleSetCriteria}
        />
        <div className={`${styles.checkboxCtn}`}>{renderCriterionTag()}</div>
        <div className={`${styles.btnCtn} mBottom10`}>
          <div className={`${styles.btnWrapper}`}>
            <Button
              name="XÁC NHẬN"
              ctnStyles="h-100 textH6Bold br-10 bg-text justify-content-end"
              btnStyles="bg-text white d-flex justify-content-center align-items-center"
              onClick={handleNavigate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
