export const SET_GLOBAL_LOADING = "SET_GLOBAL_LOADING";
export const SET_USER_INFO = "SET_USER_INFO";

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
