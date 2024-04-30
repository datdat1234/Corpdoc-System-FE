import {
  SET_GLOBAL_LOADING,
  SET_USER_INFO,
  SET_FILE_INFO,
  SET_NOTI,
  SET_FOLDER_PAGE,
  SET_OPEN_MODAL,
  SET_UPDATE_HOME_PAGE,
} from '../action/app';

export default function appReducer(
  state = {
    globalLoading: false,
    userInfo: {},
    fileInfo: {},
    noti: {type:'', message: ''},
    folderPage: false,
    openModal: {type: '', infoItm: {}},
    uptHomePage: false,
  },
  action
) {
  switch (action.type) {
    case SET_GLOBAL_LOADING:
      return {
        ...state,
        globalLoading: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    case SET_FILE_INFO:
      return {
        ...state,
        fileInfo: action.payload,
      };
    case SET_NOTI:
      return {
        ...state,
        noti: action.payload,
      };
    case SET_FOLDER_PAGE:
      return {
        ...state,
        folderPage: action.payload,
      };
    case SET_OPEN_MODAL:
      return {
        ...state,
        openModal: action.payload,
      };
    case SET_UPDATE_HOME_PAGE:
      return {
        ...state,
        uptHomePage: action.payload,
      };
    default:
      return state;
  }
}