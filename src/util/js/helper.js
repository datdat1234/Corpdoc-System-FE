import React from 'react';
import get from 'lodash/get';
import isObject from 'lodash/isObject';
import { setNoti } from '../../redux/action/app';
import store from '../../redux/store';

const INNER_WIDTH = window.innerWidth;
const INNER_HEIGHT = window.innerHeight;
const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 900;
const MOBILE_DESIGN_WIDTH = 375;
const MOBILE_DESIGN_HEIGHT = 812;

export const deepClone = (item) => JSON.parse(JSON.stringify(item ?? ''));

export const rWidth = (value = 0, withpx = true) => {
  const result = (INNER_WIDTH * value) / DESIGN_WIDTH;
  return withpx ? `${result}px` : result;
};

export const rHeight = (value = 0, withpx = true) => {
  const result = (INNER_HEIGHT * value) / DESIGN_HEIGHT;
  return withpx ? `${result}px` : result;
};

export const rFont = (value = 0, withpx = true) => {
  const result = (INNER_WIDTH * value) / DESIGN_WIDTH;
  return withpx ? `${result}px` : result;
};

export const mrWidth = (value = 0, withpx = true) => {
  const result = (INNER_WIDTH * value) / MOBILE_DESIGN_WIDTH;
  return withpx ? `${result}px` : result;
};

export const mrHeight = (value = 0, withpx = true) => {
  const result = (INNER_HEIGHT * value) / MOBILE_DESIGN_HEIGHT;
  return withpx ? `${result}px` : result;
};

export const mrFont = (value = 0, withpx = true) => {
  const result = (INNER_WIDTH * value) / MOBILE_DESIGN_WIDTH;
  return withpx ? `${result}px` : result;
};

export const findKeyInObjectR = (obj, findingKey) => {
  // Nếu obj là string, trả về obj
  if (typeof obj === 'string') return obj;
  // Duyệt tất cả field của obj, nếu tìm thấy findingKey, trả về value tương ứng
  const message = get(obj, findingKey);
  if (message !== undefined) {
    return message;
  }
  // Nếu obj không có key nào là findingKey, duyệt từng key
  for (let key in obj) {
    // nếu obj[key] là object, đệ quy hàm này để tìm value của findingKey
    if (isObject(obj[key])) {
      const message = findKeyInObjectR(obj[key], findingKey);
      if (message) {
        return message;
      }
    }
  }
  return '';
};

export const logMessageDirect = (msg, useAntMessage = true) => {
  return handleLogMessage(msg, useAntMessage);
};

export const logMessage = (error, useAntMessage = true) => {
  let msg = '';
  if (typeof error?.response?.data?.message === 'string') {
    msg = error.response.data.message;
  } else if (typeof error?.data?.message === 'string') {
    msg = error.data.message;
  } else if (typeof error?.message === 'string') {
    msg = error.message;
  } else {
    msg = findKeyInObjectR(error, 'message');
  }
  return handleLogMessage(msg, useAntMessage);
};

const handleLogMessage = (msg, useAntMessage) => {
  if (!msg?.includes?.(`\n`)) {
    if (useAntMessage) console.log(1); //message.error(msg);
    else return msg;
  } else {
    const newMsg = msg?.split(`\n`);
    const msgElement = (
      <div className="w-full flex flex-col items-center">
        {newMsg?.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    );
    if (useAntMessage) {
      // message.error(msgElement);
    } else {
      return msgElement;
    }
  }
};

export const extractFileName = (name) => {
  const arr = name.split('.');
  return arr[0];
};

export const extractFileType = (name) => {
  const arr = name.split('.');
  return arr[1];
};

export const getNameRole = (role) => {
  switch (role) { 
    case 'Manager':
      return 'Trưởng phòng';
    case 'Admin':
      return 'Quản trị viên';
    default: return 'Nhân viên';
  }
}

export const setNotification = (type, message) => {
  store.dispatch(setNoti({type: type, message: message}));
  setTimeout(()=>{
    store.dispatch(setNoti({type: '', message: ''}));
  }, 3000);
}
