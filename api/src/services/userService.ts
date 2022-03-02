import FileHelper from "../helpers/file/fileHelper";
import IUser from "../interfaces/userInterface";

class UserService {
  static getUserByUserName(userName?: string) {
    const data = FileHelper.readFileSync("users.json");
    if (!data) return null;
    const jsonData = JSON.parse(data);
    return jsonData.find((user: IUser) => user.userName === userName);
  }
}

export default UserService;
