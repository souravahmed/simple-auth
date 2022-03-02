import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "../../components";
import { loginUserRequest } from "../../store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const onSuccessLoginHandler = () => {
    navigate("/");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { userName, password } = e.target.elements;
    dispatch(
      loginUserRequest(userName.value, password.value, onSuccessLoginHandler)
    );
  };

  return (
    <div className="form-container">
      <h2 className="heading-2">Login</h2>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          <label className="input-label" htmlFor="userName">
            UserName<span>*</span>
          </label>
          <input
            className="input-control"
            type="text"
            name="userName"
            id="userName"
            placeholder="UserName"
          />
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="password">
            Password<span>*</span>
          </label>
          <input
            className="input-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          {userState.error && <p className="error">{userState.error}</p>}
        </div>
        <div className="form-btn-container">
          <Button text="Login" type="submit" classes=" btn-action btn-round" />
        </div>
      </form>
    </div>
  );
};
