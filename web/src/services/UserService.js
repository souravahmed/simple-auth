import { api } from "../config/apiConfig";
const UserService = {
  login: async (userName, password) => {
    try {
      const { data } = await api.post(
        "api/users/login",
        JSON.stringify({ userName, password })
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  getUserData: async (token) => {
    try {
      const { data } = await api.get("api/users/userData", {
        headers: {
          Authorization: `Basic ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
