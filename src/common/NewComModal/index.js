import React, { useEffect, useState } from 'react';
import IconButton from 'common/IconButton';
import Button from 'common/Button';
import Input from 'common/Input';
import ConfirmModal from 'common/ConfirmModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from 'util/js/icon';
import { getPlan, addCompany } from 'util/js/APIs';
import { setNotification } from 'util/js/helper';
import { useDispatch } from 'react-redux';
import { setGlobalLoading } from '../../redux/action/app';
import styles from './styles.module.css';

export default function NewComModal({ ctnStyles = '', setModal }) {
  // #region    VARIABLES //////////////////////////
  //////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [planData, setPlanData] = useState([]);
  const [name, setName] = useState('');
  const [plan, setPlan] = useState(null);
  const [isShowAddModal, setIsShowAddModal] = useState(false);
  const [isOkayToAdd, setIsOkayToAdd] = useState(false);
  //////////////////////////////////////////////////
  // #endregion VARIABLES //////////////////////////

  // #region    useEffect //////////////////////////
  //////////////////////////////////////////////////
  useEffect(() => {
    const fetchData = async () => {
      const planRes = await getPlan();
      if (planRes.status === 200) {
        setPlanData(planRes?.data?.data?.plan);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const addCom = async () => {
      dispatch(setGlobalLoading(true));
      await addCompany(name, plan?.PlanID);
      dispatch(setGlobalLoading(false));
      setModal();
    };

    if (isOkayToAdd) {
      addCom();
    }
  }, [isOkayToAdd]);
  //////////////////////////////////////////////////
  // #endregion useEffect //////////////////////////

  // #region    FUNCTIONS //////////////////////////
  //////////////////////////////////////////////////
  const handleAddCom = async () => {
    if (plan === null || name === '') {
      setNotification('error', 'Vui lòng nhập đầy đủ thông tin tạo công ty!');
      return;
    }
    if (!isOkayToAdd) {
      setIsShowAddModal(true);
      return;
    }
  };
  //////////////////////////////////////////////////
  // #endregion FUNCTIONS //////////////////////////

  // #region    VIEWS //////////////////////////////
  //////////////////////////////////////////////////

  //////////////////////////////////////////////////
  // #endregion VIEWS //////////////////////////////
  return (
    <div className={`${styles.bg}`}>
      {isShowAddModal && (
        <ConfirmModal
          text={`Bạn có thực sự muốn thêm công ty ${name}?`}
          setShowModal={setIsShowAddModal}
          setValue={setIsOkayToAdd}
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
          <p className="text24Bold">{`Thêm công ty`}</p>
          <div className="mTop15">
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Nhập tên công ty:`}</p>
              <Input type="text" value={name} setData={setName} />
            </div>
            <div className={`${styles.info}`}>
              <p className="text18 mRight10">{`Chọn kế hoạch cho công ty:`}</p>
              <Input
                type="select"
                placeholder={plan !== null ? plan?.PlanName : 'Chọn kế hoạch'}
                value={planData}
                setData={setPlan}
              />
            </div>
          </div>
          <div className={`${styles.btnCtn}`}>
            <div>
              <Button
                name="Tạo mới"
                ctnStyles="d-flex align-items-center justify-content-between pHorizontal15 br-15 textH6Black bg-success white pVertical15"
                onClick={handleAddCom}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
