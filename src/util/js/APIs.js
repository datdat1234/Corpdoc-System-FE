import { get, post, put, remove } from './APICaller';
import { API_URL } from './constant';

export const checkLogin = (username) => {
  return post(`${API_URL}/user/login`, {
    user_name: username,
  });
};

export const login = (username, password) => {
  return post(`${API_URL}/user/login`, {
    user_name: username,
    password: password,
  });
};

//#region Media
export const viewFile = (fileId, companyId) => {
  return get(`${API_URL}/file`, {
    fileId: fileId,
    companyId: companyId,
  });
};

export const downloadFile = (fileId) => {
  return get(
    `${API_URL}/file/download`,
    {
      fileId: fileId,
    },
    { responseType: 'blob' }
  );
};

export const uploadFile = (file, objectType) => {
  let params = new FormData();
  params.append('file', file);
  params.append('object_type', objectType);
  return post(`${API_URL}/media/upload-file`, params, {
    'Content-Type': 'multipart/form-data',
  });
};

export const uploadAttachment = (params) => {
  let form = new FormData();
  form.append('file', params.file);
  form.append('object_type', params.object_type);
  if (params?.object_id) form.append('object_id', params.object_id);
  return post(`${API_URL}/media/attachment`, form, {
    'Content-Type': 'multipart/form-data',
  });
};
//#endregion
