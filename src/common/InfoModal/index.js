import React, { useEffect, useState } from 'react';
import IconButton from 'common/IconButton';
import Button from 'common/Button';
import Input from 'common/Input';
import ConfirmModal from 'common/ConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import {
  getCompanyById,
  updateCompanyInfo,
  getPlan,
  blockCompany,
} from 'util/js/APIs';
import { setNotification } from 'util/js/helper';
import { useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/action/app';
import styles from './styles.module.css';

export default function InfoModal({
  ctnStyles = '',
  setModal,
  companyId = '',
}) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [storage, setStorage] = useState('');
  const [adminNum, setAdminNum] = useState('');
  const [managerNum, setManagerNum] = useState('');
  const [staffNum, setStaffNum] = useState('');
  const [showOk, setShowOk] = useState(false);
  const [planId, setPlanId] = useState('');
  const [status, setStatus] = useState('');
  const [outDate, setOutDate] = useState(null);
  const [adminUsn, setAdminUsn] = useState('');
  const [planData, setPlanData] = useState([]);
  const [plan, setPlan] = useState(null);
  const [isShowBlockModal, setIsShowBlockModal] = useState(false);
  const [isOkayToBlock, setIsOkayToBlock] = useState(false);
  const [isShowUptModal, setIsShowUptModal] = useState(false);
  const [isOkayToUpt, setIsOkayToUpt] = useState(false);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setGlobalLoading(true));
      const comRes = await getCompanyById(companyId);
      const planRes = await getPlan();
      if (planRes.status === 200) {
        setPlanData(planRes?.data?.data?.plan);
      }
      if (comRes.status === 200) {
        setName(comRes?.data?.data?.company[0].CompanyName);
        setStorage(comRes?.data?.data?.company[0].Storage);
        setAdminNum(comRes?.data?.data?.company[0].AdminAcctNum);
        setManagerNum(comRes?.data?.data?.company[0].MgrAcctNum);
        setStaffNum(comRes?.data?.data?.company[0].EmplAcctNum);
        setPlanId(comRes?.data?.data?.company[0].PlanID);
        setStatus(comRes?.data?.data?.company[0].Status);
        setOutDate(comRes?.data?.data?.company[0].OutdatedDate);
        setAdminUsn(comRes?.data?.data?.company[0].AdminUsn);
      }
      dispatch(setGlobalLoading(false));
    };

    fetchData();
  }, []);

  useEffect(() => {
    const blockCom = async () => {
      dispatch(setGlobalLoading(true));
      await blockCompany(companyId);
      dispatch(setGlobalLoading(false));
      setModal();
    };

    if (isOkayToBlock) {
      blockCom();
    }
  }, [isOkayToBlock]);

  useEffect(() => {
    const uptCom = async () => {
      dispatch(setGlobalLoading(true));
      await updateCompanyInfo(companyId, plan?.PlanID);
      dispatch(setGlobalLoading(false));
      setModal();
    };

    if (isOkayToUpt) {
      uptCom();
    }
  }, [isOkayToUpt]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleEditInfo = () => {
    setShowOk(!showOk);
  };

  const handleChangeInfo = async () => {
    if (plan === null) {
      setNotification('error', 'Vui lòng chọn kế hoạch!');
      return;
    }

    if (plan?.PlanID === planId) {
      setModal();
      return;
    }

    setIsShowUptModal(true);
    return;
  };

  const handleBlock = async () => {
    if (!isOkayToBlock) {
      setIsShowBlockModal(true);
      return;
    }
  };

  const renderStatus = (status) => {
    if (status === 'Block') {
      return 'Đã chặn';
    }
    return 'Hoạt động';
  };

  const renderDate = (date) => {
    let outdatedDate = new Date(date);
    return outdatedDate.toLocaleString('en-GB', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'Asia/Ho_Chi_Minh',
    });
  };

  const renderBtn = (status, isOk) => {
    const arr = [];
    if (status !== 'Block' && status !== '' && !isOk) {
      arr.push(
        <div className={`mRight10`}>
          <Button
            name="Chặn công ty"
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black white bg-error pVertical15"
            onClick={handleBlock}
          />
        </div>
      );
      arr.push(
        <div>
          <Button
            name="Chỉnh sửa thông tin"
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black bgColor5 bg-header pVertical15"
            onClick={handleEditInfo}
          />
        </div>
      );
    }
    if (status !== 'Block' && status !== '' && isOk) {
      arr.push(
        <div>
          <Button
            name="Hoàn thành"
            ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black bg-success white pVertical15"
            onClick={handleChangeInfo}
          />
        </div>
      );
    }
    return arr;
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.bg}`}>
      {isShowBlockModal && (
        <ConfirmModal
          text="Bạn có thực sự muốn chặn công ty này?"
          setShowModal={setIsShowBlockModal}
          setValue={setIsOkayToBlock}
        />
      )}
      {isShowUptModal && (
        <ConfirmModal
          text={`Bạn có thực sự muốn thay đổi kế hoạch của công ty ${name}?`}
          setShowModal={setIsShowUptModal}
          setValue={setIsOkayToUpt}
        />
      )}
      <div className={`${styles.root} ${ctnStyles}`}>
        <div className={`${styles.wrapper} br-8`}>
          <div className={`${styles.exitCtn}`}>
            <IconButton
              icon={<FontAwesomeIcon icon={icon.xmark} />}
              onClick={setModal}
              ctnStyles="fs-24 bgColor5"
            />
          </div>
          <p className="text24Bold">{name}</p>
          <div className="mTop15">
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Dung lượng lưu trữ: ${storage}`}</p>
            </div>
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Số lượng admin: ${adminNum}`}</p>
            </div>
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Số lượng manager: ${managerNum}`}</p>
            </div>
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Số lượng staff: ${staffNum}`}</p>
            </div>
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Trạng thái: ${renderStatus(
                status
              )}`}</p>
            </div>
            {outDate !== null && (
              <div className={`${styles.info}`}>
                <p className="text18 mRight10">{`Ngày hết hạn: ${renderDate(
                  outDate
                )}`}</p>
              </div>
            )}
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Tài khoản quản trị viên: ${adminUsn}`}</p>
            </div>
            {showOk && (
              <div className={`${styles.selectInput}`}>
                <p className="text18 mRight10">{`Chọn kế hoạch:`}</p>
                <Input
                  type="select"
                  placeholder={plan !== null ? plan?.PlanName : 'Chọn kế hoạch'}
                  value={planData}
                  setData={setPlan}
                />
              </div>
            )}
          </div>
          <div className={`${styles.btnCtn}`}>{renderBtn(status, showOk)}</div>
        </div>
      </div>
    </div>
  );
}
