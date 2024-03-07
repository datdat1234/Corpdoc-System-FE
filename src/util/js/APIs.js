import { get, post, put, remove } from './APICaller';
import { API_URL } from './constant';

const getCompanyId = () => {
  return localStorage.getItem('companyId');
  // return '13ed4be3-ae82-4e65-8370-986656fc8e63';
};

export const checkLogin = (username) => {
  return post(`${API_URL}/user/login`, {
    username: username,
  });
};

export const login = (username, password) => {
  return post(`${API_URL}/user/login`, {
    username: username,
    password: password,
  });
};

export const refreshToken = (refreshToken) => {
  return post(`${API_URL}/user/refresh-token`, {
    refreshToken: refreshToken,
  });
};

//#region Profile
export const editUserInfo = (data) => {
  return post(`${API_URL}/user/edit-user-info`, {
    companyId: getCompanyId(),
    ...data
  });
}
//#endregion

//#region File

export const getCriteria = () => {
  return get(`${API_URL}/file/criteria`, {
    companyId: getCompanyId(),
  });
};

export const getFileByCriteria = (folderId) => {
  return get(`${API_URL}/file/get-file`, {
    companyId: getCompanyId(),
    folderId,
  });
};

//#endregion

//#region Folder

export const getFolderPath = (deptId) => {
  return get(`${API_URL}/folder/get-path`, {
    companyId: getCompanyId(),
    deptId,
  });
};

export const uploadFolder = (folderInfo) => {
  return post(`${API_URL}/folder/upload-folder`, {
    companyId: getCompanyId(),
    ...folderInfo,
  });
};

export const getChildByFolderId = (folderId) => {
  return get(`${API_URL}/folder/get-child`, {
    companyId: getCompanyId(),
    folderId,
  });
};

export const getRootFolder = (deptId) => {
  return get(`${API_URL}/folder/get-root`, {
    companyId: getCompanyId(),
    deptId,
  });
};

export const getDomainFolder = (deptId) => {
  return post(`${API_URL}/folder/get-domain-folder`, {
    companyId: getCompanyId(),
    deptId: deptId,
  });
}

//#endregion

//#region Media
export const viewFile = (fileId) => {
  return get(`${API_URL}/file`, {
    fileId: fileId,
    companyId: getCompanyId(),
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

export const uploadFile = (fileMetadata, fileContent) => {
  const formData = new FormData();
  formData.append('file_metadata', JSON.stringify(fileMetadata));
  formData.append('company_id', JSON.stringify(getCompanyId()));
  formData.append('file', fileContent);
  return post(`${API_URL}/file/upload`, formData, {
    'Content-Type': 'multipart/form-data',
  });
};
//#endregion
