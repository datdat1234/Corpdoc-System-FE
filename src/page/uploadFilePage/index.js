import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './styles.module.css';
import icon from 'util/js/icon';
import Button from 'common/Button';
import Input from 'common/Input';
import CriteriaTag from 'common/CriteriaTag';
import { extractFileName, extractFileType } from 'util/js/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCriteria, uploadFile } from 'util/js/APIs';

export default function UploadFilePage() {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.app.userInfo);
  const { state } = useLocation();
  const { isShowCritetia } = state;
  const [showCritetia, setShowCritetia] = useState(isShowCritetia || false);
  const [criteria, setCritetia] = useState([]);
  const [fileName, setFileName] = useState('');
  const [author, setAuthor] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [size, setSize] = useState(0);
  const [fileCriteria, setFileCriteria] = useState([]);
  const [fileContent, setFileContent] = useState(null);
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
  const handleUploadFile = async () => {
    const fileMetadata = {
      fileName,
      author,
      desc,
      type,
      size,
      fileCriteria,
      userId: userInfo?.UserID,
      deptId: userInfo?.DeptID,
      deleted: false,
      status: 'active',
      isPrivate: false,
    };
    const response = await uploadFile(fileMetadata, fileContent);
    if (response?.data?.data?.resultCode === '00034') {
      navigate(`/result-page`, { state: { type: 'file', status: 'success' } });
    } else {
      navigate(`/result-page`, { state: { type: 'file', status: 'error' } });
    }
  };

  const handleClickUploadFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';

    fileInput.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
      setSize(selectedFile.size);
      setFileName(extractFileName(selectedFile.name));
      setType(extractFileType(selectedFile.name));
      setFileContent(selectedFile);
    });

    fileInput.click();
  };

  const handleSetCriteria = (criterion) => {
    if (fileCriteria.includes(criterion) || criterion === '') return;
    else {
      setFileCriteria([...fileCriteria, criterion]);
    }
  };

  const handleCloseCriteria = (criterion) => {
    setFileCriteria(fileCriteria.filter((value) => value !== criterion));
  };

  const renderCriterionTag = () => {
    return fileCriteria.map((criterion, index) => {
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
          name="Tải lên tài liệu cho miền Đồ án tốt nghiệp _ Luận văn tốt nghiệp"
          ctnStyles="h-100 text18SemiBold border-bottom-1 border-style-solid border-bg5-60 br-10"
          btnStyles="bg-bgColor4 pLeft10"
          icon1Styles="w-24 h-24 d-flex justify-content-center align-items-center"
          icon1={<FontAwesomeIcon icon={icon.angleLeft} />}
          onClick={() => navigate('/home')}
        />
      </div>
      <div className={`${styles.input}`}>
        <div className={`${styles.btnUploadCtn}`}>
          <Button
            name="Quét tài liệu"
            ctnStyles="h-100 text14Medium bg-main br-10 pHorizontal15"
            btnStyles="bg-main pLeft10"
            icon1Styles="fs-16 d-flex justify-content-center align-items-center mRight10"
            icon1={<FontAwesomeIcon icon={icon.camera} />}
          />
          <p className="textH6Bold mHorizontal10">Hoặc</p>
          <Button
            name="Tải từ hệ thống"
            ctnStyles="h-100 text14Medium bg-bgColor5 br-10 pHorizontal15"
            btnStyles="bg-bgColor5 pLeft10 white"
            icon1Styles="fs-16 d-flex justify-content-center align-items-center mRight10 white"
            icon1={<FontAwesomeIcon icon={icon.link} />}
            onClick={handleClickUploadFile}
          />
        </div>
        <Input
          type="text"
          text="Tên tài liệu"
          bonusText="(tối đa 50 ký tự)"
          value={fileName}
          setData={setFileName}
        />
        <Input
          type="text"
          text="Tác giả"
          bonusText="(Tối đa 20 ký tự)"
          value={author}
          setData={setAuthor}
        />
        <Input type="textarea" text="Mô tả" value={desc} setData={setDesc} />
        {showCritetia && (
          <Input
            type="select"
            text="Tiêu chí của tài liệu"
            value={criteria}
            setData={handleSetCriteria}
          />
        )}
        {showCritetia && (
          <div className={`${styles.checkboxCtn}`}>{renderCriterionTag()}</div>
        )}
        <div className={`${styles.btnCtn} mBottom10`}>
          <div className={`${styles.btnWrapper}`}>
            <Button
              name="XÁC NHẬN"
              ctnStyles="h-100 textH6Bold br-10 bg-text justify-content-end"
              btnStyles="bg-text white d-flex justify-content-center align-items-center"
              onClick={handleUploadFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
