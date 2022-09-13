import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Redirect({ to }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  });

  return null;
}


export default Redirect