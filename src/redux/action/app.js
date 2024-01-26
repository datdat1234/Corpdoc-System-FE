export const SET_SIDEBAR_OPEN_KEYS = "SET_SIDEBAR_OPEN_KEYS";
export const SET_SIDEBAR_ACTIVE_KEY = "SET_SIDEBAR_ACTIVE_KEY";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";
export const SET_GLOBAL_LOADING = "SET_GLOBAL_LOADING";
export const SET_USER_INFO = "SET_USER_INFO";

export function setSidebarOpenKeys(data) {
  return {
    type: SET_SIDEBAR_OPEN_KEYS,
    payload: data,
  };
}

export function setSidebarActiveKey(data) {
  return {
    type: SET_SIDEBAR_ACTIVE_KEY,
    payload: data,
  };
}

export function toggleSidebarCollapse(data) {
  return {
    type: TOGGLE_SIDEBAR,
    payload: data,
  };
}

export function setGlobalLoading(visible) {
  return {
    type: SET_GLOBAL_LOADING,
    payload: visible,
  };
}

export function setUserInfo(visible) {
  return {
    type: SET_USER_INFO,
    payload: visible,
  };
}
