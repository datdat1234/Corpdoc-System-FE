import icon from './icon';

export const BASE_URL = process.env.REACT_APP_BE_URL || 'https://example.vn';
export const API_URL = `${BASE_URL}/api`;
export const is1920x1080 = window.innerWidth === 1920;
export const is1920OrMore = window.innerWidth >= 1920;
export const is1440x900 = window.innerWidth === 1440;
export const is1366x768 = window.innerWidth === 1366;
export const SCREEN_WIDTH = window.innerWidth;
export const SCREEN_HEIGHT = window.innerHeight;

export const AUTH_FORM_WIDTH = 720;

export const GRID_STYLES = {
  c24: 'col-24',
  r24: 'row-24',
  c24_r24: 'col-24 row-24',
  c12_r6: 'col-12 row-6',
  r12: 'row-12',
  c12: 'col-12',
};

export const LOGIN_URL_FE = '/login';
export const REGISTER_URL_FE = '/register';

// Danh sách link không được hiện sidebar và header
export const NO_LAYOUT_LINKS = ['/', LOGIN_URL_FE, REGISTER_URL_FE];

export const SIDEBAR_TABS = [
  'Phòng ban của bạn - Nhân sự',
  'Chia sẻ với phòng ban',
  'Đã lưu',
  'Thùng rác',
];

export const SIDEBAR_ICONS = [icon.folderTree, icon.share, icon.bookmark, icon.trashCan];

export const PROFILE_PAGE_TABS = ['Thông tin cá nhân', 'Cài đặt'];

export const PROFILE_PAGE_ICONS = [icon.user, icon.gear];

export const SIDEBAR_STRUCTURE = [
  {
    id: '1',
    name: 'Thư viện sách cá nhân',
  },
  {
    id: '2',
    name: 'Tài liệu pháp luật doanh nghiệp',
  },
];

export const UPLOAD_TABS = [
  'Thư viện sách cá nhân',
  'Tài liệu pháp luật doanh nghiệp',
  'Đồ án tốt nghiệp _ Luận văn tốt nghiệp',
  'Tạo cấu trúc mới',
];

export const UPLOAD_TABS_ICON = [
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: icon.plus,
    right: null,
  },
];

export const SEARCH_TABS = ['Tài liệu', 'Thư mục'];

export const SEARCH_TABS_ICON = [
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: null,
    right: icon.caretRight,
  },
];

export const PROFILE_TABS = ['Chỉnh sửa thông tin', 'Cài đặt', 'Đăng xuất'];

export const PROFILE_TABS_ICON = [
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: null,
    right: icon.rightFromBracket,
  },
];

export const SMALL_HOVER_TABS = ['Thêm thư mục', 'Thêm tài liệu'];

export const SMALL_HOVER_ICONS = [
  {
    left: null,
    right: icon.caretRight,
  },
  {
    left: null,
    right: icon.caretRight,
  },
];

export const BREAD_CRUMB_TABS = [
  {
    icon1: icon.bookmark,
    text: 'Lưu thư mục',
    icon2: null,
  },
  {
    icon1: icon.download,
    text: 'Tải xuống',
    icon2: null,
  },
  {
    icon1: icon.pencil,
    text: 'Sửa thông tin',
    icon2: icon.caretRight,
  },
  {
    icon1: icon.upload,
    text: 'Tải lên tài liệu',
    icon2: icon.caretRight,
  },
  {
    icon1: icon.folder,
    text: 'Thêm thư mục',
    icon2: icon.caretRight,
  },
];

export const HOMEPAGE_ITEM_GRIDS = [
  'col-1',
  'col-10',
  'col-6',
  'col-6',
  'col-1',
];

export const SEARCH_RESULT_GRIDS = [
  'col-1',
  'col-8',
  'col-3-5',
  'col-4',
  'col-3-5',
  'col-3',
  'col-1',
];

export const APPROVAL_GRIDS = [
  'col-1',
  'col-7',
  'col-3-5',
  'col-4',
  'col-3-5',
  'col-3',
  'col-2',
];

export const NOT_SHOW_SIDEBAR = [
  '/search',
  '/upload',
  '/result-page',
  '/search-result',
  '/profile',
  '/approval',
];
