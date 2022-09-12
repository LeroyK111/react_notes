import request from '../utils/request';
/*
! 专用请求文件夹
*/
export function query() {
  return request('/api/users');
}
