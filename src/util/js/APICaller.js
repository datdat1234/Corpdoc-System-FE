import axios from 'axios';
import { logMessage } from './helper';

const getToken = () => {
  return localStorage.getItem('token');
};

const buildAxiosConfig = (api, method, headers = null) => {
  let config = {
    url: api,
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  if (headers) config.headers = { ...config.headers, ...headers };
  if(headers?.responseType) config.responseType = headers.responseType;
  const token = getToken();
  if (token) {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  }
  return config;
};

const callAxios = (
  api,
  payload = null,
  method,
  headers = null,
  isShowErrorMessage
) => {
  const config = buildAxiosConfig(api, method, headers);
  if (payload) {
    if (method === 'get') config.params = payload;
    else config.data = payload;
  }

  return axios(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      const status = err.response?.status;
      const data = err.response?.data;
      // Nếu status trả ra là 401 và không phải đang ở trang login hoặc oauth2 thì logout
      if (
        status === 401
        // && !window.location.href?.includes(LOGIN_URL_FE) &&
        // !window.location.href?.includes(OAUTH2_URL_FE)
      ) {
        logout();
      } else {
        if (isShowErrorMessage) {
          logMessage(err);
        }
        return {
          api,
          status,
          data,
        };
      }
    });
};

export const get = (
  api,
  params = null,
  headers = null,
  isShowErrorMessage = true
) => {
  return callAxios(api, params, 'get', headers, isShowErrorMessage);
};

export const post = (
  api,
  body = null,
  headers = null,
  isShowErrorMessage = true
) => {
  return callAxios(api, body, 'post', headers, isShowErrorMessage);
};

export const put = (
  api,
  body = null,
  headers = null,
  isShowErrorMessage = true
) => {
  return callAxios(api, body, 'put', headers, isShowErrorMessage);
};

export const patch = (
  api,
  body = null,
  headers = null,
  isShowErrorMessage = true
) => {
  return callAxios(api, body, 'patch', headers, isShowErrorMessage);
};

export const remove = (
  api,
  body = null,
  headers = null,
  isShowErrorMessage = true
) => {
  return callAxios(api, body, 'delete', headers, isShowErrorMessage);
};

export const logout = () => {
  localStorage.clear();
  window.location.href = '/login';
};
