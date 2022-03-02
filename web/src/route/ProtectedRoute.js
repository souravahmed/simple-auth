import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CacheService from "../services/cacheService";

export const ProtectedRoute = ({ children }) => {
  const userState = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const init = async () => {
      const value = await CacheService.getCached("user");
      if (value) {
        return navigate("/");
      }
      if (!value && userState.user.userId) {
        await CacheService.writeCached("user", userState.user);
      } else {
        return navigate("/login");
      }
    };
    init();
  }, [userState.user, navigate]);

  return children;
};
