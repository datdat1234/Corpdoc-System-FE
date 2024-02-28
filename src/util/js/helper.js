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

export const logMessage = (error) => {
  let msg = '';
  if (error?.response?.data?.resultMessage) {
    msg = error.response.data.resultMessage.vi;
  }
  return handleLogMessage(msg);
};

const handleLogMessage = (msg) => {
  console.log(msg);
};

export const extractFileName = (name) => {
  const arr = name.split('.');
  return arr[0];
};

export const extractFileType = (name) => {
  const arr = name.split('.');
  return arr[1];
};

export const formatItemFolder = (data) => {
  const formattedData = [];
  for (let i = 0; i < data.length; i++) {
    formattedData.push([
      {
        text: '',
        type: 'save',
      },
      {
        text: data[i].Name,
        type: 'folder',
        id: data[i].FolderID,
      },
      {
        text: data[i].CreatedDate,
        type: 'text',
      },
      {
        text: '1,100,099 KB',
        type: 'text-size',
      },
      {
        text: '',
        type: 'edit',
      },
    ]);
  }
  return formattedData;
};

export const formatItemFile = (data) => {
  const formattedData = [];
  for (let i = 0; i < data.length; i++) {
    formattedData.push([
      {
        text: '',
        type: 'save',
      },
      {
        text: data[i].Name,
        type: 'file',
        id: data[i].FileID,
      },
      {
        text: data[i].CreatedDate,
        type: 'text',
      },
      {
        text: data[i].Size,
        type: 'text-size',
      },
      {
        text: '',
        type: 'edit',
      },
    ]);
  }
  console.log(formattedData)
  return formattedData;
};
