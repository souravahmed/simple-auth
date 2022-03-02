import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CacheService from "../../services/cacheService";
import { getUserDataRequest } from "../../store";
import { Button } from "../../components";
import { LOGOUT_USER_REQUEST } from "../../store/user/userActionType";

export const HomePage = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();
  const { userDetails } = userState;

  useEffect(() => {
    const init = async () => {
      if (userState.user.token) {
        dispatch(getUserDataRequest(userState.user.token));
      } else {
        const cachedUser = await CacheService.getCached("user");
        if (cachedUser) {
          dispatch(getUserDataRequest(cachedUser.token));
        }
      }
    };
    init();
  }, [userState.user.token, dispatch]);

  const handleOnClick = () => {
    CacheService.clearCache();
    dispatch({ type: LOGOUT_USER_REQUEST });
    navigate("/login");
  };
  return (
    <div className="user-details-container">
      <p>
        <strong>Full Name</strong>: {userDetails.fullName}
      </p>
      <p>
        <strong>User Name</strong>: {userDetails.userName}
      </p>
      <p>
        <strong>Id</strong>: {userDetails.userId}
      </p>
      <br />
      <Button text="Logout" onClick={handleOnClick} />
    </div>
  );
};
