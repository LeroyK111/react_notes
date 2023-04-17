import { Navigate, Outlet } from "umi";
/*
! 路由拦截
*/
export default (props: object) => {
  
  const { isLogin } = { isLogin: localStorage.getItem("token") };

  if (isLogin) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
