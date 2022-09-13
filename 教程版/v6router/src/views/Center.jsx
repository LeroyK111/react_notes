import React from "react";
import { useNavigate } from "react-router-dom";

export default function Center() {
  const navigate = useNavigate();

  function clearToken() {
    localStorage.removeItem("token");
    navigate("/login", {replace: true});
  }

  return (
    <div>
      Center
      <button
        onClick={() => {
          clearToken();
        }}
      >
        点我注销
      </button>
    </div>
  );
}
