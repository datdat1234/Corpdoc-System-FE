export const SET_GLOBAL_LOADING = "SET_GLOBAL_LOADING";
export const SET_USER_INFO = "SET_USER_INFO";
export const SET_FILE_INFO = "SET_FILE_INFO";
export const SET_NOTI = "SET_NOTI";
export const SET_FOLDER_PAGE = "SET_FOLDER_PAGE";
export const SET_OPEN_MODAL = "SET_OPEN_MODAL";
export const SET_UPDATE_HOME_PAGE = "SET_UPDATE_HOME_PAGE";

export function setGlobalLoading(data) {
  return {
    type: SET_GLOBAL_LOADING,
    payload: data,
  };
}

export function setUserInfo(data) {
  return {
    type: SET_USER_INFO,
    payload: data,
  };
}

export function setFileInfo(data) {
  return {
    type: SET_FILE_INFO,
    payload: data,
  };
}

export function setNoti(data) {
  return {
    type: SET_NOTI,
    payload: data,
  };
}

export function setFolderPage(data) {
  return {
    type: SET_FOLDER_PAGE,
    payload: data,
  };
}

export function setOpenModal(data) {
  return {
    type: SET_OPEN_MODAL,
    payload: data,
  };
}

export function setUptHomePage(data) {
  return {
    type: SET_UPDATE_HOME_PAGE,
    payload: data,
  };
}