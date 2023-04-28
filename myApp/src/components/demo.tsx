/**
 * @author Leroy
 * !表示层:管理用户交互并将数据呈现给用户。该层可以采用 Web 界面、桌面应用程序或移动应用程序的形式。它与业务逻辑层通信以执行操作和检索数据。
 */

import React from "react";
import useUserData from "../hooks/serviceLogic";

const UserProfile = () => {
  const [userData] = useUserData();
  return (
    <div>
      {userData.id ? (
        <div>
          <ul> {userData.name} </ul>
          <ul> {userData.email} </ul>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default UserProfile;
