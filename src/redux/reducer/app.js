import {
  SET_GLOBAL_LOADING,
  SET_SIDEBAR_ACTIVE_KEY,
  SET_SIDEBAR_OPEN_KEYS,
  SET_USER_INFO,
  TOGGLE_SIDEBAR,
} from "../action/app";
import { deepClone } from "../../util/js/helper";

export default function appReducer(
  state = {
    sidebarOpenKeys: [],
    sidebarActiveKey: null,
    sidebarCollapse: false,
    globalLoading: false,
    userInfo: {},
  },
  action
) {
  switch (action.type) {
    case SET_SIDEBAR_OPEN_KEYS:
      return {
        ...state,
        sidebarOpenKeys: deepClone(action.payload),
      };
    case SET_SIDEBAR_ACTIVE_KEY:
      return {
        ...state,
        sidebarActiveKey: deepClone(action.payload),
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapse: deepClone(action.payload),
      };
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
    default:
      return state;
  }
}
