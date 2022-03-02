import fs from "fs-extra";
import path from "path/posix";
import { __dirname } from "../../app";

const FileHelper = {
  readFileSync: (fileName: string) => {
    const file = path.join(__dirname, "src", "db", fileName);
    if (fs.existsSync(file)) {
      return fs.readFileSync(file, "utf-8");
    }
    return null;
  },
};

export default FileHelper;
