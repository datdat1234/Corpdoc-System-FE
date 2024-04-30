import { get, post, put, remove } from './APICaller';
import { API_URL } from './constant';

//#region Account

export const login = (username, password) => {
  return post(`${API_URL}/account/login`, {
    username: username,
    password: password,
  });
};

export const refreshToken = (refreshToken) => {
  return post(`${API_URL}/account/refresh-token`, {
    refreshToken: refreshToken,
  });
};

//#region Account

export const getCompanies = () => {
  return get(`${API_URL}/company/get-companies`);
};

export const getCompanyById = (comId) => {
  return get(`${API_URL}/company/get-company-by-id`, {
    id: comId,
  });
};

export const updateCompanyInfo = (
  comId,
  newPlanId,
) => {
  return put(`${API_URL}/company/update-company`, {
    comId,
    newPlanId,
  });
};

//#region Plan

export const getPlan = () => {
  return get(`${API_URL}/plan/get-plan`);
};

//#region Company

export const addCompany = (comName, planId) => {
  return post(`${API_URL}/company/add-company`, {
    comName,
    planId,
  });
};

export const blockCompany = (comId) => {
  return post(`${API_URL}/company/block-company`, {
    comId,
  });
};

//#region Dummy APIs

export const viewFile = (param) => {};

export const setChangeSaveFolder = (param) => {};

export const setChangeSaveFile = (param) => {};

export const resetPasswordUser = (param) => {};

export const changeStatusUser = (param) => {};

export const setChangeFolderDelete = (param) => {};

export const setChangeFileDelete = (param) => {};
