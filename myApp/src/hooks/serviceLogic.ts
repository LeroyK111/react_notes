/**
 * @author Leroy
 * !业务逻辑层: 负责实施应用程序的业务规则和工作流。该层应该完全独立于表示层并且不了解用户界面。它应该包含所有应用程序逻辑和算法，并与数据访问层通信以检索所需的数据。
 */

import { useEffect, useState } from "react";
import fetchData from "./fetchData";

const useUserData = () => {
  const [userData, setUserData] = useState<{
    id: number | null;
    name: string;
    email: string;
  }>({ id: null, name: "", email: "" });

  useEffect(() => {
    fetchData().then((data) => {
      setUserData(data);
    });
  }, []);

  return { userData };
};

export default useUserData;
