/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/display-name */
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useHistory } from "react-router";

export const withUserAccess = WrapperComponent => () => {

  const token = useSelector(state => state.token);
  const history = useHistory();

  useEffect(() => {
    if(!token)history.push("/auth/login")
  }, [token])

  return <WrapperComponent />
}

