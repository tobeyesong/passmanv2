/** @format */

import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return <div>{userInfo ? <Outlet /> : <Navigate to='/login' />}</div>;
};

export default PrivateRoute;
